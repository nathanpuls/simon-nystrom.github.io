import{S as t,i as s,s as e,o as a,p as l,q as n,r,u as o,v as c,a as i,e as f,t as h,C as u,f as g,g as p,c as m,b as v,d,h as $,j,k as E,l as y,y as b,z as w,x}from"./client.2174bcbc.js";import{T as D}from"./Tag.7f37fe3d.js";function H(t,s,e){const a=t.slice();return a[1]=s[e],a}function I(t){let s,e;return s=new D({props:{title:t[1]}}),{c(){a(s.$$.fragment)},l(t){l(s.$$.fragment,t)},m(t,a){n(s,t,a),e=!0},p(t,e){const a={};1&e&&(a.title=t[1]),s.$set(a)},i(t){e||(r(s.$$.fragment,t),e=!0)},o(t){o(s.$$.fragment,t),e=!1},d(t){c(s,t)}}}function T(t){let s,e,a,l,n,c,D,T,V,q,L,M,k,z,B,C,S=t[0].title+"",A=t[0].date+"",F=t[0].html+"";document.title=s=t[0].title;let G=t[0].tags,J=[];for(let s=0;s<G.length;s+=1)J[s]=I(H(t,G,s));const K=t=>o(J[t],1,1,()=>{J[t]=null});return{c(){e=i(),a=f("h1"),l=h(S),n=i(),c=f("div"),D=f("h5"),T=h(A),V=i(),q=f("div"),L=h("・"),M=i(),k=f("div");for(let t=0;t<J.length;t+=1)J[t].c();z=i(),B=f("div"),this.h()},l(t){u('[data-svelte="svelte-iu3vwn"]',document.head).forEach(g),e=p(t),a=m(t,"H1",{class:!0});var s=v(a);l=d(s,S),s.forEach(g),n=p(t),c=m(t,"DIV",{class:!0});var r=v(c);D=m(r,"H5",{class:!0});var o=v(D);T=d(o,A),o.forEach(g),V=p(r),q=m(r,"DIV",{class:!0});var i=v(q);L=d(i,"・"),i.forEach(g),M=p(r),k=m(r,"DIV",{class:!0});var f=v(k);for(let t=0;t<J.length;t+=1)J[t].l(f);f.forEach(g),r.forEach(g),z=p(t),B=m(t,"DIV",{class:!0}),v(B).forEach(g),this.h()},h(){$(a,"class","svelte-p38eej"),$(D,"class","gray svelte-p38eej"),$(q,"class","gray svelte-p38eej"),$(k,"class","tags svelte-p38eej"),$(c,"class","meta svelte-p38eej"),$(B,"class","content svelte-p38eej")},m(t,s){j(t,e,s),j(t,a,s),E(a,l),j(t,n,s),j(t,c,s),E(c,D),E(D,T),E(c,V),E(c,q),E(q,L),E(c,M),E(c,k);for(let t=0;t<J.length;t+=1)J[t].m(k,null);j(t,z,s),j(t,B,s),B.innerHTML=F,C=!0},p(t,[e]){if((!C||1&e)&&s!==(s=t[0].title)&&(document.title=s),(!C||1&e)&&S!==(S=t[0].title+"")&&y(l,S),(!C||1&e)&&A!==(A=t[0].date+"")&&y(T,A),1&e){let s;for(G=t[0].tags,s=0;s<G.length;s+=1){const a=H(t,G,s);J[s]?(J[s].p(a,e),r(J[s],1)):(J[s]=I(a),J[s].c(),r(J[s],1),J[s].m(k,null))}for(x(),s=G.length;s<J.length;s+=1)K(s);b()}(!C||1&e)&&F!==(F=t[0].html+"")&&(B.innerHTML=F)},i(t){if(!C){for(let t=0;t<G.length;t+=1)r(J[t]);C=!0}},o(t){J=J.filter(Boolean);for(let t=0;t<J.length;t+=1)o(J[t]);C=!1},d(t){t&&g(e),t&&g(a),t&&g(n),t&&g(c),w(J,t),t&&g(z),t&&g(B)}}}async function V({params:t,query:s}){const e=await this.fetch(`blog/${t.slug}.json`),a=await e.json();if(200===e.status)return{post:a};this.error(e.status,a.message)}function q(t,s,e){let{post:a}=s;return t.$$set=t=>{"post"in t&&e(0,a=t.post)},[a]}export default class extends t{constructor(t){super(),s(this,t,q,T,e,{post:0})}}export{V as preload};
