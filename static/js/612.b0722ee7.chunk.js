"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[612],{4322:function(r,n,e){e.d(n,{Q:function(){return t}});var t={idle:"idle",loading:"loading",success:"success",error:"error"}},8612:function(r,n,e){e.r(n),e.d(n,{default:function(){return Z}});var t,a,u,c=e(5861),i=e(9439),s=e(7757),o=e.n(s),p=e(2791),f=e(6299),d=e(1087),v=e(7689),l=e(168),h=e(6444),m=h.ZP.li(t||(t=(0,l.Z)(["\n  padding: 4px;\n"]))),x=e(184),g=function(r){var n=r.movies,e=(0,v.TH)();return(0,x.jsx)("ul",{children:n.map((function(r){var n=r.id,t=r.title;return(0,x.jsx)(m,{children:(0,x.jsx)(d.rU,{to:"movies/".concat(n),state:{from:e},children:t})},n)}))})},w=e(4322),k=h.ZP.div(a||(a=(0,l.Z)(["\n  padding: 24px 48px;\n"]))),y=h.ZP.h2(u||(u=(0,l.Z)(["\n  margin-bottom: 16px;\n"]))),Z=function(){var r=(0,p.useState)([]),n=(0,i.Z)(r,2),e=n[0],t=n[1],a=(0,p.useState)(w.Q.idle),u=(0,i.Z)(a,2),s=u[0],d=u[1];(0,p.useEffect)((function(){var r=function(){var r=(0,c.Z)(o().mark((function r(){var n;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return d(w.Q.loading),r.prev=1,r.next=4,(0,f.wr)();case 4:n=r.sent,v(n),r.next=12;break;case 8:r.prev=8,r.t0=r.catch(1),console.log(r.t0),d(w.Q.error);case 12:case"end":return r.stop()}}),r,null,[[1,8]])})));return function(){return r.apply(this,arguments)}}();r()}),[]);var v=function(r){var n=r.map((function(r){return{id:r.id,title:r.original_title}}));t(n),d(w.Q.success)};return(0,x.jsxs)(k,{children:[s===w.Q.error&&(0,x.jsx)(y,{children:"NOT FOUND"}),s===w.Q.loading&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(y,{children:"Trending today"}),(0,x.jsx)("p",{children:"Loading..."})]}),s===w.Q.success&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(y,{children:"Trending today"}),(0,x.jsx)(g,{movies:e})]})]})}},6299:function(r,n,e){e.d(n,{IV:function(){return f},Sg:function(){return p},bI:function(){return o},wH:function(){return d},wr:function(){return s}});var t=e(5861),a=e(7757),u=e.n(a),c=e(3263).Z.create({baseURL:"https://api.themoviedb.org/3/"}),i="51cea464d1158e7d34cacf903de39a42",s=function(){var r=(0,t.Z)(u().mark((function r(){var n,e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.get("trending/movie/day",{params:{api_key:i}});case 2:return n=r.sent,e=n.data.results,r.abrupt("return",e);case 5:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),o=function(){var r=(0,t.Z)(u().mark((function r(n){var e,t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.get("search/movie",{params:{api_key:i,query:n}});case 2:return e=r.sent,t=e.data.results,r.abrupt("return",t);case 5:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}(),p=function(){var r=(0,t.Z)(u().mark((function r(n){var e,t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.get("movie/".concat(n),{params:{api_key:i}});case 2:return e=r.sent,t=e.data,r.abrupt("return",t);case 5:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}(),f=function(){var r=(0,t.Z)(u().mark((function r(n){var e,t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.get("movie/".concat(n,"/credits"),{params:{api_key:i}});case 2:return e=r.sent,t=e.data.cast,r.abrupt("return",t);case 5:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}(),d=function(){var r=(0,t.Z)(u().mark((function r(n){var e,t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.get("movie/".concat(n,"/reviews"),{params:{api_key:i}});case 2:return e=r.sent,t=e.data.results,r.abrupt("return",t);case 5:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}()}}]);
//# sourceMappingURL=612.b0722ee7.chunk.js.map