import{_ as t,a as n,b as e,c as a,i as o,s as r,d as s,S as i,e as c,t as u,f,g as l,h,j as m,k as p,l as d,m as v,n as y,o as g,p as w,q as b,r as $,u as I,v as k,w as x,x as R,y as j,z as E,A as S}from"./client.c97a7695.js";import{B as D}from"./BlogPosts.be2bc678.js";import"./Tag.d7bd3e74.js";function T(t){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,r=n(t);if(a){var s=n(this).constructor;o=Reflect.construct(r,arguments,s)}else o=r.apply(this,arguments);return e(this,o)}}function P(t){var n,e,a,o,r;return{c:function(){n=c("div"),e=c("h3"),a=u(t[0]),o=f(),r=c("div"),this.h()},l:function(s){n=l(s,"DIV",{class:!0});var i=h(n);e=l(i,"H3",{});var c=h(e);a=m(c,t[0]),c.forEach(p),o=d(i),r=l(i,"DIV",{class:!0}),h(r).forEach(p),i.forEach(p),this.h()},h:function(){v(r,"class","inline-divide svelte-bxax8q"),v(n,"class","container svelte-bxax8q")},m:function(t,s){y(t,n,s),g(n,e),g(e,a),g(n,o),g(n,r)},p:function(t,n){1&w(n,1)[0]&&b(a,t[0])},i:$,o:$,d:function(t){t&&p(n)}}}function q(t,n,e){var a=n.text;return t.$$set=function(t){"text"in t&&e(0,a=t.text)},[a]}var H=function(n){t(c,i);var e=T(c);function c(t){var n;return a(this,c),n=e.call(this),o(s(n),t,q,P,r,{text:0}),n}return c}();function z(t){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,r=n(t);if(a){var s=n(this).constructor;o=Reflect.construct(r,arguments,s)}else o=r.apply(this,arguments);return e(this,o)}}function B(t){var n,e,a,o,r,s,i,b,$,T,P,q,z,B,M;return q=new H({props:{text:"Recent"}}),B=new D({props:{posts:t[0]}}),{c:function(){n=c("meta"),e=f(),a=c("h2"),o=u("Hi! 👋"),r=f(),s=c("p"),i=u("Welcome to my personal site. My name is Simon Nyström and I work as a software\n  engineer with a primary focus on backend Java development."),b=f(),$=c("p"),T=u("This site is a place for me to drop notes and write about things that I find\n  interesting and want to learn more about. This means I won't always be writing\n  about topics that I feel like I know everything (or even a lot) about, I may\n  even sometimes write about things that aren't directly related to software\n  engineering. I am likely just learning in public, thus, you are unlikely to\n  find some sort of source of truth on this site. I hope my thoughts can offer\n  you some assistance and/or entertainment 🙂."),P=f(),I(q.$$.fragment),z=f(),I(B.$$.fragment),this.h()},l:function(t){var c=k('[data-svelte="svelte-1xwobm5"]',document.head);n=l(c,"META",{name:!0,content:!0}),c.forEach(p),e=d(t),a=l(t,"H2",{});var u=h(a);o=m(u,"Hi! 👋"),u.forEach(p),r=d(t),s=l(t,"P",{class:!0});var f=h(s);i=m(f,"Welcome to my personal site. My name is Simon Nyström and I work as a software\n  engineer with a primary focus on backend Java development."),f.forEach(p),b=d(t),$=l(t,"P",{class:!0});var v=h($);T=m(v,"This site is a place for me to drop notes and write about things that I find\n  interesting and want to learn more about. This means I won't always be writing\n  about topics that I feel like I know everything (or even a lot) about, I may\n  even sometimes write about things that aren't directly related to software\n  engineering. I am likely just learning in public, thus, you are unlikely to\n  find some sort of source of truth on this site. I hope my thoughts can offer\n  you some assistance and/or entertainment 🙂."),v.forEach(p),P=d(t),x(q.$$.fragment,t),z=d(t),x(B.$$.fragment,t),this.h()},h:function(){document.title="Simon Nyström's Space",v(n,"name","description"),v(n,"content","Blog posts and notes from a software engineer with an interest in always learning new skills and technologies and to share my knowledge."),v(s,"class","svelte-56scz7"),v($,"class","intro2 svelte-56scz7")},m:function(t,c){g(document.head,n),y(t,e,c),y(t,a,c),g(a,o),y(t,r,c),y(t,s,c),g(s,i),y(t,b,c),y(t,$,c),g($,T),y(t,P,c),R(q,t,c),y(t,z,c),R(B,t,c),M=!0},p:function(t,n){var e={};1&w(n,1)[0]&&(e.posts=t[0]),B.$set(e)},i:function(t){M||(j(q.$$.fragment,t),j(B.$$.fragment,t),M=!0)},o:function(t){E(q.$$.fragment,t),E(B.$$.fragment,t),M=!1},d:function(t){p(n),t&&p(e),t&&p(a),t&&p(r),t&&p(s),t&&p(b),t&&p($),t&&p(P),S(q,t),t&&p(z),S(B,t)}}}function M(t){t.params,t.query;return this.fetch("blog.json").then((function(t){return t.json()})).then((function(t){return{posts:t}}))}function N(t,n,e){var a=n.posts;return t.$$set=function(t){"posts"in t&&e(0,a=t.posts)},[a]}var A=function(n){t(c,i);var e=z(c);function c(t){var n;return a(this,c),n=e.call(this),o(s(n),t,N,B,r,{posts:0}),n}return c}();export default A;export{M as preload};
