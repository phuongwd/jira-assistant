"use strict";(globalThis.webpackChunkjira_assistant=globalThis.webpackChunkjira_assistant||[]).push([[256],{6049:(e,s,i)=>{i.r(s),i.d(s,{default:()=>ee});var t=i(7313),a=i(2371),l=i(3860),n=i(6310),o=i(6392),r=i(2725),d=i(6444),c=i(6417);const u=["Su","Mo","Tu","We","Th","Fr","Sa"];class h extends t.PureComponent{constructor(e){super(e),this.state={value:e.value||d.rQ}}UNSAFE_componentWillReceiveProps(e){let{value:s}=e;s||(s=s||d.rQ),this.state.value!==s&&this.setState({value:s})}getClass(e){return this.state.value.indexOf(e)>-1?"day day-on":"day"}daySelected(e){let{value:s}=this.state;const i=s.indexOf(e);-1===i?s=s.concat(e):s.splice(i,1),s=s.orderBy(),this.setState({value:s}),this.props.onChange(s,this.props.field)}render(){return(0,c.jsx)("div",{className:"daysinweek",children:u.map(((e,s)=>(0,c.jsx)("div",{className:this.getClass(s),onClick:()=>this.daySelected(s),children:e},e)))})}}const m=h;var g=i(4711);class x extends t.PureComponent{constructor(e){super(e),this.saveSetting=(e,s)=>this.props.onSave(e,s),this.saveIntSetting=(e,s)=>{e=parseInt(e),isNaN(e)||this.saveSetting(e,s)},(0,n.f3)(this,"SettingsService","SessionService")}}const p=x;var v=i(9149);const f=[{val:0,label:"Default"},{val:1,label:"Sunday"},{val:2,label:"Monday"},{val:3,label:"Tuesday"},{val:4,label:"Wednesday"},{val:5,label:"Thursday"},{val:6,label:"Friday"},{val:7,label:"Saturday"}];const j=class extends p{constructor(e){super(e),this.setStartOfweek=(e,s)=>{e=parseInt(e),this.saveSetting(e,s),(0,g._3)(e)},this.toggleDonateMenu=(e,s)=>{const i=this.$session.CurrentUser;i.hideDonateMenu=this.props.noDonations||e,this.saveSetting(e,s),i.hideDonateMenu?document.body.classList.add("no-donation"):document.body.classList.remove("no-donation")},(0,n.f3)(this,"UtilsService"),this.state={settings:e.settings};const s=new Date;this.dateFormats=d.fK.map((e=>({format:e,text:this.$utils.formatDate(s,e)}))),this.timeFormats=d.Xr.map((e=>({format:e,text:this.$utils.formatDate(s,e)})))}render(){const{dateFormats:e,timeFormats:s,props:{noDonations:i,settings:t}}=this;return(0,c.jsxs)("div",{className:"form-horizontal",children:[(0,c.jsx)("div",{className:"form-label ui-g-12",children:(0,c.jsx)("strong",{children:"Display Date and Time format"})}),(0,c.jsx)("div",{className:"ui-g-12 ui-md-9 ui-lg-9 ui-xl-10",children:(0,c.jsxs)("div",{className:"form-group",children:[(0,c.jsx)(r.jL,{className:"form-control select",dataset:e,value:t.dateFormat,valueField:"format",displayField:"text",field:"dateFormat",onChange:this.saveSetting,style:{width:"180px",display:"inline-block"}}),(0,c.jsx)(r.jL,{className:"form-control select",dataset:s,value:t.timeFormat,valueField:"format",displayField:"text",field:"timeFormat",onChange:this.saveSetting,style:{width:"150px",display:"inline-block"}}),(0,c.jsx)("span",{className:"help-block",children:"Select your preferred date and time format to be displayed throughout the application"})]})}),(0,c.jsx)("div",{className:"form-label ui-g-12 ui-md-3 ui-lg-3 ui-xl-2",children:(0,c.jsx)("strong",{children:"Displayed hours"})}),(0,c.jsx)("div",{className:"ui-g-12 ui-md-9 ui-lg-9 ui-xl-10",children:(0,c.jsxs)("div",{className:"form-group",children:[(0,c.jsx)(o.InputMask,{mask:"99:99",value:t.startOfDayDisp,onChange:e=>this.saveSetting(e.value,"startOfDayDisp"),placeholder:d.T2,maxLength:5,style:{width:"150px",display:"inline-block"}}),(0,c.jsx)(o.InputMask,{mask:"99:99",value:t.endOfDayDisp,onChange:e=>this.saveSetting(e.value,"endOfDayDisp"),placeholder:d.$K,maxLength:5,style:{width:"150px",display:"inline-block"}}),(0,c.jsx)("span",{className:"help-block",children:"Select your displayed hours range for calendar between 00:00 to 23:00 (24 hours format)"})]})}),(0,c.jsx)("div",{className:"form-label ui-g-12 ui-md-3 ui-lg-3 ui-xl-2",children:(0,c.jsx)("strong",{children:"Working hours"})}),(0,c.jsx)("div",{className:"ui-g-12 ui-md-9 ui-lg-9 ui-xl-10",children:(0,c.jsxs)("div",{className:"form-group",children:[(0,c.jsx)(o.InputMask,{mask:"99:99",value:t.startOfDay,onChange:e=>this.saveSetting(e.value,"startOfDay"),placeholder:d.T2,maxLength:5,style:{width:"150px",display:"inline-block"}}),(0,c.jsx)(o.InputMask,{mask:"99:99",value:t.endOfDay,onChange:e=>this.saveSetting(e.value,"endOfDay"),placeholder:d.$K,maxLength:5,style:{width:"150px",display:"inline-block"}}),(0,c.jsx)("span",{className:"help-block",children:"Select your working hours range between 00:00 to 23:00 (24 hours format)"})]})}),(0,c.jsx)("div",{className:"form-label ui-g-12 ui-md-3 ui-lg-3 ui-xl-2",children:(0,c.jsx)("strong",{children:"Working days"})}),(0,c.jsx)("div",{className:"ui-g-12 ui-md-9 ui-lg-9 ui-xl-10",children:(0,c.jsxs)("div",{className:"form-group",children:[(0,c.jsx)(m,{value:t.workingDays,field:"workingDays",onChange:this.saveSetting}),(0,c.jsx)("span",{className:"help-block",children:"Select the days in week you would be working"})]})}),(0,c.jsx)("div",{className:"form-label ui-g-12 ui-md-3 ui-lg-3 ui-xl-2",children:(0,c.jsx)("strong",{children:"Start of week"})}),(0,c.jsx)("div",{className:"ui-g-12 ui-md-9 ui-lg-9 ui-xl-10",children:(0,c.jsxs)("div",{className:"form-group",children:[(0,c.jsx)(r.jL,{dataset:f,className:"form-control select",valueField:"val",displayField:"label",value:t.startOfWeek,field:"startOfWeek",onChange:this.setStartOfweek,style:{width:180,display:"inline-block"}}),(0,c.jsx)("span",{className:"help-block",children:"Select the starting day of your week. If nothing is selected then default will be taken"})]})}),!i&&(0,c.jsx)("div",{className:"form-label ui-g-12 ui-md-3 ui-lg-3 ui-xl-2",children:(0,c.jsx)("strong",{children:"Donate / contribute to us"})}),!i&&(0,c.jsx)("div",{className:"ui-g-12 ui-md-9 ui-lg-9 ui-xl-10",children:(0,c.jsxs)("div",{className:"form-group",children:[(0,c.jsx)("div",{children:(0,c.jsx)(r.XZ,{checked:t.hideDonateMenu,field:"hideDonateMenu",onChange:this.saveSetting,label:"Hide Donate button in header"})}),(0,c.jsx)("div",{children:(0,c.jsx)("a",{href:v.xn?`/${this.props.userId}/contribute`:`/index.html#/${this.props.userId}/contribute`,title:"Would you like to contribute / compensate us for the effort we put in development of this tool? Click to know more",children:(0,c.jsx)("img",{src:"/assets/donate.png",width:145,className:"Donate us",alt:"Donate us"})})}),(0,c.jsx)("span",{className:"help-block",children:"You can choose to hide the donate button / menu displayed in the tool using this option. But before hiding it consider donating a small amount of your wish."})]})})]})}};var b=i(4616),k=i(7092),y=i(8801);const S=!v.KX&&(!v.xn||"1"===localStorage.getItem("authType")),w=[{value:"5",label:"5 Minutes"},{value:"10",label:"10 Minutes"},{value:"15",label:"15 Minutes"},{value:"30",label:"30 Minutes"},{value:"60",label:"1 Hour"}],N=[{value:"",label:"No Rounding"},{value:"round",label:"Closest value"},{value:"ceil",label:"Upper bound"},{value:"floor",label:"Lower bound"}];const C=class extends p{constructor(e){super(e),this.saveSettingAndReload=async(e,s)=>{await this.saveSetting(e,s);try{await(0,k.$A)("SELF","RELOAD",[],this.$message)}catch(i){this.$message.error("This settings would work only with JA extension v2.41 or above.","Unsupported Settings"),console.log(i)}},this.saveSetting=async(e,s)=>{this.setState({[s]:e}),await this.$settings.set(s,e)},(0,b.f3)(this,"SettingsService","AppBrowserService","MessageService"),this.state={},this.loadSettings()}async loadSettings(){const e=await this.$settings.get("TR_PauseOnLock"),s=await this.$settings.get("TR_PauseOnIdle"),i=await this.$settings.get("TR_MinTime"),t=await this.$settings.get("TR_RoundTime"),a=await this.$settings.get("TR_RoundOpr");let l=await this.$settings.get("TR_AttachCS"),n=await this.$settings.get("TR_ShowTimer");!1!==l&&(l=!0),!1!==n&&(n=!0);const o=await this.$settings.get("TR_CSDelay");this.setState({TR_PauseOnLock:e,TR_PauseOnIdle:s,TR_MinTime:i,TR_RoundTime:t,TR_RoundOpr:a,TR_AttachCS:l,TR_CSDelay:o,TR_ShowTimer:n})}render(){const{TR_PauseOnLock:e,TR_PauseOnIdle:s,TR_MinTime:i,TR_RoundTime:t,TR_RoundOpr:a,TR_AttachCS:l,TR_CSDelay:n,TR_ShowTimer:d}=this.state;return(0,c.jsxs)("div",{className:"ui-g ui-fluid",children:[(0,c.jsx)("div",{className:"form-label ui-g-12 ui-md-3 ui-lg-3 ui-xl-2",children:(0,c.jsx)("strong",{children:"Minimum time spent (HH:MM)"})}),(0,c.jsx)("div",{className:"ui-g-12 ui-md-9 ui-lg-9 ui-xl-10",children:(0,c.jsxs)("div",{className:"form-group",children:[(0,c.jsx)(o.InputMask,{mask:"99:99",value:i,onChange:e=>this.saveSetting(e.value,"TR_MinTime"),placeholder:"00:05",maxLength:5,style:{width:"150px",display:"inline-block"}}),(0,c.jsx)("span",{className:"help-block",children:"Minimum time required to generate worklog. Tracker stopped with time lesser than this setting would be ignored"})]})}),(0,c.jsx)("div",{className:"form-label ui-g-12 ui-md-3 ui-lg-3 ui-xl-2",children:(0,c.jsx)("strong",{children:"Round tracked time"})}),(0,c.jsx)("div",{className:"ui-g-12 ui-md-9 ui-lg-9 ui-xl-10",children:(0,c.jsxs)("div",{className:"form-group",children:[(0,c.jsx)(r.jL,{className:"form-control select",dataset:N,value:a||"",field:"TR_RoundOpr",onChange:this.saveSetting,style:{width:"150px",display:"inline-block"}}),(0,c.jsx)(r.jL,{className:"form-control select",dataset:w,value:t||"5",field:"TR_RoundTime",onChange:this.saveSetting,style:{width:"150px",display:"inline-block"}}),(0,c.jsx)("span",{className:"help-block",children:"Round the tracked time to x minute as selected"})]})}),S&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("div",{className:"form-label ui-g-12 ui-md-3 ui-lg-3 ui-xl-2",children:(0,c.jsx)("strong",{children:"System Events"})}),(0,c.jsxs)("div",{className:"ui-g-12 ui-md-9 ui-lg-9 ui-xl-10",children:[(0,c.jsxs)("div",{className:"form-group",children:[(0,c.jsx)(r.XZ,{checked:e,field:"TR_PauseOnLock",onChange:this.saveSettingAndReload,label:"Pause time tracker when system is locked"}),(0,c.jsx)("span",{className:"help-block",children:"Timer will be paused when system is locked and it would be resumed when unlocked"})]}),(0,c.jsxs)("div",{className:"form-group",children:[(0,c.jsx)(r.XZ,{checked:s,field:"TR_PauseOnIdle",onChange:this.saveSettingAndReload,label:"Pause time tracker when system is idle"}),(0,c.jsx)("span",{className:"help-block",children:"Timer will be paused when system goes to idle state and resumed when active"})]})]}),(0,c.jsx)("div",{className:"form-label ui-g-12 ui-md-3 ui-lg-3 ui-xl-2",children:(0,c.jsx)("strong",{children:"Show tracker functionality within Jira"})}),(0,c.jsxs)("div",{className:"ui-g-12 ui-md-9 ui-lg-9 ui-xl-10",children:[(0,c.jsxs)("div",{className:"form-group",children:[(0,c.jsx)(r.XZ,{checked:l,field:"TR_AttachCS",onChange:this.saveSettingAndReload,onClick:this.requestPermission,label:"Attach tracker functionality within Jira"}),(0,c.jsx)("span",{className:"help-block",children:"Enabling this would inject tracking functionality in some pages of Jira from where you can control time tracking"})]}),(0,c.jsxs)("div",{className:"form-group",children:[(0,c.jsx)(r.XZ,{checked:d,disabled:!l,field:"TR_ShowTimer",onChange:this.saveSetting,label:"Show timer in Jira"}),(0,c.jsx)("span",{className:"help-block",children:"Enabling this would show running timer in Jira"})]}),(0,c.jsxs)("div",{className:"form-group",children:["Delay attaching functionality for",(0,c.jsx)(y.R,{maxFractionDigits:0,value:n,onChange:e=>this.saveSetting(e.value,"TR_CSDelay"),placeholder:2,min:1,max:20,step:1,allowEmpty:!1,style:{width:"35px",display:"inline-block",marginLeft:"3px"}}),"seconds",(0,c.jsx)("span",{className:"help-block",children:"Increase it if your JIRA response time is slow and you do not see tracker functionality in any pages"})]})]})]})]})}};var T=i(7120),I=(i(9554),i(816)),D=i.n(I);const O=[13,14,15,16,17,18,19,20,21,22,23];class L extends t.PureComponent{constructor(){super(...arguments),this.state={},this.onChange=e=>{const s=this.getValue(e);this.setState({timeValue:e,value:s}),this.props.onChange(s,this.props.field)},this.checkDisabled=()=>O}static getDerivedStateFromProps(e,s){let{value:i}=e,t=null;if(!s||s.value!==i)if(t={value:i},i){const s=D()();"string"===e.mode||(i=i.toString().split("."),s.set({h:i[0],m:parseInt(Math.round(60*`.${i[1]||0}`))||0})),t.timeValue=s}else t.timeValue=null;return t}getValue(e){if(!e)return null;const{mode:s}=this.props;return"string"!==s?e.hour()+e.minute()/60:void 0}render(){const{state:{timeValue:e},props:{className:s,disabled:i,placeholder:t="Choose time"}}=this;return(0,c.jsx)(T.Z,{defaultValue:e,className:s,disabled:i,showSecond:!1,inputReadOnly:!1,placeholder:t,onChange:this.onChange,disabledHours:this.checkDisabled,hideDisabledOptions:!0})}}const R=L,{googleCalendar:A,outlookCalendar:$}=l.default.features.integrations,F=!1!==$||!1!==A;const P=class extends p{render(){const{settings:e,isAtlasCloud:s}=this.props;return(0,c.jsxs)("div",{className:"ui-g ui-fluid",children:[(0,c.jsx)("div",{className:"form-label ui-g-12 ui-md-3 ui-lg-3 ui-xl-2",children:(0,c.jsx)("strong",{children:"Min & Max hours to log (HH:mm)"})}),(0,c.jsx)("div",{className:"ui-g-12 ui-md-9 ui-lg-9 ui-xl-10",children:(0,c.jsxs)("div",{className:"form-group",children:[(0,c.jsx)(R,{value:e.minHours,field:"minHours",onChange:this.saveSetting,placeholder:"Choose min hours"}),(0,c.jsx)("span",{children:" - "}),(0,c.jsx)(R,{value:e.maxHours,field:"maxHours",onChange:this.saveSetting,placeholder:"Choose max hours"}),(0,c.jsx)("span",{className:"help-block",children:"Specify the minimum and maximum number of hours to be logged per day"})]})}),(0,c.jsx)("div",{className:"form-label ui-g-12 ui-md-3 ui-lg-3 ui-xl-2",children:(0,c.jsx)("strong",{children:"Default time spent (hh:mm)"})}),(0,c.jsx)("div",{className:"ui-g-12 ui-md-9 ui-lg-9 ui-xl-10",children:(0,c.jsxs)("div",{className:"form-group",children:[(0,c.jsx)(R,{value:e.defaultTimeSpent||1,field:"defaultTimeSpent",onChange:this.saveSetting}),(0,c.jsx)("span",{className:"help-block",children:"Specify the default value for time spent while adding worklog"})]})}),(0,c.jsx)("div",{className:"form-label ui-g-12 ui-md-3 ui-lg-3 ui-xl-2",children:(0,c.jsx)("strong",{children:"Auto upload worklog"})}),(0,c.jsx)("div",{className:"ui-g-12 ui-md-9 ui-lg-9 ui-xl-10",children:(0,c.jsxs)("div",{className:"form-group",children:[(0,c.jsx)(r.XZ,{checked:e.autoUpload,field:"autoUpload",onChange:this.saveSetting,label:"Enable auto upload by default"}),(0,c.jsx)("span",{className:"help-block",children:"All the worklogs will be automatically uploaded when created"})]})}),s&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("div",{className:"form-label ui-g-12 ui-md-3 ui-lg-3 ui-xl-2",children:(0,c.jsx)("strong",{children:"Notify users on worklog"})}),(0,c.jsx)("div",{className:"ui-g-12 ui-md-9 ui-lg-9 ui-xl-10",children:(0,c.jsxs)("div",{className:"form-group",children:[(0,c.jsx)(r.XZ,{checked:!1!==e.notifyUsers,field:"notifyUsers",onChange:this.saveSetting,label:"Enable worklog notification"}),(0,c.jsx)("span",{className:"help-block",children:"Enable whether users watching the issue are notified by email"})]})})]}),(0,c.jsx)("div",{className:"form-label ui-g-12 ui-md-3 ui-lg-3 ui-xl-2",children:(0,c.jsx)("strong",{children:"Worklog for closed tickets"})}),(0,c.jsx)("div",{className:"ui-g-12 ui-md-9 ui-lg-9 ui-xl-10",children:(0,c.jsxs)("div",{className:"form-group",children:[(0,c.jsx)(r.XZ,{checked:e.allowClosedTickets,field:"allowClosedTickets",onChange:this.saveSetting,label:"Allow logging work on closed tickets"}),(0,c.jsx)("span",{className:"help-block",children:"This feature will work only if your Jira server is configured to allow it"})]})}),(0,c.jsx)("div",{className:"form-label ui-g-12 ui-md-3 ui-lg-3 ui-xl-2",children:(0,c.jsx)("strong",{children:"Min length for worklog comments"})}),(0,c.jsx)("div",{className:"ui-g-12 ui-md-9 ui-lg-9 ui-xl-10",children:(0,c.jsxs)("div",{className:"form-group",children:[(0,c.jsx)(r.zC,{className:"form-control",value:e.commentLength,field:"commentLength",onChange:this.saveIntSetting,keyfilter:"int",maxLength:3,style:{width:150,display:"inline-block"}}),(0,c.jsx)("span",{className:"help-block",children:"Provide the minimum count of characters to be used for worklog comments"})]})}),F&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("div",{className:"form-label ui-g-12 ui-md-3 ui-lg-3 ui-xl-2",children:(0,c.jsx)("strong",{children:"Default meeting ticket for worklog"})}),(0,c.jsx)("div",{className:"ui-g-12 ui-md-9 ui-lg-9 ui-xl-10",children:(0,c.jsxs)("div",{className:"form-group",children:[(0,c.jsx)(M,{value:e.meetingTicket,field:"meetingTicket",onChange:this.saveSetting}),(0,c.jsx)("span",{className:"help-block",children:"Provide the list of meeting tickets seperated by ',' for which you would add worklog"})]})})]})]})}};class M extends t.PureComponent{constructor(e){super(e),this.setValue=e=>this.setState({value:e}),this.endEdit=async()=>{const e=await this.validateTicket();"string"===typeof e&&this.props.onChange(e,this.props.field)},this.oldValue=e.value,this.state={value:e.value},(0,n.f3)(this,"MessageService","TicketService")}UNSAFE_componentWillReceiveProps(e){this.oldValue!==e.value&&(this.oldValue=e.value,this.setState({value:e.value}))}validateTicket(){let{value:e}=this.state,s=(e||"").trim();return s?(s=s.replace(";",",").replace(" ",","),s=s.split(",").map((e=>e.trim()||null)),e=s.join(),this.setState({value:e}),this.$ticket.getTicketDetails(s).then((e=>{const i=s.map((s=>e[s.toUpperCase()]||s)),t=i.filter((e=>"string"===typeof e));return t.length>0?(this.$message.warning(`Invalid default ticket number(s) specified for meetings: ${t.join()}`),!1):i.map((e=>e.key)).join()}),(e=>(((e.error||{}).errorMessages||[]).some((e=>e.toLowerCase().indexOf("'key' is invalid")>-1||e.toLowerCase().indexOf("does not exist")>-1))&&this.$message.warning("Invalid default ticket number specified for meetings!"),!1)))):Promise.resolve(e)}render(){return(0,c.jsx)(r.zC,{value:this.state.value,className:"form-control",maxLength:100,style:{width:150,display:"inline-block"},onChange:this.setValue,onBlur:this.endEdit})}}const _=class extends p{constructor(e){super(e),this.searchRapidView=e=>{e=(e||"").toLowerCase();const{rapidViews:s}=this.state,{settings:i}=this.props;return s.filter((s=>(s.name.toLowerCase().indexOf(e)>=0||s.id.toString().startsWith(e))&&(!i.rapidViews||!i.rapidViews.some((e=>e.id===s.id)))))},this.searchProject=e=>{e=(e||"").toLowerCase();const{projects:s}=this.state,{settings:i}=this.props;return s.filter((s=>(s.name.toLowerCase().indexOf(e)>=0||s.key.toLowerCase().startsWith(e)||s.id.toString().startsWith(e))&&(!i.projects||!i.projects.some((e=>e.id===s.id)))))},(0,n.f3)(this,"JiraService"),this.state={},this.loadData()}async loadData(){this.$jira.getRapidViews().then((e=>{e=e.orderBy((e=>e.name)).map((e=>({name:e.name,id:e.id}))),this.setState({rapidViews:e})})),this.$jira.getProjects().then((e=>{e=e.map((e=>{let{name:s,id:i,key:t}=e;return{name:s,id:i,key:t}})).orderBy((e=>e.name)),this.setState({projects:e})})),this.$jira.getCustomFields().then((e=>{const s=e.filter((e=>e.custom&&"number"===e.schema.type)).map((e=>({id:e.id,name:e.name,clauseNames:e.clauseNames}))).orderBy((e=>e.name)),i=e.filter((e=>e.custom&&("any"===e.schema.type||"string"===e.schema.type))).map((e=>({id:e.id,name:e.name,clauseNames:e.clauseNames}))).orderBy((e=>e.name));this.setState({numericFields:s,stringFields:i}),this.setDefaultValues(s,i)}))}setDefaultValues(e,s){const{settings:i}=this.props,{storyPointField:t,epicNameField:a}=i;if(!t){const s=e.first((e=>"story points"===e.name.toLowerCase()));s||e.first((e=>{const s=e.name.toLowerCase();return s.indexOf("story")>-1&&~s.indexOf("points")>-1})),s&&this.saveSetting(s,"storyPointField")}if(!a){const e=s.first((e=>"epic link"===e.name.toLowerCase()));e||s.first((e=>{const s=e.name.toLowerCase();return s.indexOf("epic")>-1&&~s.indexOf("link")>-1})),e&&this.saveSetting(e,"epicNameField")}}render(){const{state:{numericFields:e,stringFields:s,projects:i,rapidViews:t},props:{settings:a}}=this;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("div",{className:"ui-g ui-fluid",children:[(0,c.jsx)("div",{className:"form-label ui-g-12 ui-md-3 ui-lg-3 ui-xl-2",children:(0,c.jsx)("strong",{children:"Projects"})}),(0,c.jsx)("div",{className:"ui-g-12 ui-md-9 ui-lg-9 ui-xl-10",children:(0,c.jsxs)("div",{className:"form-group",children:[(0,c.jsx)(r.Qc,{value:a.projects,field:"projects",onChange:this.saveSetting,dataset:this.searchProject,dropdown:!0,multiple:!0,displayField:"name",placeholder:"start typing the project name here",size:35,maxlength:25,className:"autocomplete-350",scrollHeight:"300px",disabled:!i||0===i.length}),(0,c.jsx)("span",{className:"help-block",children:"Add one or more projects which you are interested in"})]})})]}),(0,c.jsxs)("div",{className:"ui-g ui-fluid",children:[(0,c.jsx)("div",{className:"form-label ui-g-12 ui-md-3 ui-lg-3 ui-xl-2",children:(0,c.jsx)("strong",{children:"Agile boards"})}),(0,c.jsx)("div",{className:"ui-g-12 ui-md-9 ui-lg-9 ui-xl-10",children:(0,c.jsxs)("div",{className:"form-group",children:[(0,c.jsx)(r.Qc,{value:a.rapidViews,field:"rapidViews",onChange:this.saveSetting,dataset:this.searchRapidView,dropdown:!0,multiple:!0,displayField:"name",placeholder:"start typing the board name here",size:35,maxLength:25,styleclass:"autocomplete-350",scrollHeight:"300px",disabled:!t||0===t.length}),(0,c.jsx)("span",{className:"help-block",children:"Add one or more Agile boards which you are interested in"})]})})]}),(0,c.jsxs)("div",{className:"ui-g ui-fluid",children:[(0,c.jsx)("div",{className:"form-label ui-g-12 ui-md-3 ui-lg-3 ui-xl-2",children:(0,c.jsx)("strong",{children:"Story Points field"})}),(0,c.jsx)("div",{className:"ui-g-12 ui-md-9 ui-lg-9 ui-xl-10",children:(0,c.jsxs)("div",{className:"form-group",children:[(0,c.jsx)(r.jL,{dataset:e,value:a.storyPointField,field:"storyPointField",onChange:this.saveSetting,style:{width:"200px"},placeholder:"Choose a storypoint field",disabled:!e,displayField:"name",filterPlaceholder:"Type the field name to filter"}),(0,c.jsx)("span",{className:"help-block",children:"Story points field is a custom field in each jira instance and for some functionality to work, you will have to select appropriate field."})]})})]}),(0,c.jsxs)("div",{className:"ui-g ui-fluid",children:[(0,c.jsx)("div",{className:"form-label ui-g-12 ui-md-3 ui-lg-3 ui-xl-2",children:(0,c.jsx)("strong",{children:"Epic name field"})}),(0,c.jsx)("div",{className:"ui-g-12 ui-md-9 ui-lg-9 ui-xl-10",children:(0,c.jsxs)("div",{className:"form-group",children:[(0,c.jsx)(r.jL,{dataset:s,value:a.epicNameField,field:"epicNameField",onChange:this.saveSetting,style:{width:"200px"},placeholder:"Choose a epic name field",disabled:!s,displayField:"name",filterPlaceholder:"Type the field name to filter"}),(0,c.jsx)("span",{className:"help-block",children:"Epic name field is a custom field in each jira instance and for some functionality to work, you will have to select appropriate field."})]})})]})]})}};var E=i(108),V=i(6552);const B=[{value:5,label:"Every 5 minutes"},{value:10,label:"Every 10 minutes"},{value:15,label:"Every 15 minutes"},{value:20,label:"Every 20 minutes"},{value:30,label:"Every 30 minutes"},{value:45,label:"Every 45 minutes"},{value:60,label:"Every 60 minutes"}],U=[{value:0,label:"Disable notification"},{value:1,label:"Before 1 minute"},{value:2,label:"Before 2 minutes"},{value:3,label:"Before 3 minutes"},{value:4,label:"Before 4 minutes"},{value:5,label:"Before 5 minutes"},{value:10,label:"Before 10 minutes"},{value:15,label:"Before 15 minutes"}],G=[{value:0,label:"Never launch"},{value:1,label:"Before 1 minute"},{value:2,label:"Before 2 minutes"},{value:3,label:"Before 3 minutes"},{value:4,label:"Before 4 minutes"},{value:5,label:"Before 5 minutes"},{value:10,label:"Before 10 minutes"}],{googleCalendar:H,outlookCalendar:W}=l.default.features.integrations;const X=class extends p{constructor(e){super(e),this.intgStatusChanged=e=>this.setState({removedIntg:e}),this.enableGIntegration=e=>this.enableIntegration("googleIntegration",e),this.enableOIntegration=e=>this.saveSetting(e,"outlookIntegration"),this.googleSignIn=()=>{this.$calendar.authenticate(!0).then((e=>{this.saveSetting(!0,"hasGoogleCredentials"),this.$session.CurrentUser.hasGoogleCredentials=!0,this.$analytics.trackEvent("Signedin to Google Calendar"),this.$message.success("Successfully integrated with google account.")}),(e=>{this.$message.warning("Unable to integrate with Google Calendar!")}))},this.outlookSignIn=()=>{this.$outlook.authenticate(!0).then((()=>{this.$session.CurrentUser.hasOutlookCredentials=!0,this.$analytics.trackEvent("Signedin to Outlook Calendar"),this.$message.success("Successfully integrated with outlook account."),this.props.onChange("hasOutlookCredentials",!0)}),(e=>{console.log("Outlook integration failed with error: "),console.error(e),this.$message.warning("Unable to integrate with Outlook Calendar!")}))},this.removeIntegration=()=>{this.saveSetting(!1,"hasGoogleCredentials"),this.props.intgStatusChanged(!0)},this.undoSignout=()=>{this.saveSetting(!0,"hasGoogleCredentials"),this.props.intgStatusChanged(!1)},this.removeOutlookIntegration=()=>{V.Z.confirmDelete((0,c.jsxs)(c.Fragment,{children:["Are you sure to remove Outlook Integration?",(0,c.jsx)("br",{}),(0,c.jsx)("br",{}),"To use it again, you will have to reintegrate with MS Outlook."]}),"Remove Integration").then((()=>{this.$settings.saveGeneralSetting(this.props.userId,"OLBT",null),this.$settings.saveGeneralSetting(this.props.userId,"OLRT",null),this.saveSetting(!1,"hasOutlookCredentials")}))},this.state={},(0,n.f3)(this,"CalendarService","AnalyticsService","MessageService","SessionService","OutlookService","AppBrowserService")}enableIntegration(e,s){s?this.$jaBrowserExtn.requestPermission(["identity"]).then((i=>{i?this.saveSetting(s,e):this.$message.warning("Permission was not granted to enable this integration. Please grant permission to enable it.","Permission not granted")})):this.saveSetting(s,e)}assignCalendarSettingsToUser(e,s){if(!s.hasGoogleCredentials&&e.dataStore){const s=e.dataStore.access_token;s&&this.$ajax.get(E.F.googleLogoutUrl,s).then((()=>{this.$jaBrowserExtn.removeAuthTokken(s)})),delete e.dataStore}}render(){const{removedIntg:e,settings:s}=this.props;return(0,c.jsxs)("div",{children:[(0,c.jsx)("p",{children:"This page allows you to integrate your calendar from external sources like Outlook & Google. Worklog will be automatically created for the events in your calendar based on your preferences"}),(0,c.jsxs)("div",{className:"block",children:[!1!==W&&(0,c.jsxs)("div",{className:"ui-g ui-fluid",children:[(0,c.jsx)("div",{children:(0,c.jsx)("h4",{children:"Outlook Calendar"})}),(0,c.jsx)("div",{className:"form-label ui-g-12 ui-md-3 ui-lg-3 ui-xl-2",children:(0,c.jsx)("strong",{children:"Enable Outlook calendar"})}),(0,c.jsx)("div",{className:"ui-g-12 ui-md-9 ui-lg-9 ui-xl-10",children:(0,c.jsxs)("div",{className:"form-group",children:[(0,c.jsx)(r.XZ,{checked:s.outlookIntegration,onChange:this.enableOIntegration,label:"Allow integration"}),(0,c.jsx)("span",{className:"help-block",children:"Select this checkbox if you would wish to view meetings in your outlook calendar"})]})}),(0,c.jsx)("div",{className:"form-label ui-g-12 ui-md-3 ui-lg-3 ui-xl-2",children:(0,c.jsx)("strong",{children:"Integration Status"})}),(0,c.jsxs)("div",{className:"ui-g-12 ui-md-9 ui-lg-9 ui-xl-10",children:[!s.hasOutlookCredentials&&(0,c.jsxs)("div",{className:"form-group",children:[(0,c.jsx)("label",{className:"link",onClick:this.outlookSignIn,children:"Click here to sign in with your microsoft account"}),(0,c.jsx)("span",{className:"help-block",children:"You will have to sign-in to with your microsoft account to use the calendar."})]}),s.hasOutlookCredentials&&(0,c.jsxs)("div",{className:"form-group",children:[(0,c.jsx)("label",{children:"(Already integrated with an account)"}),(0,c.jsx)("label",{className:"link margin-l-5",onClick:this.removeOutlookIntegration,children:"Remove integration"})]})]})]}),!1!==H&&(0,c.jsxs)("div",{className:"ui-g ui-fluid",children:[(0,c.jsx)("h4",{children:"Google Calendar"}),(0,c.jsx)("div",{className:"form-label ui-g-12 ui-md-3 ui-lg-3 ui-xl-2",children:(0,c.jsx)("strong",{children:"Enable Google calendar"})}),(0,c.jsx)("div",{className:"ui-g-12 ui-md-9 ui-lg-9 ui-xl-10",children:(0,c.jsxs)("div",{className:"form-group",children:[(0,c.jsx)(r.XZ,{checked:s.googleIntegration,onChange:this.enableGIntegration,label:"Allow integration"}),(0,c.jsx)("span",{className:"help-block",children:"Select this checkbox if you would wish to view meetings in your calendar"})]})}),(0,c.jsx)("div",{className:"form-label ui-g-12 ui-md-3 ui-lg-3 ui-xl-2",children:(0,c.jsx)("strong",{children:"Integration Status"})}),(0,c.jsxs)("div",{className:"ui-g-12 ui-md-9 ui-lg-9 ui-xl-10",children:[!s.hasGoogleCredentials&&!e&&(0,c.jsxs)("div",{className:"form-group",children:[(0,c.jsx)("label",{className:"link",onClick:this.googleSignIn,children:"Click here to sign in with your google account"}),(0,c.jsx)("span",{className:"help-block",children:"You will have to sign-in to chrome with your google account to use the calendar."})]}),s.hasGoogleCredentials&&!e&&(0,c.jsxs)("div",{className:"form-group",children:[(0,c.jsx)("label",{children:"(Already integrated with an account)"}),(0,c.jsx)("label",{className:"link",onClick:this.removeIntegration,children:"Remove integration"})]}),e&&(0,c.jsxs)("div",{className:"form-group",children:[(0,c.jsx)("label",{children:"(You will be signed out from Google once you save your changes)"}),(0,c.jsx)("label",{className:"link",onClick:this.undoSignout,children:" Undo signout"}),(0,c.jsx)("span",{className:"help-block",children:"Note: You will have to authenticate with google again to use the calendar"})]})]})]}),!1!==H&&(0,c.jsxs)("div",{children:[(0,c.jsx)("h4",{children:"General settings"}),(0,c.jsx)("div",{className:"form-label ui-g-12 ui-md-3 ui-lg-3 ui-xl-2",children:(0,c.jsx)("strong",{children:"Check for updates"})}),(0,c.jsx)("div",{className:"ui-g-12 ui-md-9 ui-lg-9 ui-xl-10",children:(0,c.jsxs)("div",{className:"form-group",children:[(0,c.jsx)(r.jL,{className:"form-control select",value:s.checkUpdates,dataset:B,valueField:"value",field:"checkUpdates",onChange:this.saveSetting,style:{width:180,display:"inline-block"}}),(0,c.jsx)("span",{className:"help-block",children:"Refresh the meeting invites for notification regularly in given interval"})]})}),(0,c.jsx)("div",{className:"form-label ui-g-12 ui-md-3 ui-lg-3 ui-xl-2",children:(0,c.jsx)("strong",{children:"Show meeting notification"})}),(0,c.jsx)("div",{className:"ui-g-12 ui-md-9 ui-lg-9 ui-xl-10",children:(0,c.jsxs)("div",{className:"form-group",children:[(0,c.jsx)(r.jL,{className:"form-control select",value:s.notifyBefore,dataset:U,valueField:"value",field:"notifyBefore",onChange:this.saveSetting,style:{width:180,display:"inline-block"}}),(0,c.jsx)("span",{className:"help-block",children:"Show notification before the selected time of meeting"})]})}),(0,c.jsx)("div",{className:"form-label ui-g-12 ui-md-3 ui-lg-3 ui-xl-2",children:(0,c.jsx)("strong",{children:"Auto launch hangout"})}),(0,c.jsx)("div",{className:"ui-g-12 ui-md-9 ui-lg-9 ui-xl-10",children:(0,c.jsxs)("div",{className:"form-group",children:[(0,c.jsx)(r.jL,{className:"form-control select",value:s.autoLaunch,field:"autoLaunch",onChange:this.saveSetting,dataset:G,valueField:"value",style:{width:180,display:"inline-block"}}),(0,c.jsx)("span",{className:"help-block",children:"Automatically launch hangout Url before the selected time of meeting"})]})})]})]})]})}};var Z=i(5574),J=i(2835);const q=class extends p{constructor(e){super(e),this.saveSettings=()=>{const{menuAction:e}=this.state,s={action:parseInt(e)},i={action:s.action};switch(e){case 1:i.menus=this.menus.filter((e=>e.selected&&!e.isHead)).map((e=>({name:e.name,url:e.url}))),s.selectedMenu=this.state.selectedMenu;break;case 2:if(this.state.selectedLaunchPage){const e=this.menus.first((e=>e.id===this.state.selectedLaunchPage));e&&(i.url=e.url,s.autoLaunch=this.state.selectedLaunchPage)}break;case 3:this.state.selectedDashboard&&(i.index=parseInt((this.state.selectedDashboard||"0").replace("D-","")),s.quickIndex=this.state.selectedDashboard)}this.$settings.set("menuAction",i,!1,!0),this.saveSetting(s,"launchAction")},this.menuOptionSelected=()=>{const e=this.menus.filter((e=>e.selected&&!e.isHead)).map((e=>e.id));this.setState({menuAction:1,selectedMenu:e},this.saveSettings)},this.menuTemplate=e=>e.isHead?(0,c.jsxs)("div",{onClick:s=>this.menuSelected(e,s),children:[(0,c.jsx)(r.XZ,{checked:e.selected}),(0,c.jsx)("span",{children:e.name})]}):e.isHead?void 0:(0,c.jsxs)("div",{style:{marginLeft:20},onClick:s=>this.menuSelected(e,s),children:[(0,c.jsx)(r.XZ,{checked:e.selected}),(0,c.jsx)("span",{children:e.name})]}),this.menuSelected=(e,s)=>{s&&s.stopPropagation(),e.selected=!e.selected,e.isHead&&this.selectSubMenus(e),this.menuOptionSelected()},this.autoLaunchOptionSelected=()=>{var e,s,i;const t=null===(e=this.launchMenus.first())||void 0===e||null===(s=e.items)||void 0===s||null===(i=s.first())||void 0===i?void 0:i.value;t?this.launchPageChanged(t):this.setState({menuAction:2})},this.launchPageChanged=e=>this.setState({menuAction:2,selectedLaunchPage:e},this.saveSettings),this.quickViewOptionSelected=()=>{const e=this.$dashboard.getQuickViewBoardIndex()||0;this.dashboardChanged(`D-${e}`)},this.dashboardChanged=e=>{this.setState({menuAction:3,selectedDashboard:e},this.saveSettings);const s=parseInt((e||"0").replace("D-",""))||0;this.$dashboard.setQuickViewBoardIndex(s)},(0,n.f3)(this,"DashboardService","SettingsService");const{settings:s}=e;s.launchAction||(s.launchAction={});const i=this.$dashboard.getQuickViewBoardIndex();s.launchAction.quickIndex=`D-${i}`;const{launchAction:{action:t,autoLaunch:a,quickIndex:l}}=s;this.state={settings:s,launchMenus:[],menuAction:t||1,selectedLaunchPage:a,selectedDashboard:l},this.fillMenus()}fillMenus(){const e=[],s=this.state.settings.launchAction.selectedMenu||["D-0","R-WL","R-SP","R-CG","CAL","S-GE"],i=this.$dashboard.getDashboards(),t=[];i.forEach(((i,a)=>{const l=`D-${a}`,n=`/dashboard/${a}`;e.push({id:l,name:i.name,icon:i.icon,url:n,selected:s.indexOf(l)>-1}),t.push({value:l,label:i.name,icon:i.icon})}));const a=J.Z.map((i=>{const{id:a,name:l}=i,n={id:a,name:l,isHead:!0};i.isDashboard?e.splice(0,0,n):e.push(n);return{label:l,items:i.isDashboard?t:i.items.map((i=>(e.push({id:i.id,isHead:i.title,name:i.name,icon:i.icon,url:i.url,selected:s.indexOf(i.id)>-1}),{value:i.id,label:i.name,icon:i.icon})))}}));this.menus=e,this.launchMenus=a,this.dashboardMenus=t}selectSubMenus(e){const{menus:s}=this;for(let i=s.indexOf(e)+1;i<s.length;i++){const t=s[i];if(t.isHead)return;t.selected=e.selected}}render(){const{launchMenus:e,dashboardMenus:s,menus:i,state:{selectedDashboard:t,selectedLaunchPage:a,menuAction:l}}=this;return(0,c.jsxs)("div",{children:[(0,c.jsx)("p",{children:"This page allows you to set what is displayed when you click on JA icon in your browser"}),(0,c.jsx)("div",{className:"block",children:(0,c.jsxs)("div",{className:"ui-g ui-fluid",children:[(0,c.jsx)("div",{className:"form-label ui-g-12 ui-md-3 ui-lg-3 ui-xl-2",children:(0,c.jsx)("strong",{children:"What should happen when clicking on JA icon?"})}),(0,c.jsx)("div",{className:"ui-g-12 ui-md-9 ui-lg-9 ui-xl-10",children:(0,c.jsxs)("div",{className:"form-group",children:[(0,c.jsx)(r.EU,{value:l,onChange:this.menuOptionSelected,defaultValue:1,label:"Show menus"}),(0,c.jsx)(r.EU,{value:l,onChange:this.autoLaunchOptionSelected,defaultValue:2,label:"Auto launch"}),(0,c.jsx)(r.EU,{value:l,onChange:this.quickViewOptionSelected,defaultValue:3,label:"Show quickview dashboard"}),(0,c.jsx)("span",{className:"help-block",children:"Select appropriate option what you would expect to happen when you click on JA icon"})]})}),1===l&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("div",{className:"form-label ui-g-12 ui-md-3 ui-lg-3 ui-xl-2",children:(0,c.jsx)("strong",{children:"Menus to display"})}),(0,c.jsx)("div",{className:"ui-g-12 ui-md-9 ui-lg-9 ui-xl-10",children:(0,c.jsxs)("div",{className:"form-group",children:[(0,c.jsx)(Z.w,{options:i,optionValue:"id",optionLabel:"id",multiple:!0,style:{width:"300px"},listStyle:{maxHeight:"250px"},itemTemplate:this.menuTemplate}),(0,c.jsx)("span",{className:"help-block",children:"Choose the list of menus you would like to be displayed"})]})})]}),2===l&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("div",{className:"form-label ui-g-12 ui-md-3 ui-lg-3 ui-xl-2",children:(0,c.jsx)("strong",{children:"Auto launch page"})}),(0,c.jsx)("div",{className:"ui-g-12 ui-md-9 ui-lg-9 ui-xl-10",children:(0,c.jsxs)("div",{className:"form-group",children:[(0,c.jsxs)(r.jL,{dataset:e,value:a,onChange:this.launchPageChanged,valueField:"value",style:{width:"200px"},group:!0,children:[e=>(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("span",{className:`fa ${e.icon}`}),(0,c.jsx)("span",{style:{marginLeft:"4px"},children:e.label})]}),(e,s)=>(0,c.jsx)("strong",{children:e.label},s)]}),(0,c.jsx)("span",{className:"help-block",children:"Select the page to be launched when clicking on the JA icon"})]})})]}),3===l&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("div",{className:"form-label ui-g-12 ui-md-3 ui-lg-3 ui-xl-2",children:(0,c.jsx)("strong",{children:"Quick view board"})}),(0,c.jsx)("div",{className:"ui-g-12 ui-md-9 ui-lg-9 ui-xl-10",children:(0,c.jsx)("div",{className:"form-group",children:(0,c.jsx)(r.jL,{dataset:s,value:t,onChange:this.dashboardChanged,style:{width:"200px"},valueField:"value",children:e=>(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("i",{className:`fa ${e.icon}`}),(0,c.jsx)("span",{style:{verticalAlign:"middle"},children:e.label})]})})})})]})]})})]})}},{googleCalendar:Q,outlookCalendar:z}=l.default.features.integrations,K=!1!==Q||!1!==z;class Y extends t.PureComponent{constructor(e){super(e),this.tabChanged=e=>this.setState({currentTabIndex:e.index}),this.saveSetting=(e,s)=>{this.stateChanged(s,e),this.$settings.saveGeneralSetting(this.userId,s,e);this.$session.CurrentUser[s]=e},this.stateChanged=(e,s)=>{let{settings:i}=this.state;i={...i},i[e]=s,this.setState({settings:i})},(0,n.f3)(this,"SessionService","SettingsService"),this.state={settings:{}},this.noDonations=this.$session.CurrentUser.noDonations,this.userId=this.$session.CurrentUser.userId,this.isAtlasCloud=this.$session.CurrentUser.isAtlasCloud,this.settings={},this.spaceInfo={},this.state={},v.xn&&(this.isExtnConnected="1"===localStorage.getItem("authType"))}componentDidMount(){this.$settings.getGeneralSettings(this.userId).then((e=>this.setState({settings:{autoLaunch:0,notifyBefore:0,checkUpdates:15,...e}})))}render(){const{noDonations:e,state:{settings:s,currentTabIndex:i}}=this;return s?(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)(a.TabView,{activeindex:i,onChange:this.tabChanged,children:[(0,c.jsx)(a.TabPanel,{header:"General",leftIcon:"fa fa-cogs",selected:"true",children:(0,c.jsx)(j,{settings:s,userId:this.userId,noDonations:e,onSave:this.saveSetting})}),(0,c.jsx)(a.TabPanel,{header:"Time tracker",leftIcon:"fa fa-clock-o",children:(0,c.jsx)(C,{})}),(0,c.jsx)(a.TabPanel,{header:"Worklog",leftIcon:"fa fa-clock-o",children:(0,c.jsx)(P,{settings:s,userId:this.userId,onSave:this.saveSetting,isAtlasCloud:this.isAtlasCloud})}),(0,c.jsx)(a.TabPanel,{header:"Default values",leftIcon:"fa fa-list",children:(0,c.jsx)(_,{settings:s,userId:this.userId,onSave:this.saveSetting})}),K&&(0,c.jsx)(a.TabPanel,{header:"Meetings",leftIcon:"fa fa-calendar",children:(0,c.jsx)(X,{settings:s,userId:this.userId,onSave:this.saveSetting,onChange:this.stateChanged})}),(!v.xn||this.isExtnConnected)&&!v.KX&&(0,c.jsx)(a.TabPanel,{header:"Menu options",leftIcon:"fa fa-bars",children:(0,c.jsx)(q,{settings:s,userId:this.userId,onSave:this.saveSetting})})]})}):null}}const ee=Y}}]);