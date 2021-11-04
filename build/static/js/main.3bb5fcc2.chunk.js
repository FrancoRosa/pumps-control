(this["webpackJsonppumps-control"]=this["webpackJsonppumps-control"]||[]).push([[0],{131:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c(67),i=c.n(s),r=c(17),a=(c(74),c(75),c(2)),u=c(6),o=c(24),l=c(10),d=c(18),j=c(0),m=function(e){var t=e.name,c=e.icon,n=Object(u.g)().pathname.includes(t.toLowerCase());return Object(j.jsx)("li",{className:n?"is-active":"",children:Object(j.jsxs)(r.b,{to:"/".concat(t.toLowerCase()),children:[Object(j.jsx)("span",{className:"icon is-small",children:Object(j.jsx)(d.a,{icon:c})}),Object(j.jsx)("span",{children:t})]})})},b=c(5),p=c.n(b),f=c(14),O=c(15),h=c.n(O),x=c(69),v=c.n(x),N="http://".concat(window.location.hostname,":9999"),g=v.a.connect(N),k=function(){var e=Object(f.a)(p.a.mark((function e(t){var c,n,s,i,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("... starting controlled pump"),c=t.id,n=t.pulses,s=t.timeout,i="".concat(N,"/api/startcontrolled"),e.next=5,h.a.post(i,{id:c,pulses:n,timeout:s});case 5:return r=e.sent,e.abrupt("return",r.data);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(f.a)(p.a.mark((function e(t){var c,n,s;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("... starting pump"),c=t.id,n="".concat(N,"/api/start/").concat(c),e.next=5,h.a.post(n);case 5:return s=e.sent,e.abrupt("return",s.data);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(f.a)(p.a.mark((function e(t){var c,n,s;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("... restarting pump"),c=t.id,n="".concat(N,"/api/restart/").concat(c),e.next=5,h.a.post(n);case 5:return s=e.sent,e.abrupt("return",s.data);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(f.a)(p.a.mark((function e(t){var c,n,s;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("... stop pump"),c=t.id,n="".concat(N,"/api/stop/").concat(c),e.next=5,h.a.post(n);case 5:return s=e.sent,e.abrupt("return",s.data);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=Object(f.a)(p.a.mark((function e(){var t,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("... getting events"),t="".concat(N,"/api/network/card"),e.next=4,h.a.get(t);case 4:return c=e.sent,e.abrupt("return",c.data);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(f.a)(p.a.mark((function e(){var t,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("... getting events"),t="".concat(N,"/api/network/scan"),e.next=4,h.a.get(t);case 4:return c=e.sent,e.abrupt("return",c.data);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),q=function(){var e=Object(f.a)(p.a.mark((function e(){var t,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("... getting device id"),t="".concat(N,"/api/id"),e.next=4,h.a.get(t);case 4:return c=e.sent,e.abrupt("return",c.data);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(f.a)(p.a.mark((function e(t,c){var n,s;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("... configure wifi"),n="".concat(N,"/api/network"),e.next=4,h.a.post(n,{ssid:t,pass:c});case 4:return s=e.sent,e.abrupt("return",s.data);case 6:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}(),z=function(){var e=Object(f.a)(p.a.mark((function e(){var t,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("... shutting down"),t="".concat(N,"/api/poweroff"),e.next=4,h.a.post(t);case 4:return c=e.sent,e.abrupt("return",c.data);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=function(){var e=Object(f.a)(p.a.mark((function e(){var t,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("... restarting"),t="".concat(N,"/api/restart"),e.next=4,h.a.post(t);case 4:return c=e.sent,e.abrupt("return",c.data);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(f.a)(p.a.mark((function e(){var t,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("... setting server"),t="".concat(N,"/api/set_server"),e.next=4,h.a.post(t);case 4:return c=e.sent,e.abrupt("return",c.data);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),R=function(){Object(a.e)((function(e){return e.pumpsState}));var e=Object(a.d)((function(e){return e.setPumpsState})),t=Object(a.d)((function(e){return e.setPumpMessage})),c=[{},{},{},{}];return Object(n.useEffect)((function(){return g.on("message",(function(n){var s,i=JSON.parse(n);c[(s=i).id]=Object(o.a)(Object(o.a)({},c[s.id]),s),e([].concat(c)),console.log(i),t(i)})),function(){g.off("message")}}),[]),Object(j.jsx)("div",{className:"tabs is-centered is-small",children:Object(j.jsxs)("ul",{children:[Object(j.jsx)(m,{name:"Home",icon:l.b}),Object(j.jsx)(m,{name:"Config",icon:l.f}),Object(j.jsx)(m,{name:"Calibrate",icon:l.e})]})})},K=c(8),Z=c(4),U=function(){return(Date.now()/1e3).toFixed(1)},J=function(e){return e.replace(/^\w/,(function(e){return e.toUpperCase()}))},M=function(e,t){window.localStorage.setItem(e,JSON.stringify(t))},W=function(e,t){return(e/t*100).toFixed()},Y=function(e){return e.reduce((function(e,t){return e+t}))},X=function(){var e,t=Object(a.e)((function(e){return e.pumps})),c=Object(a.e)((function(e){return e.pumpsState})),s=Object(n.useState)(!1),i=Object(Z.a)(s,2),r=i[0],u=i[1],o=Object(n.useState)(0),l=Object(Z.a)(o,2),d=l[0],m=l[1],b=Object(n.useState)(0),p=Object(Z.a)(b,2),f=p[0],O=p[1],h=Object(n.useState)(!1),x=Object(Z.a)(h,2),v=x[0],N=x[1];return Object(n.useEffect)((function(){u(c.map((function(e){return e.on})).reduce((function(e,t){return e||t})));var e=Math.max.apply(Math,Object(K.a)(c.map((function(e){return e.timeout}))));O(e)}),[c]),Object(n.useEffect)((function(){var e=setInterval((function(){N(Date())}),500);return function(){return clearInterval(e)}}),[]),Object(n.useEffect)((function(){m(r?d+.5:0)}),[v]),Object(j.jsxs)("div",{className:"columns",children:[Object(j.jsx)("div",{className:"column"}),Object(j.jsxs)("div",{className:"column is-half",children:[Object(j.jsx)("div",{className:"columns",children:t.map((function(e){return Object(j.jsxs)("div",{className:"column p-2",children:[Object(j.jsx)("h4",{className:"heading has-text-centered ".concat(c[e.id].on?"has-text-danger":"has-text-link"),children:e.name}),0!=c[e.id].timeout?Object(j.jsxs)("p",{className:"has-text-centered",children:[W(c[e.id].pulses_count,c[e.id].pulses)," ","%"]}):Object(j.jsx)("p",{className:"has-text-centered",children:"- -"})]},e.id)}))}),Object(j.jsxs)("div",{className:"div",children:[Object(j.jsx)("progress",{className:"progress is-small ".concat(r?"is-success":"is-dark"),max:"100",value:(e=c,W(Y(e.map((function(e){return e.pulses_count}))),Y(e.map((function(e){return e.pulses})))))}),Object(j.jsx)("progress",{className:"progress md-0 p-0 mt-0 is-small ".concat(r?"is-success":"is-dark"),max:f,value:d})]})]}),Object(j.jsx)("div",{className:"column"})]})},V=function(){var e=Object(a.e)((function(e){return e.pumpMessage})),t=e.id,c=e.on,s=(e.pulses,e.pulses_count,e.timeout),i=e.time_count,r=Object(a.e)((function(e){return e.pumps})),u=Object(n.useState)([]),o=Object(Z.a)(u,2),l=o[0],d=o[1];return Object(n.useEffect)((function(){console.log("...on changed"),c||i>s&&(console.log("timeout:",s,"time_count:",i),d([].concat(Object(K.a)(l),["Check ".concat(r[t].name," pump")])))}),[c,t]),Object(j.jsx)(j.Fragment,{children:l.slice(0,3).map((function(e,t){return Object(j.jsxs)("div",{className:"notification is-warning mr-4",style:{top:"".concat(5*t-7,"em")},children:[Object(j.jsx)("button",{className:"delete is-large",onClick:function(){return d(l.filter((function(t){return t!=e})))}}),Object(j.jsx)("p",{className:"pl-1 pr-1",children:e})]})}))})},G=function(e,t){var c=Object(n.useRef)(t);Object(n.useEffect)((function(){c.current=t})),Object(n.useEffect)((function(){var t=function(t){t.code===e&&c.current(t)};return document.addEventListener("keypress",t),function(){return document.removeEventListener("keypress",t)}}),[e])},L=function(){var e=Object(a.e)((function(e){return e.pumpsState})),t=Object(a.d)((function(e){return e.setPumpsState})),c=Object(a.e)((function(e){return e.recipes})),s=Object(a.e)((function(e){return e.calibrations})),i=Object(n.useState)(!1),r=Object(Z.a)(i,2),u=r[0],o=r[1],m=Object(n.useState)(""),b=Object(Z.a)(m,2),p=b[0],f=b[1],O=function(c){var n=Object(K.a)(e);n.forEach((function(e,t){e.timeout=s[c.id].config[t].timeout,e.pulses=s[c.id].config[t].pulses})),t(n);var i=n.reduce((function(e,t){return e+t.timeout}),0);console.log("totaltime:",i),0!=i&&(f(c.name),n.forEach((function(e){k(e)})))},h=function(){e.forEach((function(e){y(e)}))};return Object(n.useEffect)((function(){var t=e.map((function(e){return e.on})).reduce((function(e,t){return e||t}),!1);1==u&&0==t&&f(!1),o(t)}),[e]),G("KeyA",(function(){return O(c[0])})),G("KeyS",(function(){return O(c[1])})),G("KeyD",(function(){return O(c[2])})),G("KeyF",h),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"is-flex is-flex-centered",children:Object(j.jsx)("img",{src:"data:image/png;base64,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",className:"logo mb-2"})}),Object(j.jsxs)("div",{className:"container ",children:[Object(j.jsx)(X,{}),Object(j.jsx)(V,{}),Object(j.jsxs)("div",{className:"columns",children:[c.map((function(e){return Object(j.jsx)("div",{className:"column is-flex is-flex-centered",children:Object(j.jsx)("div",{className:"card is-flex-direction-column is-flex-centered home-card",children:Object(j.jsxs)("a",{onClick:function(){return O(e)},children:[Object(j.jsx)("p",{className:"".concat(p==e.name?"has-text-success":"has-text-grey"," title is-4 m-2 has-text-centered"),children:e.name}),Object(j.jsx)("div",{className:"title is-1 has-text-centered m-2 has-text-success",children:Object(j.jsx)(d.a,{icon:l.g,className:"".concat(p==e.name?"has-text-success":"has-text-grey"),spin:p==e.name})})]})})},e.id)})),Object(j.jsx)("div",{className:"column is-one-quarter is-flex is-flex-centered",children:Object(j.jsx)("div",{className:"card is-flex-direction-column is-flex-centered",children:Object(j.jsxs)("a",{onClick:h,children:[Object(j.jsx)("p",{className:"".concat(u?"has-text-danger":"has-text-grey"," title is-4 m-4 has-text-centered"),children:"Stop"}),Object(j.jsx)("div",{className:"".concat(u?"has-text-danger":"has-text-grey"," title is-1 has-text-centered m-4"),children:Object(j.jsx)(d.a,{icon:l.a})})]})})})]})]})]})},H=function(){var e=["recipes","pumps","tolerance","wireless","remote","system"],t=Object(u.h)().mode,c=Object(n.useState)(t||e[0]),s=Object(Z.a)(c,2),i=s[0],a=s[1];return Object(j.jsxs)("div",{className:"menu column is-one-fifth",children:[Object(j.jsx)("p",{className:"menu-label has-text-link",children:Object(j.jsx)("a",{children:"Config"})}),Object(j.jsx)("ul",{className:"menu-list",children:e.map((function(e){return Object(j.jsx)("li",{children:Object(j.jsx)(r.b,{className:e==i&&"is-active",onClick:function(){return a(e)},to:"/config/".concat(e),children:J(e)})})}))})]})},I=function(){var e=Object(a.e)((function(e){return e.pumps})),t=Object(a.d)((function(e){return e.setPumps}));return Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)("header",{className:"card-header p-2",children:Object(j.jsx)("h1",{children:"Set pumps's liquits"})}),Object(j.jsx)("div",{className:"card-content",children:Object(j.jsx)("div",{className:"content",children:Object(j.jsx)("div",{className:"columns",children:e.map((function(c){return Object(j.jsxs)("div",{className:"column",children:[Object(j.jsxs)("p",{className:"subtitle is-4 has-text-centered m-4",children:["Pumps ",c.id+1]}),Object(j.jsx)("input",{value:c.name,type:"text",onChange:function(n){return s=c.id,i=n.target.value,void t(e.map((function(e){return e.id==s?Object(o.a)(Object(o.a)({},e),{},{name:i}):e})));var s,i},className:"input no-frame-input title is-3 has-text-centered"})]})}))})})}),Object(j.jsx)("div",{className:"card-footer",children:Object(j.jsx)("button",{onClick:function(){return M("pumps",e)},className:"button card-footer-item",children:"Save"})})]})},D=function(){var e=Object(a.e)((function(e){return e.recipes})),t=Object(a.d)((function(e){return e.setRecipes}));return Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)("header",{className:"card-header p-2",children:Object(j.jsx)("h1",{children:"Set recipes's friendly names"})}),Object(j.jsx)("div",{className:"card-content",children:Object(j.jsx)("div",{className:"content",children:Object(j.jsx)("div",{className:"columns",children:e.map((function(c){return Object(j.jsxs)("div",{className:"column",children:[Object(j.jsxs)("p",{className:"subtitle is-4 has-text-centered m-4",children:["Recipe ",c.id+1]}),Object(j.jsx)("input",{value:c.name,type:"text",onChange:function(n){return s=c.id,i=n.target.value,void t(e.map((function(e){return e.id==s?Object(o.a)(Object(o.a)({},e),{},{name:i}):e})));var s,i},className:"input no-frame-input title is-3 has-text-centered"})]})}))})})}),Object(j.jsx)("div",{className:"card-footer",children:Object(j.jsx)("button",{onClick:function(){return M("recipes",e)},className:"button card-footer-item",children:"Save"})})]})},F=function(){var e=Object(a.e)((function(e){return e.timeTolerance})),t=Object(a.d)((function(e){return e.setTimeTolerance}));return Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)("header",{className:"card-header p-2",children:Object(j.jsx)("h1",{children:"Set timeout tolerance in %"})}),Object(j.jsx)("div",{className:"card-content",children:Object(j.jsx)("div",{className:"content",children:Object(j.jsx)("div",{className:"columns",children:Object(j.jsxs)("div",{className:"column",children:[Object(j.jsx)("p",{className:"subtitle is-4 has-text-centered m-4",children:"Timeout tolerance (%)"}),Object(j.jsx)("input",{value:e,type:"number",onChange:function(e){return t(e.target.value)},className:"input no-frame-input title is-3 has-text-centered"})]})})})}),Object(j.jsx)("div",{className:"card-footer",children:Object(j.jsx)("button",{onClick:function(){return M("timeTolerance",e)},className:"button card-footer-item",children:"Save"})})]})},Q=function(){var e=Object(a.e)((function(e){return e.wifipass})),t=Object(a.e)((function(e){return e.wifissid})),c=Object(a.d)((function(e){return e.setWifipass})),s=Object(a.d)((function(e){return e.setWifissid})),i=Object(n.useState)([]),r=Object(Z.a)(i,2),u=r[0],o=r[1],l=Object(n.useState)(null),d=Object(Z.a)(l,2),m=d[0],b=d[1];return Object(n.useEffect)((function(){C().then((function(e){return o(e.networks)})),P().then((function(e){return b(e.card)}))}),[]),Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)("header",{className:"card-header p-2",children:Object(j.jsx)("h1",{children:"Wireless configuration"})}),Object(j.jsx)("div",{className:"card-content",children:Object(j.jsx)("div",{className:"content",children:Object(j.jsxs)("div",{className:"columns",children:[Object(j.jsxs)("div",{className:"column",children:[Object(j.jsx)("p",{className:"subtitle is-4 has-text-centered m-4",children:"SSID"}),Object(j.jsx)("input",{value:t,type:"text",onChange:function(e){return s(e.target.value)},className:"input no-frame-input title is-3 has-text-centered"})]}),Object(j.jsxs)("div",{className:"column",children:[Object(j.jsx)("p",{className:"subtitle is-4 has-text-centered m-4",children:"Password"}),Object(j.jsx)("input",{value:e,type:"text",onChange:function(e){return c(e.target.value)},className:"input no-frame-input title is-3 has-text-centered"})]})]})})}),Object(j.jsx)("div",{className:"card-footer is-flex-direction-column",children:Object(j.jsx)("button",{onClick:function(){M("wifissid",t),M("wifipass",e),E(t,e)},className:"button card-footer-item",children:"Save"})}),Object(j.jsxs)("div",{className:"is-flex is-flex-direction-column is-flex-centered m-4",children:[Object(j.jsxs)("p",{className:"heading has-text-centered has-text-link",children:["Available Networks (",m,")"]}),Object(j.jsxs)("table",{className:"table is-bordered is-striped is-narrow",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{className:"has-text-centered is-size-6",children:"SSID"}),Object(j.jsx)("th",{className:"has-text-centered is-size-6",children:"SNR"})]})}),Object(j.jsx)("tbody",{children:u.map((function(e){return Object(j.jsxs)("tr",{children:[Object(j.jsxs)("td",{className:"has-text-centered is-size-6",children:[" ",e.ssid," "]}),Object(j.jsxs)("td",{className:"has-text-centered is-size-6",children:[" ",e.snr," "]})]})}))})]})]})]})},B=function(){var e=Object(n.useState)(""),t=Object(Z.a)(e,2),c=t[0],s=t[1];return Object(n.useEffect)((function(){q().then((function(e){return s(e.id)}))}),[]),Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)("header",{className:"card-header p-2",children:Object(j.jsx)("h1",{children:"Power control"})}),Object(j.jsxs)("div",{className:"card-content",children:[Object(j.jsx)("div",{className:"content",children:Object(j.jsxs)("div",{className:"columns",children:[Object(j.jsxs)("div",{onClick:z,className:"column is-flex is-flex-centered is-flex-direction-column",children:[Object(j.jsx)(d.a,{icon:l.c,className:"is-size-1 has-text-link m-2"}),Object(j.jsx)("p",{children:"Power Off"})]}),Object(j.jsxs)("div",{onClick:T,className:"column is-flex is-flex-centered is-flex-direction-column",children:[Object(j.jsx)(d.a,{icon:l.d,className:"is-size-1 has-text-link mb-1"}),Object(j.jsx)("p",{children:"Restart"})]})]})}),Object(j.jsx)("footer",{className:"card-footer is-flex-centered",children:Object(j.jsxs)("p",{className:"heading has-text-link is-size-6 is-centered",children:["id: ",c]})})]})]})},_=function(){var e=Object(a.e)((function(e){return e.server})),t=Object(a.d)((function(e){return e.setServer}));return Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)("header",{className:"card-header p-2",children:Object(j.jsx)("h1",{children:"Set server to send reports to"})}),Object(j.jsx)("div",{className:"card-content",children:Object(j.jsx)("div",{className:"content",children:Object(j.jsx)("div",{className:"columns",children:Object(j.jsx)("div",{className:"column",children:Object(j.jsx)("input",{value:e,type:"text",onChange:function(e){return t(e.target.value)},placeholder:"http://mymightyserver.com",className:"input no-frame-input title is-4 has-text-centered"})})})})}),Object(j.jsx)("div",{className:"card-footer",children:Object(j.jsx)("button",{onClick:function(){A({server:e}),M("server",e)},className:"button card-footer-item",children:"Save"})})]})},$=function(){return Object(j.jsxs)("div",{className:"columns",children:[Object(j.jsx)(H,{}),Object(j.jsx)("div",{className:"column p-4",children:Object(j.jsxs)(u.d,{children:[Object(j.jsx)(u.b,{path:"/config/recipes",component:D}),Object(j.jsx)(u.b,{path:"/config/pumps",component:I}),Object(j.jsx)(u.b,{path:"/config/tolerance",component:F}),Object(j.jsx)(u.b,{path:"/config/wireless",component:Q}),Object(j.jsx)(u.b,{path:"/config/system",component:B}),Object(j.jsx)(u.b,{path:"/config/remote",component:_}),Object(j.jsx)(u.b,{path:"/config",component:D})]})})]})},ee=function(e){var t=e.pump,c=e.recipe,s=Object(a.e)((function(e){return e.calibrations})),i=Object(a.d)((function(e){return e.setCalibrations})),r=Object(a.e)((function(e){return e.pumpsState})),u=Object(a.d)((function(e){return e.setPumpsState})),o=Object(a.e)((function(e){return e.timeTolerance})),l=Object(n.useState)(0),d=Object(Z.a)(l,2),m=d[0],b=d[1],p=Object(n.useState)(0),f=Object(Z.a)(p,2),O=f[0],h=f[1],x=Object(n.useState)(!1),v=Object(Z.a)(x,2),N=v[0],g=v[1],k=Object(n.useState)(U()),P=Object(Z.a)(k,2),C=P[0],q=P[1],E=Object(n.useState)(U()),z=Object(Z.a)(E,2),T=z[0],A=z[1],R=Object(n.useState)(s[c.id].config[t.id].pulses),J=Object(Z.a)(R,2),M=J[0],W=J[1],Y=Object(n.useState)(s[c.id].config[t.id].timeout),X=Object(Z.a)(Y,2),V=X[0],G=X[1];Object(n.useEffect)((function(){var e=setInterval((function(){A(U())}),100);return function(){return clearInterval(e)}}),[]),Object(n.useEffect)((function(){if(N){var e=T-C;b(e),G((e*(1+o/100)).toFixed(2)),W(r[t.id].pulses_count)}}),[T]),Object(n.useEffect)((function(){if(!N){var e=Object(K.a)(s);e[c.id].config[t.id].pulses=M,e[c.id].config[t.id].timeout=V,i(e)}}),[N]),Object(n.useEffect)((function(){b(0),h(0),L(),W(s[c.id].config[t.id].pulses),G(s[c.id].config[t.id].timeout)}),[c]);var L=function(){var e=Object(K.a)(r);e[t.id].pulses_count=0,u(e)};return Object(j.jsx)("div",{className:"column",children:Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)("header",{className:"card-header",children:Object(j.jsx)("p",{className:"card-header-title title is-5 is-centered",children:t.name})}),Object(j.jsxs)("div",{className:"is-flex is-justify-content-space-around",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{className:"has-text-link heading has-text-centered mt-4 is-size-8",children:"Time"}),Object(j.jsx)("p",{className:"title is-5 success has-text-centered",children:m.toFixed(1)})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{className:"has-text-link heading has-text-centered mt-4 is-size-8",children:"Pulses"}),Object(j.jsx)("p",{className:"title is-5 success has-text-centered",children:r[t.id].pulses_count})]})]}),Object(j.jsxs)("div",{className:"card-content is-flex is-justify-content-center m-4 p-0 is-flex-direction-column",children:[Object(j.jsx)("button",{className:"button mb-2 mt-2 pt-0 is-medium",onClick:N?function(){A(U()),h(m),y(t).then((function(){return console.log("stop pump")})),g(!1)}:function(){0==m?w(t).then((function(){return console.log("start pump")})):S(t).then((function(){return console.log("restart pump")})),q(U()-O),g(!0)},children:N?"Pause":"Start"}),Object(j.jsx)("button",{className:"button mb-2 mt-2 pt-0 is-medium",onClick:function(){b(0),h(0),G(0),W(0),y(t).then((function(){return console.log("stop pump")})),g(!1);var e=Object(K.a)(s);e[c.id].config[t.id].pulses=0,e[c.id].config[t.id].timeout=0,i(e)},children:"Reset"})]}),Object(j.jsxs)("div",{className:"card-footer is-flex-direction-column",children:[Object(j.jsx)("p",{className:"heading has-text-link has-text-centered mt-3 is-size-8",children:"Results"}),Object(j.jsxs)("div",{className:"is-flex is-justify-content-space-around mb-2",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{className:"has-text-link heading has-text-centered mt-4 is-size-8",children:"Timeout"}),Object(j.jsx)("p",{className:"title is-3 success has-text-centered",children:V})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{className:"has-text-link heading has-text-centered mt-4 is-size-8",children:"Pulses"}),Object(j.jsx)("p",{className:"title is-3 success has-text-centered",children:M})]})]})]})]})})},te=function(e){var t=e.selection,c=e.setSelection,n=Object(a.e)((function(e){return e.recipes}));return Object(j.jsxs)("div",{className:"menu column is-one-fifth",children:[Object(j.jsx)("p",{className:"menu-label has-text-link",children:Object(j.jsx)("a",{children:"Recipes"})}),Object(j.jsx)("ul",{className:"menu-list",children:n.map((function(e){return Object(j.jsx)("li",{children:Object(j.jsx)(r.b,{className:e==t&&"is-active",onClick:function(){return c(e)},children:J(e.name)})})}))})]})},ce=function(){var e=Object(a.e)((function(e){return e.pumps})),t=Object(a.e)((function(e){return e.recipes})),c=Object(a.e)((function(e){return e.calibrations})),s=Object(a.d)((function(e){return e.setCalibrations})),i=Object(n.useState)(t[0]),r=Object(Z.a)(i,2),u=r[0],o=r[1];return Object(j.jsxs)("div",{className:"columns",children:[Object(j.jsx)(te,{selection:u,setSelection:o}),Object(j.jsxs)("div",{className:"card column",children:[Object(j.jsx)("div",{className:"columns",children:e.map((function(e){return Object(j.jsx)(ee,{pump:e,recipe:u,calibrations:c,setCalibrations:s},e.id)}))}),Object(j.jsx)("div",{className:"card-footer",children:Object(j.jsx)("button",{onClick:function(){return M("calibrations",c)},className:"button card-footer-item",children:"Save"})})]})]})},ne={recipes:[{id:0,name:"Recipe 1"},{id:1,name:"Recipe 2"},{id:2,name:"Recipe 3"}],pumps:[{id:0,name:"Pump 1"},{id:1,name:"Pump 2"},{id:2,name:"Pump 3"},{id:3,name:"Pump 4"}],calibrations:[{id:0,config:[{id:0,pulses:0,timeout:0},{id:1,pulses:0,timeout:0},{id:2,pulses:0,timeout:0},{id:3,pulses:0,timeout:0}]},{id:1,config:[{id:0,pulses:0,timeout:0},{id:1,pulses:0,timeout:0},{id:2,pulses:0,timeout:0},{id:3,pulses:0,timeout:0}]},{id:2,config:[{id:0,pulses:0,timeout:0},{id:1,pulses:0,timeout:0},{id:2,pulses:0,timeout:0},{id:3,pulses:0,timeout:0}]}],pumpsState:[{id:0,total_pulses:123,on:!1,timeout:5,pulses:10,pulses_count:0,time_count:0},{id:1,total_pulses:123,on:!1,timeout:5,pulses:10,pulses_count:0,time_count:0},{id:2,total_pulses:123,on:!1,timeout:5,pulses:10,pulses_count:0,time_count:0},{id:3,total_pulses:123,on:!1,timeout:5,pulses:10,pulses_count:0,time_count:0}],timeTolerance:5,wifissid:"wifi name",wifipass:"wifi password",server:"http://us-central1-decon7-admin.cloudfunctions.net"},se=function(e){return JSON.parse(window.localStorage.getItem(e))||ne[e]},ie={recipes:se("recipes"),setRecipes:Object(a.b)((function(e,t){e.recipes=Object(K.a)(t)})),pumps:se("pumps"),setPumps:Object(a.b)((function(e,t){e.pumps=Object(K.a)(t)})),calibrations:se("calibrations"),setCalibrations:Object(a.b)((function(e,t){e.calibrations=Object(K.a)(t)})),pumpsState:se("pumpsState"),setPumpsState:Object(a.b)((function(e,t){e.pumpsState=Object(K.a)(t)})),timeTolerance:se("timeTolerance"),setTimeTolerance:Object(a.b)((function(e,t){e.timeTolerance=t})),wifissid:se("wifissid"),setWifissid:Object(a.b)((function(e,t){e.wifissid=t})),wifipass:se("wifipass"),setWifipass:Object(a.b)((function(e,t){e.wifipass=t})),server:se("server"),setServer:Object(a.b)((function(e,t){e.server=t})),pumpMessage:{},setPumpMessage:Object(a.b)((function(e,t){e.pumpMessage=t}))},re=function(){var e=Object(n.useState)(!1),t=Object(Z.a)(e,2),c=t[0],s=t[1];return Object(n.useEffect)((function(){window.addEventListener("online",(function(){return s(!0)})),window.addEventListener("offline",(function(){return s(!1)})),s(navigator.onLine)}),[]),Object(j.jsx)(d.a,{icon:l.h,className:"wifi ".concat(c?"has-text-success":"has-text-grey")})},ae=Object(a.c)(ie),ue=function(){return Object(j.jsxs)(a.a,{store:ae,children:[Object(j.jsx)(re,{}),Object(j.jsx)(R,{}),Object(j.jsx)("p",{className:"success"}),Object(j.jsx)(u.a,{exact:!0,from:"/",to:"/home"}),Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)(u.d,{children:[Object(j.jsx)(u.b,{path:"/home",component:L}),Object(j.jsx)(u.b,{path:"/config",component:$}),Object(j.jsx)(u.b,{path:"/calibrate",component:ce})]})})]})};i.a.render(Object(j.jsx)(r.a,{children:Object(j.jsx)(ue,{})}),document.getElementById("root"))},74:function(e,t,c){},75:function(e,t,c){}},[[131,1,2]]]);
//# sourceMappingURL=main.3bb5fcc2.chunk.js.map