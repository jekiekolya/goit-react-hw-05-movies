"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[753],{4502:function(n,e,t){t.d(e,{Hx:function(){return m},Tg:function(){return p},Y5:function(){return l},bI:function(){return f},xc:function(){return x}});var r=t(5861),c=t(4687),a=t.n(c),u=t(1044),s="https://api.themoviedb.org/3/",o="45b0d9a735c6cd370fbf9bc7890ca93c";function p(){return i.apply(this,arguments)}function i(){return(i=(0,r.Z)(a().mark((function n(){var e,t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.ZP.get("trending/all/day?api_key=".concat(o));case 3:return e=n.sent,t=e.data,n.abrupt("return",t);case 8:return n.prev=8,n.t0=n.catch(0),n.abrupt("return",n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}function f(n,e){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(a().mark((function n(e,t){var r,c;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(s,"search/movie?api_key=").concat(o,"&language=en-US&query=").concat(e,"&page=").concat(t,"&include_adult=false"));case 3:return r=n.sent,n.next=6,r.json();case 6:return c=n.sent,n.abrupt("return",c);case 10:return n.prev=10,n.t0=n.catch(0),n.abrupt("return",n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})))).apply(this,arguments)}function l(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(s,"movie/").concat(e,"?api_key=").concat(o,"&language=en-US"));case 3:return t=n.sent,n.next=6,t.json();case 6:return r=n.sent,n.abrupt("return",r);case 10:return n.prev=10,n.t0=n.catch(0),n.abrupt("return",n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})))).apply(this,arguments)}function x(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(s,"movie/").concat(e,"/credits?api_key=").concat(o,"&language=en-US"));case 3:return t=n.sent,n.next=6,t.json();case 6:return r=n.sent,n.abrupt("return",r);case 10:return n.prev=10,n.t0=n.catch(0),n.abrupt("return",n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})))).apply(this,arguments)}function m(n,e){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(a().mark((function n(e,t){var r,c;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(s,"movie/").concat(e,"/reviews?api_key=").concat(o,"&language=en-US&page=").concat(t));case 3:return r=n.sent,n.next=6,r.json();case 6:return c=n.sent,n.abrupt("return",c);case 10:return n.prev=10,n.t0=n.catch(0),n.abrupt("return",n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})))).apply(this,arguments)}u.ZP.defaults.baseURL=s},4387:function(n,e,t){t.r(e),t.d(e,{default:function(){return v}});var r,c,a,u=t(885),s=t(4502),o=t(2791),p=t(7689),i=t(168),f=t(3081),h=f.Z.ul(r||(r=(0,i.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: ","px;\n\n  margin-top: ","px;\n  padding: ","px;\n  border: 1px solid ",";\n  border-radius: 20px;\n"])),(function(n){return n.theme.space[4]}),(function(n){return n.theme.space[4]}),(function(n){return n.theme.space[4]}),(function(n){return n.theme.colors.accent})),l=f.Z.li(c||(c=(0,i.Z)(["\n  display: flex;\n  flex-direction: column;\n\n  width: 100%;\n  gap: ","px;\n\n  padding: ","px;\n  border: 1px solid ",";\n  border-radius: 20px;\n  box-shadow: 5px 5px 10px -5px rgba(64, 64, 64, 0.75);\n"])),(function(n){return n.theme.space[4]}),(function(n){return n.theme.space[4]}),(function(n){return n.theme.colors.accent})),d=f.Z.h2(a||(a=(0,i.Z)(["\n  margin-top: ","px;\n  padding: ","px;\n"])),(function(n){return n.theme.space[4]}),(function(n){return n.theme.space[4]})),x=t(184);function v(){var n=(0,o.useState)(null),e=(0,u.Z)(n,2),t=e[0],r=e[1],c=(0,p.UO)().movieId;return(0,o.useEffect)((function(){(0,s.Hx)(c,1).then((function(n){r(n.results)}))}),[c]),t&&t.length>0?(0,x.jsx)(h,{children:t.map((function(n){return(0,x.jsxs)(l,{children:[(0,x.jsxs)("h3",{children:["Author: ",n.author]}),(0,x.jsx)("p",{children:n.content})]},n.id)}))}):(0,x.jsx)(d,{children:"We don't have any reviews for this movie."})}}}]);
//# sourceMappingURL=Reviews.089b237c.chunk.js.map