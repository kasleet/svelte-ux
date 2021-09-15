import{S as n,i as s,s as a,B as t,j as e,m as o,o as p,p as c,q as u,x as r,u as l,v as i,P as k,e as $,t as m,k as f,c as g,a as d,g as h,d as v,n as w,f as y,K as b,b0 as D,R as x,aS as j}from"../../../chunks/vendor-3daaceab.js";import{L as M}from"../../../chunks/Layout-eb2b0384.js";import{P as H}from"../../../chunks/Preview-22207b15.js";var N,S;function z(n){const{start:s,end:a,minUnits:t,totalUnits:e=99,variant:o="short"}=n,p=function(n,s){const a=Number(s||new Date)-Number(n),t=Math.abs(a);if(!Number.isFinite(t))return null;var e=t,o=0,p=0,c=0,u=0,r=0;return e>=1e3&&(e-=1e3*(o=(t-t%1e3)/1e3)),o>=60&&(o-=60*(p=(o-o%60)/60)),p>=60&&(p-=60*(c=(p-p%60)/60)),c>=24&&(c-=24*(u=(c-c%24)/24)),u>=365&&(u-=365*(r=(u-u%365)/365)),{milliseconds:e,seconds:o,minutes:p,hours:c,days:u,years:r}}(s,a);if(null===p)return"unknown";var c=[],u="short"===o?["y","d","h","m","s","ms"]:["years","days","hours","minutes","seconds","milliseconds"],r=[p.years,p.days,p.hours,p.minutes,p.seconds,p.milliseconds].filter(((n,s)=>s<=(t||99)));for(var l in r){if(c.length>=e)break;const n=r[l];let s=u[l];if(0!==n||0===c.length&&5===Number(l))switch(o){case"short":c.push(n+s);break;case"long":1===n&&(s=s.slice(0,-1)),c.push(n+" "+s)}}return c.join("long"===o?" and ":" ")}function E(n){let s,a=z({start:D(new Date,3)})+"";return{c(){s=m(a)},l(n){s=h(n,a)},m(n,a){y(n,s,a)},p:x,d(n){n&&v(s)}}}function P(n){let s,a=z({start:j(new Date,3)})+"";return{c(){s=m(a)},l(n){s=h(n,a)},m(n,a){y(n,s,a)},p:x,d(n){n&&v(s)}}}function L(n){let s,a=z({start:j(new Date,3),variant:"long"})+"";return{c(){s=m(a)},l(n){s=h(n,a)},m(n,a){y(n,s,a)},p:x,d(n){n&&v(s)}}}function U(n){let s,a,t,c,u,k,D,x,j,M,N,S,z,U,Y;return c=new H({props:{code:'<span class="token language-javascript"><span class="token punctuation">{</span><span class="token function">humanizeDuration</span><span class="token punctuation">(</span><span class="token punctuation">{</span> start<span class="token operator">:</span> <span class="token function">subDays</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n',language:"svelte",$$slots:{default:[E]},$$scope:{ctx:n}}}),j=new H({props:{code:'<span class="token language-javascript"><span class="token punctuation">{</span><span class="token function">humanizeDuration</span><span class="token punctuation">(</span><span class="token punctuation">{</span> start<span class="token operator">:</span> <span class="token function">subMonths</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n',language:"svelte",$$slots:{default:[P]},$$scope:{ctx:n}}}),U=new H({props:{code:'<span class="token language-javascript"><span class="token punctuation">{</span><span class="token function">humanizeDuration</span><span class="token punctuation">(</span><span class="token punctuation">{</span> start<span class="token operator">:</span> <span class="token function">subMonths</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">,</span> variant<span class="token operator">:</span> <span class="token string">\'long\'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n',language:"svelte",$$slots:{default:[L]},$$scope:{ctx:n}}}),{c(){s=$("h2"),a=m("3 days ago"),t=f(),e(c.$$.fragment),u=f(),k=$("h2"),D=m("3 months ago w/ default"),x=f(),e(j.$$.fragment),M=f(),N=$("h2"),S=m("3 months ago w/ long variant"),z=f(),e(U.$$.fragment)},l(n){s=g(n,"H2",{});var e=d(s);a=h(e,"3 days ago"),e.forEach(v),t=w(n),o(c.$$.fragment,n),u=w(n),k=g(n,"H2",{});var p=d(k);D=h(p,"3 months ago w/ default"),p.forEach(v),x=w(n),o(j.$$.fragment,n),M=w(n),N=g(n,"H2",{});var r=d(N);S=h(r,"3 months ago w/ long variant"),r.forEach(v),z=w(n),o(U.$$.fragment,n)},m(n,e){y(n,s,e),b(s,a),y(n,t,e),p(c,n,e),y(n,u,e),y(n,k,e),b(k,D),y(n,x,e),p(j,n,e),y(n,M,e),y(n,N,e),b(N,S),y(n,z,e),p(U,n,e),Y=!0},p(n,s){const a={};2&s&&(a.$$scope={dirty:s,ctx:n}),c.$set(a);const t={};2&s&&(t.$$scope={dirty:s,ctx:n}),j.$set(t);const e={};2&s&&(e.$$scope={dirty:s,ctx:n}),U.$set(e)},i(n){Y||(r(c.$$.fragment,n),r(j.$$.fragment,n),r(U.$$.fragment,n),Y=!0)},o(n){l(c.$$.fragment,n),l(j.$$.fragment,n),l(U.$$.fragment,n),Y=!1},d(n){n&&v(s),n&&v(t),i(c,n),n&&v(u),n&&v(k),n&&v(x),i(j,n),n&&v(M),n&&v(N),n&&v(z),i(U,n)}}}function Y(n){let s,a;const k=[n[0]];let $={$$slots:{default:[U]},$$scope:{ctx:n}};for(let e=0;e<k.length;e+=1)$=t($,k[e]);return s=new M({props:$}),{c(){e(s.$$.fragment)},l(n){o(s.$$.fragment,n)},m(n,t){p(s,n,t),a=!0},p(n,[a]){const t=1&a?c(k,[u(n[0])]):{};2&a&&(t.$$scope={dirty:a,ctx:n}),s.$set(t)},i(n){a||(r(s.$$.fragment,n),a=!0)},o(n){l(s.$$.fragment,n),a=!1},d(n){i(s,n)}}}function q(n,s,a){return n.$$set=n=>{a(0,s=t(t({},s),k(n)))},[s=k(s)]}(S=N||(N={}))[S.Year=0]="Year",S[S.Day=1]="Day",S[S.Hour=2]="Hour",S[S.Minute=3]="Minute",S[S.Second=4]="Second",S[S.Millisecond=5]="Millisecond";class B extends n{constructor(n){super(),s(this,n,q,Y,a,{})}}export{B as default};
