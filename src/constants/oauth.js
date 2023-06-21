import { prepareUrlWithQueryString } from "../common/utils";
import { JAApiBasePath } from "./urls";

// #region Jira Cloud OAuth2
export const jiraCloudAuthorizeUrl = 'https://auth.atlassian.com/authorize';
export const jiraCloudScopes = 'offline_access read:jira-user read:jira-work write:jira-work read:sprint:jira-software read:issue-details:jira read:jql:jira read:me';
export const jiraCloudClientId = process.env.REACT_APP_JIRA_CLIENT_ID;
export const jiraCloudRedirectUrl = `${process.env.REACT_APP_JIRA_REDIRECT_URL}?oauth=jc`;
export const jaJiraTokenExchangeUrl = `${JAApiBasePath}/jira/oauth/token`;

export function getJiraCloudOAuthAuthorizeUrl(state) {
    if (typeof state === 'object') {
        state = JSON.stringify(state);
    }

    const params = {
        audience: 'api.atlassian.com',
        response_type: 'code',
        prompt: 'consent',
        client_id: jiraCloudClientId,
        scope: jiraCloudScopes,
        redirect_uri: jiraCloudRedirectUrl,
        state: btoa(state)
    };

    return prepareUrlWithQueryString(jiraCloudAuthorizeUrl, params);
}
// #endregion

export const outlookTokenExchangeUrl = `${JAApiBasePath}/outlook/oauth/token`;
export const pokerTokenExchangeUrl = `${JAApiBasePath}/poker/oauth/token`;
