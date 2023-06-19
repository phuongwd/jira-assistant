"use strict";(globalThis.webpackChunkjira_assistant=globalThis.webpackChunkjira_assistant||[]).push([[934],{9110:(e,t,s)=>{s.d(t,{Z:()=>o});s(7313);var r=s(1783),i=s(2725),a=s(6417);class n extends r.Z{constructor(e){super(e,"Save Report As"),this.nameChanged=e=>this.setState({newQueryName:e}),this.copyChanged=e=>this.setState({copyQuery:e}),this.done=()=>{const{newQueryName:e,copyQuery:t}=this.state;this.props.onChange(e,t)},this.style={width:"350px"},this.state={showDialog:!0,newQueryName:e.queryName||"",copyQuery:!1}}getFooter(){const{state:{newQueryName:e}}=this;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.zx,{type:"secondary",label:"Cancel",onClick:this.onHide}),(0,a.jsx)(i.zx,{type:"primary",icon:"fa fa-floppy-o",label:"Save",disabled:!e||e.length<3,onClick:this.done})]})}render(){const{props:{allowCopy:e},state:{newQueryName:t,copyQuery:s}}=this;return super.renderBase((0,a.jsxs)("div",{className:"pad-15",children:[(0,a.jsx)("label",{children:"Report Name"}),(0,a.jsx)("div",{children:(0,a.jsx)(i.zC,{value:t,onChange:this.nameChanged,style:{width:"100%"}})}),e&&(0,a.jsx)("div",{children:(0,a.jsx)(i.XZ,{checked:s,onChange:this.copyChanged,label:"Save as new report"})})]}))}}const o=n},4567:(e,t,s)=>{s.r(t),s.d(t,{default:()=>D});var r=s(7313),i=s(6310),a=s(1485),n=s(4918),o=s(8192),l=s(2725),u=s(9110),d=s(1783),h=s(4616),p=s(714),c=s(2371),m=s(1329);const y=[{name:"formatDate",returns:"string",text:"Format Date",description:"",types:["date","datetime"]},{name:"formatDateTime",returns:"string",text:"Format Date & time",description:"",types:["datetime","date"]},{name:"formatTime",returns:"string",text:"Format Time",description:"",types:["datetime"]},{name:"formatDateTime?1",returns:"string",text:"Custom Format",description:"",types:["datetime","date"]},{name:"",text:"No formatting",description:"",types:["string","number","datetime","date","seconds"]},{name:"sum?0",returns:"number",text:"Sum values",description:"",types:["number"],forArray:!0},{name:"min?0",returns:"number",text:"Min of values",description:"",types:["number"],forArray:!0},{name:"max?0",returns:"number",text:"Max of values",description:"",types:["number"],forArray:!0},{name:"avg?0",returns:"number",text:"Average of values",description:"",types:["number"],forArray:!0},{name:"count?0",returns:"number",text:"Count of values",description:"",types:["*"],forArray:!0},{name:"count?1",returns:"number",text:"Count of distinct values",description:"",types:["number","datetime","date"],forArray:!0},{name:"sum?1",returns:"number",text:"Sum of group",description:"",types:["number"],aggregate:!0,header:"Sum of {0}"},{name:"min?1",returns:"number",text:"Min of group",description:"",types:["number"],aggregate:!0,header:"Min of {0}"},{name:"max?1",returns:"number",text:"Max of group",description:"",types:["number"],aggregate:!0,header:"Max of {0}"},{name:"avg?1",returns:"number",text:"Average of group",description:"",types:["number"],aggregate:!0,header:"Average of {0}"},{name:"count?2",returns:"number",text:"Count of group",description:"",types:["*","!worklog"],aggregate:!0,header:"Count of {0}"},{name:"count?3",returns:"number",text:"Count of distinct values",description:"",types:["number","datetime","date"],aggregate:!0,header:"Count of distinct {0}"},{name:"first",returns:"number",text:"First",description:"",types:["*"],forArray:!0},{name:"last",returns:"number",text:"Last",description:"",types:["*"],forArray:!0},{name:"propOfNthItem?0",returns:"string",text:"Name of First Item",description:"",types:["object"],forArray:!0,params:[{value:0},{value:"name"}]},{name:"propOfNthItem?1",returns:"string",text:"Name of Last Item",description:"",types:["object"],forArray:!0,params:[{value:"last"},{value:"name"}]},{name:"propOfNthItem?2",returns:"string",text:"Name of First Item (from csv)",description:"",types:["string"],forArray:!0,params:[{value:0},{value:"name"},{value:!0}]},{name:"propOfNthItem?3",returns:"string",text:"Name of Last Item (from csv)",description:"",types:["string"],forArray:!0,params:[{value:"last"},{value:"name"},{value:!0}]},{name:"format?1",returns:"number",text:"Two Decimals",description:"",types:["number"]},{name:"format?2",returns:"number",text:"No Decimals",description:"",types:["number"]},{name:"format?3",returns:"number",text:"Currency",description:"",types:["number"]},{name:"formatSecs?1",returns:"string",text:"Sum & Format Seconds (hours)",description:"Format seconds and show in hours, mins and secs",aggregate:!0,types:["seconds","number"]},{name:"formatSecs?0",returns:"string",text:"Format Seconds (hours)",description:"Format seconds and show in hours, mins and secs",types:["seconds","number"]},{name:"formatDays?0",returns:"string",text:"Format Seconds (days)",description:"Format seconds and show in days, hours, mins and secs",types:["seconds","number"]},{name:"convertSecs?0",returns:"number",text:"Convert Seconds (hours)",description:"Convert seconds into hours",types:["seconds","number"]},{name:"convertSecs?0",returns:"number",text:"Time spent (hours)",description:"Display worklog in hours",types:["worklog"]},{name:"formatSecs?0",returns:"number",text:"Format Time spent (hours)",description:"Display worklog in hours",types:["worklog"]},{name:"formatUser?1",returns:"string",text:"User Display Name",description:"",types:["user"],params:[{value:"DN"}]},{name:"formatUser?2",returns:"string",text:"User Email",description:"",types:["user"],params:[{value:"EM"}]},{name:"formatUser?3",returns:"string",text:"User Login",description:"",types:["user"],params:[{value:"LG"}]},{name:"formatUser?4",returns:"string",text:"User Display Name & Email",description:"",types:["user"],params:[{value:"NE"}]},{name:"formatUser?5",returns:"string",text:"User Display Name & Login",description:"",types:["user"],params:[{value:"NL"}]},{name:"getProperty?0",returns:"string",text:"Get name value",description:"",types:["object"],params:[{type:"string",display:"Property Name:",value:"name"}]},{name:"getProperty?1",returns:"string",text:"Get property value (string)",description:"",types:["object"],params:[{type:"string",display:"Property Name:",default:"name",prompt:!0}]},{name:"getProperty?2",returns:"number",text:"Get property value (number)",description:"",types:["object"]},{name:"getProperty?3",returns:"datetime",text:"Get property value (datetime)",description:"",types:["object"]},{name:"convertToNumber",returns:"number",text:"Try convert to number",description:"",types:["string"]},{name:"objFromCSV?1",returns:"object",text:"Object from CSV",description:"",types:["string"]},{name:"objFromCSV?2",returns:"object",text:"Name from CSV",description:"",types:["string"]}],g={date:"formatDate",datetime:"formatDateTime",number:"",user:"formatUser?1",string:"",object:"getProperty?0",seconds:"formatSecs?0",worklog:"convertSecs?0"};var f=s(6417);const v="~~";class x extends r.PureComponent{constructor(e){super(e),this.selectionChanged=e=>{this.setState(this.setFunction(e))};const{row:t}=e,s=y.filter((e=>(e.types.indexOf(t.type)>-1||e.types.indexOf("*")>-1||t.knownObj&&e.types.indexOf("object")>-1)&&!t.isArray===!e.forArray&&-1===e.types.indexOf(`!${t.type}`))).map((e=>({value:e.name||v,label:e.text})));if(this.state={applFuncs:s},!t.functions){const e=g[t.type];e||""===e?this.setFunction(e):this.setFunction((s.first()||{}).value)}}setFunction(e){if(!e&&""!==e)return;""!==e||this.state.applFuncs.some((t=>t.value===e))||(e=this.state.applFuncs.first().value),e===v&&(e="");let t=y.first((t=>t.name===e));if(!t&&e&&(t=y.first((t=>t.name.startsWith(`${e}?`)))),!t)return void console.error("Unknown function expression:",e);const s=e,r=t.name.split("?")[0],i=t.params?t.params.map((e=>void 0!==e.value?e.value:e.default)):null;return this.props.onChange({id:t.name,name:r,params:i,useArray:t.aggregate,header:t.header}),{selFunction:s}}render(){const{applFuncs:e}=this.state,{row:{functions:{id:t}={}}}=this.props;return(0,f.jsx)(l.jL,{dataset:e,value:t||v,valueField:"value",style:{width:"100%"},onChange:this.selectionChanged})}}const b=x;var j=s(6552);class S extends n.ZP{constructor(e){super(e,"Query Editor","fa-filter"),this.initModel=e=>{this.setState(this.getClearState(!!e,this.props))},this.saveQuery=(e,t)=>{let{reportQuery:s}=this.state;s={...s};const r=s.queryName;let i=!1;s.queryName=e,t?(delete s.id,i=!0):r!==e&&(i=!0),this.$report.saveQuery(s).then((e=>{s.id=e,this.setState({showSaveDialog:!1,selReportId:s.id,reportQuery:s}),i&&this.fillQueriesList(),this.$message.success("Report saved successfully!"),this.$analytics.trackEvent("Custom Report Saved")}),(e=>{e&&e.message&&this.$message.error(e.message)}))},this.displayFieldAdded=e=>{if(!e||e.items)return;let{reportQuery:t}=this.state;t={...t};const s=this.jiraFields.first((t=>t.id===e));t.outputFields=t.outputFields.concat(this.getField(s,!1)),this.queryChanged(t)},this.processJson=e=>{this.jiraFields=e;let t=[],s=[];e.forEach((e=>{e.label=e.name+(e.name.toLowerCase()!==e.id.toLowerCase()?` (${e.id})`:""),e.value=e.id,e.custom?s.push(e):t.push(e)})),t=t.orderBy((e=>e.name)),s=s.orderBy((e=>e.name)),this.setState({filterFields:[{label:"Basic Fields",items:t.filter((e=>e.clauseNames&&e.clauseNames.length>0))},{label:"Custom Fields",items:s.filter((e=>e.clauseNames&&e.clauseNames.length>0))}]}),this.setState({displayFields:[{label:"Basic Fields",items:t},{label:"Custom Fields",items:s}]})},this.querySelected=e=>{this.$report.getReportDefinition(e).then((t=>this.setState({selReportId:e,reportQuery:t})))},this.deleteQuery=()=>{j.Z.confirmDelete(`Are you sure to delete the report named "${this.state.reportQuery.queryName}" permanently?`).then((()=>{this.$report.deleteSavedQuery(this.state.selReportId).then((e=>{this.$message.success("Report deleted successfully!"),this.setState({selReportId:null}),this.initModel(),this.fillQueriesList()}))}))},this.queryChanged=e=>{this.setState({reportQuery:e}),this.props.onChange(e)},this.jqlChanged=e=>{let{reportQuery:t}=this.state;t={...t},t.jql=e,this.queryChanged(t)},this.setFunction=(e,t)=>{let{reportQuery:s}=this.state;s={...s};const r=[...s.outputFields];s.outputFields=r;const i={...r[e]};r[e]=i,i.functions=t,this.queryChanged(s)},this.viewReport=()=>this.props.onViewReport(this.state.reportQuery),this.showSaveDialog=()=>this.setState({showSaveDialog:!0}),this.saveAs=()=>this.saveQuery(this.state.reportQuery.queryName),this.hideSaveDialog=()=>this.setState({showSaveDialog:!1}),this.className="query-editor-gadget",this.isGadget=!1,this.hideMenu=!0,this.hideRefresh=!0,(0,h.f3)(this,"ReportService","JiraService","MessageService","AnalyticsService"),this.state=this.getClearState(!1,e),this.state.displayFields=[]}getClearState(e,t){let{reportQuery:s}=this.state;return!s||e?s=t&&t.reportQuery?{...t.reportQuery}:{fields:{},filterFields:[],outputFields:[]}:(s.fields=s.fields||{},s.filterFields=s.filterFields||[],s.outputFields=s.outputFields||[]),t.reportId>0&&this.querySelected(parseInt(t.reportId)),{reportQuery:s,selReportId:null}}componentDidMount(){super.componentDidMount(),this.$jira.getCustomFields().then(this.processJson),this.props.builderOnly||this.fillQueriesList()}fillQueriesList(){this.$report.getReportsList().then((e=>{const t=e.filter((e=>!e.advanced&&!e.isNew)).map((e=>({value:e.id,label:e.queryName})));this.setState({reportsList:t})}))}generateJql(){const e=[],t=this.state.reportQuery.filterFields;for(let s=0;s<t.length;s++){const r=t[s];let i=r.value,a=r.custom?r.name:r.clauseName,n=r.value2;if(n&&(n=`"${n.trim()}"`),a.indexOf(" ")>-1&&(a=`"${a}"`),Array.isArray(r.valueArr)&&r.valueArr.length>0)i=r.valueArr.filter((e=>!!e)).map((e=>`"${e.trim()}"`)).join(",");else if(r.quickDate){const e=(0,p.Y_)(r.quickDate);i=e[0].format("yyyy-MM-dd"),n=e[1].format("yyyy-MM-dd")}else"string"===typeof i&&(i=`"${i.trim()}"`);i&&e.push(r.operator.format([a,i,n]))}return e.join(" AND ")}isSaveEnabled(){const{reportQuery:e}=this.state;return e.jql&&e.jql.trim().length>10&&e.outputFields&&e.outputFields.length>=1}groupField(e,t){const s=!e.groupBy;let{reportQuery:r}=this.state;r={...r};const i=[...r.outputFields];if(r.outputFields=i,s)for(let a=0;a<t;a++)i[a].groupBy=s;else for(let a=t+1;a<i.length;a++)i[a].groupBy=s;this.queryChanged(r)}getField(e,t){const s={id:e.id,name:e.name,custom:e.custom};t&&(s.clauseName=e.clauseNames[0]);const r=e.schema||{},i=r.type||"(Unsupported)",a=r.system,n=r.items;if("issuekey"===e.id)return s.type="string",s;switch(i){case"user":s.knownObj=!0;case"string":case"date":case"datetime":case"(Unsupported)":s.type=i;break;case"number":switch(a){case"timeoriginalestimate":case"aggregatetimespent":case"aggregatetimeoriginalestimate":case"workratio":case"timespent":case"timeestimate":case"aggregatetimeestimate":s.type="seconds";break;default:s.type=i}break;case"issuetype":case"priority":case"project":case"progress":case"comments-page":case"resolution":case"securitylevel":case"status":case"timetracking":case"votes":case"watches":s.knownObj=!0,s.type=a;break;case"array":if(s.isArray=!0,e.custom)switch(n){case"user":s.knownObj=!0;case"string":case"date":case"datetime":case"numeric":case"option":s.type=n;break;default:s.type=JSON.stringify(e)}else switch(a){case"versions":case"fixVersions":case"attachment":case"components":case"issuelinks":case"subtasks":s.knownObj=!0,s.type=n||a;break;case"worklog":s.type=n||a,s.isArray=!1;break;case"labels":s.type=n||a;break;default:s.type=JSON.stringify(e)}break;default:s.type=JSON.stringify(e)}return s}filterAdded(e){if(!e||e.items)return;const t=this.jiraFields.first((t=>t.id===e));let{reportQuery:s}=this.state;s={...s},s.filterFields=s.filterFields.concat(this.getField(t,!0)),this.queryChanged(s),this.selectedFilterField=""}removeOutputField(e){let{reportQuery:t}=this.state;t={...t},t.outputFields.splice(e,1),this.queryChanged(t)}columnReordered(e){const t=e.value,s=e.dropIndex,r=this.state.reportQuery.outputFields[s+1]||this.state.reportQuery.outputFields[s-1];r&&(t.groupBy=r.groupBy)}updateJql(){this.state.reportQuery.filterFields&&this.state.reportQuery.filterFields.length>0&&(this.state.reportQuery.jql=this.generateJql())}tabChanged(e){1===e.index&&this.updateJql()}renderCustomActions(){const{state:{reportsList:e,selReportId:t}}=this;return e&&0!==e.length?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(l.jL,{dataset:e,value:t,valueField:"value",onChange:this.querySelected,placeholder:"Select a report to edit"}),(0,f.jsx)(l.zx,{icon:"fa fa-plus",onClick:this.initModel,label:"New query"})]}):null}renderFooter(){const{reportQuery:e}=this.state,t=this.isSaveEnabled(),s=e.id>0;return(0,f.jsxs)("div",{className:"pnl-footer",children:[e.id&&(0,f.jsxs)("div",{className:"pull-left",children:[(0,f.jsx)(l.zx,{icon:"fa fa-trash",label:"Delete Query",type:"danger",onClick:this.deleteQuery}),(0,f.jsx)(l.zx,{icon:"fa fa-floppy-o",label:"Save Query As",type:"success",onClick:this.showSaveDialog,disabled:!t})]}),(0,f.jsxs)("div",{className:"pull-right",children:[(0,f.jsx)(l.zx,{icon:"fa fa-floppy-o",label:"Save Query",type:"success",onClick:s?this.saveAs:this.showSaveDialog,disabled:!t||e.isSystemQuery}),(0,f.jsx)(l.zx,{icon:"fa fa-list",label:"View Report",type:"info",onClick:this.viewReport,disabled:!t})]})]})}render(){const{props:{builderOnly:e},state:{reportQuery:t,displayFields:s,showSaveDialog:r}}=this,i=t.id>0,a=(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(c.TabView,{children:[(0,f.jsx)(c.TabPanel,{header:"Advanced Filter (JQL)",children:(0,f.jsx)(l.zC,{multiline:!0,value:t.jql,onChange:this.jqlChanged,style:{minWidth:"100%",minHeight:100,height:"100%"}})}),(0,f.jsx)(c.TabPanel,{header:"Display Settings",leftIcon:"fa fa-columns",children:(0,f.jsxs)(m.TT,{className:"query-editor",children:[(0,f.jsx)(m.Et,{children:(0,f.jsxs)("tr",{children:[(0,f.jsx)("th",{children:"#"}),(0,f.jsx)("th",{children:"Display Column"}),(0,f.jsx)("th",{className:"col-type",children:"Type"}),!e&&(0,f.jsx)("th",{className:"col-group-by",children:"Group By"}),!e&&(0,f.jsx)("th",{className:"col-format-func",children:"Format function"}),(0,f.jsx)("th",{children:"Remove"})]})}),(0,f.jsx)("tbody",{model:t.outputFields,onDrop:this.columnReordered,children:t.outputFields.map(((t,s)=>(0,f.jsxs)("tr",{style:{cursor:"move"},model:t,children:[(0,f.jsx)("td",{className:"data-center",children:s+1}),(0,f.jsx)("td",{children:t.name}),(0,f.jsxs)("td",{children:[t.type," ",t.isArray?"(multiple)":""]}),!e&&(0,f.jsx)("td",{className:"data-center",children:(0,f.jsx)(l.XZ,{checked:t.groupBy,onChange:e=>{t.groupBy=e,this.groupField(t,s)}})}),!e&&(0,f.jsx)("td",{children:(0,f.jsx)(b,{row:t,onChange:e=>this.setFunction(s,e)})}),(0,f.jsx)("td",{className:"data-center",children:(0,f.jsx)("i",{className:"fa fa-times pointer",onClick:()=>this.removeOutputField(s)})})]},t._uniqueId)))}),(0,f.jsx)("tbody",{children:(0,f.jsxs)("tr",{children:[(0,f.jsx)("td",{className:"data-center",children:t.outputFields.length+1}),(0,f.jsx)("td",{children:(0,f.jsxs)(l.jL,{dataset:s,value:"",style:{width:"100%"},placeholder:"Choose a column to add to the list",group:!0,displayField:"name",valueField:"id",dataKey:"id",filterPlaceholder:"Type the field name to filter",onChange:this.displayFieldAdded,children:[(e,t)=>(0,f.jsx)("span",{children:e.name}),(e,t)=>(0,f.jsx)("strong",{children:e.label})]})}),(0,f.jsx)("td",{colSpan:5,children:"Note: Select the column from the list to add it as output"})]})})]})})]}),r&&(0,f.jsx)(u.Z,{queryName:t.queryName,allowCopy:i,onHide:this.hideSaveDialog,onChange:this.saveQuery})]});return e?a:super.renderBase(a)}}const C=S;class F extends d.Z{constructor(e){super(e,"Select dataset fields"),this.onDone=()=>{const e=this.state.filterQuery;this.$jira.searchTickets(this.$reportConfig.prepareJQL(e.jql),e.outputFields.map((e=>e.id))).then((t=>this.props.onResolve(e,t)))},this.queryChanged=e=>this.setState({filterQuery:e}),this.getRef=e=>this.editorInstance=e,(0,h.f3)(this,"JiraService","ReportConfigService"),this.style={width:"900px"};const{filterQuery:t}=e;this.state={showDialog:!0,filterQuery:t}}getFooter(){let e=!1;return this.editorInstance&&(e=this.editorInstance.isSaveEnabled()),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(l.zx,{type:"default",icon:"fa fa-times",onClick:this.onHide,label:"Cancel"}),(0,f.jsx)(l.zx,{type:"primary",icon:"fa fa-check",onClick:this.onDone,label:"Add",disabled:!e})]})}render(){const{state:{filterQuery:e}}=this;return super.renderBase((0,f.jsx)(C,{ref:this.getRef,builderOnly:!0,reportQuery:e,onChange:this.queryChanged}))}}const w=F;class Q extends n.ZP{constructor(e){super(e,"Report Builder"),this.setReportDefinition=(e,t)=>{this.setState({reportDefinition:e,selQueryId:e.id})},this.getApi=e=>this.builderAPI=e,this.saveDataset_JQL=(e,t)=>{if(!e)return this.setState({selectedDatasetType:null}),this.resolveJQLEvent.schema.reject(!1),void this.resolveJQLEvent.data.reject(!1);const s=this.$reportConfig.processSearchData(t);this.resolveJQLEvent.schema.resolve(e),this.resolveJQLEvent.data.resolve(s),this.resolveJQLEvent=null,this.setState({selectedDatasetType:null})},this.initModel=()=>{this.filterQuery={},this.setReportDefinition(this.getEmptyDefinition())},this.queryChanged=e=>this.$report.getReportDefinition(e).then(this.setReportDefinition),this.deleteQuery=()=>{j.Z.confirmDelete(`Are you sure to delete the report named "${this.state.reportDefinition.queryName}" permanently?`).then((()=>{this.$report.deleteSavedQuery(this.state.selQueryId).then((e=>{this.$message.success("Report deleted successfully!"),this.setState({selQueryId:null}),this.initModel(),this.fillQueriesList()}))}))},this.saveQuery=(e,t)=>{const s={...this.state.reportDefinition,...this.builderAPI.getReportDefinition(),advanced:!0},r=s.queryName;let i=!1;s.queryName=e,t?(delete s.id,i=!0):r!==e&&(i=!0),this.$report.saveQuery(s).then((e=>{s.id=e,this.setState({showSaveDialog:!1,selQueryId:s.id}),this.setReportDefinition(s),i&&this.fillQueriesList(),this.$message.success("Query saved successfully!")}),(e=>{e&&e.message&&this.$message.error(e.message)}))},this.viewReport=()=>{this.setReportDefinition(this.builderAPI.getReportDefinition()),this.setState({reportMode:!0})},this.viewBuilder=()=>this.setState({reportMode:!1}),this.showSaveDialog=()=>this.setState({showSaveDialog:!0}),this.saveAs=()=>this.saveQuery(this.state.reportDefinition.queryName),this.hideSaveDialog=()=>this.setState({showSaveDialog:!1}),this.hideDatasetPopup=()=>this.setState({selectedDatasetType:null}),(0,i.f3)(this,"JiraService","MessageService","ReportService","ReportConfigService"),this.isGadget=!1,this.hideRefresh=!0,this.hideMenu=!0,this.$reportConfig.configureBuilder(),this.$reportConfig.parameters.removeAllListeners(),this.$reportConfig.eventPipe.on("resolveSchema_JQL",this.resolveSchema_JQL.bind(this)),this.state={reportDefinition:this.getEmptyDefinition()}}componentDidMount(){super.componentDidMount();const{match:{params:e}}=this.props,t=parseInt(e.reportId||0)||null;t&&this.queryChanged(t),this.fillQueriesList()}resolveSchema_JQL(e){this.resolveJQLEvent=e,this.filterQuery=e.props,this.setState({selectedDatasetType:"JQL"})}fillQueriesList(){return this.$report.getReportsList().then((e=>{const t=e.filter((e=>e.advanced)).map((e=>({value:e.id,label:e.queryName})));this.setState({queryList:t})}))}getEmptyDefinition(){return{datasets:{},reportItems:[]}}renderCustomActions(){const{queryList:e,selQueryId:t}=this.state;return e&&e.length?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(l.jL,{dataset:e,value:t,valueField:"value",placeholder:"Select a query to edit",onChange:this.queryChanged}),(0,f.jsx)(l.zx,{icon:"fa fa-plus",onClick:this.initModel,label:"New query"})]}):null}renderFooter(){const{state:{reportDefinition:e}}=this,t=e.id>0;return(0,f.jsxs)("div",{className:"pnl-footer",children:[t&&(0,f.jsxs)("div",{className:"pull-left",children:[(0,f.jsx)(l.zx,{icon:"fa fa-trash",label:"Delete Query",type:"danger",onClick:this.deleteQuery}),(0,f.jsx)(l.zx,{icon:"fa fa-floppy-o",label:"Save Query As",type:"success",onClick:this.showSaveDialog})]}),(0,f.jsxs)("div",{className:"pull-right",children:[(0,f.jsx)(l.zx,{type:"success",icon:"fa fa-floppy-o",label:"Save Query",onClick:t?this.saveAs:this.showSaveDialog}),(0,f.jsx)(l.zx,{type:"info",icon:"fa fa-list",label:"View Report",onClick:this.viewReport,disabled:!((e||{}).reportItems||[]).length})]})]})}render(){const{state:{reportDefinition:e,reportMode:t,showSaveDialog:s,selectedDatasetType:r}}=this,i=e.id>0;return t?(0,f.jsx)(o.Z,{isGadget:!1,definition:e,onCancelView:this.viewBuilder}):super.renderBase((0,f.jsxs)(f.Fragment,{children:[e&&(0,f.jsx)(a.Os,{api:this.getApi,definition:e}),s&&(0,f.jsx)(u.Z,{queryName:e.queryName,allowCopy:i,onHide:this.hideSaveDialog,onChange:this.saveQuery}),"JQL"===r&&(0,f.jsx)(w,{filterQuery:this.filterQuery,onHide:this.hideDatasetPopup,onResolve:this.saveDataset_JQL})]}))}}const D=Q},8192:(e,t,s)=>{s.d(t,{Z:()=>p});s(7313);var r=s(4918),i=s(6310),a=s(2725),n=s(1485),o=s(4902),l=s(3972),u=s(6444),d=s(6417);class h extends r.ZP{constructor(e){super(e,"Advanced report viewer","fa-clock-o"),this.usersSelected=e=>{this.parameterEvent.onChange(this.parameterEvent.definition,e),this.parameterEvent=null,this.setState({showGroupsPopup:!1,groups:e})},this.refreshData=()=>{this.props.reportId>0?this.$report.getReportDefinition(this.props.reportId).then((e=>{this.setReportDefinition(e),this.$analytics.trackEvent("Advanced report viewed",u.Jk.UserActions)})):this.state.definition&&(this.title=this.state.definition.queryName,this.$analytics.trackEvent("Advanced report viewed",u.Jk.UserActions))},this.getApi=e=>this.viewer=e,this.worklogAdded=e=>{this.hideWorklog()},this.hideWorklog=()=>{this.setState({showWorklogPopup:!1})},(0,i.f3)(this,"ReportConfigService","AnalyticsService","ReportService"),this.viewer={},this.$reportConfig.configureViewer(),this.$reportConfig.parameters.removeAllListeners(),this.$reportConfig.parameters.on("click",this.parameterClicked.bind(this)),this.$reportConfig.eventPipe.on("addWorklog",this.addWorklog.bind(this));const{definition:t}=e;this.state.definition=t}componentDidMount(){super.componentDidMount(),this.refreshData()}UNSAFE_componentWillReceiveProps(e){e.definition?this.setReportDefinition(e.definition):e.reportId?this.refreshData():this.setReportDefinition({})}addWorklog(e){this.isGadget?super.addWorklog(e):(this.worklogItem=e,this.setState({showWorklogPopup:!0}))}parameterClicked(e){this.parameterEvent=e,this.setState({showGroupsPopup:!0})}setReportDefinition(e){e&&e.queryName&&(this.title=e.queryName),this.setState({definition:e})}renderCustomActions(){return(0,d.jsxs)(d.Fragment,{children:[!this.isGadget&&(0,d.jsx)(a.zx,{icon:this.isFullScreen?"fa fa-compress":"fa fa-expand",onClick:this.toggleFullScreen,title:"Toggle full screen"}),this.viewer.canShowParams&&(0,d.jsx)(a.zx,{icon:"fa fa-plus-circle",onClick:this.viewer.showParameters,title:"Change report params"}),!this.isGadget&&(0,d.jsx)(a.zx,{icon:"fa fa-edit",onClick:this.props.onCancelView,title:"Edit report"})]})}render(){const{state:{definition:e,showGroupsPopup:t,groups:s,showWorklogPopup:r}}=this;return super.renderBase((0,d.jsxs)(d.Fragment,{children:[e&&(0,d.jsx)(n.Sv,{api:this.getApi,definition:e}),t&&(0,d.jsx)(o.Z,{groups:s,onHide:this.usersSelected}),r&&(0,d.jsx)(l.Z,{worklog:this.worklogItem,onDone:this.worklogAdded,onHide:this.hideWorklog})]}))}}const p=h}}]);