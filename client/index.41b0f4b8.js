import{S as e,i as t,s as r,e as s,l as a,c as o,p as l,q as n,f as c,a as h,b as i,u as g,w as f,o as u,B as p,C as d,r as m,d as v,z as y}from"./client.3521573c.js";function b(e,t,r){const s=e.slice();return s[1]=t[r],s}function B(e){let t,r,u,p,d=e[1]+"";return{c(){t=s("li"),r=s("a"),u=a(d),this.h()},l(e){t=o(e,"LI",{});var s=l(t);r=o(s,"A",{rel:!0,href:!0});var a=l(r);u=n(a,d),a.forEach(c),s.forEach(c),this.h()},h(){h(r,"rel","prefetch"),h(r,"href",p="blog/category/"+e[1])},m(e,s){i(e,t,s),g(t,r),g(r,u)},p(e,t){1&t&&d!==(d=e[1]+"")&&f(u,d),1&t&&p!==(p="blog/category/"+e[1])&&h(r,"href",p)},d(e){e&&c(t)}}}function E(e){let t,r,h,f,E,j=e[0],x=[];for(let t=0;t<j.length;t+=1)x[t]=B(b(e,j,t));return{c(){t=u(),r=s("h2"),h=a("Blog / Categories"),f=u();for(let e=0;e<x.length;e+=1)x[e].c();E=p(),this.h()},l(e){d('[data-svelte="svelte-10h7psl"]',document.head).forEach(c),t=m(e),r=o(e,"H2",{});var s=l(r);h=n(s,"Blog / Categories"),s.forEach(c),f=m(e);for(let t=0;t<x.length;t+=1)x[t].l(e);E=p(),this.h()},h(){document.title="Blog"},m(e,s){i(e,t,s),i(e,r,s),g(r,h),i(e,f,s);for(let t=0;t<x.length;t+=1)x[t].m(e,s);i(e,E,s)},p(e,[t]){if(1&t){let r;for(j=e[0],r=0;r<j.length;r+=1){const s=b(e,j,r);x[r]?x[r].p(s,t):(x[r]=B(s),x[r].c(),x[r].m(E.parentNode,E))}for(;r<x.length;r+=1)x[r].d(1);x.length=j.length}},i:v,o:v,d(e){e&&c(t),e&&c(r),e&&c(f),y(x,e),e&&c(E)}}}function j({params:e,query:t}){return this.fetch("blog/category/category.json").then((e=>e.json())).then((e=>({categories:[e]})))}function x(e,t,r){let{categories:s}=t;return e.$$set=e=>{"categories"in e&&r(0,s=e.categories)},[s]}export default class extends e{constructor(e){super(),t(this,e,x,E,r,{categories:0})}}export{j as preload};
