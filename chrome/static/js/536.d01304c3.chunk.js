"use strict";(globalThis.webpackChunkjira_assistant=globalThis.webpackChunkjira_assistant||[]).push([[536],{536:(e,s,t)=>{t.r(s),t.d(s,{default:()=>k});var r=t(7313),i=t(1329),o=t(816),a=t.n(o),n=t(6310),l=t(6444),h=t(2725),c=t(4711),u=t(794),d=t(6417);class p extends r.PureComponent{constructor(e){super(e),this.timeZoneChanged=e=>{const{user:s}=this.props;s.timeZone=e,this.setState({timeZone:e})},this.costChanged=e=>{const{user:s}=this.props;s.costPerHour=e||0,this.setState({costPerHour:e})},this.onRemove=()=>{this.props.onRemove(this.props.index)},(0,n.f3)(this,"UserUtilsService");const{user:{timeZone:s,costPerHour:t=0}}=e;this.state={timeZone:s||"",costPerHour:t}}render(){const{timeZoneChanged:e,costChanged:s,onRemove:t,props:{user:r,userTimezones:i}}=this,o=!1!==r.active;return(0,d.jsxs)("tr",{title:!o&&"User is inactive",children:[(0,d.jsx)("td",{children:(0,d.jsxs)("div",{className:"group-user",children:[(0,d.jsx)("img",{src:r.avatarUrls["32x32"]||r.avatarUrls["48x48"],alt:"",height:32,width:32,className:"pull-left"}),(0,d.jsx)(u.Z,{href:this.$userutils.getProfileUrl(r),className:o?"link":"link strike-out",children:r.displayName})]})}),(0,d.jsx)("td",{children:r.emailAddress}),(0,d.jsx)("td",{children:(0,c.vW)(r)}),(0,d.jsx)("td",{children:(0,d.jsx)(h.jL,{dataset:i,value:r.timeZone,displayField:"label",valueField:"value",onChange:e,className:"width-perc-100",filter:!0})}),(0,d.jsx)("td",{children:(0,d.jsx)(h.zC,{value:r.costPerHour,onChange:s,keyfilter:"num"})}),(0,d.jsx)("td",{children:(0,d.jsx)(h.zx,{type:"danger",icon:"fa fa-times",onClick:t,style:{marginTop:0}})})]})}}const m=p;class g extends r.PureComponent{constructor(e){super(e),this.setEditMode=e=>this.setState({editMode:e,groupName:this.props.group.name}),this.beginEdit=()=>this.setEditMode(!0),this.endEdit=()=>this.setEditMode(!1),this.setGroupName=e=>this.setState({groupName:e}),this.updateGroupName=()=>{const{props:{group:e,hasGroupWithName:s}}=this;let{groupName:t}=this.state;t=t.trim(),s(t,e)?this.$message.warning(`The group with the name '${t}' already exists!`,"Group already exists"):(this.props.group.name=t,this.endEdit())},(0,n.f3)(this,"MessageService"),this.state={editMode:!1}}render(){const{endEdit:e,setGroupName:s,updateGroupName:t,state:{editMode:r,groupName:i},props:{group:o}}=this;let{beginEdit:a}=this;return o.isJiraGroup&&(a=void 0),r?(0,d.jsxs)("div",{className:"ui-inputgroup",children:[(0,d.jsx)(h.zC,{value:i,maxLength:40,onChange:s}),(0,d.jsx)(h.zx,{type:"success",icon:"fa fa-check",onClick:t}),(0,d.jsx)(h.zx,{type:"danger",icon:"fa fa-undo",onClick:e})]}):(0,d.jsxs)("div",{onClick:a,children:[(0,d.jsxs)("span",{style:{fontWeight:600,fontSize:17},children:[o.name," "]}),"(",o.users.length," users) ",!o.isJiraGroup&&(0,d.jsx)("i",{className:"fa fa-edit"})]})}}const x=g;class v extends r.PureComponent{constructor(e){super(e),this.usersSelected=e=>this.setState({selectedUsers:e,users:this.props.group.users}),this.clearSelection=()=>this.usersSelected([]),this.searchUsers=e=>this.$jira.searchUsers(e),this.removeUser=e=>{const{group:s}=this.props;let{users:t}=s;t.splice(e,1),t=[...t],s.users=t,this.setState({users:t})},this.usernameEntered=e=>{let{selectedUsers:s}=this.state;s&&e&&!s.some((s=>(0,c.vW)(s,!0)===e.toLowerCase()))&&this.$jira.getUserDetails(e).then((e=>{s=[...s],s.push(e),this.setState({selectedUsers:s})}),(()=>{}))},this.onRemove=()=>{this.props.onRemove(this.props.index)},this.setTimezone=e=>{this.props.group.timeZone=e,this.setState({timeZone:e})},(0,n.f3)(this,"JiraService");const{group:{users:s=[],timeZone:t}}=e;this.usersFromProps=s,this.state={selectedUsers:[],users:s,timeZone:t||""}}UNSAFE_componentWillReceiveProps(e){var s;const t=null===(s=e.group)||void 0===s?void 0:s.users;t&&this.usersFromProps!==t&&(this.setState({users:t}),this.usersFromProps=t)}addUsersToGroup(){const{props:{group:e},state:{selectedUsers:s}}=this,{users:t}=e,r=t.map((e=>(0,c.vW)(e,!0)));s.removeAll((e=>r.indexOf((0,c.vW)(e,!0))>-1)),s.forEach((e=>{const{accountId:s,avatarUrls:r,displayName:i,emailAddress:o,timeZone:a,locale:n,name:l}=e;t.push({accountId:s,avatarUrls:r,displayName:i,emailAddress:o,timeZone:a,locale:n,name:l})})),e.users=t.orderBy((e=>e.displayName)),this.clearSelection()}render(){const{onRemove:e,setTimezone:s,props:{group:t,groupTimezones:r,userTimezones:i,hasGroupWithName:o},state:{selectedUsers:a,users:n,timeZone:l}}=this;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)(x,{group:t,hasGroupWithName:o})}),!t.isJiraGroup&&(0,d.jsxs)("td",{colSpan:2,children:[(0,d.jsx)(h.Qc,{value:a,onChange:this.usersSelected,displayField:"displayName",multiple:!0,minLength:2,forceselection:!0,placeholder:"Add one or more users",onCustomValue:this.usernameEntered,dataset:this.searchUsers,style:{width:"80%"}}),(0,d.jsx)(h.zx,{type:"danger",icon:"fa fa-close",onClick:this.clearSelection}),(0,d.jsx)(h.zx,{type:"success",icon:"fa fa-user-plus",onClick:()=>this.addUsersToGroup(t)})]}),!!t.isJiraGroup&&(0,d.jsx)("td",{colSpan:2,children:"(Users pulled from Jira)"}),(0,d.jsx)("td",{children:(0,d.jsx)(h.jL,{dataset:r,displayField:"label",valueField:"value",value:l||"",onChange:s,className:"width-perc-100",filter:!0})}),(0,d.jsx)("td",{}),(0,d.jsx)("td",{children:(0,d.jsx)(h.zx,{type:"danger",icon:"fa fa-trash",label:t.isJiraGroup?"Remove Group":"Delete group",onClick:e})})]}),(!n||0===n.length)&&(0,d.jsx)("tr",{children:(0,d.jsx)("td",{colSpan:5,children:"No users were available under this group"})}),n&&n.map(((e,s)=>(0,d.jsx)(m,{user:e,index:s,userTimezones:i,onRemove:this.removeUser},(0,c.vW)(e))))]})}}const j=v;class f extends r.PureComponent{constructor(e){super(e),this.addNewGroup=()=>{this.props.addNewGroup(this.state.groupName,this.state.isJiraGroup&&this.state.groupId)&&this.endAdd()},this.setGroupName=e=>this.setState({groupName:e}),this.setAddMode=e=>this.setState({editMode:e,groupName:""}),this.beginAdd=()=>this.setAddMode(!0),this.endAdd=()=>this.setAddMode(!1),this.toggleJiraGroup=e=>this.setState({isJiraGroup:e,groupId:null,groupName:""}),this.searchGroups=e=>this.$jira.searchGroups(e),this.groupSelected=e=>{const{groupId:s,name:t}=e||{};s&&this.setState({groupId:s,groupName:t})},(0,n.f3)(this,"JiraService"),this.state={}}render(){const{endAdd:e,addNewGroup:s,setGroupName:t,toggleJiraGroup:r,props:{isPlugged:i,saveGroups:o,onDone:a,onReset:n},state:{editMode:l,groupName:c,isJiraGroup:u}}=this;return(0,d.jsx)("tfoot",{children:(0,d.jsx)("tr",{children:(0,d.jsx)("td",{colSpan:6,children:(0,d.jsxs)("div",{style:{height:30,paddingTop:4},children:[(0,d.jsxs)("div",{className:"pull-left",children:[(0,d.jsxs)("div",{className:"ui-inputgroup",hidden:l,children:[(0,d.jsx)(h.zx,{type:"success",icon:"fa fa-plus",label:"Add group",onClick:this.beginAdd}),i&&(0,d.jsx)("span",{className:"link margin-l-5 pad-b-5 inline-block",onClick:n,title:"Click to clear local changes and pull data from user groups",children:"Reset local changes"})]}),(0,d.jsxs)("div",{className:"ui-inputgroup",hidden:!l,children:[(0,d.jsx)(h.XZ,{checked:u,onChange:r,label:"Add Jira Group"}),u?(0,d.jsx)(h.Qc,{value:c,onChange:this.groupSelected,displayField:"name",multiple:!1,minLength:2,forceselection:!0,placeholder:"Select Jira Group",dataset:this.searchGroups,style:{width:"185px"}}):(0,d.jsx)(h.zC,{value:c,onChange:t,maxLength:40,placeholder:"Name of new group",onKey_Enter:s}),(0,d.jsx)(h.zx,{type:"success",icon:"fa fa-check",disabled:!c,onClick:s}),(0,d.jsx)(h.zx,{type:"danger",icon:"fa fa-close",onClick:e})]})]}),(0,d.jsxs)("div",{className:"pull-right",children:[i&&(0,d.jsxs)("span",{children:[(0,d.jsx)("strong",{children:"Note:"})," To permanently save the changes, go to Settings -> User groups from menu."]}),!i&&(0,d.jsx)(h.zx,{type:"success",icon:"fa fa-save",label:"Save Changes",onClick:o}),i&&(0,d.jsx)(h.zx,{icon:"fa fa-save",label:"Done",onClick:a})]})]})})})})}}const G=f;var S=t(5863),y=t(9970);class N extends r.PureComponent{constructor(e){super(e),this.loadGroups=async()=>{const e=await this.$usergroup.getUserGroups();this.setState({groups:e})},this.addNewGroup=async(e,s)=>{var t;if(!(e=null===(t=e)||void 0===t?void 0:t.trim()))return;const{groups:r}=this.state;if(this.hasGroupWithName(e))return this.$message.warning(`The group with the name '${e}' already exists!`,"Group already exists"),!1;{const t={name:e,timeZone:"",users:[],isJiraGroup:!!s,id:s};if(t.isJiraGroup)try{await this.$usergroup.fillJiraGroupMembers([t])}catch(a){if(console.error("Error fetching user list from group:",a),403===a.status)this.$message.error("You do not have required privilege to pull user list from group","Unauthorized Access");else{var i,o;const e=(null===(i=a.error)||void 0===i||null===(o=i.errorMessages)||void 0===o?void 0:o[0])||"Unable to pull user list from group. Look at console log for more details";this.$message.error(e,"Unknown error")}return}else delete t.isJiraGroup,delete t.id;return this.setState({groups:r.concat(t)}),!0}},this.hasGroupWithName=(e,s)=>(e=e.toLowerCase(),this.state.groups.some((t=>t.name.toLowerCase()===e&&t!==s))),this.deleteGroup=e=>{let{groups:s}=this.state;s.splice(e,1),s=[...s],this.setState({groups:s})},this.saveGroups=()=>{this.setState({saveInProg:!0}),this.$usergroup.saveUserGroups(this.state.groups).then((e=>{this.setState({saveInProg:!1}),this.$analytics.trackEvent("User groups saved",l.Jk.UserActions),this.$message.success("Changes saved successfully!","Group saved")}))},this.done=()=>{this.props.onDone&&(this.$analytics.trackEvent("User groups modified",l.Jk.UserActions),this.props.onDone(this.state.groups))},this.exportGroups=async()=>{try{const e=await this.$backup.exportBackup({[this.$session.userId]:{groups:!0}}),s=(0,y.$k)(e),t=`JA_Groups_${(new Date).format("yyyyMMdd")}.jab`;(0,c.FA)(s,"jab",t),this.$analytics.trackEvent("Groups exported",l.Jk.UserActions)}catch(e){this.$message.error(e.message)}},(0,n.f3)(this,"SessionService","MessageService","UserGroupService","JiraService","AnalyticsService","BackupService");const{groups:s}=e,t=a().tz.names().map((e=>({label:e,value:e})));this.groupTimezones=[{label:"My local time zone",value:""}].union([t]),this.userTimezones=[{label:"My local time zone",value:""},{label:"Use group's time zone",value:"GRP_TZ"}].union([t]),this.state={groups:s}}componentDidMount(){this.state.groups||this.loadGroups()}render(){const{userTimezones:e,props:{isPlugged:s},state:{groups:t}}=this;return(0,d.jsxs)(i.TT,{dataset:t,children:[!s&&(0,d.jsxs)("caption",{children:["User groups",(0,d.jsxs)("div",{className:"pull-right",children:[(0,d.jsx)(h.zx,{icon:"fa fa-download",title:"Click to export groups list",onClick:this.exportGroups}),(0,d.jsx)(S.Z,{onImport:this.loadGroups,children:e=>(0,d.jsx)(h.zx,{icon:"fa fa-upload",title:"Click to import groups list",onClick:e})})]})]}),(0,d.jsx)(i.Et,{children:(0,d.jsxs)("tr",{children:[(0,d.jsx)("th",{style:{minWidth:215},children:"Group / User Name"}),(0,d.jsx)("th",{children:"User Email"}),(0,d.jsx)("th",{children:"User Login"}),(0,d.jsx)("th",{children:"Timezone"}),(0,d.jsx)("th",{children:"Cost per hour"}),(0,d.jsx)("th",{style:{width:150},children:"Options"})]})}),(0,d.jsx)(i.XP,{children:(s,t)=>(0,d.jsx)(j,{group:s,index:t,hasGroupWithName:this.hasGroupWithName,groupTimezones:this.groupTimezones,userTimezones:e,onRemove:this.deleteGroup},s.name)}),(0,d.jsx)(i.ch,{span:5,children:"No groups available"}),(0,d.jsx)(G,{isPlugged:s,saveGroups:this.saveGroups,onDone:this.done,addNewGroup:this.addNewGroup,onReset:this.loadGroups})]})}}const k=N},5863:(e,s,t)=>{t.d(s,{Z:()=>h});var r=t(7313),i=t(9970),o=t(4616),a=t(6417);const n="Selected file is invalid or is corrupted. Unable to load the file!";class l extends r.PureComponent{constructor(e){super(e),this.setFileSelector=e=>this.fileSelector=e,this.chooseFileForImport=e=>this.fileSelector.click(),this.fileSelected=()=>{const e=this.fileSelector,s=e.files[0];if(s){if(!s.name.endsWith(".jab"))return this.$message.warning("Unknown file selected to import. Select a valid Jira Assist Backup (*.jab) file"),void(e.value="");const t=new FileReader;t.readAsText(s,"UTF-8"),t.onload=async e=>{const s=e.target.result;let t;try{const e=(0,i.Pe)(s);t=!0;const r=await this.$backup.importBackup(null===e||void 0===e?void 0:e.value,void 0,this.props.cleanImport);console.log("Import logs:",r),this.props.onImport&&this.props.onImport(),this.$message.success("Settings imported successfully. Check console logs for more details.")}catch(r){console.error("Backup import failed",r),t?this.$message.error(r.message):this.$message.error(n)}},t.onerror=e=>{this.$message.error(n)}}else this.$message.warning("Import operation cancelled");e.value=""},(0,o.f3)(this,"BackupService","MessageService"),this.state={}}render(){return(0,a.jsxs)(a.Fragment,{children:[this.props.children(this.chooseFileForImport),(0,a.jsx)("input",{ref:this.setFileSelector,type:"file",className:"hide",accept:".jab",onChange:this.fileSelected})]})}}const h=l}}]);