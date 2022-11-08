"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[249],{4502:function(n,e,t){t.d(e,{Hx:function(){return v},Tg:function(){return s},Y5:function(){return h},bI:function(){return f},xc:function(){return x}});var r=t(5861),c=t(4687),u=t.n(c),a=t(1044),o="https://api.themoviedb.org/3/",i="45b0d9a735c6cd370fbf9bc7890ca93c";function s(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(u().mark((function n(){var e,t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,a.ZP.get("trending/all/day?api_key=".concat(i));case 3:return e=n.sent,t=e.data,n.abrupt("return",t);case 8:return n.prev=8,n.t0=n.catch(0),n.abrupt("return",n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}function f(n,e){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(u().mark((function n(e,t){var r,c;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(o,"search/movie?api_key=").concat(i,"&language=en-US&query=").concat(e,"&page=").concat(t,"&include_adult=false"));case 3:return r=n.sent,n.next=6,r.json();case 6:return c=n.sent,n.abrupt("return",c);case 10:return n.prev=10,n.t0=n.catch(0),n.abrupt("return",n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})))).apply(this,arguments)}function h(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(u().mark((function n(e){var t,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(o,"movie/").concat(e,"?api_key=").concat(i,"&language=en-US"));case 3:return t=n.sent,n.next=6,t.json();case 6:return r=n.sent,n.abrupt("return",r);case 10:return n.prev=10,n.t0=n.catch(0),n.abrupt("return",n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})))).apply(this,arguments)}function x(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(u().mark((function n(e){var t,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(o,"movie/").concat(e,"/credits?api_key=").concat(i,"&language=en-US"));case 3:return t=n.sent,n.next=6,t.json();case 6:return r=n.sent,n.abrupt("return",r);case 10:return n.prev=10,n.t0=n.catch(0),n.abrupt("return",n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})))).apply(this,arguments)}function v(n,e){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(u().mark((function n(e,t){var r,c;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(o,"movie/").concat(e,"/reviews?api_key=").concat(i,"&language=en-US&page=").concat(t));case 3:return r=n.sent,n.next=6,r.json();case 6:return c=n.sent,n.abrupt("return",c);case 10:return n.prev=10,n.t0=n.catch(0),n.abrupt("return",n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})))).apply(this,arguments)}a.ZP.defaults.baseURL=o},9055:function(n,e,t){t.d(e,{x:function(){return u}});var r=t(3081),c=t(407),u=(0,r.Z)("div")(c.$_,c.Dh,c.bK,c.GQ,c.Oq,c.Cg,c.FK,c.eC)},4691:function(n,e,t){t.r(e),t.d(e,{default:function(){return C}});var r,c,u,a,o,i,s=t(885),p=t(2791),f=t(6731),l=t(7689),h=t(7692),d=t(5264),x=t(8966),m=t(9055),v=t(4502),g=t(168),b=t(3081),y=b.Z.form(r||(r=(0,g.Z)(["\n  display: flex;\n  align-items: center;\n  gap: ","px;\n"])),(function(n){return n.theme.space[3]})),Z=b.Z.input(c||(c=(0,g.Z)(["\n  width: ","px;\n  height: ","px;\n\n  padding: ","px ","px;\n\n  border: 1px solid ",";\n  border-radius: 20px;\n\n  &&:focus-within {\n    outline: 2px solid ",";\n  }\n"])),(function(n){return n.theme.space[8]}),(function(n){return n.theme.space[5]}),(function(n){return n.theme.space[2]}),(function(n){return n.theme.space[4]}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.accent})),j=b.Z.button(u||(u=(0,g.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: ","px;\n\n  height: ","px;\n\n  padding: ","px ","px;\n\n  background-color: ",";\n\n  border: 1px solid ",";\n  border-radius: 20px;\n\n  &&:hover,\n  &&:focus {\n    color: ",";\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.space[2]}),(function(n){return n.theme.space[5]}),(function(n){return n.theme.space[2]}),(function(n){return n.theme.space[4]}),(function(n){return n.theme.colors.mainBg}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.mainBg}),(function(n){return n.theme.colors.accent})),w=b.Z.ul(a||(a=(0,g.Z)(["\n  margin-top: ","px;\n  margin-left: ","px;\n"])),(function(n){return n.theme.space[2]}),(function(n){return n.theme.space[4]})),k=b.Z.li(o||(o=(0,g.Z)(["\n  display: flex;\n  align-items: center;\n  gap: ","px;\n\n  padding: ","px;\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[1]})),_=(0,b.Z)(f.OL)(i||(i=(0,g.Z)(["\n  padding: ","px;\n\n  &&:hover,\n  &&:focus {\n    outline: 1px solid ",";\n    border-radius: 5px;\n  }\n"])),(function(n){return n.theme.space[2]}),(function(n){return n.theme.colors.accent})),S=t(184);function C(){var n=(0,f.lr)(),e=(0,s.Z)(n,2),t=e[0],r=e[1],c=(0,p.useState)(null),u=(0,s.Z)(c,2),a=u[0],o=u[1],i=(0,p.useState)((function(){var n;return null!==(n=t.get("query"))&&void 0!==n?n:""})),g=(0,s.Z)(i,2),b=g[0],C=g[1],I=(0,p.useState)(!1),U=(0,s.Z)(I,2),q=U[0],F=U[1],B=(0,l.TH)();return(0,p.useEffect)((function(){""!==b&&(0,v.bI)(b,1).then((function(n){o(n.results)}))}),[]),(0,S.jsx)(m.x,{p:20,children:q?(0,S.jsx)(x.g4,{color:"#dc758a"}):(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)(y,{onSubmit:function(n){n.preventDefault(),F(!0);var e=n.target.searchMovie.value.trim();if(""===e)return F(!1),void d.Notify.failure("Input something :)");r({query:e}),(0,v.bI)(e,1).then((function(n){if(0===n.results.length)return F(!1),void d.Notify.failure("We do not nothing :(");o(n.results),F(!1)}))},children:[(0,S.jsx)("label",{children:(0,S.jsx)(Z,{type:"text",placeholder:"Input name movie",name:"searchMovie",value:b,onChange:function(n){C(n.target.value)}})}),(0,S.jsxs)(j,{type:"submit",children:[(0,S.jsx)(h.Goc,{}),(0,S.jsx)("span",{children:"Search"})]})]}),a&&(0,S.jsx)(w,{children:a.map((function(n){return(0,S.jsxs)(k,{children:[(0,S.jsx)(h.FXJ,{color:"#dc758a"}),(0,S.jsx)(_,{to:"".concat(n.id),state:B,children:n.title||n.name})]},n.id)}))})]})})}}}]);
//# sourceMappingURL=Movies.45bed401.chunk.js.map