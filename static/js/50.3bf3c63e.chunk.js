"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[50],{9198:function(e,t,n){n.d(t,{W:function(){return u}});var r=n(8861),a=n(184),u=function(e){var t=e.children;return(0,a.jsx)(r.t,{children:t})}},50:function(e,t,n){n.r(t),n.d(t,{default:function(){return c}});var r=n(885),a=n(2791),u=n(9434),s=n(5984),i=n(8724),o=n(9198),l=n(184);function c(){var e=(0,a.useMemo)((function(){return(0,s.x0)()}),[]),t=(0,a.useMemo)((function(){return(0,s.x0)()}),[]),n=(0,a.useMemo)((function(){return(0,s.x0)()}),[]),c=(0,u.I0)(),d=(0,a.useState)(""),m=(0,r.Z)(d,2),h=m[0],p=m[1],f=(0,a.useState)(""),x=(0,r.Z)(f,2),v=x[0],g=x[1],j=(0,a.useState)(""),w=(0,r.Z)(j,2),b=w[0],y=w[1],C=function(e){var t=e.target,n=t.name,r=t.value;switch(n){case"name":return p(r);case"email":return g(r);case"password":return y(r);default:return}};return(0,l.jsxs)(o.W,{children:[(0,l.jsx)("h1",{children:"Registration form"}),(0,l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),c(i.Z.register({name:h,email:v,password:b})),p(""),g(""),y("")},children:[(0,l.jsxs)("label",{htmlFor:e,children:["Name",(0,l.jsx)("input",{value:h,onChange:C,id:e,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,l.jsxs)("label",{htmlFor:t,children:["E-mail",(0,l.jsx)("input",{value:v,onChange:C,id:t,type:"email",name:"email",required:!0})]}),(0,l.jsxs)("label",{htmlFor:n,children:["Password",(0,l.jsx)("input",{value:b,onChange:C,id:n,type:"password",name:"password",required:!0})]}),(0,l.jsx)("button",{type:"submit",children:"Register"})]})]})}},5984:function(e,t,n){n.d(t,{x0:function(){return r}});var r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,t){return e+=(t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_"}),"")}}}]);
//# sourceMappingURL=50.3bf3c63e.chunk.js.map