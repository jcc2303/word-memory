(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function n(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerpolicy&&(c.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?c.credentials="include":l.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=n(l);fetch(l.href,c)}})();function $(){}function me(e){return e()}function ee(){return Object.create(null)}function K(e){e.forEach(me)}function be(e){return typeof e=="function"}function ke(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function Se(e){return Object.keys(e).length===0}function Ae(e,...t){if(e==null)return $;const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function te(e,t,n){e.$$.on_destroy.push(Ae(t,n))}function h(e,t){e.appendChild(t)}function N(e,t,n){e.insertBefore(t,n||null)}function O(e){e.parentNode&&e.parentNode.removeChild(e)}function B(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function p(e){return document.createElement(e)}function T(e){return document.createTextNode(e)}function I(){return T(" ")}function W(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function L(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Ce(e){return Array.from(e.childNodes)}function X(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function ne(e,t){e.value=t??""}let x;function H(e){x=e}const M=[],le=[],Q=[],re=[],Ee=Promise.resolve();let Y=!1;function Oe(){Y||(Y=!0,Ee.then(ye))}function Z(e){Q.push(e)}const R=new Set;let z=0;function ye(){if(z!==0)return;const e=x;do{try{for(;z<M.length;){const t=M[z];z++,H(t),Ne(t.$$)}}catch(t){throw M.length=0,z=0,t}for(H(null),M.length=0,z=0;le.length;)le.pop()();for(let t=0;t<Q.length;t+=1){const n=Q[t];R.has(n)||(R.add(n),n())}Q.length=0}while(M.length);for(;re.length;)re.pop()();Y=!1,R.clear(),H(e)}function Ne(e){if(e.fragment!==null){e.update(),K(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(Z)}}const We=new Set;function $e(e,t){e&&e.i&&(We.delete(e),e.i(t))}function qe(e,t,n,r){const{fragment:l,after_update:c}=e.$$;l&&l.m(t,n),r||Z(()=>{const f=e.$$.on_mount.map(me).filter(be);e.$$.on_destroy?e.$$.on_destroy.push(...f):K(f),e.$$.on_mount=[]}),c.forEach(Z)}function je(e,t){const n=e.$$;n.fragment!==null&&(K(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Fe(e,t){e.$$.dirty[0]===-1&&(M.push(e),Oe(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Ie(e,t,n,r,l,c,f,o=[-1]){const s=x;H(e);const a=e.$$={fragment:null,ctx:[],props:c,update:$,not_equal:l,bound:ee(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(s?s.$$.context:[])),callbacks:ee(),dirty:o,skip_bound:!1,root:t.target||s.$$.root};f&&f(a.root);let b=!1;if(a.ctx=n?n(e,t.props||{},(_,m,...k)=>{const g=k.length?k[0]:m;return a.ctx&&l(a.ctx[_],a.ctx[_]=g)&&(!a.skip_bound&&a.bound[_]&&a.bound[_](g),b&&Fe(e,_)),m}):[],a.update(),b=!0,K(a.before_update),a.fragment=r?r(a.ctx):!1,t.target){if(t.hydrate){const _=Ce(t.target);a.fragment&&a.fragment.l(_),_.forEach(O)}else a.fragment&&a.fragment.c();t.intro&&$e(e.$$.fragment),qe(e,t.target,t.anchor,t.customElement),ye()}H(s)}class Pe{$destroy(){je(this,1),this.$destroy=$}$on(t,n){if(!be(n))return $;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const l=r.indexOf(n);l!==-1&&r.splice(l,1)}}$set(t){this.$$set&&!Se(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const J=[];function Te(e,t=$){let n;const r=new Set;function l(o){if(ke(e,o)&&(e=o,n)){const s=!J.length;for(const a of r)a[1](),J.push(a,e);if(s){for(let a=0;a<J.length;a+=2)J[a][0](J[a+1]);J.length=0}}}function c(o){l(o(e))}function f(o,s=$){const a=[o,s];return r.add(a),r.size===1&&(n=t(l)||$),o(e),()=>{r.delete(a),r.size===0&&(n(),n=null)}}return{set:l,update:c,subscribe:f}}function ve(e){const t=localStorage.getItem(e),n=JSON.parse(t),r=Te(n===null?[]:n);return r.subscribe(l=>localStorage.setItem(e,JSON.stringify(l))),r}const U=ve("learnedWords"),V=ve("lyricsList");function oe(e,t,n){const r=e.slice();return r[27]=t[n],r}function ce(e,t,n){const r=e.slice();return r[30]=t[n],r}function ie(e,t,n){const r=e.slice();return r[30]=t[n],r}function se(e,t,n){const r=e.slice();return r[35]=t[n],r}function ue(e,t,n){const r=e.slice();return r[38]=t[n],r}function fe(e,t,n){const r=e.slice();return r[41]=t[n],r}function ae(e){let t,n,r=e[41]+"",l,c,f,o,s,a;function b(){return e[13](e[41])}function _(){return e[14](e[41])}return{c(){t=p("div"),n=p("button"),l=T(r),c=I(),f=p("button"),f.textContent="X",o=I(),L(n,"class","text-blue-700 truncate "),L(t,"class","flex")},m(m,k){N(m,t,k),h(t,n),h(n,l),h(t,c),h(t,f),h(t,o),s||(a=[W(n,"click",b),W(f,"click",_)],s=!0)},p(m,k){e=m,k[0]&32&&r!==(r=e[41]+"")&&X(l,r)},d(m){m&&O(t),s=!1,K(a)}}}function ze(e){let t,n,r,l,c,f,o=e[0].split(`
`),s=[];for(let a=0;a<o.length;a+=1)s[a]=_e(se(e,o,a));return{c(){t=p("div"),n=p("button"),n.textContent="x",r=I(),l=p("div");for(let a=0;a<s.length;a+=1)s[a].c();L(n,"class","px-3 bg-red-300")},m(a,b){N(a,t,b),h(t,n),h(t,r),h(t,l);for(let _=0;_<s.length;_+=1)s[_].m(l,null);c||(f=W(n,"click",e[17]),c=!0)},p(a,b){if(b[0]&5057){o=a[0].split(`
`);let _;for(_=0;_<o.length;_+=1){const m=se(a,o,_);s[_]?s[_].p(m,b):(s[_]=_e(m),s[_].c(),s[_].m(l,null))}for(;_<s.length;_+=1)s[_].d(1);s.length=o.length}},d(a){a&&O(t),B(s,a),c=!1,f()}}}function Je(e){let t,n,r;return{c(){t=p("textarea")},m(l,c){N(l,t,c),ne(t,e[0]),n||(r=[W(t,"input",e[15]),W(t,"blur",e[16])],n=!0)},p(l,c){c[0]&1&&ne(t,l[0])},d(l){l&&O(t),n=!1,K(r)}}}function Me(e){let t,n=e[38]+"",r,l,c;function f(){return e[19](e[38])}return{c(){t=p("button"),r=T(n)},m(o,s){N(o,t,s),h(t,r),l||(c=W(t,"click",f),l=!0)},p(o,s){e=o,s[0]&1&&n!==(n=e[38]+"")&&X(r,n)},d(o){o&&O(t),l=!1,c()}}}function Be(e){let t,n=e[38]+"",r,l,c;function f(){return e[18](e[38])}return{c(){t=p("button"),r=T(n)},m(o,s){N(o,t,s),h(t,r),l||(c=W(t,"click",f),l=!0)},p(o,s){e=o,s[0]&1&&n!==(n=e[38]+"")&&X(r,n)},d(o){o&&O(t),l=!1,c()}}}function de(e){let t,n;function r(f,o){return o[0]&1&&(n=null),n==null&&(n=!!f[12](f[6](f[38].toLowerCase(f[38])))),n?Be:Me}let l=r(e,[-1,-1]),c=l(e);return{c(){t=p("spam"),c.c(),L(t,"class","pr-1")},m(f,o){N(f,t,o),c.m(t,null)},p(f,o){l===(l=r(f,o))&&c?c.p(f,o):(c.d(1),c=l(f),c&&(c.c(),c.m(t,null)))},d(f){f&&O(t),c.d()}}}function _e(e){let t,n,r=e[7](e[35]),l=[];for(let c=0;c<r.length;c+=1)l[c]=de(ue(e,r,c));return{c(){t=p("div");for(let c=0;c<l.length;c+=1)l[c].c();n=I()},m(c,f){N(c,t,f);for(let o=0;o<l.length;o+=1)l[o].m(t,null);h(t,n)},p(c,f){if(f[0]&5057){r=c[7](c[35]);let o;for(o=0;o<r.length;o+=1){const s=ue(c,r,o);l[o]?l[o].p(s,f):(l[o]=de(s),l[o].c(),l[o].m(t,n))}for(;o<l.length;o+=1)l[o].d(1);l.length=r.length}},d(c){c&&O(t),B(l,c)}}}function he(e){let t,n=e[30]+"",r,l,c;function f(){return e[20](e[30])}return{c(){t=p("spam"),r=T(n),L(t,"class","p-1 text-blue-700")},m(o,s){N(o,t,s),h(t,r),l||(c=W(t,"click",f),l=!0)},p(o,s){e=o,s[0]&16&&n!==(n=e[30]+"")&&X(r,n)},d(o){o&&O(t),l=!1,c()}}}function ge(e){let t,n=e[30]+"",r,l,c;function f(){return e[21](e[30])}return{c(){t=p("spam"),r=T(n),L(t,"class","p-1 text-blue-700")},m(o,s){N(o,t,s),h(t,r),l||(c=W(t,"click",f),l=!0)},p(o,s){e=o,s[0]&2&&n!==(n=e[30]+"")&&X(r,n)},d(o){o&&O(t),l=!1,c()}}}function pe(e){let t,n=e[27]+"",r,l,c;function f(){return e[24](e[27])}return{c(){t=p("spam"),r=T(n),L(t,"class","p-1 text-blue-700")},m(o,s){N(o,t,s),h(t,r),l||(c=W(t,"click",f),l=!0)},p(o,s){e=o,s[0]&14&&n!==(n=e[27]+"")&&X(r,n)},d(o){o&&O(t),l=!1,c()}}}function Ke(e){let t,n,r,l,c,f,o,s,a,b,_,m,k=e[5],g=[];for(let u=0;u<k.length;u+=1)g[u]=ae(fe(e,k,u));function D(u,S){return u[0]?ze:Je}let P=D(e),E=P(e),q=e[4],y=[];for(let u=0;u<q.length;u+=1)y[u]=he(ie(e,q,u));let j=e[1],v=[];for(let u=0;u<j.length;u+=1)v[u]=ge(ce(e,j,u));let F=e[3].filter(e[22]).filter(e[23]),w=[];for(let u=0;u<F.length;u+=1)w[u]=pe(oe(e,F,u));return{c(){t=p("main"),n=p("div"),r=p("div");for(let u=0;u<g.length;u+=1)g[u].c();l=I(),c=p("div"),E.c(),f=I(),o=p("div"),s=p("div");for(let u=0;u<y.length;u+=1)y[u].c();a=I(),b=p("div");for(let u=0;u<v.length;u+=1)v[u].c();_=I(),m=p("div");for(let u=0;u<w.length;u+=1)w[u].c();L(r,"class","flex-none bg-gray-300 mx-4 w-20"),L(c,"class","flex-none w-80"),L(s,"class","w-full flex flex-wrap bg-red-300"),L(b,"class","w-full flex flex-wrap bg-yellow-300"),L(m,"class","w-full flex flex-wrap bg-green-300"),L(o,"class","flex-grow w-2/6"),L(n,"class","flex"),L(t,"class","container mx-auto px-4 svelte-14hwqpj")},m(u,S){N(u,t,S),h(t,n),h(n,r);for(let i=0;i<g.length;i+=1)g[i].m(r,null);h(n,l),h(n,c),E.m(c,null),h(n,f),h(n,o),h(o,s);for(let i=0;i<y.length;i+=1)y[i].m(s,null);h(o,a),h(o,b);for(let i=0;i<v.length;i+=1)v[i].m(b,null);h(o,_),h(o,m);for(let i=0;i<w.length;i+=1)w[i].m(m,null)},p(u,S){if(S[0]&2081){k=u[5];let i;for(i=0;i<k.length;i+=1){const C=fe(u,k,i);g[i]?g[i].p(C,S):(g[i]=ae(C),g[i].c(),g[i].m(r,null))}for(;i<g.length;i+=1)g[i].d(1);g.length=k.length}if(P===(P=D(u))&&E?E.p(u,S):(E.d(1),E=P(u),E&&(E.c(),E.m(c,null))),S[0]&272){q=u[4];let i;for(i=0;i<q.length;i+=1){const C=ie(u,q,i);y[i]?y[i].p(C,S):(y[i]=he(C),y[i].c(),y[i].m(s,null))}for(;i<y.length;i+=1)y[i].d(1);y.length=q.length}if(S[0]&514){j=u[1];let i;for(i=0;i<j.length;i+=1){const C=ce(u,j,i);v[i]?v[i].p(C,S):(v[i]=ge(C),v[i].c(),v[i].m(b,null))}for(;i<v.length;i+=1)v[i].d(1);v.length=j.length}if(S[0]&526){F=u[3].filter(u[22]).filter(u[23]);let i;for(i=0;i<F.length;i+=1){const C=oe(u,F,i);w[i]?w[i].p(C,S):(w[i]=pe(C),w[i].c(),w[i].m(m,null))}for(;i<w.length;i+=1)w[i].d(1);w.length=F.length}},i:$,o:$,d(u){u&&O(t),B(g,u),E.d(),B(y,u),B(v,u),B(w,u)}}}function Xe(e,t,n){let r,l,c;te(e,U,d=>n(3,l=d)),te(e,V,d=>n(5,c=d));let{lyrics:f=""}=t,o=[],{learned:s=[]}=t;const a=(d,A=" ")=>d.replace(/[&\/\\#\d,+()$~%.…'":*?!<>{}\[\]]/g,A).replace(/[\s\n]/g,A),b=d=>d.split(" ").filter(A=>!!A),_=d=>Array.from(new Set(b(a(d.toLowerCase())))),m=(d,A)=>d.filter(G=>!A.includes(G.toLowerCase())),k=d=>{U.update(A=>Array.from(new Set([...A,d.toLowerCase()])))},g=d=>{U.update(A=>A.filter(G=>G!==d))},D=d=>{!d||V.update(A=>Array.from(new Set([...A,d])))},P=d=>{V.update(A=>A.filter(G=>G!==d))},E=d=>s.includes(d),q=d=>n(0,f=d),y=d=>P(d);function j(){f=this.value,n(0,f)}const v=()=>D(f),F=()=>n(0,f=""),w=d=>g(a(d.toLowerCase(),"")),u=d=>k(a(d.toLowerCase(),"")),S=d=>k(d),i=d=>g(d),C=d=>!o.includes(d),we=d=>!s.includes(d),Le=d=>g(d);return e.$$set=d=>{"lyrics"in d&&n(0,f=d.lyrics),"learned"in d&&n(1,s=d.learned)},e.$$.update=()=>{e.$$.dirty[0]&1&&n(2,o=_(f)),e.$$.dirty[0]&14&&(n(1,s=l.filter(d=>o.includes(d))),console.log("$learnedWords",l),console.log("uniques",o),console.log("learned",s)),e.$$.dirty[0]&6&&n(4,r=m(o,s))},[f,s,o,l,r,c,a,b,k,g,D,P,E,q,y,j,v,F,w,u,S,i,C,we,Le]}class De extends Pe{constructor(t){super(),Ie(this,t,Xe,Ke,ke,{lyrics:0,learned:1},null,[-1,-1])}}new De({target:document.body,props:{}});
