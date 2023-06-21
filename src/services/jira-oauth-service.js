import { executeService } from "../common/proxy";
import { ApiUrls } from "../constants/api-urls";
import { isAppBuild } from "../constants/build-info";
import { jaJiraTokenExchangeUrl } from "../constants/oauth";
import BaseService from "./base-service";

export default class JiraAuthService extends BaseService {
    static dependencies = ['AjaxRequestService', 'SettingsService', 'UserService'];
    constructor($request, $settings, $user) {
        super();
        this.$request = $request;
        this.$settings = $settings;
        this.$user = $user;
    }

    async integrateWithCred(url, uid, pwd) {
        const profile = await this.$request.execute('GET',
            url.clearEnd('/') + ApiUrls.mySelf.substring(1),
            null, getBasicTokenHeader(uid, pwd));

        if (isAppBuild) {
            pwd = await executeService('SELF', 'encryptData', [pwd]);
        } else {
            pwd = btoa(pwd);
        }

        const userId = await this.$user.createUser(profile, url, { authType: 'C', uid, pwd: pwd });

        //await this.$settings.set("CurrentJiraUrl", url);
        await this.$settings.set("CurrentUserId", userId);

        return userId;
    }

    async integrate(code) {
        try {
            return {
                success: true,
                userId: await this.getAndSaveToken(code)
            };
        } catch (err) {
            console.error('Integration failed: ', err);
            return { success: false, message: err.message };
        }
    }

    async getJiraTokenExchange(authCode, refreshToken) {
      let result;
      try {
        const params = {
          "client_id": process.env.REACT_APP_JIRA_CLIENT_ID,
          "client_secret": process.env.REACT_APP_JIRA_CLIENT_SECRET,
          "redirect_uri": process.env.REACT_APP_JIRA_REDIRECT_URL
        }
        if(authCode) {
          params.code = authCode;
          params.grant_type = 'authorization_code';
        } else if(refreshToken) {
          params.grant_type = 'refresh_token';
          params.refresh_token = refreshToken;
        }
        const { access_token,
          expires_in,
          token_type, refresh_token } = await this.$request.execute('POST', 'https://auth.atlassian.com/oauth/token', params);


        // Get the cloudid for your site
        const sites = await this.$request.execute('GET', 'https://api.atlassian.com/oauth/token/accessible-resources', null, {
          'Authorization': `${token_type} ${access_token}`
        })
        console.log(sites)

        return {
          success: true,
          token: access_token,
          refresh_token: refresh_token,
          expires_at: expires_in,
          jiraUrl: sites[0].url,
          cloudId: sites[0].id,
          apiUrl: sites[0].url
        }
      } catch (ex) {
        throw ex;
      }
    }

    // This function returns userid when it is not passed
    // and returns bearer token when user id is passed
    async getAndSaveToken(authCode, refreshToken, userId) {
        const returnUserId = !userId;
        let result;

        try {
            result = await this.getJiraTokenExchange(authCode, refreshToken);
            // result = await this.$request.execute('GET', jaJiraTokenExchangeUrl, null,
            //     authCode ? { withCredentials: false, 'jira-auth-code': authCode } :
            //         { withCredentials: false, 'jira-refresh-token': refreshToken });
        } catch (ex) {
            console.error('Error fectching jira cloud auth token', ex);
            throw ex;
        }

        const {
            success, message,
            token, refresh_token, expires_at: expires,
            jiraUrl, cloudId, apiUrl
        } = result;

        if (success) {
            if (!userId) {

              // const profile = await this.$request.execute('GET',
              //   'https://api.atlassian.com/me',
              //   null, {...getBearerTokenHeader(token), Accept: 'application/json'});

                const profile = await this.$request.execute('GET',
                    apiUrl.clearEnd('/') + ApiUrls.mySelf.substring(1),
                    null, getBearerTokenHeader(token));
                userId = await this.$user.createUser(profile, jiraUrl, apiUrl);
            }
            await this.saveTokenData(userId, token, expires, refresh_token, cloudId);

            return returnUserId ? userId : { token, expires };
        } else {
            throw Error(message);
        }
    }

    async saveTokenData(userId, token, expires, refresh_token, cloudId) {
        await this.$settings.saveGeneralSetting(userId, 'JOAT', { token, expires });
        await this.$settings.saveGeneralSetting(userId, 'JOART', refresh_token);
        await this.$settings.saveGeneralSetting(userId, 'JiraCloudId', cloudId);
    }

    async transformHeaders(userId, customHeaders) {
        if (!userId) {
            return customHeaders;
        }

        const user = await this.$user.getUser(userId);
        if (user.authType === 'C') {
            let pwd;

            if (isAppBuild) {
                pwd = await executeService('SELF', 'decryptData', [user.pwd]);
            } else {
                pwd = user.pwd && atob(user.pwd);
            }

            customHeaders = { ...customHeaders, ...getBasicTokenHeader(user.uid, pwd) };
        }
        else if (user.apiUrl) {
            let auth = await this.$settings.getGeneralSetting(userId, 'JOAT');
            if (auth) {
                // Handle simultaneous multi executions of
                if (this._tokenRefreshRunning) {
                    await this._tokenRefreshRunning; // Wait for running promise to complete
                }
                if (auth.expires <= new Date().getTime()) {
                    const refreshToken = await this.$settings.getGeneralSetting(userId, 'JOART');
                    // Store reference of running promise
                    this._tokenRefreshRunning = this.getAndSaveToken(null, refreshToken, userId);
                    auth = await this._tokenRefreshRunning;
                    delete this._tokenRefreshRunning; // Remove reference
                }

                const { token } = auth;

                customHeaders = { ...customHeaders, ...getBearerTokenHeader(token) };
            }
        }

        return customHeaders;
    }
}

function getBearerTokenHeader(token) {
    return { 'Authorization': `Bearer ${token}`, withCredentials: false };
}

function getBasicTokenHeader(uid, pwd) {
    return { 'Authorization': `Basic ${btoa(`${uid}:${pwd}`)}`, withCredentials: false };
}
