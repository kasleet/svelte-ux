import{S as n,i as s,s as a,B as t,j as p,k as e,e as o,m as c,n as l,c as u,a as i,d as r,b as $,o as k,f,X as g,p as m,q as d,r as h,u as v,w as x,x as y,v as w,_ as b,a4 as j,P as T,a8 as B,Q as H,G as E,H as O,I as D,J as I,t as V,g as G,K as P,h as C,Y as W,Z as L,b8 as A,bu as R,R as S}from"../../../chunks/vendor-3daaceab.js";import{L as M}from"../../../chunks/Layout-eb2b0384.js";import{B as _}from"../../../chunks/Button-2aa0f412.js";import{G as q}from"../../../chunks/Grid-190f9829.js";import{P as J}from"../../../chunks/Preview-22207b15.js";import{P as K}from"../../../chunks/Popover-2d96cc48.js";import"../../../chunks/Icon-96655054.js";import"../../../chunks/cssVars-73fb064c.js";/* empty css                                                         */const N=n=>({}),Q=n=>({});function X(n){let s;const a=n[14].title,t=H(a,n,n[16],Q),p=t||function(n){let s,a,t,p;return{c(){s=o("div"),a=V(n[1]),this.h()},l(t){s=u(t,"DIV",{class:!0});var p=i(s);a=G(p,n[1]),p.forEach(r),this.h()},h(){$(s,"class","text-white text-xs bg-gray-900/90 px-2 py-1 rounded whitespace-nowrap pointer-events-none")},m(n,t){f(n,s,t),P(s,a),p=!0},p(s,t){n=s,(!p||2&t)&&C(a,n[1])},i(a){p||(W((()=>{t||(t=L(s,A,{x:"left"===n[4]?6:"right"===n[4]?-6:0,y:"top"===n[4]?6:"bottom"===n[4]?-6:0,duration:300},!0)),t.run(1)})),p=!0)},o(a){t||(t=L(s,A,{x:"left"===n[4]?6:"right"===n[4]?-6:0,y:"top"===n[4]?6:"bottom"===n[4]?-6:0,duration:300},!1)),t.run(0),p=!1},d(n){n&&r(s),n&&t&&t.end()}}}(n);return{c(){p&&p.c()},l(n){p&&p.l(n)},m(n,a){p&&p.m(n,a),s=!0},p(n,e){t?t.p&&(!s||65536&e)&&E(t,a,n,n[16],s?D(a,n[16],e,N):O(n[16]),Q):p&&p.p&&(!s||18&e)&&p.p(n,s?e:-1)},i(n){s||(y(p,n),s=!0)},o(n){v(p,n),s=!1},d(n){p&&p.d(n)}}}function Y(n){let s;const a=n[14].default,t=H(a,n,n[16],null);return{c(){t&&t.c()},l(n){t&&t.l(n)},m(n,a){t&&t.m(n,a),s=!0},p(n,p){t&&t.p&&(!s||65536&p)&&E(t,a,n,n[16],s?D(a,n[16],p,null):O(n[16]),null)},i(n){s||(y(t,n),s=!0)},o(n){v(t,n),s=!1},d(n){t&&t.d(n)}}}function Z(n){let s,a,t;const p=n[14].default,e=H(p,n,n[16],null);return{c(){s=o("span"),e&&e.c(),this.h()},l(n){s=u(n,"SPAN",{class:!0});var a=i(s);e&&e.l(a),a.forEach(r),this.h()},h(){$(s,"class",a=I(n[12].class,n[3]&&"border-b border-dotted"))},m(n,a){f(n,s,a),e&&e.m(s,null),t=!0},p(n,o){e&&e.p&&(!t||65536&o)&&E(e,p,n,n[16],t?D(p,n[16],o,null):O(n[16]),null),(!t||4104&o&&a!==(a=I(n[12].class,n[3]&&"border-b border-dotted")))&&$(s,"class",a)},i(n){t||(y(e,n),t=!0)},o(n){v(e,n),t=!1},d(n){n&&r(s),e&&e.d(n)}}}function z(n){var s;let a,j,T,B,H,E,O,D;const I=[{anchorEl:null==(s=n[8])?void 0:s.firstElementChild},{placement:n[4]},{anchorOrigin:n[5]},{popoverOrigin:n[6]},{offset:n[2]},{matchWidth:n[7]},{open:n[0]},n[11]];let V={$$slots:{default:[X]},$$scope:{ctx:n}};for(let p=0;p<I.length;p+=1)V=t(V,I[p]);a=new K({props:V});const G=[Z,Y],P=[];function C(n,s){return n[12].class||n[3]?0:1}return B=C(n),H=P[B]=G[B](n),{c(){p(a.$$.fragment),j=e(),T=o("div"),H.c(),this.h()},l(n){c(a.$$.fragment,n),j=l(n),T=u(n,"DIV",{class:!0});var s=i(T);H.l(s),s.forEach(r),this.h()},h(){$(T,"class","contents")},m(s,t){k(a,s,t),f(s,j,t),f(s,T,t),P[B].m(T,null),n[15](T),E=!0,O||(D=[g(T,"mouseenter",n[9]),g(T,"mouseleave",n[10])],O=!0)},p(n,[s]){var t;const p=2549&s?m(I,[256&s&&{anchorEl:null==(t=n[8])?void 0:t.firstElementChild},16&s&&{placement:n[4]},32&s&&{anchorOrigin:n[5]},64&s&&{popoverOrigin:n[6]},4&s&&{offset:n[2]},128&s&&{matchWidth:n[7]},1&s&&{open:n[0]},2048&s&&d(n[11])]):{};65554&s&&(p.$$scope={dirty:s,ctx:n}),a.$set(p);let e=B;B=C(n),B===e?P[B].p(n,s):(h(),v(P[e],1,1,(()=>{P[e]=null})),x(),H=P[B],H?H.p(n,s):(H=P[B]=G[B](n),H.c()),y(H,1),H.m(T,null))},i(n){E||(y(a.$$.fragment,n),y(H),E=!0)},o(n){v(a.$$.fragment,n),v(H),E=!1},d(s){w(a,s),s&&r(j),s&&r(T),P[B].d(),n[15](null),O=!1,b(D)}}}let F=null;function U(n,s,a){const p=["title","open","offset","delay","underline","placement","anchorOrigin","popoverOrigin","matchWidth"];let e,o,c=j(s,p),{$$slots:l={},$$scope:u}=s,{title:i=""}=s,{open:r=!1}=s,{offset:$=0}=s,{delay:k=500}=s,{underline:f=!1}=s,{placement:g="bottom"}=s,{anchorOrigin:m}=s,{popoverOrigin:d}=s,{matchWidth:h=!1}=s;return n.$$set=n=>{a(12,s=t(t({},s),T(n))),a(11,c=j(s,p)),"title"in n&&a(1,i=n.title),"open"in n&&a(0,r=n.open),"offset"in n&&a(2,$=n.offset),"delay"in n&&a(13,k=n.delay),"underline"in n&&a(3,f=n.underline),"placement"in n&&a(4,g=n.placement),"anchorOrigin"in n&&a(5,m=n.anchorOrigin),"popoverOrigin"in n&&a(6,d=n.popoverOrigin),"matchWidth"in n&&a(7,h=n.matchWidth),"$$scope"in n&&a(16,u=n.$$scope)},s=T(s),[r,i,$,f,g,m,d,h,e,function(){0===k||(new Date).valueOf()-(null==F?void 0:F.valueOf())<500?(F=new Date,a(0,r=!0)):o=setTimeout((()=>{F=new Date,a(0,r=!0)}),k)},function(){clearTimeout(o),r&&(F=new Date),a(0,r=!1)},c,s,k,l,function(n){B[n?"unshift":"push"]((()=>{e=n,a(8,e)}))},u]}class nn extends n{constructor(n){super(),s(this,n,U,z,a,{title:1,open:0,offset:2,delay:13,underline:3,placement:4,anchorOrigin:5,popoverOrigin:6,matchWidth:7})}}function sn(n){let s;return{c(){s=V("Hover me")},l(n){s=G(n,"Hover me")},m(n,a){f(n,s,a)},d(n){n&&r(s)}}}function an(n){let s,a;return s=new _({props:{$$slots:{default:[sn]},$$scope:{ctx:n}}}),{c(){p(s.$$.fragment)},l(n){c(s.$$.fragment,n)},m(n,t){k(s,n,t),a=!0},p(n,a){const t={};2&a&&(t.$$scope={dirty:a,ctx:n}),s.$set(t)},i(n){a||(y(s.$$.fragment,n),a=!0)},o(n){v(s.$$.fragment,n),a=!1},d(n){w(s,n)}}}function tn(n){let s,a;return s=new nn({props:{title:"Hello",$$slots:{default:[an]},$$scope:{ctx:n}}}),{c(){p(s.$$.fragment)},l(n){c(s.$$.fragment,n)},m(n,t){k(s,n,t),a=!0},p(n,a){const t={};2&a&&(t.$$scope={dirty:a,ctx:n}),s.$set(t)},i(n){a||(y(s.$$.fragment,n),a=!0)},o(n){v(s.$$.fragment,n),a=!1},d(n){w(s,n)}}}function pn(n){let s,a;return s=new _({props:{icon:R,class:"w-12 h-12"}}),{c(){p(s.$$.fragment)},l(n){c(s.$$.fragment,n)},m(n,t){k(s,n,t),a=!0},p:S,i(n){a||(y(s.$$.fragment,n),a=!0)},o(n){v(s.$$.fragment,n),a=!1},d(n){w(s,n)}}}function en(n){let s,a;return s=new nn({props:{title:"Click to remove",$$slots:{default:[pn]},$$scope:{ctx:n}}}),{c(){p(s.$$.fragment)},l(n){c(s.$$.fragment,n)},m(n,t){k(s,n,t),a=!0},p(n,a){const t={};2&a&&(t.$$scope={dirty:a,ctx:n}),s.$set(t)},i(n){a||(y(s.$$.fragment,n),a=!0)},o(n){v(s.$$.fragment,n),a=!1},d(n){w(s,n)}}}function on(n){let s;return{c(){s=V("Hover me")},l(n){s=G(n,"Hover me")},m(n,a){f(n,s,a)},d(n){n&&r(s)}}}function cn(n){let s,a;return s=new _({props:{$$slots:{default:[on]},$$scope:{ctx:n}}}),{c(){p(s.$$.fragment)},l(n){c(s.$$.fragment,n)},m(n,t){k(s,n,t),a=!0},p(n,a){const t={};2&a&&(t.$$scope={dirty:a,ctx:n}),s.$set(t)},i(n){a||(y(s.$$.fragment,n),a=!0)},o(n){v(s.$$.fragment,n),a=!1},d(n){w(s,n)}}}function ln(n){let s,a,t,p,c,k,g,m,d,h,v,x,y,w,b,j,T,B,H,E;return{c(){s=o("div"),a=V("Tue, March 30"),t=e(),p=o("div"),c=V("Actual:"),k=e(),g=o("div"),m=V("123.50"),d=e(),h=o("div"),v=V("Target:"),x=e(),y=o("div"),w=V("90.00"),b=e(),j=o("div"),T=V("Variance:"),B=e(),H=o("div"),E=V("33.50"),this.h()},l(n){s=u(n,"DIV",{class:!0});var e=i(s);a=G(e,"Tue, March 30"),e.forEach(r),t=l(n),p=u(n,"DIV",{class:!0});var o=i(p);c=G(o,"Actual:"),o.forEach(r),k=l(n),g=u(n,"DIV",{class:!0});var $=i(g);m=G($,"123.50"),$.forEach(r),d=l(n),h=u(n,"DIV",{class:!0});var f=i(h);v=G(f,"Target:"),f.forEach(r),x=l(n),y=u(n,"DIV",{class:!0});var O=i(y);w=G(O,"90.00"),O.forEach(r),b=l(n),j=u(n,"DIV",{class:!0});var D=i(j);T=G(D,"Variance:"),D.forEach(r),B=l(n),H=u(n,"DIV",{class:!0});var I=i(H);E=G(I,"33.50"),I.forEach(r),this.h()},h(){$(s,"class","col-span-2 justify-self-center text-sm"),$(p,"class","text-white/50 justify-self-end"),$(g,"class","justify-self-end"),$(h,"class","text-white/50 justify-self-end"),$(y,"class","justify-self-end"),$(j,"class","text-white/50 justify-self-end"),$(H,"class","justify-self-end")},m(n,e){f(n,s,e),P(s,a),f(n,t,e),f(n,p,e),P(p,c),f(n,k,e),f(n,g,e),P(g,m),f(n,d,e),f(n,h,e),P(h,v),f(n,x,e),f(n,y,e),P(y,w),f(n,b,e),f(n,j,e),P(j,T),f(n,B,e),f(n,H,e),P(H,E)},d(n){n&&r(s),n&&r(t),n&&r(p),n&&r(k),n&&r(g),n&&r(d),n&&r(h),n&&r(x),n&&r(y),n&&r(b),n&&r(j),n&&r(B),n&&r(H)}}}function un(n){let s,a;return s=new q({props:{slot:"title",templateColumns:"auto 1fr",columnGap:16,rowGap:8,class:"bg-gray-900/90 text-white px-4 py-2 text-xs rounded shadow",$$slots:{default:[ln]},$$scope:{ctx:n}}}),{c(){p(s.$$.fragment)},l(n){c(s.$$.fragment,n)},m(n,t){k(s,n,t),a=!0},p(n,a){const t={};2&a&&(t.$$scope={dirty:a,ctx:n}),s.$set(t)},i(n){a||(y(s.$$.fragment,n),a=!0)},o(n){v(s.$$.fragment,n),a=!1},d(n){w(s,n)}}}function rn(n){let s,a;return s=new nn({props:{$$slots:{title:[un],default:[cn]},$$scope:{ctx:n}}}),{c(){p(s.$$.fragment)},l(n){c(s.$$.fragment,n)},m(n,t){k(s,n,t),a=!0},p(n,a){const t={};2&a&&(t.$$scope={dirty:a,ctx:n}),s.$set(t)},i(n){a||(y(s.$$.fragment,n),a=!0)},o(n){v(s.$$.fragment,n),a=!1},d(n){w(s,n)}}}function $n(n){let s;return{c(){s=V("Left")},l(n){s=G(n,"Left")},m(n,a){f(n,s,a)},d(n){n&&r(s)}}}function kn(n){let s,a;return s=new _({props:{$$slots:{default:[$n]},$$scope:{ctx:n}}}),{c(){p(s.$$.fragment)},l(n){c(s.$$.fragment,n)},m(n,t){k(s,n,t),a=!0},p(n,a){const t={};2&a&&(t.$$scope={dirty:a,ctx:n}),s.$set(t)},i(n){a||(y(s.$$.fragment,n),a=!0)},o(n){v(s.$$.fragment,n),a=!1},d(n){w(s,n)}}}function fn(n){let s;return{c(){s=V("Top")},l(n){s=G(n,"Top")},m(n,a){f(n,s,a)},d(n){n&&r(s)}}}function gn(n){let s,a;return s=new _({props:{$$slots:{default:[fn]},$$scope:{ctx:n}}}),{c(){p(s.$$.fragment)},l(n){c(s.$$.fragment,n)},m(n,t){k(s,n,t),a=!0},p(n,a){const t={};2&a&&(t.$$scope={dirty:a,ctx:n}),s.$set(t)},i(n){a||(y(s.$$.fragment,n),a=!0)},o(n){v(s.$$.fragment,n),a=!1},d(n){w(s,n)}}}function mn(n){let s;return{c(){s=V("Bottom")},l(n){s=G(n,"Bottom")},m(n,a){f(n,s,a)},d(n){n&&r(s)}}}function dn(n){let s,a;return s=new _({props:{$$slots:{default:[mn]},$$scope:{ctx:n}}}),{c(){p(s.$$.fragment)},l(n){c(s.$$.fragment,n)},m(n,t){k(s,n,t),a=!0},p(n,a){const t={};2&a&&(t.$$scope={dirty:a,ctx:n}),s.$set(t)},i(n){a||(y(s.$$.fragment,n),a=!0)},o(n){v(s.$$.fragment,n),a=!1},d(n){w(s,n)}}}function hn(n){let s;return{c(){s=V("Right")},l(n){s=G(n,"Right")},m(n,a){f(n,s,a)},d(n){n&&r(s)}}}function vn(n){let s,a;return s=new _({props:{$$slots:{default:[hn]},$$scope:{ctx:n}}}),{c(){p(s.$$.fragment)},l(n){c(s.$$.fragment,n)},m(n,t){k(s,n,t),a=!0},p(n,a){const t={};2&a&&(t.$$scope={dirty:a,ctx:n}),s.$set(t)},i(n){a||(y(s.$$.fragment,n),a=!0)},o(n){v(s.$$.fragment,n),a=!1},d(n){w(s,n)}}}function xn(n){let s,a,t,o,u,i,$,g;return s=new nn({props:{title:"Hello",placement:"left",$$slots:{default:[kn]},$$scope:{ctx:n}}}),t=new nn({props:{title:"Hello",placement:"top",$$slots:{default:[gn]},$$scope:{ctx:n}}}),u=new nn({props:{title:"Hello",placement:"bottom",$$slots:{default:[dn]},$$scope:{ctx:n}}}),$=new nn({props:{title:"Hello",placement:"right",$$slots:{default:[vn]},$$scope:{ctx:n}}}),{c(){p(s.$$.fragment),a=e(),p(t.$$.fragment),o=e(),p(u.$$.fragment),i=e(),p($.$$.fragment)},l(n){c(s.$$.fragment,n),a=l(n),c(t.$$.fragment,n),o=l(n),c(u.$$.fragment,n),i=l(n),c($.$$.fragment,n)},m(n,p){k(s,n,p),f(n,a,p),k(t,n,p),f(n,o,p),k(u,n,p),f(n,i,p),k($,n,p),g=!0},p(n,a){const p={};2&a&&(p.$$scope={dirty:a,ctx:n}),s.$set(p);const e={};2&a&&(e.$$scope={dirty:a,ctx:n}),t.$set(e);const o={};2&a&&(o.$$scope={dirty:a,ctx:n}),u.$set(o);const c={};2&a&&(c.$$scope={dirty:a,ctx:n}),$.$set(c)},i(n){g||(y(s.$$.fragment,n),y(t.$$.fragment,n),y(u.$$.fragment,n),y($.$$.fragment,n),g=!0)},o(n){v(s.$$.fragment,n),v(t.$$.fragment,n),v(u.$$.fragment,n),v($.$$.fragment,n),g=!1},d(n){w(s,n),n&&r(a),w(t,n),n&&r(o),w(u,n),n&&r(i),w($,n)}}}function yn(n){let s,a,t,$,g,m,d,h,x,b,j,T,B,H,E,O,D,I,C,W;return $=new J({props:{code:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tooltip</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Hello<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span><span class="token punctuation">></span></span>Hover me<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tooltip</span><span class="token punctuation">></span></span>\n',language:"svelte",$$slots:{default:[tn]},$$scope:{ctx:n}}}),x=new J({props:{code:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tooltip</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Click to remove<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">icon=</span><span class="token language-javascript"><span class="token punctuation">{</span>mdiTrashCan<span class="token punctuation">}</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>w-12 h-12<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tooltip</span><span class="token punctuation">></span></span>\n',language:"svelte",$$slots:{default:[en]},$$scope:{ctx:n}}}),H=new J({props:{code:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tooltip</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Grid</span>\n    <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>title<span class="token punctuation">"</span></span>\n    <span class="token attr-name">templateColumns</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>auto 1fr<span class="token punctuation">"</span></span>\n    <span class="token attr-name">columnGap=</span><span class="token language-javascript"><span class="token punctuation">{</span><span class="token number">16</span><span class="token punctuation">}</span></span>\n    <span class="token attr-name">rowGap=</span><span class="token language-javascript"><span class="token punctuation">{</span><span class="token number">8</span><span class="token punctuation">}</span></span>\n    <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>bg-gray-900/90 text-white px-4 py-2 text-xs rounded shadow<span class="token punctuation">"</span></span>\n  <span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>col-span-2 justify-self-center text-sm<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Tue, March 30<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text-white/50 justify-self-end<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Actual:<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>justify-self-end<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>123.50<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text-white/50 justify-self-end<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Target:<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>justify-self-end<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>90.00<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text-white/50 justify-self-end<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Variance:<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>justify-self-end<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>33.50<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Grid</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span><span class="token punctuation">></span></span>Hover me<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tooltip</span><span class="token punctuation">></span></span>\n',language:"svelte",$$slots:{default:[rn]},$$scope:{ctx:n}}}),C=new J({props:{code:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tooltip</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Hello<span class="token punctuation">"</span></span> <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>left<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span><span class="token punctuation">></span></span>Left<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tooltip</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tooltip</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Hello<span class="token punctuation">"</span></span> <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>top<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span><span class="token punctuation">></span></span>Top<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tooltip</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tooltip</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Hello<span class="token punctuation">"</span></span> <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>bottom<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span><span class="token punctuation">></span></span>Bottom<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tooltip</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tooltip</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Hello<span class="token punctuation">"</span></span> <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>right<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span><span class="token punctuation">></span></span>Right<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tooltip</span><span class="token punctuation">></span></span>\n',language:"svelte",$$slots:{default:[xn]},$$scope:{ctx:n}}}),{c(){s=o("h2"),a=V("Button"),t=e(),p($.$$.fragment),g=e(),m=o("h2"),d=V("Icon button"),h=e(),p(x.$$.fragment),b=e(),j=o("h2"),T=V("Slot w/ custom markup"),B=e(),p(H.$$.fragment),E=e(),O=o("h2"),D=V("Placement"),I=e(),p(C.$$.fragment)},l(n){s=u(n,"H2",{});var p=i(s);a=G(p,"Button"),p.forEach(r),t=l(n),c($.$$.fragment,n),g=l(n),m=u(n,"H2",{});var e=i(m);d=G(e,"Icon button"),e.forEach(r),h=l(n),c(x.$$.fragment,n),b=l(n),j=u(n,"H2",{});var o=i(j);T=G(o,"Slot w/ custom markup"),o.forEach(r),B=l(n),c(H.$$.fragment,n),E=l(n),O=u(n,"H2",{});var k=i(O);D=G(k,"Placement"),k.forEach(r),I=l(n),c(C.$$.fragment,n)},m(n,p){f(n,s,p),P(s,a),f(n,t,p),k($,n,p),f(n,g,p),f(n,m,p),P(m,d),f(n,h,p),k(x,n,p),f(n,b,p),f(n,j,p),P(j,T),f(n,B,p),k(H,n,p),f(n,E,p),f(n,O,p),P(O,D),f(n,I,p),k(C,n,p),W=!0},p(n,s){const a={};2&s&&(a.$$scope={dirty:s,ctx:n}),$.$set(a);const t={};2&s&&(t.$$scope={dirty:s,ctx:n}),x.$set(t);const p={};2&s&&(p.$$scope={dirty:s,ctx:n}),H.$set(p);const e={};2&s&&(e.$$scope={dirty:s,ctx:n}),C.$set(e)},i(n){W||(y($.$$.fragment,n),y(x.$$.fragment,n),y(H.$$.fragment,n),y(C.$$.fragment,n),W=!0)},o(n){v($.$$.fragment,n),v(x.$$.fragment,n),v(H.$$.fragment,n),v(C.$$.fragment,n),W=!1},d(n){n&&r(s),n&&r(t),w($,n),n&&r(g),n&&r(m),n&&r(h),w(x,n),n&&r(b),n&&r(j),n&&r(B),w(H,n),n&&r(E),n&&r(O),n&&r(I),w(C,n)}}}function wn(n){let s,a;const e=[n[0]];let o={$$slots:{default:[yn]},$$scope:{ctx:n}};for(let p=0;p<e.length;p+=1)o=t(o,e[p]);return s=new M({props:o}),{c(){p(s.$$.fragment)},l(n){c(s.$$.fragment,n)},m(n,t){k(s,n,t),a=!0},p(n,[a]){const t=1&a?m(e,[d(n[0])]):{};2&a&&(t.$$scope={dirty:a,ctx:n}),s.$set(t)},i(n){a||(y(s.$$.fragment,n),a=!0)},o(n){v(s.$$.fragment,n),a=!1},d(n){w(s,n)}}}function bn(n,s,a){return n.$$set=n=>{a(0,s=t(t({},s),T(n)))},[s=T(s)]}class jn extends n{constructor(n){super(),s(this,n,bn,wn,a,{})}}export{jn as default};
