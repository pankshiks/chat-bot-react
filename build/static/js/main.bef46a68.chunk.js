(this["webpackJsonpchat-boat"]=this["webpackJsonpchat-boat"]||[]).push([[0],{25:function(e,t,r){},55:function(e,t,r){},56:function(e,t,r){},73:function(e,t,r){"use strict";r.r(t);var s=r(0),n=(r(55),r(56),r(19)),i=r.n(n),a=r(75),c=r(26),o=r(7),l=(r(76),r(77),r(1));r(33),r(80),r(79),r(25),r(15);var b=r(53),d=r(51),j=r(44),h=r.n(j),u=r(36),g=r(48),x=r(49),m=r(50),p=r(52),O=function(e){Object(m.a)(r,e);var t=Object(p.a)(r);function r(){return Object(g.a)(this,r),t.apply(this,arguments)}return Object(x.a)(r,[{key:"render",value:function(){return Object(l.jsx)("div",{children:"Good to see you!"})}}]),r}(s.Component),f=O,v=r(78),y=function(){return Object(l.jsx)("div",{children:Object(l.jsxs)(v.a,{striped:!0,bordered:!0,hover:!0,variant:"dark",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"#"}),Object(l.jsx)("th",{children:"Useful Link"})]})}),Object(l.jsxs)("tbody",{children:[Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:"1"}),Object(l.jsx)("td",{children:Object(l.jsx)("a",{style:{textDecoration:"none"},href:"http://www.rmc.gov.in/rmcwebsite/tax_bill_receipt_new.aspx",target:"_blank",children:"Property Tax Bills/Receipt"})})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:"2"}),Object(l.jsx)("td",{children:Object(l.jsx)("a",{style:{textDecoration:"none"},href:"http://www.rmc.gov.in/rmcwebsite/birth_death_certificate.aspx",target:"_blank",children:"Birth & Death"})})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:"3"}),Object(l.jsx)("td",{children:Object(l.jsx)("a",{style:{textDecoration:"none"},href:"http://www.rmc.gov.in/rmcwebsite/tax_new.aspx",target:"_blank",children:"Property Tax"})})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:"4"}),Object(l.jsx)("td",{children:Object(l.jsx)("a",{style:{textDecoration:"none"},href:"http://www.rmc.gov.in/rmcwebsite/frm_sports_member_master.aspx",target:"_blank",children:"Sports Registration"})})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:"5"}),Object(l.jsx)("td",{children:Object(l.jsx)("a",{style:{textDecoration:"none"},href:"http://www.rmc.gov.in/rmcwebsite/onlineservice.aspx",target:"_blank",children:"Online Services"})})]})]})]})})},w={background:"#f5f8fb",fontFamily:"Helvetica Neue",headerBgColor:"#0f4d4a",headerFontColor:"#fff",headerFontSize:"15px",botBubbleColor:"#0f4d4a",botFontColor:"#fff",userBubbleColor:"#fff",userFontColor:"#4a4a4a"},k={width:"300px",height:"400px",hideUserAvatar:!0,placeholder:"Type your response.",headerTitle:"ChatBot"},_=function(e){var t=Object(s.useState)(!1),r=Object(d.a)(t,2),n=r[0],i=r[1];return Object(l.jsxs)(u.ThemeProvider,{theme:w,children:[Object(l.jsx)("div",{style:{display:n?"none":""},children:Object(l.jsx)(h.a,Object(b.a)({speechSynthesis:{enable:!0,lang:"en-US"},recognitionEnable:!0,steps:[{id:"welcome",message:"Hellos!",trigger:"q-firstname"},{id:"q-firstname",message:"What is your  name?",trigger:"firstname"},{id:"firstname",user:!0,validator:function(e){return!!/^[A-Za-z]+$/.test(e)||"Please input alphabet characters only."},trigger:"rmcbot"},{id:"rmcbot",message:"Hi,{previousValue} I am LN Bot! What can I do for you?",trigger:"qtype"},{id:"qtype",options:[{value:1,label:"Potato News",trigger:"4"},{value:2,label:"Products",trigger:"3"},{value:3,label:"Events",trigger:"5"},{value:4,label:"Directory of all *Companies*",trigger:"6"}]},{id:"3",message:"Profession tax is the tax levied and collected by the state governments in India.",trigger:"qtype"},{id:"4",message:"Here is a link to the latest articles related to potatos! globally Potato. https://test-potatopro.com/news",trigger:"q-submit"},{id:"5",component:Object(l.jsx)(y,{}),trigger:"q-submit"},{id:"6",component:Object(l.jsx)(y,{}),trigger:"q-submit"},{id:"q-submit",message:"Do you have any other questions !?",trigger:"submit"},{id:"submit",options:[{value:"y",label:"Yes",trigger:"no-submit"},{value:"n",label:"No",trigger:"end-message"}]},{id:"no-submit",options:[{value:1,label:"Potato News",trigger:"4"},{value:2,label:"Products",trigger:"3"},{value:3,label:"Events",trigger:"5"},{value:4,label:"Directory of all *Companies*",trigger:"6"}]},{id:"end-message",component:Object(l.jsx)(f,{}),asMessage:!0,end:!0}]},k))}),Object(l.jsx)("div",{children:n?Object(l.jsx)("button",{className:"btn",onClick:function(){i(!1)},children:Object(l.jsx)("i",{className:"fa fa-plus"})}):Object(l.jsx)("button",{className:"btn",onClick:function(){i(!0)},children:Object(l.jsx)("i",{className:"fa fa-minus"})})})]})},C=function(){return Object(l.jsx)(c.BrowserRouter,{children:Object(l.jsx)("main",{className:"py-3",children:Object(l.jsx)(a.a,{children:Object(l.jsx)("div",{className:"bot",children:Object(l.jsx)(o.d,{path:"/",component:_,exact:!0})})})})})};i.a.render(Object(l.jsx)(C,{}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.bef46a68.chunk.js.map