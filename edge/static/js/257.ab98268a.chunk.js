"use strict";(globalThis.webpackChunkjira_assistant=globalThis.webpackChunkjira_assistant||[]).push([[257],{4135:(e,t,s)=>{s.r(t),s.d(t,{default:()=>d});var n=s(7313),a=s(2725),i=s(794),o=s(6417);const r=[{label:"US Dollar (USD)",value:"usd"},{label:"Indian Rupees (INR)",value:"inr"},{label:"UK Pound (GBP)",value:"gbp"},{label:"Euro (EUR)",value:"eur"},{label:"Australian Dollar (AUD)",value:"aud"},{label:"Brazilian Real (BRL)",value:"brl"}];class l extends n.PureComponent{constructor(e){super(e),this.currencySelected=e=>this.setState({selectedCurrency:e}),this.state={selectedCurrency:r[0].value}}render(){const{state:{selectedCurrency:e}}=this;return(0,o.jsx)("div",{className:"layout-7",children:(0,o.jsxs)("div",{className:"widget-cntr",children:[(0,o.jsxs)("div",{className:"donate-block",children:[(0,o.jsxs)("div",{className:"donate-cntr",children:[(0,o.jsx)("span",{children:"Are you a paypal user?"}),(0,o.jsx)(i.Z,{href:"https://paypal.me/shridhartl",children:(0,o.jsx)("img",{className:"paypal",src:"/assets/donate_paypal.png",alt:"Donate now"})})]}),(0,o.jsx)("div",{className:"seperator",children:(0,o.jsx)("span",{children:"(or)"})}),(0,o.jsxs)("div",{className:"donate-cntr",children:[(0,o.jsx)("span",{children:"Choose your currency to pay:"}),(0,o.jsx)(a.jL,{dataset:r,value:e,valueField:"value",onChange:this.currencySelected}),(0,o.jsx)(i.Z,{className:"dbox-button",href:`https://donorbox.org/donate-jira-assistant-extension-${e}`,children:"Donate"})]})]}),(0,o.jsxs)("div",{className:"content-block",children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("h2",{children:"Why Jira Assistant is free?"}),(0,o.jsx)("p",{children:"The motive of building Jira Assist is to help people who are spending lots of time in Jira to get some simple things done or spend lots of money in buying a similar software and paying a lump sum for its subscription every year."})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("h4",{children:"Do you think Jira Assistant saved you some time and helped you to get things easier?"}),(0,o.jsx)("p",{children:"Then it is right time to donate us and get an even better working tool which can save even more of your precious time."})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("h4",{children:"How would my donation be helpful?"}),(0,o.jsx)("p",{children:"We need to spend lots of time and effort in building this tool, testing it and keep it updated with changes in Jira and browser's API. A one time donation of a small amount like $20 or $30 would encourage us in putting more effort in building an even better working tool for you."}),(0,o.jsx)("p",{children:"Though we would like to get compensated for the effort we put into development, we are not interested in making it a paid tool and force our users to pay for it, or integrate a 3rd party Ad's in the tool and get compensated by annoying our users."}),(0,o.jsx)("p",{children:"So to have your Jira Assistant always free, Ad free and keep it updated, make a one time contribution of your wish and help yourself and others in building a better working tool for ever."})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("h4",{children:"I am not interested to donate. I want to hide this button."}),(0,o.jsx)("p",{children:"If you don't want this button to be visible any more then we provide you with an option to hide it forever. Please navigate to Settings -> General and you will see an option to hide it from header."})]})]})]})})}}const d=l}}]);