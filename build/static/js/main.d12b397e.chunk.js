(this.webpackJsonpft_esim6=this.webpackJsonpft_esim6||[]).push([[0],{42:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var r=n(17),c=n.n(r),a=n(4),o=n.n(a),i=n(5),s=n(8),u=n(3),l=n(1),j=n.n(l),b=n(0),d=function(e){var t=e.note,n=e.toggleImportance,r=t.important?"make not important":"make important";return Object(b.jsxs)("li",{class:"note",children:[t.content,Object(b.jsx)("button",{onClick:n,children:r})]})},f=function(e){var t=e.message;return null===t?null:Object(b.jsx)("div",{className:"error",children:t})},p=function(e){var t=e.handleSubmit,n=e.handleUsernameChange,r=e.handlePasswordChange,c=e.username,a=e.password;return Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:"Login"}),Object(b.jsxs)("form",{onSubmit:t,children:[Object(b.jsxs)("div",{children:["username",Object(b.jsx)("input",{value:c,onChange:n})]}),Object(b.jsxs)("div",{children:["password",Object(b.jsx)("input",{type:"password",value:a,onChange:r})]}),Object(b.jsx)("button",{type:"submit",children:"login"})]})]})},h=function(e){var t=e.createNote,n=Object(l.useState)(""),r=Object(u.a)(n,2),c=r[0],a=r[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:"Create a new note"}),Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t({content:c,important:Math.random()>.5}),a("")},children:[Object(b.jsx)("input",{value:c,onChange:function(e){a(e.target.value)}}),Object(b.jsx)("button",{type:"submit",children:"save"})]})]})},O=j.a.forwardRef((function(e,t){var n=Object(l.useState)(!1),r=Object(u.a)(n,2),c=r[0],a=r[1],o={display:c?"none":""},i={display:c?"":"none"},s=function(){a(!c)};return Object(l.useImperativeHandle)(t,(function(){return{toggleVisibility:s}})),Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{style:o,children:Object(b.jsx)("button",{onClick:s,children:e.buttonLabel})}),Object(b.jsxs)("div",{style:i,children:[e.children,Object(b.jsx)("button",{onClick:s,children:"cancel"})]})]})})),m=function(){return Object(b.jsxs)("div",{style:{color:"green",fontStyle:"italic",fontSize:16},children:[Object(b.jsx)("br",{}),Object(b.jsx)("em",{children:"Note app, Department of Computer Science, University of Helsinki 2021"})]})},v=n(6),g=n.n(v),x={login:function(){var e=Object(i.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.post("/api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},w="/api/notes",S=null,k={getAll:function(){return g.a.get(w).then((function(e){return e.data}))},create:function(){var e=Object(i.a)(o.a.mark((function e(t){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:S}},e.next=3,g.a.post(w,t,n);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),update:function(e,t){return g.a.put("".concat(w,"/").concat(e),t).then((function(e){return e.data}))},setToken:function(e){S="bearer ".concat(e)}},y=function(){var e=Object(l.useState)([]),t=Object(u.a)(e,2),n=t[0],r=t[1],c=Object(l.useState)(!0),a=Object(u.a)(c,2),j=a[0],v=a[1],g=Object(l.useState)(null),w=Object(u.a)(g,2),S=w[0],y=w[1],C=Object(l.useState)(""),N=Object(u.a)(C,2),I=N[0],T=N[1],U=Object(l.useState)(""),J=Object(u.a)(U,2),L=J[0],A=J[1],D=Object(l.useState)(null),E=Object(u.a)(D,2),z=E[0],H=E[1];Object(l.useEffect)((function(){k.getAll().then((function(e){r(e)}))}),[]),Object(l.useEffect)((function(){var e=window.localStorage.getItem("loggedNoteappUser");if(e){var t=JSON.parse(e);H(t),k.setToken(t.token)}}),[]);var P=function(e){_.current.toggleVisibility(),k.create(e).then((function(e){r(n.concat(e))}))},R=j?n:n.filter((function(e){return e.important}));console.log("notesToShow",R);var V=function(){var e=Object(i.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log("logging in with",I,L),e.prev=2,e.next=5,x.login({username:I,password:L});case 5:n=e.sent,window.localStorage.setItem("loggedNoteappUser",JSON.stringify(n)),k.setToken(n.token),H(n),T(""),A(""),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(2),y("wrong credentials"),setTimeout((function(){y(null)}),5e3);case 17:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(t){return e.apply(this,arguments)}}(),_=Object(l.useRef)();return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"Notes"}),Object(b.jsx)(f,{message:S}),null===z?Object(b.jsx)(O,{buttonLabel:"log in",children:Object(b.jsx)(p,{username:I,password:L,handleUsernameChange:function(e){var t=e.target;return T(t.value)},handlePasswordChange:function(e){var t=e.target;return A(t.value)},handleSubmit:V})}):Object(b.jsxs)("div",{children:[Object(b.jsxs)("p",{children:[z.name," logged in"]}),Object(b.jsx)(O,{buttonLabel:"new note",ref:_,children:Object(b.jsx)(h,{createNote:P})})]}),Object(b.jsx)("div",{children:Object(b.jsxs)("button",{onClick:function(){return v(!j)},children:["show ",j?"important":"all"]})}),Object(b.jsx)("ul",{children:R.map((function(e){return Object(b.jsx)(d,{note:e,toggleImportance:function(){return function(e){var t=n.find((function(t){return t.id===e})),c=Object(s.a)(Object(s.a)({},t),{},{important:!t.important});k.update(e,c).then((function(t){r(n.map((function(n){return n.id!==e?n:t})))})).catch((function(c){y("Note '".concat(t.content,"' was already removed from server")),setTimeout((function(){y(null)}),5e3),r(n.filter((function(t){return t.id!==e})))}))}(e.id)}},e.id)}))}),Object(b.jsx)(m,{})]})};n(42);c.a.render(Object(b.jsx)(y,{}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.d12b397e.chunk.js.map