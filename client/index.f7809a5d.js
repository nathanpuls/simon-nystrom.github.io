import{S as s,i as t,s as o,a,m as e,q as n,f as r,g as p,o as f,j as i,p as c,r as m,u as h,v as l}from"./client.1da4facb.js";import{B as u}from"./BlogPosts.60df08f2.js";import"./Tag.8451278b.js";function $(s){let t,o,$;return o=new u({props:{posts:s[0]}}),{c(){t=a(),e(o.$$.fragment),this.h()},l(s){n('[data-svelte="svelte-10h7psl"]',document.head).forEach(r),t=p(s),f(o.$$.fragment,s),this.h()},h(){document.title="Blog"},m(s,a){i(s,t,a),c(o,s,a),$=!0},p(s,[t]){const a={};1&t&&(a.posts=s[0]),o.$set(a)},i(s){$||(m(o.$$.fragment,s),$=!0)},o(s){h(o.$$.fragment,s),$=!1},d(s){s&&r(t),l(o,s)}}}function d({params:s,query:t}){return this.fetch("blog.json").then(s=>s.json()).then(s=>({posts:s}))}function g(s,t,o){let{posts:a}=t;return s.$$set=s=>{"posts"in s&&o(0,a=s.posts)},[a]}export default class extends s{constructor(s){super(),t(this,s,g,$,o,{posts:0})}}export{d as preload};