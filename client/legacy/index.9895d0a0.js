import{_ as t,a as n,b as s,c as r,i as e,d as o,S as c,s as a,f as u,u as f,v as i,k as p,l,w as h,n as m,x as v,p as $,y as d,z as g,A as y}from"./client.95e666bf.js";import{B as b}from"./BlogPosts.6cf5ccb2.js";import"./Tag.e63be5c6.js";function j(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,o=n(t);if(r){var c=n(this).constructor;e=Reflect.construct(o,arguments,c)}else e=o.apply(this,arguments);return s(this,e)}}function R(t){var n,s,r;return s=new b({props:{posts:t[0]}}),{c:function(){n=u(),f(s.$$.fragment),this.h()},l:function(t){i('[data-svelte="svelte-10h7psl"]',document.head).forEach(p),n=l(t),h(s.$$.fragment,t),this.h()},h:function(){document.title="Blog"},m:function(t,e){m(t,n,e),v(s,t,e),r=!0},p:function(t,n){var r={};1&$(n,1)[0]&&(r.posts=t[0]),s.$set(r)},i:function(t){r||(d(s.$$.fragment,t),r=!0)},o:function(t){g(s.$$.fragment,t),r=!1},d:function(t){t&&p(n),y(s,t)}}}function x(t){t.params,t.query;return this.fetch("blog.json").then((function(t){return t.json()})).then((function(t){return{posts:t}}))}function B(t,n,s){var r=n.posts;return t.$$set=function(t){"posts"in t&&s(0,r=t.posts)},[r]}var w=function(n){t(u,c);var s=j(u);function u(t){var n;return r(this,u),n=s.call(this),e(o(n),t,B,R,a,{posts:0}),n}return u}();export default w;export{x as preload};
