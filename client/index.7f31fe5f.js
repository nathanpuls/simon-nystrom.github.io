import{S as e,i as t,s as n,e as a,a as s,t as o,c as r,q as i,b as m,d as l,f as c,g as h,h as f,j as u,k as p,l as d,m as g,n as w,o as y,p as b,r as $}from"./client.aeff4ad0.js";import{H as v,B as I}from"./H3.a67bd312.js";import"./Tag.1fc48abb.js";function k(e){let t,n,k,j,T,x,E,H,S,M,N,q,z,B,J;return q=new v({props:{text:"Recent"}}),B=new I({props:{posts:e[0]}}),{c(){t=a("meta"),n=s(),k=a("h2"),j=o("Hi! 👋"),T=s(),x=a("p"),E=o("Welcome to my personal site. My name is Simon Nyström and I work as a software\n  engineer with a primary focus on backend Java development."),H=s(),S=a("p"),M=o("This site is a place for me to drop notes and write about things that I find\n  interesting and want to learn more about. This means I won't always be writing\n  about topics that I feel like I know everything (or even a lot) about, I may\n  even sometimes write about things that aren't directly related to software\n  engineering. I am likely just learning in public, thus, you are unlikely to\n  find some sort of source of truth on this site. I hope my thoughts can offer\n  you some assistance and/or entertainment 🙂."),N=s(),r(q.$$.fragment),z=s(),r(B.$$.fragment),this.h()},l(e){const a=i('[data-svelte="svelte-1xwobm5"]',document.head);t=m(a,"META",{name:!0,content:!0}),a.forEach(l),n=c(e),k=m(e,"H2",{});var s=h(k);j=f(s,"Hi! 👋"),s.forEach(l),T=c(e),x=m(e,"P",{class:!0});var o=h(x);E=f(o,"Welcome to my personal site. My name is Simon Nyström and I work as a software\n  engineer with a primary focus on backend Java development."),o.forEach(l),H=c(e),S=m(e,"P",{class:!0});var r=h(S);M=f(r,"This site is a place for me to drop notes and write about things that I find\n  interesting and want to learn more about. This means I won't always be writing\n  about topics that I feel like I know everything (or even a lot) about, I may\n  even sometimes write about things that aren't directly related to software\n  engineering. I am likely just learning in public, thus, you are unlikely to\n  find some sort of source of truth on this site. I hope my thoughts can offer\n  you some assistance and/or entertainment 🙂."),r.forEach(l),N=c(e),u(q.$$.fragment,e),z=c(e),u(B.$$.fragment,e),this.h()},h(){document.title="Simon Nyström's Space",p(t,"name","description"),p(t,"content","Blog posts and notes from a software engineer with an interest in always learning new skills and technologies and to share my knowledge."),p(x,"class","svelte-56scz7"),p(S,"class","intro2 svelte-56scz7")},m(e,a){d(document.head,t),g(e,n,a),g(e,k,a),d(k,j),g(e,T,a),g(e,x,a),d(x,E),g(e,H,a),g(e,S,a),d(S,M),g(e,N,a),w(q,e,a),g(e,z,a),w(B,e,a),J=!0},p(e,[t]){const n={};1&t&&(n.posts=e[0]),B.$set(n)},i(e){J||(y(q.$$.fragment,e),y(B.$$.fragment,e),J=!0)},o(e){b(q.$$.fragment,e),b(B.$$.fragment,e),J=!1},d(e){l(t),e&&l(n),e&&l(k),e&&l(T),e&&l(x),e&&l(H),e&&l(S),e&&l(N),$(q,e),e&&l(z),$(B,e)}}}function j({params:e,query:t}){return this.fetch("blog.json").then((e=>e.json())).then((e=>({posts:e})))}function T(e,t,n){let{posts:a}=t;return e.$$set=e=>{"posts"in e&&n(0,a=e.posts)},[a]}export default class extends e{constructor(e){super(),t(this,e,T,k,n,{posts:0})}}export{j as preload};
