import{_ as t,a as n,b as r,c as e,i as a,d as s,S as o,s as c,e as f,t as i,f as u,m as l,o as h,l as v,g as p,h as g,p as d,q as m,z as y,H as E,A as R,j as b,k as A,E as j}from"./client.1d680587.js";function k(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,s=n(t);if(e){var o=n(this).constructor;a=Reflect.construct(s,arguments,o)}else a=s.apply(this,arguments);return r(this,a)}}function x(t,n,r){var e=t.slice();return e[1]=n[r],e}function z(t){var n,r,e,a,s=t[1].title+"";return{c:function(){n=f("li"),r=f("a"),e=i(s),this.h()},l:function(t){n=u(t,"LI",{});var a=l(n);r=u(a,"A",{rel:!0,href:!0});var o=l(r);e=h(o,s),o.forEach(v),a.forEach(v),this.h()},h:function(){p(r,"rel","prefetch"),p(r,"href",a="blog/"+t[1].slug)},m:function(t,a){g(t,n,a),d(n,r),d(r,e)},p:function(t,n){1&n&&s!==(s=t[1].title+"")&&m(e,s),1&n&&a!==(a="blog/"+t[1].slug)&&p(r,"href",a)},d:function(t){t&&v(n)}}}function D(t){for(var n,r,e,a,s,o,c,m,k=t[0],D=[],H=0;H<k.length;H+=1)D[H]=z(x(t,k,H));return{c:function(){n=y(),r=f("a"),e=i("categories"),a=y(),s=f("h1"),o=i("Recent posts"),c=y(),m=f("ul");for(var t=0;t<D.length;t+=1)D[t].c();this.h()},l:function(t){E('[data-svelte="svelte-10h7psl"]',document.head).forEach(v),n=R(t),r=u(t,"A",{rel:!0,href:!0});var f=l(r);e=h(f,"categories"),f.forEach(v),a=R(t),s=u(t,"H1",{});var i=l(s);o=h(i,"Recent posts"),i.forEach(v),c=R(t),m=u(t,"UL",{class:!0});for(var p=l(m),g=0;g<D.length;g+=1)D[g].l(p);p.forEach(v),this.h()},h:function(){document.title="Blog",p(r,"rel","prefetch"),p(r,"href","blog/category"),p(m,"class","svelte-1uzksw3")},m:function(t,f){g(t,n,f),g(t,r,f),d(r,e),g(t,a,f),g(t,s,f),d(s,o),g(t,c,f),g(t,m,f);for(var i=0;i<D.length;i+=1)D[i].m(m,null)},p:function(t,n){var r=b(n,1)[0];if(1&r){var e;for(k=t[0],e=0;e<k.length;e+=1){var a=x(t,k,e);D[e]?D[e].p(a,r):(D[e]=z(a),D[e].c(),D[e].m(m,null))}for(;e<D.length;e+=1)D[e].d(1);D.length=k.length}},i:A,o:A,d:function(t){t&&v(n),t&&v(r),t&&v(a),t&&v(s),t&&v(c),t&&v(m),j(D,t)}}}function H(t,n,r){var e=n.posts;return t.$$set=function(t){"posts"in t&&r(0,e=t.posts)},[e]}var L=function(n){t(f,o);var r=k(f);function f(t){var n;return e(this,f),n=r.call(this),a(s(n),t,H,D,c,{posts:0}),n}return f}();export default L;