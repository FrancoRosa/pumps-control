(this["webpackJsonppumps-control"]=this["webpackJsonppumps-control"]||[]).push([[0],{134:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c(67),i=c.n(n),a=c(15),r=(c(76),c(77),c(2)),u=c(5),o=c(22),l=c(9),d=c(16),j=c(0),m=function(e){var t=e.name,c=e.icon,s=Object(u.g)().pathname.includes(t.toLowerCase());return Object(j.jsx)("li",{className:s?"is-active":"",children:Object(j.jsxs)(a.b,{to:"/".concat(t.toLowerCase()),children:[Object(j.jsx)("span",{className:"icon is-small",children:Object(j.jsx)(d.a,{icon:c})}),Object(j.jsx)("span",{children:t})]})})},b=c(69),p=c.n(b).a.connect("http://localhost:9999"),f=function(){Object(r.e)((function(e){return e.pumpsState}));var e=Object(r.d)((function(e){return e.setPumpsState})),t=Object(r.d)((function(e){return e.setPumpMessage})),c=[{},{},{},{}];return Object(s.useEffect)((function(){return p.on("message",(function(s){var n,i=JSON.parse(s);c[(n=i).id]=Object(o.a)(Object(o.a)({},c[n.id]),n),e([].concat(c)),console.log(i),t(i)})),function(){p.off("message")}}),[]),Object(j.jsx)("div",{className:"tabs is-centered is-small",children:Object(j.jsxs)("ul",{children:[Object(j.jsx)(m,{name:"Home",icon:l.b}),Object(j.jsx)(m,{name:"Config",icon:l.f}),Object(j.jsx)(m,{name:"Calibrate",icon:l.e})]})})},O=c(13),h=c(4),x=c(7),v=c.n(x),N=c(23),g=c(24),k=c.n(g),w="localhost",y=function(){var e=Object(N.a)(v.a.mark((function e(t){var c,s,n,i,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("... starting controlled pump"),c=t.id,s=t.pulses,n=t.timeout,i="http://".concat(w,":9999/api/startcontrolled"),e.next=5,k.a.post(i,{id:c,pulses:s,timeout:n});case 5:return a=e.sent,e.abrupt("return",a.data);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(N.a)(v.a.mark((function e(t){var c,s,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("... starting pump"),c=t.id,s="http://".concat(w,":9999/api/start/").concat(c),e.next=5,k.a.post(s);case 5:return n=e.sent,e.abrupt("return",n.data);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=Object(N.a)(v.a.mark((function e(t){var c,s,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("... stop pump"),c=t.id,s="http://".concat(w,":9999/api/stop/").concat(c),e.next=5,k.a.post(s);case 5:return n=e.sent,e.abrupt("return",n.data);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(N.a)(v.a.mark((function e(t,c){var s,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("... configure wifi"),s="http://".concat(w,":9999/api/network"),e.next=4,k.a.post(s,{ssid:t,pass:c});case 4:return n=e.sent,e.abrupt("return",n.data);case 6:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}(),q=function(){var e=Object(N.a)(v.a.mark((function e(){var t,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("... shutting down"),t="http://".concat(w,":9999/api/poweroff"),e.next=4,k.a.post(t);case 4:return c=e.sent,e.abrupt("return",c.data);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(N.a)(v.a.mark((function e(){var t,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("... restarting"),t="http://".concat(w,":9999/api/restart"),e.next=4,k.a.post(t);case 4:return c=e.sent,e.abrupt("return",c.data);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),z=function(){return(Date.now()/1e3).toFixed(1)},T=function(e){return e.replace(/^\w/,(function(e){return e.toUpperCase()}))},A=function(e,t){window.localStorage.setItem(e,JSON.stringify(t))},K=function(e,t){return(e/t*100).toFixed()},R=function(e){return e.reduce((function(e,t){return e+t}))},Z=function(){var e,t=Object(r.e)((function(e){return e.pumps})),c=Object(r.e)((function(e){return e.pumpsState})),n=Object(s.useState)(!1),i=Object(h.a)(n,2),a=i[0],u=i[1];return Object(s.useEffect)((function(){u(c.map((function(e){return e.on})).reduce((function(e,t){return e||t})))}),[c]),Object(j.jsxs)("div",{className:"columns",children:[Object(j.jsx)("div",{className:"column"}),Object(j.jsxs)("div",{className:"column is-half",children:[Object(j.jsx)("div",{className:"columns",children:t.map((function(e){return Object(j.jsxs)("div",{className:"column",children:[Object(j.jsx)("h4",{className:"heading has-text-centered ".concat(c[e.id].on?"has-text-danger":"has-text-link"),children:e.name}),0!=c[e.id].timeout?Object(j.jsxs)("p",{className:"has-text-centered",children:[K(c[e.id].pulses_count,c[e.id].pulses)," %"]}):Object(j.jsx)("p",{className:"has-text-centered",children:"- -"})]})}))}),Object(j.jsx)("div",{className:"div",children:Object(j.jsx)("progress",{class:"progress is-small ".concat(a?"is-success":"is-dark"),max:"100",value:(e=c,K(R(e.map((function(e){return e.pulses_count}))),R(e.map((function(e){return e.pulses}))))),children:"%"})})]}),Object(j.jsx)("div",{className:"column"})]})},U=function(){var e=Object(r.e)((function(e){return e.pumpMessage})),t=e.id,c=e.on,n=e.pulses,i=e.pulses_count,a=Object(r.e)((function(e){return e.pumps})),u=Object(s.useState)([]),o=Object(h.a)(u,2),l=o[0],d=o[1];return Object(s.useEffect)((function(){console.log("...on changed"),c||n>i&&d([].concat(Object(O.a)(l),["Check ".concat(a[t].name," pump")]))}),[c,t]),Object(j.jsx)(j.Fragment,{children:l.map((function(e,t){return Object(j.jsxs)("div",{class:"notification is-warning",style:{top:"".concat(5*t-6,"em")},children:[Object(j.jsx)("button",{class:"delete is-large",onClick:function(){return d(l.filter((function(t){return t!=e})))}}),Object(j.jsx)("p",{className:"pl-1 pr-1",children:e})]})}))})},J=function(e,t){var c=Object(s.useRef)(t);Object(s.useEffect)((function(){c.current=t})),Object(s.useEffect)((function(){var t=function(t){t.code===e&&c.current(t)};return document.addEventListener("keypress",t),function(){return document.removeEventListener("keypress",t)}}),[e])},W=function(){var e=Object(r.e)((function(e){return e.pumpsState})),t=Object(r.d)((function(e){return e.setPumpsState})),c=Object(r.e)((function(e){return e.recipes})),n=Object(r.e)((function(e){return e.calibrations})),i=Object(s.useState)(!1),a=Object(h.a)(i,2),u=a[0],o=a[1],m=Object(s.useState)(""),b=Object(h.a)(m,2),p=b[0],f=b[1],x=function(c){var s=Object(O.a)(e);f(c.name),s.forEach((function(e,t){e.timeout=n[c.id].config[t].timeout,e.pulses=n[c.id].config[t].pulses})),t(s),s.forEach((function(e){y(e)}))},v=function(){e.forEach((function(e){P(e)}))};return Object(s.useEffect)((function(){var t=e.map((function(e){return e.on})).reduce((function(e,t){return e||t}));1==u&&0==t&&f(!1),o(t)}),[e]),J("KeyA",(function(){return x(c[0])})),J("KeyS",(function(){return x(c[1])})),J("KeyD",(function(){return x(c[2])})),J("KeyF",v),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"is-flex is-flex-centered",children:Object(j.jsx)("img",{src:"data:image/png;base64,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",className:"m-4 logo"})}),Object(j.jsxs)("div",{className:"container ",children:[Object(j.jsx)(Z,{}),Object(j.jsx)(U,{}),Object(j.jsxs)("div",{className:"columns",children:[c.map((function(e){return Object(j.jsx)("div",{className:"column is-flex is-flex-centered",children:Object(j.jsx)("div",{className:"card is-flex-direction-column is-flex-centered home-card",children:Object(j.jsxs)("a",{onClick:function(){return x(e)},children:[Object(j.jsx)("p",{className:"".concat(p==e.name?"has-text-success":"has-text-grey"," title is-4 m-2 has-text-centered"),children:e.name}),Object(j.jsx)("div",{className:"title is-1 has-text-centered m-2 has-text-success",children:Object(j.jsx)(d.a,{icon:l.g,className:"".concat(p==e.name?"has-text-success":"has-text-grey"),spin:p==e.name})})]})})})})),Object(j.jsx)("div",{className:"column is-one-quarter is-flex is-flex-centered",children:Object(j.jsx)("div",{className:"card is-flex-direction-column is-flex-centered",children:Object(j.jsxs)("a",{onClick:v,children:[Object(j.jsx)("p",{className:"".concat(u?"has-text-danger":"has-text-grey"," title is-4 m-4 has-text-centered"),children:"Stop"}),Object(j.jsx)("div",{className:"".concat(u?"has-text-danger":"has-text-grey"," title is-1 has-text-centered m-4"),children:Object(j.jsx)(d.a,{icon:l.a})})]})})})]})]})]})},Y=function(){var e=["recipes","pumps","tolerance","wireless","remote","user","system"],t=Object(u.h)().mode,c=Object(s.useState)(t||e[0]),n=Object(h.a)(c,2),i=n[0],r=n[1];return Object(j.jsxs)("div",{className:"menu column is-one-fifth",children:[Object(j.jsx)("p",{className:"menu-label has-text-link",children:Object(j.jsx)("a",{children:"Config"})}),Object(j.jsx)("ul",{className:"menu-list",children:e.map((function(e){return Object(j.jsx)("li",{children:Object(j.jsx)(a.b,{className:e==i&&"is-active",onClick:function(){return r(e)},to:"/config/".concat(e),children:T(e)})})}))})]})},X=function(){var e=Object(r.e)((function(e){return e.pumps})),t=Object(r.d)((function(e){return e.setPumps}));return Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)("header",{className:"card-header p-2",children:Object(j.jsx)("h1",{children:"Set pumps's liquits"})}),Object(j.jsx)("div",{className:"card-content",children:Object(j.jsx)("div",{className:"content",children:Object(j.jsx)("div",{className:"columns",children:e.map((function(c){return Object(j.jsxs)("div",{className:"column",children:[Object(j.jsxs)("p",{className:"subtitle is-4 has-text-centered m-4",children:["Pumps ",c.id+1]}),Object(j.jsx)("input",{value:c.name,type:"text",onChange:function(s){return n=c.id,i=s.target.value,void t(e.map((function(e){return e.id==n?Object(o.a)(Object(o.a)({},e),{},{name:i}):e})));var n,i},className:"input no-frame-input title is-3 has-text-centered"})]})}))})})}),Object(j.jsx)("div",{className:"card-footer",children:Object(j.jsx)("button",{onClick:function(){return A("pumps",e)},className:"button card-footer-item",children:"Save"})})]})},M=function(){var e=Object(r.e)((function(e){return e.recipes})),t=Object(r.d)((function(e){return e.setRecipes}));return Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)("header",{className:"card-header p-2",children:Object(j.jsx)("h1",{children:"Set recipes's friendly names"})}),Object(j.jsx)("div",{className:"card-content",children:Object(j.jsx)("div",{className:"content",children:Object(j.jsx)("div",{className:"columns",children:e.map((function(c){return Object(j.jsxs)("div",{className:"column",children:[Object(j.jsxs)("p",{className:"subtitle is-4 has-text-centered m-4",children:["Recipe ",c.id+1]}),Object(j.jsx)("input",{value:c.name,type:"text",onChange:function(s){return n=c.id,i=s.target.value,void t(e.map((function(e){return e.id==n?Object(o.a)(Object(o.a)({},e),{},{name:i}):e})));var n,i},className:"input no-frame-input title is-3 has-text-centered"})]})}))})})}),Object(j.jsx)("div",{className:"card-footer",children:Object(j.jsx)("button",{onClick:function(){return A("recipes",e)},className:"button card-footer-item",children:"Save"})})]})},V=function(){var e=Object(r.e)((function(e){return e.timeTolerance})),t=Object(r.d)((function(e){return e.setTimeTolerance}));return Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)("header",{className:"card-header p-2",children:Object(j.jsx)("h1",{children:"Set timeout tolerance in %"})}),Object(j.jsx)("div",{className:"card-content",children:Object(j.jsx)("div",{className:"content",children:Object(j.jsx)("div",{className:"columns",children:Object(j.jsxs)("div",{className:"column",children:[Object(j.jsx)("p",{className:"subtitle is-4 has-text-centered m-4",children:"Timeout tolerance (%)"}),Object(j.jsx)("input",{value:e,type:"number",onChange:function(e){return t(e.target.value)},className:"input no-frame-input title is-3 has-text-centered"})]})})})}),Object(j.jsx)("div",{className:"card-footer",children:Object(j.jsx)("button",{onClick:function(){return A("timeTolerance",e)},className:"button card-footer-item",children:"Save"})})]})},G=c(70),H=c.n(G),F=(c(133),c(71)),L=function(){var e=Object(r.e)((function(e){return e.wifipass})),t=Object(r.e)((function(e){return e.wifissid})),c=Object(r.d)((function(e){return e.setWifipass})),s=Object(r.d)((function(e){return e.setWifissid})),n=Object(F.useState)(!1),i=Object(h.a)(n,2),a=i[0],u=i[1];return Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)("header",{className:"card-header p-2",children:Object(j.jsx)("h1",{children:"Wireless configuration"})}),Object(j.jsx)("div",{className:"card-content",children:Object(j.jsx)("div",{className:"content",children:Object(j.jsxs)("div",{className:"columns",children:[Object(j.jsxs)("div",{className:"column",children:[Object(j.jsx)("p",{className:"subtitle is-4 has-text-centered m-4",children:"SSID"}),Object(j.jsx)("input",{value:t,type:"text",onChange:function(e){return s(e.target.value)},className:"input no-frame-input title is-3 has-text-centered"})]}),Object(j.jsxs)("div",{className:"column",children:[Object(j.jsx)("p",{className:"subtitle is-4 has-text-centered m-4",children:"Password"}),Object(j.jsx)("input",{value:e,type:"text",onChange:function(e){return c(e.target.value)},onFocus:function(){return u(!0)},onBlur:function(){return u(!1)},className:"input no-frame-input title is-3 has-text-centered"})]})]})})}),Object(j.jsx)("div",{className:"card-footer",children:Object(j.jsx)("button",{onClick:function(){A("wifissid",t),A("wifipass",e),C(t,e)},className:"button card-footer-item",children:"Save"})}),Object(j.jsx)("div",{className:"has-text-grey ".concat(!a&&"is-hidden"),children:Object(j.jsx)(H.a,{layoutName:"shift"})})]})},I=function(){return Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)("header",{className:"card-header p-2",children:Object(j.jsx)("h1",{children:"Power control"})}),Object(j.jsx)("div",{className:"card-content",children:Object(j.jsx)("div",{className:"content",children:Object(j.jsxs)("div",{className:"columns",children:[Object(j.jsxs)("div",{onClick:q,className:"column is-flex is-flex-centered is-flex-direction-column",children:[Object(j.jsx)(d.a,{icon:l.c,className:"is-size-1 has-text-link m-2"}),Object(j.jsx)("p",{children:"Power Off"})]}),Object(j.jsxs)("div",{onClick:E,className:"column is-flex is-flex-centered is-flex-direction-column",children:[Object(j.jsx)(d.a,{icon:l.d,className:"is-size-1 has-text-link mb-1"}),Object(j.jsx)("p",{children:"Restart"})]})]})})})]})},D=function(){return Object(j.jsxs)("div",{className:"columns",children:[Object(j.jsx)(Y,{}),Object(j.jsx)("div",{className:"column p-4",children:Object(j.jsxs)(u.d,{children:[Object(j.jsx)(u.b,{path:"/config/recipes",component:M}),Object(j.jsx)(u.b,{path:"/config/pumps",component:X}),Object(j.jsx)(u.b,{path:"/config/tolerance",component:V}),Object(j.jsx)(u.b,{path:"/config/wireless",component:L}),Object(j.jsx)(u.b,{path:"/config/system",component:I}),Object(j.jsx)(u.b,{path:"/config",component:M})]})})]})},Q=function(e){var t=e.pump,c=e.recipe,n=Object(r.e)((function(e){return e.calibrations})),i=Object(r.d)((function(e){return e.setCalibrations})),a=Object(r.e)((function(e){return e.pumpsState})),u=Object(r.e)((function(e){return e.timeTolerance})),o=Object(s.useState)(0),l=Object(h.a)(o,2),d=l[0],m=l[1],b=Object(s.useState)(!1),p=Object(h.a)(b,2),f=p[0],x=p[1],v=Object(s.useState)(z()),N=Object(h.a)(v,2),g=N[0],k=N[1],w=Object(s.useState)(z()),y=Object(h.a)(w,2),C=y[0],q=y[1],E=Object(s.useState)(n[c.id].config[t.id].pulses),T=Object(h.a)(E,2),A=T[0],K=T[1],R=Object(s.useState)(n[c.id].config[t.id].timeout),Z=Object(h.a)(R,2),U=Z[0],J=Z[1];Object(s.useEffect)((function(){var e=setInterval((function(){q(z())}),100);return function(){return clearInterval(e)}})),Object(s.useEffect)((function(){if(f){var e=C-g;m(e),J((e*(1+u/100)).toFixed(2)),K(a[t.id].pulses_count)}}),[C]),Object(s.useEffect)((function(){if(!f){var e=Object(O.a)(n);e[c.id].config[t.id].pulses=A,e[c.id].config[t.id].timeout=U,i(e)}}),[f]),Object(s.useEffect)((function(){m(0),K(n[c.id].config[t.id].pulses),J(n[c.id].config[t.id].timeout)}),[c]);return Object(j.jsx)("div",{className:"column",children:Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)("header",{className:"card-header",children:Object(j.jsx)("p",{className:"card-header-title title is-5 is-centered",children:t.name})}),Object(j.jsxs)("div",{className:"is-flex is-justify-content-space-around",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{className:"has-text-link heading has-text-centered mt-4 is-size-8",children:"Time"}),Object(j.jsx)("p",{className:"title is-5 success has-text-centered",children:d.toFixed(1)})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{className:"has-text-link heading has-text-centered mt-4 is-size-8",children:"Pulses"}),Object(j.jsx)("p",{className:"title is-5 success has-text-centered",children:a[t.id].pulses_count})]})]}),Object(j.jsxs)("div",{className:"card-content is-flex is-justify-content-center m-4 p-0 is-flex-direction-column",children:[Object(j.jsx)("button",{className:"button mb-2 mt-2 pt-0 is-medium",onClick:f?function(){q(z()),P(t).then((function(){return console.log("stop pump")})),x(!1)}:function(){k(z()),S(t).then((function(){return console.log("start pump")})),x(!0)},children:f?"Stop":"Start"}),Object(j.jsx)("button",{className:"button mb-2 mt-2 pt-0 is-medium",onClick:function(){m(0),J(0),K(0),P(t).then((function(){return console.log("stop pump")})),x(!1);var e=Object(O.a)(n);e[c.id].config[t.id].pulses=0,e[c.id].config[t.id].timeout=0,i(e)},children:"Reset"})]}),Object(j.jsxs)("div",{className:"card-footer is-flex-direction-column",children:[Object(j.jsx)("p",{className:"heading has-text-link has-text-centered mt-3 is-size-8",children:"Results"}),Object(j.jsxs)("div",{className:"is-flex is-justify-content-space-around mb-2",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{className:"has-text-link heading has-text-centered mt-4 is-size-8",children:"Timeout"}),Object(j.jsx)("p",{className:"title is-3 success has-text-centered",children:U})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{className:"has-text-link heading has-text-centered mt-4 is-size-8",children:"Pulses"}),Object(j.jsx)("p",{className:"title is-3 success has-text-centered",children:A})]})]})]})]})})},B=function(e){var t=e.selection,c=e.setSelection,s=Object(r.e)((function(e){return e.recipes}));return Object(j.jsxs)("div",{className:"menu column is-one-fifth",children:[Object(j.jsx)("p",{className:"menu-label has-text-link",children:Object(j.jsx)("a",{children:"Recipes"})}),Object(j.jsx)("ul",{className:"menu-list",children:s.map((function(e){return Object(j.jsx)("li",{children:Object(j.jsx)(a.b,{className:e==t&&"is-active",onClick:function(){return c(e)},children:T(e.name)})})}))})]})},_=function(){var e=Object(r.e)((function(e){return e.pumps})),t=Object(r.e)((function(e){return e.recipes})),c=Object(r.e)((function(e){return e.calibrations})),n=Object(r.d)((function(e){return e.setCalibrations})),i=Object(s.useState)(t[0]),a=Object(h.a)(i,2),u=a[0],o=a[1];return Object(j.jsxs)("div",{className:"columns",children:[Object(j.jsx)(B,{selection:u,setSelection:o}),Object(j.jsxs)("div",{className:"card column",children:[Object(j.jsx)("div",{className:"columns",children:e.map((function(e){return Object(j.jsx)(Q,{pump:e,recipe:u,calibrations:c,setCalibrations:n},e.id)}))}),Object(j.jsx)("div",{className:"card-footer",children:Object(j.jsx)("button",{onClick:function(){return A("calibrations",c)},className:"button card-footer-item",children:"Save"})})]})]})},$={recipes:[{id:0,name:"Recipe 1"},{id:1,name:"Recipe 2"},{id:2,name:"Recipe 3"}],pumps:[{id:0,name:"Pump 1"},{id:1,name:"Pump 2"},{id:2,name:"Pump 3"},{id:3,name:"Pump 4"}],calibrations:[{id:0,config:[{id:0,pulses:0,timeout:0},{id:1,pulses:0,timeout:0},{id:2,pulses:0,timeout:0},{id:3,pulses:0,timeout:0}]},{id:1,config:[{id:0,pulses:0,timeout:0},{id:1,pulses:0,timeout:0},{id:2,pulses:0,timeout:0},{id:3,pulses:0,timeout:0}]},{id:2,config:[{id:0,pulses:0,timeout:0},{id:1,pulses:0,timeout:0},{id:2,pulses:0,timeout:0},{id:3,pulses:0,timeout:0}]}],pumpsState:[{id:0,total_pulses:123,on:!1,timeout:5,pulses:10,pulses_count:0,time_count:0},{id:1,total_pulses:123,on:!1,timeout:5,pulses:10,pulses_count:0,time_count:0},{id:2,total_pulses:123,on:!1,timeout:5,pulses:10,pulses_count:0,time_count:0},{id:3,total_pulses:123,on:!1,timeout:5,pulses:10,pulses_count:0,time_count:0}],timeTolerance:5,wifissid:"wifi name",wifipass:"wifi password"},ee=function(e){return JSON.parse(window.localStorage.getItem(e))||$[e]},te={recipes:ee("recipes"),setRecipes:Object(r.b)((function(e,t){e.recipes=Object(O.a)(t)})),pumps:ee("pumps"),setPumps:Object(r.b)((function(e,t){e.pumps=Object(O.a)(t)})),calibrations:ee("calibrations"),setCalibrations:Object(r.b)((function(e,t){e.calibrations=Object(O.a)(t)})),pumpsState:ee("pumpsState"),setPumpsState:Object(r.b)((function(e,t){e.pumpsState=Object(O.a)(t)})),timeTolerance:ee("timeTolerance"),setTimeTolerance:Object(r.b)((function(e,t){e.timeTolerance=t})),wifissid:ee("wifissid"),setWifissid:Object(r.b)((function(e,t){e.wifissid=t})),wifipass:ee("wifipass"),setWifipass:Object(r.b)((function(e,t){e.wifipass=t})),pumpMessage:{},setPumpMessage:Object(r.b)((function(e,t){e.pumpMessage=t}))},ce=function(){var e=Object(s.useState)(!1),t=Object(h.a)(e,2),c=t[0],n=t[1];return Object(s.useEffect)((function(){setInterval((function(){n(navigator.onLine)}),5e3)}),[]),Object(j.jsx)(d.a,{icon:l.h,className:"wifi ".concat(c?"has-text-success":"has-text-grey")})},se=Object(r.c)(te),ne=function(){return Object(j.jsxs)(r.a,{store:se,children:[Object(j.jsx)(ce,{}),Object(j.jsx)(f,{}),Object(j.jsx)("p",{className:"success"}),Object(j.jsx)(u.a,{exact:!0,from:"/",to:"/home"}),Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)(u.d,{children:[Object(j.jsx)(u.b,{path:"/home",component:W}),Object(j.jsx)(u.b,{path:"/config",component:D}),Object(j.jsx)(u.b,{path:"/calibrate",component:_})]})})]})};i.a.render(Object(j.jsx)(a.a,{children:Object(j.jsx)(ne,{})}),document.getElementById("root"))},76:function(e,t,c){},77:function(e,t,c){}},[[134,1,2]]]);
//# sourceMappingURL=main.89963f7e.chunk.js.map