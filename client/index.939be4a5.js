import{S as s,i as t,s as a,a as e,m as o,q as n,f as r,g as p,o as i,j as c,p as m,r as f,u as h,v as l}from"./client.b58845a8.js";import{B as u}from"./BlogPosts.d659c27d.js";import"./Tag.adeaa3a3.js";function $(s){let t,a,$;return a=new u({props:{posts:s[0]}}),{c(){t=e(),o(a.$$.fragment),this.h()},l(s){n('[data-svelte="svelte-10h7psl"]',document.head).forEach(r),t=p(s),i(a.$$.fragment,s),this.h()},h(){document.title="Blog"},m(s,e){c(s,t,e),m(a,s,e),$=!0},p(s,[t]){const e={};1&t&&(e.posts=s[0]),a.$set(e)},i(s){$||(f(a.$$.fragment,s),$=!0)},o(s){h(a.$$.fragment,s),$=!1},d(s){s&&r(t),l(a,s)}}}function d({params:s,query:t}){return this.fetch("blog.json").then(s=>s.json()).then(s=>({posts:s}))}function g(s,t,a){let{posts:e}=t;return s.$$set=s=>{"posts"in s&&a(0,e=s.posts)},[e]}export default class extends s{constructor(s){super(),t(this,s,g,$,a,{posts:0})}}export{d as preload};
