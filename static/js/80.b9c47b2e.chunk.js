"use strict";(globalThis.webpackChunkjira_assistant=globalThis.webpackChunkjira_assistant||[]).push([[80],{2251:(e,s,t)=>{t.d(s,{Sn:()=>o,qm:()=>c,lc:()=>u,m4:()=>p,y5:()=>g,Y3:()=>m,Bx:()=>x,_t:()=>f,a3:()=>j,Hv:()=>w,aS:()=>C,s$:()=>N,H:()=>y});var i=t(7313),n=t(6417);class r extends i.PureComponent{render(){const{tag:e="td",className:s,settings:t,count:i}=this.props,r=!!i&&!(null===t||void 0===t||!t.showGroupCount)&&(0,n.jsxs)("span",{className:"badge badge-info margin-l-5",title:`Total issues in group: ${i}`,children:["(",i,")"]});return(0,n.jsx)(e,{className:s,children:this.renderControl(r)})}}const a=r;const o=class extends a{renderControl(){const{value:e}=this.props;return null!==e&&void 0!==e&&e.length?`${e.length} comments`:null}};var l=t(7821);const c=class extends a{constructor(e){super(e),(0,l.f)(this,"UserUtilsService")}renderControl(e){const{value:s,date:t=s,quick:i}=this.props;return t?null!==s&&void 0!==s&&s.text?(0,n.jsxs)(n.Fragment,{children:[s.text," ",e]}):(0,n.jsxs)("span",{title:i?this.$userutils.formatDateTime(t):null,children:[i&&"about "," ",this.$userutils.formatDateTime(t,i?"quick":null)]}):e}};var d=t(4616),h=t(9422);const u=class extends a{constructor(e){super(),e.getTicketUrl?this.getTicketUrl=e.getTicketUrl:((0,d.f3)(this,"UserUtilsService"),this.getTicketUrl=this.$userutils.getTicketUrl)}renderControl(e){var s;const{value:t,issue:i=t,title:r,className:a,settings:o}=this.props;if(!i)return e;if("string"===typeof i)return i;const l=i.key,c=i.fields,d=null===c||void 0===c?void 0:c.issuetype,u=null===c||void 0===c?void 0:c.summary,p=null===d||void 0===d?void 0:d.iconUrl,g=null===d||void 0===d?void 0:d.name;let m=null===c||void 0===c||null===(s=c.status)||void 0===s?void 0:s.name;m=!!m&&!1!==(null===o||void 0===o?void 0:o.showStatus)&&`(${m})`;const x=null===o||void 0===o?void 0:o.valueType;let k=l||"Unknown";return"summary"===x?k=u:"both"===x&&(k=(0,n.jsxs)(n.Fragment,{children:[k," - ",u]})),(0,n.jsxs)("a",{href:this.getTicketUrl(l),title:r,rel:"noopener noreferrer",className:`link ${a}`,target:"_blank",children:[!!p&&(0,n.jsx)(h.Ee,{src:p,title:g}),(0,n.jsxs)("span",{title:u,children:[k," ",m]}),e]})}};const p=class extends a{constructor(){super(),(0,d.f3)(this,"UserUtilsService")}renderControl(){const{value:e}=this.props;if(null===e||void 0===e||!e.length)return null;const s=this.$userutils.getTicketUrl;return(0,n.jsx)("ul",{className:"tags",children:e.map(((e,t)=>{const i=e.type,r=i&&(e.inwardIssue?i.inward:i.outward);return(0,n.jsx)("li",{children:(0,n.jsx)(u,{tag:"span",issue:i?e.inwardIssue||e.outwardIssue:e,title:r,getTicketUrl:s,className:"badge badge-pill skin-bg-font"})},t)}))})}};const g=class extends a{renderControl(e){const{value:s,textField:t="name",iconField:i="iconUrl"}=this.props;return s?(0,n.jsxs)(n.Fragment,{children:[!!i&&(0,n.jsx)(h.Ee,{src:s[i]}),s[t]," ",e]}):e}};const m=class extends a{renderControl(){const{value:e,progress:s=e}=this.props;return null!==s&&void 0!==s&&s.percent?`${s.percent}%`:null}};const x=class extends a{renderControl(e){var s;const{value:t,project:i=t,settings:r}=this.props;if(!i)return e;if("string"===typeof i)return i;const a=null===(s=i.avatarUrls)||void 0===s?void 0:s["16x16"],o=null===r||void 0===r?void 0:r.valueType;let l=i.key;return"name"===o?l=i.name:"both"===o&&(l=(0,n.jsxs)(n.Fragment,{children:[i.name," (",i.key,")"]})),(0,n.jsxs)(n.Fragment,{children:[!!a&&(0,n.jsx)(h.Ee,{src:a}),l,e]})}};var k=t(4711);const v=/^com\..*\[.*\].*$/;const f=class extends a{getRepeator(e){const{tagProp:s="name",titleProp:t,iconClass:i,hrefProp:r,hideZero:a}=this.props,o=!!i&&(0,n.jsx)("span",{className:`fa ${i}`});return r?(i,l)=>{const c="string"===typeof i?i:i[s];if(0===c&&a)return null;const d=(0,n.jsxs)("a",{href:i[r]||void 0,title:t?i[t]:void 0,rel:"noopener noreferrer",target:"_blank",className:"link badge badge-pill skin-bg-font",children:[o," ",c]});return e?d:(0,n.jsx)("li",{children:d},l)}:(i,r)=>{let l=i;if("string"===typeof i)v.test(i)&&(l=(i=(0,k.Kk)(i))[s||"name"]||l);else if(l=i[s],0===l&&a)return null;const c=(0,n.jsxs)("span",{title:t?i[t]:void 0,className:"badge badge-pill skin-bg-font",children:[o," ",l]});return e?c:(0,n.jsx)("li",{children:c},r)}}renderControl(){const{value:e}=this.props;return e?Array.isArray(e)?(0,n.jsx)("ul",{className:"tags",children:e.map(this.getRepeator())}):"object"===typeof e?this.getRepeator(!0)(e,0):void 0:null}};var b=t(747);const j=class extends a{constructor(e){super(e),this.showContext=e=>{(0,b.showContextMenu)(e,this.contextMenu)},(0,d.f3)(this,"UserUtilsService","BookmarkService"),this.contextMenu=[!e.hideWorklog&&{label:"Add worklog",icon:"fa fa-clock-o",command:()=>this.props.onAddWorklog(this.props.value)},{label:"Bookmark",icon:"fa fa-bookmark",command:()=>this.addBookmark()}].filter(Boolean)}renderControl(e){const{value:s,url:t=this.$userutils.getTicketUrl(s),hideContext:i}=this.props;return s?(0,n.jsxs)(n.Fragment,{children:[!i&&(0,n.jsx)("i",{className:"fa fa-ellipsis-v margin-r-8",onClick:this.showContext}),(0,n.jsx)("a",{href:t,className:"link strike",target:"_blank",rel:"noopener noreferrer",children:s}),e]}):e}addBookmark(){const{value:e,onBookmark:s}=this.props;this.$bookmark.addBookmark([e],!s).then(s)}};const w=class extends a{constructor(e){super(e),(0,d.f3)(this,"UtilsService")}renderControl(e){var s;const{value:t,inputType:i="secs",days:r,converter:a}=this.props;let{timespent:o=t}=this.props;return a&&(o=a(o)),o?("ticks"===i&&o>500&&(o=parseInt(o/1e3)),o=null!==(s=o)&&void 0!==s&&s.text?o.text:this.$utils.formatSecs(o,void 0,void 0,r),(0,n.jsxs)("span",{children:[o," ",e]})):e}};const C=class extends a{renderControl(){const{value:e}=this.props;if(!e)return null;const{remainingEstimate:s,timeSpent:t}=e;return t||s?(0,n.jsxs)("span",{children:[t," (",s," remaining)"]}):null}};const N=class extends a{renderControl(e){var s;let{value:t}=this.props;return t?(t=(null===(s=t)||void 0===s?void 0:s.text)||t,"object"!==typeof t?(0,n.jsxs)(n.Fragment,{children:[t," ",e]}):Array.isArray(t)?t.length?this.getTagRenderer(t[0],t):null:this.getTagRenderer(t,t)):e}getTagRenderer(e,s){return e.value?(0,n.jsx)(f,{value:s,tagProp:"value",tag:"span"}):e.name?(0,n.jsx)(f,{value:s,tagProp:"name",tag:"span"}):JSON.stringify(e)}};const y=class extends a{renderControl(e){var s,t;const{value:i,user:r=i,settings:a}=this.props;if(!r)return e;if("string"===typeof r)return r;const o=!(null===a||void 0===a||!a.showImage)&&((null===(s=r.avatarUrls)||void 0===s?void 0:s["32x32"])||(null===(t=r.avatarUrls)||void 0===t?void 0:t["48x48"])),l=null===a||void 0===a?void 0:a.valueType;let c=r.displayName;return"email"===l?c=r.emailAddress:"both"===l&&(c=(0,n.jsxs)(n.Fragment,{children:[r.displayName," (",r.emailAddress,")"]})),(0,n.jsxs)(n.Fragment,{children:[!!o&&(0,n.jsx)(h.Ee,{className:"img-x32",src:o}),c,e]})}}},8080:(e,s,t)=>{t.r(s),t.d(s,{default:()=>Q});var i=t(7313),n=t(8303),r=t(3035),a=t(5017),o=t(8152),l=t(260),c=t(3108),d=t(7124),h=t(8221);t(232);var u=t(6444),p=t(3682),g=t(4616),m=t(1783),x=t(6417);const k=[{videoId:"xNYNXWUgCeA",module:"Dashboard",route:"dashboard"},{videoId:"TxNH1HQtiX0",module:"Worklog report",route:"userdaywise"},{videoId:"6hAOtUm1lUk",module:"Worklog import",route:"import/worklog"},{videoId:"EFgXFqrGuTI",module:"Issue import",route:"import/issue"},{videoId:"HMyBkaZ09Xw",module:"Report builder",route:"advanced"}],v=[{startAt:290,videoId:"f2aBSXzbYuA",module:"Calendar",route:"calendar"},{startAt:713,videoId:"f2aBSXzbYuA",module:"Custom report",route:"customgrouped"},{startAt:1069,videoId:"f2aBSXzbYuA",module:"Settings",route:"settings"},{startAt:1147,videoId:"f2aBSXzbYuA",module:"Feedback",route:"feedback"}];class f extends m.Z{constructor(e){super(e),this.playPrev=()=>{let{index:e}=this.state;e-=1;const s=this.getVideoUrl(this.videoList[e],"Video view previous");this.setState({url:s,index:e})},this.playNext=()=>{let{index:e}=this.state;e+=1;const s=this.getVideoUrl(this.videoList[e],"Video view next");this.setState({url:s,index:e})},this.style={width:"87vw",height:"95vh"},this.className="video-help",this.videoList=[...k],this.setVideoUrl()}setVideoUrl(){const e=document.location.hash.substring(2);let s=k.first((s=>~e.indexOf(s.route)));s||(s=v.first((s=>~e.indexOf(s.route))),s||(s=v[0]),this.videoList.push(s)),this.state.url=this.getVideoUrl(s),this.state.index=this.videoList.indexOf(s)}getVideoUrl(e,s){return this.$analytics.trackEvent(s||"Video help viewed",u.Jk.HeaderActions,`Video Help: ${e.module}`),`https://www.youtube.com/embed/${e.videoId}?rel=0&autoplay=1&showinfo=0&cc_load_policy=1&start=${e.startAt||0}`}render(){const{url:e,index:s}=this.state;return super.renderBase((0,x.jsxs)("div",{className:"video-help",children:[s>0&&(0,x.jsx)("div",{className:"nav-icon left",onClick:this.playPrev,children:(0,x.jsx)("span",{className:"fa fa-angle-left",title:"Play previous video"})}),(0,x.jsx)("iframe",{src:e,id:"ifVideoHelp",title:"Video Help",style:{width:"87vw",height:"95vh"},frameBorder:0,allowFullScreen:!0}),s+1<this.videoList.length&&(0,x.jsx)("div",{className:"nav-icon right",onClick:this.playNext,children:(0,x.jsx)("span",{className:"fa fa-angle-right",title:"Play next video"})})]}))}}const b=f;class j extends i.PureComponent{constructor(e){super(e),this.skinSelected=e=>{const s=e.currentTarget,t=s.attributes.skin.value;this.setSkin(t),document.body.querySelector("#divSkins .selected").classList.remove("selected"),s.classList.add("selected")},(0,g.f3)(this,"SettingsService","AnalyticsService")}async componentDidMount(){var e,s;this.selectedSkin=await this.$settings.get("skin")||"skin-blue",null===(e=document.body.querySelector(`#divSkins [skin="${this.selectedSkin}"]`))||void 0===e||null===(s=e.classList)||void 0===s||s.add("selected")}setSkin(e){const s=e;if(this.selectedSkin===e)return;const t=document.body.classList;t.remove(this.selectedSkin),this.skinClass=s,this.selectedSkin=e,this.$settings.set("skin",e),t.add(this.selectedSkin),this.$analytics.trackEvent("Skin changed",u.Jk.HeaderActions,e)}render(){return(0,x.jsxs)("div",{className:"skin-items",id:"divSkins",children:[(0,x.jsx)("div",{title:"blue",skin:"skin-blue",onClick:this.skinSelected,style:{borderColor:"#367fa9",backgroundColor:"#3c8dbc"},children:"B"}),(0,x.jsx)("div",{title:"purple",skin:"skin-purple",onClick:this.skinSelected,style:{borderColor:"#555299",backgroundColor:"#605ca8"},children:"P"}),(0,x.jsx)("div",{title:"violet",skin:"skin-violet",onClick:this.skinSelected,style:{borderColor:"#7a4889",backgroundColor:"#9055A2"},children:"V"}),(0,x.jsx)("div",{title:"sea",skin:"skin-sea",onClick:this.skinSelected,style:{borderColor:"#2d7776",backgroundColor:"#379392"},children:"S"}),(0,x.jsx)("div",{title:"green",skin:"skin-green",onClick:this.skinSelected,style:{borderColor:"#008d4c",backgroundColor:"#00a65a"},children:"G"}),(0,x.jsx)("div",{title:"green",skin:"skin-green2",onClick:this.skinSelected,style:{borderColor:"#2b954b",backgroundColor:"#33b35a"},children:"G"}),(0,x.jsx)("div",{title:"red",skin:"skin-red",onClick:this.skinSelected,style:{borderColor:"#d73925",backgroundColor:"#dd4b39"},children:"R"}),(0,x.jsx)("div",{title:"yellow",skin:"skin-yellow",onClick:this.skinSelected,style:{borderColor:"#e08e0b",backgroundColor:"#f39c12"},children:"Y"}),(0,x.jsx)("div",{title:"pink",skin:"skin-pink",onClick:this.skinSelected,style:{borderColor:"#ec2f6c",backgroundColor:"#ef5285"},children:"P"}),(0,x.jsx)("div",{title:"meadow",skin:"skin-meadow",onClick:this.skinSelected,style:{borderColor:"#1caf9a",backgroundColor:"#8cc1a2"},children:"M"}),(0,x.jsx)("div",{skin:"skin-blue2",onClick:this.skinSelected,style:{borderColor:"#557a95",backgroundColor:"#7395ae"},children:"B"}),(0,x.jsx)("div",{skin:"skin-cust8",onClick:this.skinSelected,style:{borderColor:"#64485c",backgroundColor:"#83677b"},children:"M"}),(0,x.jsx)("div",{skin:"skin-green3",onClick:this.skinSelected,style:{borderColor:"#40561a",backgroundColor:"#729a2e"},children:"B"}),(0,x.jsx)("div",{skin:"skin-cust2",onClick:this.skinSelected,style:{borderColor:"#5d5c61",backgroundColor:"#379683"},children:"G"}),(0,x.jsx)("div",{skin:"skin-cust5",onClick:this.skinSelected,style:{borderColor:"#7e685a",backgroundColor:"#afd275"},children:"G"}),(0,x.jsx)("div",{skin:"skin-cust3",onClick:this.skinSelected,style:{borderColor:"#ffe400",backgroundColor:"#747474"},children:"G"}),(0,x.jsx)("div",{title:"dark",skin:"skin-dark",onClick:this.skinSelected,style:{borderColor:"rgba(0,0,0,0.2)",backgroundColor:"#2f353a"},children:"D"})]})}}const w=j;var C=t(1410),N=t(4711),y=t(7821),S=t(8407);class A extends i.PureComponent{constructor(e){super(e),(0,g.f3)(this,"UserUtilsService")}getDescription(e,s){let t,i=e;return"object"===typeof e&&(t=e.id,i=e.text),(0,x.jsxs)("li",{children:[!!t&&(0,x.jsxs)("a",{href:`https://github.com/shridhar-tl/jira-assistant/issues/${t}`,target:"_blank",rel:"noopener noreferrer",children:["#",t," - "]}),i]},s)}render(){const{updates:e}=this.props;return(0,x.jsx)("div",{className:"release-history",children:e.map(((e,s)=>(0,x.jsxs)("div",{className:"release",children:[(0,x.jsx)("span",{className:"version-no",children:e.version}),e.publishDate&&(0,x.jsxs)("span",{children:[" (published: ",(0,x.jsx)("b",{children:this.$userutils.formatDate(e.publishDate)}),")"]}),!e.publishDate&&e.expectedOn&&(0,x.jsxs)("span",{children:[" (expected: ",(0,x.jsx)("b",{children:this.$userutils.formatDate(e.expectedOn)}),")"]}),e.availableNow&&(0,x.jsx)("span",{className:"badge badge-"+(e.isBeta?"warning":"success"),title:"Download this version from web store",children:"now available"}),(0,x.jsx)("span",{className:"changelog-header",children:"Changelog:"}),(0,x.jsx)("ul",{className:"changelogs",children:e.whatsnew.map(this.getDescription)}),e.bugs&&e.bugs.length>0&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("span",{className:"changelog-header",children:"Bugs:"}),(0,x.jsx)("ul",{className:"changelogs",children:e.bugs.map(this.getDescription)})]})]},s)))})}}const U=A;var T=t(714);class I extends i.PureComponent{render(){return function(e){if(!e||"string"!==typeof e)return e;const s=[];let t=null,i=0;for(;t=R.exec(e);){const n=t[0],r=t.index;s.push(e.substring(i,r));const a=n.startsWith("#")?(0,T.BZ)(n):n;s.push((0,x.jsx)("a",{href:a,target:"_blank",rel:"noreferrer",onClick:L,children:n})),i=r+n.length}i<e.length&&s.push(e.substring(i));return s.length?s:e}(this.props.message)}}const Z=I,R=/#\d+|(https?):\/\/(www\.)?[a-z0-9.:].*?(?<!\.\.?)(?=\s|[.]$|$)/g;function L(e){e.stopPropagation()}class $ extends i.PureComponent{constructor(e){super(e),this.readMessage=e=>{let s=e.message,t=null;"versionInfo"===e.type?(t={width:"600px"},s=(0,x.jsx)(U,{updates:this.state.updates_info})):s=(0,x.jsx)(Z,{message:s});const i=()=>this.markRead(e,!0);S.Z.alert(s,e.title,t).then(i,i)},this.markRead=(e,s)=>{if(!e.read){e.read=!0,this.$noti.markRead(e);const t=s?"Viewed":"Mark as read";this.trackAnalytics(e,t),this.setState((e=>({unread:(e.unread||1)-1})))}},this.trackViewList=()=>{const{total:e,unread:s}=this.state;this.$analytics.trackEvent("Messages: List viewed","Messages",`Messages: Total: ${e}, Unread: ${s}`)},(0,y.f)(this,"NotificationService","AnalyticsService","UserUtilsService","UtilsService");const{updates_info:s,list:t,total:i,unread:n}=e.notifications;this.state={updates_info:s,list:t,total:i,unread:n}}trackAnalytics(e,s){this.$analytics.trackEvent(("versionInfo"===e.type?"Update Info: ":"Message: ")+s,"Messages",`Message Id: ${e.id}`)}render(){const{list:e,total:s,unread:t}=this.state;return e&&e.length?(0,x.jsxs)(a.Z,{nav:!0,direction:"down",children:[(0,x.jsxs)(o.Z,{nav:!0,onClick:this.trackViewList,children:[(0,x.jsx)("i",{className:"fa fa-bell"}),t>0&&(0,x.jsx)("span",{className:"badge badge-danger",children:t})]}),(0,x.jsxs)(l.Z,{right:!0,className:"messages",children:[(0,x.jsx)(d.Z,{header:!0,tag:"div",children:(0,x.jsx)("div",{className:"text-center",children:(0,x.jsxs)("strong",{children:["You have ",t||s," ",t?"unread":""," messages"]})})}),e.map(((e,s)=>(0,x.jsx)(E,{message:e,onOpen:this.readMessage,onRead:this.markRead,cut:this.$utils.cut},s)))]})]}):null}}const B=$;class E extends i.PureComponent{constructor(){super(...arguments),this.readMessage=()=>this.props.onOpen(this.props.message),this.markRead=()=>this.props.onRead(this.props.message)}render(){const{message:e,cut:s}=this.props;return(0,x.jsxs)(d.Z,{tag:"div",title:"Click to view this message",children:[!e.read&&(0,x.jsx)("small",{className:"float-right mt-0",onClick:this.markRead,title:"Click to mark this message as read",children:(0,x.jsx)("span",{className:"fa fa-eye mark-read"})}),(0,x.jsxs)("div",{className:"text-truncate"+(e.read?"":" font-weight-bold"),onClick:this.readMessage,children:[e.important&&(0,x.jsx)("span",{className:"fa fa-exclamation text-danger"})," ",e.title]}),(0,x.jsx)("div",{className:"small text-muted message",onClick:this.readMessage,children:(0,x.jsx)(Z,{message:s(e.message,175,!0)})})]})}}var V=t(2251);class F extends i.PureComponent{constructor(e){super(e),this.trackViewList=()=>{const{total:e}=this.state;this.$analytics.trackEvent("Jira Updates: List viewed","Updates",`Updates: Total: ${e}`)},(0,y.f)(this,"JiraUpdatesService","AnalyticsService","UtilsService"),this.state={}}UNSAFE_componentWillMount(){this.$jupdates.getRescentUpdates().then((e=>{this.setState(e)}))}trackAnalytics(e,s){this.$analytics.trackEvent(("versionInfo"===e.type?"Update Info: ":"Message: ")+s,"Messages",`Message Id: ${e.id}`)}render(){const{list:e,total:s,ticketCount:t}=this.state;return e&&e.length?(0,x.jsxs)(a.Z,{nav:!0,direction:"down",children:[(0,x.jsxs)(o.Z,{nav:!0,onClick:this.trackViewList,children:[(0,x.jsx)("i",{className:"fa fa-comments"}),s>0&&(0,x.jsx)("span",{className:"badge badge-warning",children:s})]}),(0,x.jsxs)(l.Z,{right:!0,className:"jira-notifications",children:[(0,x.jsx)(d.Z,{header:!0,tag:"div",children:(0,x.jsx)("div",{className:"text-center",children:(0,x.jsxs)("strong",{children:["You have ",s," updates on ",t," issues"]})})}),(0,x.jsx)("div",{className:"noti-messages",children:e.map(((e,s)=>(0,x.jsx)(P,{message:e,cut:this.$utils.cut},s)))})]})]}):null}}const J=F;class P extends i.PureComponent{render(){const{message:e,cut:s}=this.props;return(0,x.jsxs)(d.Z,{tag:"a",title:"Click to view this ticket in jira",href:e.href,target:"_blank",children:[(0,x.jsxs)("div",{className:"text-truncate font-weight-bold",title:e.summary,children:[e.key," - ",s(e.summary,100,!0)]}),e.updates.map(((e,s)=>{let{date:t,author:i,field:n,fromString:r,toString:a}=e;return(0,x.jsxs)("div",{className:"small text-muted message",children:[(0,x.jsx)(V.H,{tag:"span",className:"user-display",user:i}),(0,x.jsxs)("span",{children:[" updated ",n," from ",r," to ",a," "]}),(0,x.jsx)(V.qm,{tag:"span",className:"date-display",date:t,quick:!0})]},s)}))]})}}var G=t(7030);const z={btnText:"Web",btnTooltip:"Go back to extension",launchText:"Launch Extension",switchText:"Switch back",launchTooltip:"Launch Jira Assistant extension once",switchTooltip:"Switch back to Jira Assistant extension"};class Y extends i.PureComponent{constructor(e){super(e),this.switchToWeb=async()=>{await this.$settings.set("useWebVersion",!1),window.location.href=this.getLaunchPath()},this.state={switched:!1},(0,g.f3)(this,"SettingsService","AppBrowserService"),this.init()}async init(){this.usingExtn="1"===localStorage.getItem("authType");{const e=await this.$jaBrowserExtn.getLaunchUrl("index.html");this.setState({launchUrl:e})}const e=await this.$settings.get("useWebVersion");this.setState({switched:e})}getLaunchPath(){const e=this.props.location.pathname;return`${this.state.launchUrl}#${e}`}showOptions(){const{switched:e,launchUrl:s}=this.state;return this.usingExtn&&!!s&&e}render(){if(!this.showOptions())return null;const e=this.getLaunchPath();return(0,x.jsx)(r.Z,{className:"d-md-down-none margin-r-5",navbar:!0,children:(0,x.jsxs)(a.Z,{nav:!0,direction:"down",children:[(0,x.jsx)(o.Z,{nav:!0,children:(0,x.jsxs)("span",{className:"btn btn-success web-try",title:z.btnTooltip,children:[" ",(0,x.jsx)("i",{className:"fa fa-external-link"})," ",(0,x.jsx)("strong",{children:z.btnText})]})}),(0,x.jsxs)(l.Z,{left:!0,children:[(0,x.jsx)(d.Z,{header:!0,tag:"div",className:"text-center",children:(0,x.jsx)("strong",{children:"Jira Assistant Web"})}),(0,x.jsxs)(d.Z,{tag:"a",href:e,target:"_blank",title:z.launchTooltip,children:[(0,x.jsx)("i",{className:"fa fa-external-link"})," ",z.launchText]}),(0,x.jsxs)(d.Z,{tag:"button",title:z.switchTooltip,onClick:this.switchToWeb,children:[(0,x.jsx)("i",{className:"fa fa-plug"})," ",z.switchText]})]})]})})}}const D=(0,G.EN)(Y);class H extends i.PureComponent{constructor(e){super(e),this.trackShare=()=>{this.$analytics.trackEvent("Share option viewed",u.Jk.HeaderActions)},this.showYoutubeHelp=()=>this.setState({showYoutubeVideo:!0}),this.hideYoutube=()=>this.setState({showYoutubeVideo:!1}),this.showVersionInfo=e=>{var s;e.preventDefault();const t=null===(s=this.state.notifications)||void 0===s?void 0:s.updates_info;t&&S.Z.alert((0,x.jsx)(U,{updates:t}),"Updates info",{width:"600px"}).then()},(0,g.f3)(this,"AppBrowserService","CacheService","SessionService","NotificationService","AnalyticsService");const s=this.$session.CurrentUser;this.disableNotification=s.disableDevNotification,this.disableJiraUpdates=s.disableJiraUpdates,this.userId=s.userId,this.currentJiraInstance=(0,N._P)(s.jiraUrl),this.state={versionNumber:"WEB"},this.initComponent()}initComponent(){this.$noti.getNotifications().then((e=>this.setState({notifications:e})),(e=>{console.log("Error fetching notifications: ",e)})),this.siteUrl="https://www.jiraassistant.com",this.ratingUrl=this.$jaBrowserExtn.getStoreUrl(!0),this.storeUrl=this.$jaBrowserExtn.getStoreUrl();const e=encodeURIComponent('Check out "Jira Assistant" in web store'),s=encodeURIComponent(`Check out "Jira Assistant", a open source extension / add-on for your browser from below url:\n\nChrome users: ${p.Fq}?utm_source%3Dgmail#\n\nFirefox users: ${p.Z_}\n\nEdge users: ${p.oP}\n\nOpera users: ${p.El}\n\nFor source code or to know more about the extension visit: ${p.ov}\n\n\nThis would help you to track your worklog and generate reports from Jira easily with lots of customizations. Also has lot more features like Google Calendar integration, Jira comment & meeting + worklog notifications, Worklog, Sprint and custom report generations, etc..`),t=encodeURIComponent(this.storeUrl);this.gMailShare=`https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&su=${e}&body=${s}`,this.linkedInShare=`https://www.linkedin.com/shareArticle?mini=true&url=${t}&title=${e}&summary=${s}&source=`,this.fackbookShare=`https://www.facebook.com/sharer/sharer.php?u=${this.storeUrl}&title=${e}&description=${s}`,this.twitterShare=`https://twitter.com/intent/tweet?text=${s}`,this.$session.CurrentUser.hideDonateMenu&&document.body.classList.add("no-donation")}logout(){this.$cache.clear(),window.close(),window.location.href="/index.html"}render(){const{ratingUrl:e,gMailShare:s,linkedInShare:t,fackbookShare:u,twitterShare:p,state:{versionNumber:g,showYoutubeVideo:m,notifications:k}}=this,{version:v,isBeta:f}=(null===k||void 0===k?void 0:k.updatesAvailable)||{};return(0,x.jsxs)(i.Fragment,{children:[(0,x.jsx)(h.NB,{className:"d-lg-none quick-view-hide",display:"md",mobile:!0,children:(0,x.jsx)("span",{className:"fa fa-bars"})}),(0,x.jsxs)("a",{href:this.siteUrl,className:"navbar-brand",target:"_blank",rel:"noopener noreferrer",children:[(0,x.jsx)("img",{src:"data:image/png;base64,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",width:"24",height:"24",alt:"Jira Assistant",className:"navbar-brand-minimized"}),(0,x.jsxs)("span",{className:"navbar-brand-full",children:["Jira Assistant ",(0,x.jsx)("span",{className:"v-info badge badge-success",onClick:this.showVersionInfo,children:g})]})]}),(0,x.jsx)(h.NB,{className:"d-md-down-none quick-view-hide",display:"lg",children:(0,x.jsx)("span",{className:"fa fa-bars"})}),(0,x.jsx)("button",{className:"navbar-toggler quick-view-show",children:(0,x.jsx)("a",{href:"/index.html",target:"_blank",title:"Open in new tab",children:(0,x.jsx)("span",{className:"fa fa-external-link"})})}),(0,x.jsx)(n.NavLink,{to:`/${this.userId}/contribute`,className:"btn-donate",title:"Would you like to contribute / compensate us for the effort we put in development of this tool? Click to know more",children:(0,x.jsx)("img",{src:"/assets/donate.png",width:"145",className:"Donate us",alt:"Donate us"})}),(0,x.jsxs)(r.Z,{className:"ml-auto",navbar:!0,children:[(0,x.jsx)(r.Z,{className:"d-md-down-none margin-r-5",navbar:!0,children:(0,x.jsxs)(a.Z,{nav:!0,direction:"down",children:[(0,x.jsx)(o.Z,{nav:!0,children:(0,x.jsxs)("span",{className:"nav-link pointer",title:`Currently connected to ${this.currentJiraInstance}. Click to see more options.`,children:[" ",(0,x.jsx)("span",{className:"fa fa-exchange"})," ",(0,x.jsx)("strong",{children:this.currentJiraInstance})]})}),(0,x.jsx)(l.Z,{left:!0,children:(0,x.jsx)(C.Z,{onLogout:this.props.onLogout})})]})}),(0,x.jsx)(D,{}),!!v&&(0,x.jsxs)("span",{className:"update-available badge badge-"+(f?"warning":"success"),title:`Click to update to ${f?"BETA ":""}v${v}`,onClick:this.showVersionInfo,children:[(0,x.jsx)("i",{className:"fa fa-download"})," Updates available"]}),!this.disableJiraUpdates&&(0,x.jsx)(J,{}),!this.disableNotification&&k&&(0,x.jsx)(B,{notifications:k}),(0,x.jsx)(c.Z,{className:"d-md-down-none",children:(0,x.jsx)("span",{className:"nav-link",onClick:this.showYoutubeHelp,children:(0,x.jsx)("i",{className:"fa fa-youtube-play"})})}),(0,x.jsxs)(a.Z,{nav:!0,direction:"down",children:[(0,x.jsx)(o.Z,{nav:!0,children:(0,x.jsx)("i",{className:"fa fa-adjust"})}),(0,x.jsx)(l.Z,{right:!0,children:(0,x.jsx)(w,{})})]}),(0,x.jsxs)(a.Z,{nav:!0,direction:"down",onClick:this.trackShare,children:[(0,x.jsx)(o.Z,{nav:!0,children:(0,x.jsx)("i",{className:"fa fa-share-alt"})}),(0,x.jsxs)(l.Z,{right:!0,children:[(0,x.jsx)(d.Z,{header:!0,tag:"div",className:"text-center",children:(0,x.jsx)("strong",{className:"share-header-text",children:"Share or rate this tool"})}),(0,x.jsxs)("div",{className:"share-items",children:[(0,x.jsx)("a",{href:e,target:"_blank",rel:"noopener noreferrer",title:"Click to rate this tool or add a comment in chrome web store",children:(0,x.jsx)("i",{className:"fa fa-star pull-left"})}),(0,x.jsx)("a",{href:s,target:"_blank",rel:"noopener noreferrer",title:"Share with GMail",children:(0,x.jsx)("i",{className:"fa fa-envelope pull-left"})}),(0,x.jsx)("a",{href:t,target:"_blank",rel:"noopener noreferrer",title:"Share with Linked in",children:(0,x.jsx)("i",{className:"fa fa-linkedin-square pull-left"})}),(0,x.jsx)("a",{href:u,target:"_blank",rel:"noopener noreferrer",title:"Share with Facebook",children:(0,x.jsx)("i",{className:"fa fa-facebook-square pull-left"})}),(0,x.jsx)("a",{href:p,target:"_blank",rel:"noopener noreferrer",title:"Share with Twitter",children:(0,x.jsx)("i",{className:"fa fa-twitter-square pull-left"})})]})]})]}),(0,x.jsx)(c.Z,{className:"d-md-down-none",children:(0,x.jsx)(n.NavLink,{to:`/${this.userId}/contactus`,className:"nav-link",children:(0,x.jsx)("i",{className:"fa fa-phone",title:"Contact us"})})})]}),m&&(0,x.jsx)(b,{onHide:this.hideYoutube})]})}}const Q=H}}]);