import{_ as t,a as n,b as r,c as s,i as e,d as a,S as o,s as c,f,g as u,q as i,j as p,k as l,n as h,r as $,u as m,v as g,w as v,x as d,y}from"./client.27168b57.js";import{H as j,B as R}from"./H3.579baa52.js";import"./Tag.a702b419.js";function b(t){var s=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,a=n(t);if(s){var o=n(this).constructor;e=Reflect.construct(a,arguments,o)}else e=a.apply(this,arguments);return r(this,e)}}function x(t){var n,r,s,e,a;return r=new j({props:{text:"Recent"}}),e=new R({props:{posts:t[0]}}),{c:function(){n=f(),u(r.$$.fragment),s=f(),u(e.$$.fragment),this.h()},l:function(t){i('[data-svelte="svelte-10h7psl"]',document.head).forEach(p),n=l(t),h(r.$$.fragment,t),s=l(t),h(e.$$.fragment,t),this.h()},h:function(){document.title="Blog"},m:function(t,o){$(t,n,o),m(r,t,o),$(t,s,o),m(e,t,o),a=!0},p:function(t,n){var r={};1&g(n,1)[0]&&(r.posts=t[0]),e.$set(r)},i:function(t){a||(v(r.$$.fragment,t),v(e.$$.fragment,t),a=!0)},o:function(t){d(r.$$.fragment,t),d(e.$$.fragment,t),a=!1},d:function(t){t&&p(n),y(r,t),t&&p(s),y(e,t)}}}function w(t){t.params,t.query;return this.fetch("blog.json").then((function(t){return t.json()})).then((function(t){return{posts:t}}))}function q(t,n,r){var s=n.posts;return t.$$set=function(t){"posts"in t&&r(0,s=t.posts)},[s]}var B=function(n){t(f,o);var r=b(f);function f(t){var n;return s(this,f),n=r.call(this),e(a(n),t,q,x,c,{posts:0}),n}return f}();export default B;export{w as preload};
