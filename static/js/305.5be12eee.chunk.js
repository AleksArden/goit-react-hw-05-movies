"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[305],{4322:function(e,r,t){t.d(r,{Q:function(){return n}});var n={idle:"idle",loading:"loading",success:"success",error:"error"}},5305:function(e,r,t){t.r(r),t.d(r,{default:function(){return k}});var n,a,i=t(5861),u=t(9439),c=t(7757),s=t.n(c),o=t(2791),p=t(1087),f=t(7689),l=t(168),d=t(6444),v=d.ZP.form(n||(n=(0,l.Z)(["\n  padding-left: 24px;\n  padding-top: 24px;\n"]))),h=d.ZP.input(a||(a=(0,l.Z)(["\n  width: 300px;\n"]))),m=t(6299),x=t(4322),g=t(1686),y=t.n(g),w=t(184);y().Notify.init({width:"400px",fontSize:"20px",cssAnimationStyl:"zoom",position:"center-center"});var k=function(){var e=(0,o.useState)(x.Q.idle),r=(0,u.Z)(e,2),t=r[0],n=r[1],a=(0,p.lr)(),c=(0,u.Z)(a,2),l=c[0],d=c[1],g=(0,o.useState)([]),k=(0,u.Z)(g,2),b=k[0],Z=k[1],_=l.get("query"),j=(0,f.TH)();(0,o.useEffect)((function(){if(_&&""!==_){var e=function(){var e=(0,i.Z)(s().mark((function e(){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(x.Q.loading),e.prev=1,e.next=4,(0,m.bI)(_);case 4:r=e.sent,Q(r),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0),n(x.Q.error);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}();e()}}),[_]);var Q=function(e){if(0===e.length)return y().Notify.failure("Sorry, there are no images matching your search query. Please try again."),void n(x.Q.idle);var r=e.map((function(e){return{id:e.id,title:e.original_title}}));Z(r),n(x.Q.success)};return(0,w.jsxs)("div",{children:[(0,w.jsxs)(v,{onSubmit:function(e){e.preventDefault();var r=e.target.elements.search.value;""===r&&y().Notify.info("Please, fill in the search field!"),Z([]),d({query:r})},children:[(0,w.jsx)(h,{type:"text",autoComplete:"off",name:"search"}),(0,w.jsx)("button",{type:"submit",children:"Search"})]}),t===x.Q.error&&(0,w.jsx)("h2",{children:"NOT FOUND"}),t===x.Q.loading&&(0,w.jsx)("p",{children:"Loading..."}),(0,w.jsx)("ul",{children:b&&b.map((function(e){var r=e.id,t=e.title;return(0,w.jsx)("li",{children:(0,w.jsx)(p.rU,{to:"".concat(r),state:{from:j},children:t})},r)}))})]})}},6299:function(e,r,t){t.d(r,{IV:function(){return f},Sg:function(){return p},bI:function(){return o},wH:function(){return l},wr:function(){return s}});var n=t(5861),a=t(7757),i=t.n(a),u=t(3263).Z.create({baseURL:"https://api.themoviedb.org/3/"}),c="51cea464d1158e7d34cacf903de39a42",s=function(){var e=(0,n.Z)(i().mark((function e(){var r,t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("trending/movie/day",{params:{api_key:c}});case 2:return r=e.sent,t=r.data.results,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(i().mark((function e(r){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("search/movie",{params:{api_key:c,query:r}});case 2:return t=e.sent,n=t.data.results,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(i().mark((function e(r){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("movie/".concat(r),{params:{api_key:c}});case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(i().mark((function e(r){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("movie/".concat(r,"/credits"),{params:{api_key:c}});case 2:return t=e.sent,n=t.data.cast,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(i().mark((function e(r){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("movie/".concat(r,"/reviews"),{params:{api_key:c}});case 2:return t=e.sent,n=t.data.results,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=305.5be12eee.chunk.js.map