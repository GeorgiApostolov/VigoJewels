(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function i(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(n){if(n.ep)return;n.ep=!0;const a=i(n);fetch(n.href,a)}})();var z=Array.isArray||function(t){return Object.prototype.toString.call(t)=="[object Array]"},O=he,ye=F,be=Ee,we=oe,$e=le,Ae=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^()])+)\\))?|\\(((?:\\\\.|[^()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function F(t){for(var e=[],i=0,s=0,n="",a;(a=Ae.exec(t))!=null;){var r=a[0],c=a[1],o=a.index;if(n+=t.slice(s,o),s=o+r.length,c){n+=c[1];continue}n&&(e.push(n),n="");var l=a[2],h=a[3],d=a[4],v=a[5],m=a[6],g=a[7],L=m==="+"||m==="*",ve=m==="?"||m==="*",J=l||"/",_e=d||v||(g?".*":"[^"+J+"]+?");e.push({name:h||i++,prefix:l||"",delimiter:J,optional:ve,repeat:L,pattern:xe(_e)})}return s<t.length&&(n+=t.substr(s)),n&&e.push(n),e}function Ee(t){return oe(F(t))}function oe(t){for(var e=new Array(t.length),i=0;i<t.length;i++)typeof t[i]=="object"&&(e[i]=new RegExp("^"+t[i].pattern+"$"));return function(s){for(var n="",a=s||{},r=0;r<t.length;r++){var c=t[r];if(typeof c=="string"){n+=c;continue}var o=a[c.name],l;if(o==null){if(c.optional)continue;throw new TypeError('Expected "'+c.name+'" to be defined')}if(z(o)){if(!c.repeat)throw new TypeError('Expected "'+c.name+'" to not repeat, but received "'+o+'"');if(o.length===0){if(c.optional)continue;throw new TypeError('Expected "'+c.name+'" to not be empty')}for(var h=0;h<o.length;h++){if(l=encodeURIComponent(o[h]),!e[r].test(l))throw new TypeError('Expected all "'+c.name+'" to match "'+c.pattern+'", but received "'+l+'"');n+=(h===0?c.prefix:c.delimiter)+l}continue}if(l=encodeURIComponent(o),!e[r].test(l))throw new TypeError('Expected "'+c.name+'" to match "'+c.pattern+'", but received "'+l+'"');n+=c.prefix+l}return n}}function X(t){return t.replace(/([.+*?=^!:${}()[\]|\/])/g,"\\$1")}function xe(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function G(t,e){return t.keys=e,t}function ce(t){return t.sensitive?"":"i"}function Te(t,e){var i=t.source.match(/\((?!\?)/g);if(i)for(var s=0;s<i.length;s++)e.push({name:s,prefix:null,delimiter:null,optional:!1,repeat:!1,pattern:null});return G(t,e)}function Se(t,e,i){for(var s=[],n=0;n<t.length;n++)s.push(he(t[n],e,i).source);var a=new RegExp("(?:"+s.join("|")+")",ce(i));return G(a,e)}function Le(t,e,i){for(var s=F(t),n=le(s,i),a=0;a<s.length;a++)typeof s[a]!="string"&&e.push(s[a]);return G(n,e)}function le(t,e){e=e||{};for(var i=e.strict,s=e.end!==!1,n="",a=t[t.length-1],r=typeof a=="string"&&/\/$/.test(a),c=0;c<t.length;c++){var o=t[c];if(typeof o=="string")n+=X(o);else{var l=X(o.prefix),h=o.pattern;o.repeat&&(h+="(?:"+l+h+")*"),o.optional?l?h="(?:"+l+"("+h+"))?":h="("+h+")?":h=l+"("+h+")",n+=h}}return i||(n=(r?n.slice(0,-2):n)+"(?:\\/(?=$))?"),s?n+="$":n+=i&&r?"":"(?=\\/|$)",new RegExp("^"+n,ce(e))}function he(t,e,i){return e=e||[],z(e)?i||(i={}):(i=e,e=[]),t instanceof RegExp?Te(t,e):z(t)?Se(t,e,i):Le(t,e,i)}O.parse=ye;O.compile=be;O.tokensToFunction=we;O.tokensToRegExp=$e;var T=typeof document<"u",_=typeof window<"u",D=typeof history<"u",He=typeof process<"u",Z=T&&document.ontouchstart?"touchstart":"click",w=_&&!!(window.history.location||window.location);function u(){this.callbacks=[],this.exits=[],this.current="",this.len=0,this._decodeURLComponents=!0,this._base="",this._strict=!1,this._running=!1,this._hashbang=!1,this.clickHandler=this.clickHandler.bind(this),this._onpopstate=this._onpopstate.bind(this)}u.prototype.configure=function(t){var e=t||{};this._window=e.window||_&&window,this._decodeURLComponents=e.decodeURLComponents!==!1,this._popstate=e.popstate!==!1&&_,this._click=e.click!==!1&&T,this._hashbang=!!e.hashbang;var i=this._window;this._popstate?i.addEventListener("popstate",this._onpopstate,!1):_&&i.removeEventListener("popstate",this._onpopstate,!1),this._click?i.document.addEventListener(Z,this.clickHandler,!1):T&&i.document.removeEventListener(Z,this.clickHandler,!1),this._hashbang&&_&&!D?i.addEventListener("hashchange",this._onpopstate,!1):_&&i.removeEventListener("hashchange",this._onpopstate,!1)};u.prototype.base=function(t){if(arguments.length===0)return this._base;this._base=t};u.prototype._getBase=function(){var t=this._base;if(t)return t;var e=_&&this._window&&this._window.location;return _&&this._hashbang&&e&&e.protocol==="file:"&&(t=e.pathname),t};u.prototype.strict=function(t){if(arguments.length===0)return this._strict;this._strict=t};u.prototype.start=function(t){var e=t||{};if(this.configure(e),e.dispatch!==!1){this._running=!0;var i;if(w){var s=this._window,n=s.location;this._hashbang&&~n.hash.indexOf("#!")?i=n.hash.substr(2)+n.search:this._hashbang?i=n.search+n.hash:i=n.pathname+n.search+n.hash}this.replace(i,null,!0,e.dispatch)}};u.prototype.stop=function(){if(this._running){this.current="",this.len=0,this._running=!1;var t=this._window;this._click&&t.document.removeEventListener(Z,this.clickHandler,!1),_&&t.removeEventListener("popstate",this._onpopstate,!1),_&&t.removeEventListener("hashchange",this._onpopstate,!1)}};u.prototype.show=function(t,e,i,s){var n=new M(t,e,this),a=this.prevContext;return this.prevContext=n,this.current=n.path,i!==!1&&this.dispatch(n,a),n.handled!==!1&&s!==!1&&n.pushState(),n};u.prototype.back=function(t,e){var i=this;if(this.len>0){var s=this._window;D&&s.history.back(),this.len--}else setTimeout(t?function(){i.show(t,e)}:function(){i.show(i._getBase(),e)})};u.prototype.redirect=function(t,e){var i=this;typeof t=="string"&&typeof e=="string"&&B.call(this,t,function(s){setTimeout(function(){i.replace(e)},0)}),typeof t=="string"&&typeof e>"u"&&setTimeout(function(){i.replace(t)},0)};u.prototype.replace=function(t,e,i,s){var n=new M(t,e,this),a=this.prevContext;return this.prevContext=n,this.current=n.path,n.init=i,n.save(),s!==!1&&this.dispatch(n,a),n};u.prototype.dispatch=function(t,e){var i=0,s=0,n=this;function a(){var c=n.exits[s++];if(!c)return r();c(e,a)}function r(){var c=n.callbacks[i++];if(t.path!==n.current){t.handled=!1;return}if(!c)return Re.call(n,t);c(t,r)}e?a():r()};u.prototype.exit=function(t,e){if(typeof t=="function")return this.exit("*",t);for(var i=new k(t,null,this),s=1;s<arguments.length;++s)this.exits.push(i.middleware(arguments[s]))};u.prototype.clickHandler=function(t){if(this._which(t)===1&&!(t.metaKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented){var e=t.target,i=t.path||(t.composedPath?t.composedPath():null);if(i){for(var s=0;s<i.length;s++)if(i[s].nodeName&&i[s].nodeName.toUpperCase()==="A"&&i[s].href){e=i[s];break}}for(;e&&e.nodeName.toUpperCase()!=="A";)e=e.parentNode;if(!(!e||e.nodeName.toUpperCase()!=="A")){var n=typeof e.href=="object"&&e.href.constructor.name==="SVGAnimatedString";if(!(e.hasAttribute("download")||e.getAttribute("rel")==="external")){var a=e.getAttribute("href");if(!(!this._hashbang&&this._samePath(e)&&(e.hash||a==="#"))&&!(a&&a.indexOf("mailto:")>-1)&&!(n?e.target.baseVal:e.target)&&!(!n&&!this.sameOrigin(e.href))){var r=n?e.href.baseVal:e.pathname+e.search+(e.hash||"");r=r[0]!=="/"?"/"+r:r,He&&r.match(/^\/[a-zA-Z]:\//)&&(r=r.replace(/^\/[a-zA-Z]:\//,"/"));var c=r,o=this._getBase();r.indexOf(o)===0&&(r=r.substr(o.length)),this._hashbang&&(r=r.replace("#!","")),!(o&&c===r&&(!w||this._window.location.protocol!=="file:"))&&(t.preventDefault(),this.show(c))}}}}};u.prototype._onpopstate=function(){var t=!1;return _?(T&&document.readyState==="complete"?t=!0:window.addEventListener("load",function(){setTimeout(function(){t=!0},0)}),function(i){if(t){var s=this;if(i.state){var n=i.state.path;s.replace(n,i.state)}else if(w){var a=s._window.location;s.show(a.pathname+a.search+a.hash,void 0,void 0,!1)}}}):function(){}}();u.prototype._which=function(t){return t=t||_&&this._window.event,t.which==null?t.button:t.which};u.prototype._toURL=function(t){var e=this._window;if(typeof URL=="function"&&w)return new URL(t,e.location.toString());if(T){var i=e.document.createElement("a");return i.href=t,i}};u.prototype.sameOrigin=function(t){if(!t||!w)return!1;var e=this._toURL(t),i=this._window,s=i.location;return s.protocol===e.protocol&&s.hostname===e.hostname&&(s.port===e.port||s.port===""&&(e.port==80||e.port==443))};u.prototype._samePath=function(t){if(!w)return!1;var e=this._window,i=e.location;return t.pathname===i.pathname&&t.search===i.search};u.prototype._decodeURLEncodedURIComponent=function(t){return typeof t!="string"?t:this._decodeURLComponents?decodeURIComponent(t.replace(/\+/g," ")):t};function de(){var t=new u;function e(){return B.apply(t,arguments)}return e.callbacks=t.callbacks,e.exits=t.exits,e.base=t.base.bind(t),e.strict=t.strict.bind(t),e.start=t.start.bind(t),e.stop=t.stop.bind(t),e.show=t.show.bind(t),e.back=t.back.bind(t),e.redirect=t.redirect.bind(t),e.replace=t.replace.bind(t),e.dispatch=t.dispatch.bind(t),e.exit=t.exit.bind(t),e.configure=t.configure.bind(t),e.sameOrigin=t.sameOrigin.bind(t),e.clickHandler=t.clickHandler.bind(t),e.create=de,Object.defineProperty(e,"len",{get:function(){return t.len},set:function(i){t.len=i}}),Object.defineProperty(e,"current",{get:function(){return t.current},set:function(i){t.current=i}}),e.Context=M,e.Route=k,e}function B(t,e){if(typeof t=="function")return B.call(this,"*",t);if(typeof e=="function")for(var i=new k(t,null,this),s=1;s<arguments.length;++s)this.callbacks.push(i.middleware(arguments[s]));else typeof t=="string"?this[typeof e=="string"?"redirect":"show"](t,e):this.start(t)}function Re(t){if(!t.handled){var e,i=this,s=i._window;i._hashbang?e=w&&this._getBase()+s.location.hash.replace("#!",""):e=w&&s.location.pathname+s.location.search,e!==t.canonicalPath&&(i.stop(),t.handled=!1,w&&(s.location.href=t.canonicalPath))}}function Ie(t){return t.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function M(t,e,i){var s=this.page=i||B,n=s._window,a=s._hashbang,r=s._getBase();t[0]==="/"&&t.indexOf(r)!==0&&(t=r+(a?"#!":"")+t);var c=t.indexOf("?");this.canonicalPath=t;var o=new RegExp("^"+Ie(r));if(this.path=t.replace(o,"")||"/",a&&(this.path=this.path.replace("#!","")||"/"),this.title=T&&n.document.title,this.state=e||{},this.state.path=t,this.querystring=~c?s._decodeURLEncodedURIComponent(t.slice(c+1)):"",this.pathname=s._decodeURLEncodedURIComponent(~c?t.slice(0,c):t),this.params={},this.hash="",!a){if(!~this.path.indexOf("#"))return;var l=this.path.split("#");this.path=this.pathname=l[0],this.hash=s._decodeURLEncodedURIComponent(l[1])||"",this.querystring=this.querystring.split("#")[0]}}M.prototype.pushState=function(){var t=this.page,e=t._window,i=t._hashbang;t.len++,D&&e.history.pushState(this.state,this.title,i&&this.path!=="/"?"#!"+this.path:this.canonicalPath)};M.prototype.save=function(){var t=this.page;D&&t._window.history.replaceState(this.state,this.title,t._hashbang&&this.path!=="/"?"#!"+this.path:this.canonicalPath)};function k(t,e,i){var s=this.page=i||K,n=e||{};n.strict=n.strict||s._strict,this.path=t==="*"?"(.*)":t,this.method="GET",this.regexp=O(this.path,this.keys=[],n)}k.prototype.middleware=function(t){var e=this;return function(i,s){if(e.match(i.path,i.params))return i.routePath=e.path,t(i,s);s()}};k.prototype.match=function(t,e){var i=this.keys,s=t.indexOf("?"),n=~s?t.slice(0,s):t,a=this.regexp.exec(decodeURIComponent(n));if(!a)return!1;delete e[0];for(var r=1,c=a.length;r<c;++r){var o=i[r-1],l=this.page._decodeURLEncodedURIComponent(a[r]);(l!==void 0||!hasOwnProperty.call(e,o.name))&&(e[o.name]=l)}return!0};var K=de(),y=K,Pe=K;y.default=Pe;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const R=globalThis,q=R.trustedTypes,Q=q?q.createPolicy("lit-html",{createHTML:t=>t}):void 0,ue="$lit$",$=`lit$${Math.random().toFixed(9).slice(2)}$`,pe="?"+$,Ne=`<${pe}>`,x=document,I=()=>x.createComment(""),P=t=>t===null||typeof t!="object"&&typeof t!="function",Y=Array.isArray,Ce=t=>Y(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",W=`[ 	
\f\r]`,H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ee=/-->/g,te=/>/g,A=RegExp(`>|${W}(?:([^\\s"'>=/]+)(${W}*=${W}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ie=/'/g,ne=/"/g,fe=/^(?:script|style|textarea|title)$/i,Oe=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),f=Oe(1),N=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),se=new WeakMap,E=x.createTreeWalker(x,129);function me(t,e){if(!Y(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Q!==void 0?Q.createHTML(e):e}const Me=(t,e)=>{const i=t.length-1,s=[];let n,a=e===2?"<svg>":e===3?"<math>":"",r=H;for(let c=0;c<i;c++){const o=t[c];let l,h,d=-1,v=0;for(;v<o.length&&(r.lastIndex=v,h=r.exec(o),h!==null);)v=r.lastIndex,r===H?h[1]==="!--"?r=ee:h[1]!==void 0?r=te:h[2]!==void 0?(fe.test(h[2])&&(n=RegExp("</"+h[2],"g")),r=A):h[3]!==void 0&&(r=A):r===A?h[0]===">"?(r=n??H,d=-1):h[1]===void 0?d=-2:(d=r.lastIndex-h[2].length,l=h[1],r=h[3]===void 0?A:h[3]==='"'?ne:ie):r===ne||r===ie?r=A:r===ee||r===te?r=H:(r=A,n=void 0);const m=r===A&&t[c+1].startsWith("/>")?" ":"";a+=r===H?o+Ne:d>=0?(s.push(l),o.slice(0,d)+ue+o.slice(d)+$+m):o+$+(d===-2?c:m)}return[me(t,a+(t[i]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),s]};class C{constructor({strings:e,_$litType$:i},s){let n;this.parts=[];let a=0,r=0;const c=e.length-1,o=this.parts,[l,h]=Me(e,i);if(this.el=C.createElement(l,s),E.currentNode=this.el.content,i===2||i===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(n=E.nextNode())!==null&&o.length<c;){if(n.nodeType===1){if(n.hasAttributes())for(const d of n.getAttributeNames())if(d.endsWith(ue)){const v=h[r++],m=n.getAttribute(d).split($),g=/([.?@])?(.*)/.exec(v);o.push({type:1,index:a,name:g[2],strings:m,ctor:g[1]==="."?Ue:g[1]==="?"?qe:g[1]==="@"?De:V}),n.removeAttribute(d)}else d.startsWith($)&&(o.push({type:6,index:a}),n.removeAttribute(d));if(fe.test(n.tagName)){const d=n.textContent.split($),v=d.length-1;if(v>0){n.textContent=q?q.emptyScript:"";for(let m=0;m<v;m++)n.append(d[m],I()),E.nextNode(),o.push({type:2,index:++a});n.append(d[v],I())}}}else if(n.nodeType===8)if(n.data===pe)o.push({type:2,index:a});else{let d=-1;for(;(d=n.data.indexOf($,d+1))!==-1;)o.push({type:7,index:a}),d+=$.length-1}a++}}static createElement(e,i){const s=x.createElement("template");return s.innerHTML=e,s}}function S(t,e,i=t,s){var r,c;if(e===N)return e;let n=s!==void 0?(r=i._$Co)==null?void 0:r[s]:i._$Cl;const a=P(e)?void 0:e._$litDirective$;return(n==null?void 0:n.constructor)!==a&&((c=n==null?void 0:n._$AO)==null||c.call(n,!1),a===void 0?n=void 0:(n=new a(t),n._$AT(t,i,s)),s!==void 0?(i._$Co??(i._$Co=[]))[s]=n:i._$Cl=n),n!==void 0&&(e=S(t,n._$AS(t,e.values),n,s)),e}class ke{constructor(e,i){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:i},parts:s}=this._$AD,n=((e==null?void 0:e.creationScope)??x).importNode(i,!0);E.currentNode=n;let a=E.nextNode(),r=0,c=0,o=s[0];for(;o!==void 0;){if(r===o.index){let l;o.type===2?l=new U(a,a.nextSibling,this,e):o.type===1?l=new o.ctor(a,o.name,o.strings,this,e):o.type===6&&(l=new Be(a,this,e)),this._$AV.push(l),o=s[++c]}r!==(o==null?void 0:o.index)&&(a=E.nextNode(),r++)}return E.currentNode=x,n}p(e){let i=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,i),i+=s.strings.length-2):s._$AI(e[i])),i++}}class U{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,i,s,n){this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=e,this._$AB=i,this._$AM=s,this.options=n,this._$Cv=(n==null?void 0:n.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const i=this._$AM;return i!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=i.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,i=this){e=S(this,e,i),P(e)?e===p||e==null||e===""?(this._$AH!==p&&this._$AR(),this._$AH=p):e!==this._$AH&&e!==N&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Ce(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==p&&P(this._$AH)?this._$AA.nextSibling.data=e:this.T(x.createTextNode(e)),this._$AH=e}$(e){var a;const{values:i,_$litType$:s}=e,n=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=C.createElement(me(s.h,s.h[0]),this.options)),s);if(((a=this._$AH)==null?void 0:a._$AD)===n)this._$AH.p(i);else{const r=new ke(n,this),c=r.u(this.options);r.p(i),this.T(c),this._$AH=r}}_$AC(e){let i=se.get(e.strings);return i===void 0&&se.set(e.strings,i=new C(e)),i}k(e){Y(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,n=0;for(const a of e)n===i.length?i.push(s=new U(this.O(I()),this.O(I()),this,this.options)):s=i[n],s._$AI(a),n++;n<i.length&&(this._$AR(s&&s._$AB.nextSibling,n),i.length=n)}_$AR(e=this._$AA.nextSibling,i){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,i);e!==this._$AB;){const n=e.nextSibling;e.remove(),e=n}}setConnected(e){var i;this._$AM===void 0&&(this._$Cv=e,(i=this._$AP)==null||i.call(this,e))}}class V{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,i,s,n,a){this.type=1,this._$AH=p,this._$AN=void 0,this.element=e,this.name=i,this._$AM=n,this.options=a,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=p}_$AI(e,i=this,s,n){const a=this.strings;let r=!1;if(a===void 0)e=S(this,e,i,0),r=!P(e)||e!==this._$AH&&e!==N,r&&(this._$AH=e);else{const c=e;let o,l;for(e=a[0],o=0;o<a.length-1;o++)l=S(this,c[s+o],i,o),l===N&&(l=this._$AH[o]),r||(r=!P(l)||l!==this._$AH[o]),l===p?e=p:e!==p&&(e+=(l??"")+a[o+1]),this._$AH[o]=l}r&&!n&&this.j(e)}j(e){e===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Ue extends V{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===p?void 0:e}}class qe extends V{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==p)}}class De extends V{constructor(e,i,s,n,a){super(e,i,s,n,a),this.type=5}_$AI(e,i=this){if((e=S(this,e,i,0)??p)===N)return;const s=this._$AH,n=e===p&&s!==p||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,a=e!==p&&(s===p||n);n&&this.element.removeEventListener(this.name,this,s),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var i;typeof this._$AH=="function"?this._$AH.call(((i=this.options)==null?void 0:i.host)??this.element,e):this._$AH.handleEvent(e)}}class Be{constructor(e,i,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){S(this,e)}}const j=R.litHtmlPolyfillSupport;j==null||j(C,U),(R.litHtmlVersions??(R.litHtmlVersions=[])).push("3.3.1");const b=(t,e,i)=>{const s=e;let n=s._$litPart$;return n===void 0&&(s._$litPart$=n=new U(e.insertBefore(I(),null),null,void 0,{})),n._$AI(t),n},Ve=document.querySelector("main");async function We(){b(je(),Ve)}function je(){return f`<!-- HERO с видео на фон -->
    <section class="hero" aria-label="Въведение">
      <!-- ЗАМЕНИ hero.mp4 с ваше видео (кратко, ~10–15s, без звук) -->
      <video
        class="video-bg"
        autoplay
        muted
        loop
        playsinline
        preload="auto"
        poster="/images/test.png"
      >
        <source src="/images/background-video-vp9.webm" type="video/webm" />

        <source src="/images/background-video-h264.mp4" type="video/mp4" />

        Вашият браузър не поддържа видео.
      </video>

      <div class="hero-inner container">
        <div class="eyebrow">Limited • New • Drop</div>
        <h1 class="title">Съвременен лукс в розово злато</h1>
        <p class="subtitle">
          Селекция от неръждаема стомана 316L и сребро 925 — създадени да
          блестят всеки ден.
        </p>
        <a class="btn" href="#best">Най-продавани</a>
      </div>
    </section>

    <!-- Най-продавани -->
    <section id="best" aria-label="Най-продавани бижута">
      <div class="container">
        <div class="section-head">
          <h2>Най-продавани бижута</h2>
          <!-- линкът може да води към /products.html -->
          <a class="cta" href="#">Виж всички</a>
        </div>

        <div class="grid">
          <!-- Карта продукт (примерни изображения – замени с ваши) -->
          <article class="card">
            <img
              class="thumb"
              src="/images/test.png"
              alt="Колие Vigo в розово злато"
            />
            <div class="card-body">
              <h3 class="title-sm">Колие „V“ — 316L, Rose Gold</h3>
              <div class="meta">Хипоалергенно • Водоустойчиво</div>
              <div class="price">89.90 лв</div>
            </div>
          </article>

          <article class="card">
            <img class="thumb" src="/images/test.png" alt="Гривна тип верига" />
            <div class="card-body">
              <h3 class="title-sm">Гривна „Chain Glow“</h3>
              <div class="meta">316L • Регулируема</div>
              <div class="price">59.90 лв</div>
            </div>
          </article>

          <article class="card">
            <img
              class="thumb"
              src="/images/test.png"
              alt="Обеци от сребро с камък"
            />
            <div class="card-body">
              <h3 class="title-sm">Обеци „Eterna“ — 925</h3>
              <div class="meta">Родиево покритие</div>
              <div class="price">74.90 лв</div>
            </div>
          </article>

          <article class="card">
            <img class="thumb" src="/images/test.png" alt="Пръстен с камък" />
            <div class="card-body">
              <h3 class="title-sm">Пръстен „Halo“ — Moissanite</h3>
              <div class="meta">925 • 18K позлата</div>
              <div class="price">129.00 лв</div>
            </div>
          </article>
        </div>
      </div>
    </section> `}const ze=document.querySelector("main");async function Ze(){b(Fe(),ze)}function Fe(){return f` <section class="categories" aria-label="Категории">
    <div class="container">
      <h2 class="section-title" id="colection">КОЛЕКЦИИ</h2>
      <div class="categories-grid">
        <!-- Обеци -->
        <a href="/earrings" class="category-card">
          <img src="/images/earrings.png" alt="Обеци" />
          <h3>Обеци</h3>
        </a>

        <!-- Колие -->
        <a href="/necklaces" class="category-card">
          <img src="/images/necklaces.png" alt="Колиета" />
          <h3>Колиета</h3>
        </a>

        <!-- Гривни -->
        <a href="/bracelets" class="category-card">
          <img src="/images/bracelets.png" alt="Гривни" />
          <h3>Гривни</h3>
        </a>
      </div>
    </div>
  </section>`}const Ge=document.querySelector("main");async function Ke(){b(Ye(),Ge)}function Ye(){return f``}const Je=document.querySelector("main");async function Xe(){b(Qe(),Je)}function Qe(){return f`<section class="contact">
    <div class="contact__container">
      <!-- Лява колона -->
      <div class="contact__left">
        <h2 class="contact__title">Свържете се с нас</h2>
        <p class="contact__lead">
          Няма въпрос, който да е твърде малък или заявка – твърде голяма. От
          избор на бижу до подарък или записване за консултация – винаги сме
          насреща.
        </p>

        <nav class="contact__list" aria-label="Начини за контакт">
          <!-- Call -->
          <a
            class="contact__row"
            href="tel:+359888708066"
            aria-label="Позвънете ни на +359 888 708 066"
          >
            <span class="contact__row-left">
              <span class="contact__icon" aria-hidden="true">
                <!-- phone -->
                <svg viewBox="0 0 24 24">
                  <path
                    d="M6.6 10.2c1.2 2.3 3 4.1 5.3 5.3l1.8-1.8c.3-.3.7-.4 1.1-.3 1.2.4 2.5.6 3.9.6.6 0 1 .4 1 .9v3.1c0 .6-.4 1-1 1C10.9 19 5 13.1 5 5.9c0-.6.4-1 1-1h3.1c.6 0 .9.4.9 1 0 1.4.2 2.7.6 3.9.1.4 0 .8-.3 1.1l-1.7 1.8Z"
                  />
                </svg>
              </span>
              <div class="contact__row-text">
                <strong>Обадете ни се</strong>
                <span class="contact__sub">+359 888 708 066</span>
              </div>
            </span>
            <span class="contact__chev" aria-hidden="true">›</span>
          </a>

          <!-- Text us -->
          <a
            class="contact__row"
            href="https://wa.me/359888708066"
            target="_blank"
            rel="noopener"
            aria-label="Пишете ни в WhatsApp"
          >
            <span class="contact__row-left">
              <span class="contact__icon" aria-hidden="true">
                <!-- chat -->
                <svg viewBox="0 0 24 24">
                  <path
                    d="M12 2a9 9 0 0 0-7.8 13.4L3 22l6.8-1.8A9 9 0 1 0 12 2Zm0 2a7 7 0 0 1 0 14c-1.1 0-2.2-.2-3.2-.7l-.3-.1-3.2.9.9-3.1-.2-.3A7 7 0 0 1 12 4Zm3.7 9.6c-.2-.1-1.3-.7-1.5-.8-.2-.1-.4-.1-.5.1l-.7.8c-.1.1-.3.2-.5.1-1-.4-1.9-1.1-2.6-2-.2-.2-.1-.4.1-.6l.4-.5c.1-.2.1-.3 0-.5l-.7-1.6c-.2-.5-.4-.4-.5-.4h-.4c-.1 0-.4.1-.6.3-.6.6-.9 1.4-.9 2.2 0 .3.1.6.2.9.2.5.6 1 .9 1.4.3.4.6.8 1.1 1.2.8.7 1.8 1.3 2.8 1.7.6.2 1.1.4 1.7.3.6-.1 1.3-.5 1.6-1 .2-.3.3-.7.2-1.1 0 0-.1-.1-.2-.1Z"
                  />
                </svg>
              </span>
              <div class="contact__row-text">
                <strong>Пишете ни</strong>
                <span class="contact__sub">WhatsApp</span>
              </div>
            </span>
            <span class="contact__chev" aria-hidden="true">›</span>
          </a>
        </nav>
      </div>

      <!-- Дясна колона (изображение) -->
      <div class="contact__right">
        <img
          class="contact__image"
          src="/images/Logo.png"
          alt="Бижута на дисплей"
          loading="lazy"
        />
      </div>
    </div>
  </section>`}const et=document.querySelector("main");async function tt(){b(it(),et)}function it(){return f``}function nt(){const t=document.documentElement,e=document.getElementById("mHeader"),i=document.getElementById("openMenu"),s=document.getElementById("closeMenu"),n=document.getElementById("backdrop"),a=document.getElementById("drawer"),r=()=>{n==null||n.removeAttribute("hidden"),document.documentElement.classList.add("menu-open","noscroll"),setTimeout(()=>s==null?void 0:s.focus(),10)},c=()=>{document.documentElement.classList.remove("menu-open","noscroll"),n==null||n.setAttribute("hidden",""),i==null||i.focus()};i==null||i.addEventListener("click",r,{once:!1}),s==null||s.addEventListener("click",c,{once:!1}),n==null||n.addEventListener("click",c,{once:!1}),a==null||a.addEventListener("click",g=>{g.target.closest("a")&&c()}),window.addEventListener("keydown",g=>{g.key==="Escape"&&c()});let o=window.scrollY,l=!1,h=!1;const d=12,v=24,m=()=>{h||(h=!0,requestAnimationFrame(()=>{if(t.classList.contains("menu-open")){h=!1;return}const g=window.scrollY,L=g-o;!l&&L>d&&g>v&&(e==null||e.classList.add("hide"),l=!0),l&&L<-4&&(e==null||e.classList.remove("hide"),l=!1),o=g,h=!1}))};window.addEventListener("scroll",m,{passive:!0}),window.addEventListener("popstate",c)}const st=document.getElementById("header-root"),at=()=>!!localStorage.getItem("authToken"),ae=()=>localStorage.getItem("isAdmin")==="1";function rt(){b(ot(),st),document.documentElement.dataset.navInit||(nt(),document.documentElement.dataset.navInit="1")}function ge(){rt()}const ot=()=>{const t=at()?"/profile":"/login";return f`
    <!-- HEADER -->
    <header class="m-header" id="mHeader">
      <div class="bar">
        <div class="left">
          <!-- hamburger (mobile) -->
          <button class="icon-btn" id="openMenu" aria-label="Меню">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3 6h18v2H3M3 11h18v2H3m0 5h18v2H3" />
            </svg>
          </button>
        </div>

        <!-- Лого -->
        <a href="/" class="brand" aria-label="VIGOJEWELS">
          VIGO<span>JEWELS</span>
        </a>

        <div class="right">
          <a href=${t} class="icon-btn" aria-label="Профил">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Zm0 2c-3.9 0-10 2-10 6v2h20v-2c0-4-6.1-6-10-6Z"
              />
            </svg>
          </a>

          <button class="icon-btn" aria-label="Количка">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M7 18a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm10 0a2 2 0 1 0 .001 4A2 2 0 0 0 17 18ZM7.2 6l1 2h9l-1.1 5H8.5L6.3 4H2v2h2l3.6 7.6-.7 1.2c-.2.6.2 1.2.9 1.2H18v-2h-8l.6-1h7c.7 0 1.4-.5 1.6-1.3l1.2-5.5c.1-.6-.3-1.1-.9-1.1H7.2Z"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- Desktop categories -->
      <div class="catbar">
        <nav>
          <a href="/collection">БИЖУТА</a>
          <a href="/handmade">HANDMADE</a>
          <a href="/about">ЗА НАС</a>
          <a href="/contact">КОНТАКТИ</a>
          ${ae()?f`<a href="/admin">АДМИН</a>`:""}
        </nav>
      </div>
    </header>

    <!-- Drawer -->
    <div class="backdrop" id="backdrop"></div>
    <aside
      class="drawer"
      id="drawer"
      role="dialog"
      aria-modal="true"
      aria-label="Навигация"
    >
      <div class="drawer-top">
        <strong>Меню</strong>
        <button class="icon-btn" id="closeMenu" aria-label="Затвори">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M18.3 5.7 12 12 5.7 5.7 4.3 7.1 10.6 13.4 4.3 19.7 5.7 21.1 12 14.8l6.3 6.3 1.4-1.4-6.3-6.3 6.3-6.3z"
            />
          </svg>
        </button>
      </div>
      <nav class="drawer-list">
        <a href="/collection">БИЖУТА</a>
        <a href="/handmade">HANDMADE</a>
        <a href="/about">ЗА НАС</a>
        <a href="/contact">КОНТАКТИ</a>
        ${ae()?f`<a href="/admin">АДМИН</a>`:""}
      </nav>
    </aside>
  `},ct=document.querySelector("main");function lt(){b(ht(),ct)}function ht(){return f`<section class="auth" id="view-login">
    <div class="card">
      <form class="form" id="login-form" @submit=${ut}>
        <div class="field">
          <label for="l-email">Имейл</label>
          <input
            id="l-email"
            name="email"
            type="email"
            autocomplete="email"
            required
          />
        </div>

        <div class="field">
          <label for="l-pass">Парола</label>
          <input
            id="l-pass"
            name="password"
            type="password"
            autocomplete="current-password"
            required
          />
        </div>

        <button class="btn" type="submit">Влез</button>

        <p class="auth-note">
          Нямаш акаунт? <a class="link" href="/register">Създай акаунт</a>
        </p>
      </form>
    </div>
  </section>`}async function dt(t,e){var a;const s=await fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD2Vmd03Gcf9-k3uzRTHVln_gzXDhuPnqk",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t,password:e,returnSecureToken:!0})}),n=await s.json();if(!s.ok)throw new Error(((a=n.error)==null?void 0:a.message)||"Login failed");return n}async function ut(t){t.preventDefault();const e=t.target.email.value,i=t.target.password.value;try{const s=await dt(e,i);console.log("✅ Logged in:",s),localStorage.setItem("authToken",s.idToken),e==="dullskullbg@gmail.com"&&localStorage.setItem("isAdmin",1),alert("Успешен вход!"),window.location.href="/",ge()}catch(s){console.error("❌",s.message),alert("Грешка: "+s.message)}}const pt=document.querySelector("main");async function ft(){b(mt(),pt)}function mt(){return f`<!-- register.html -->
    <section class="auth auth-register" id="view-register">
      <div class="card">
        <form
          class="form"
          id="register-form"
          autocomplete="on"
          @submit=${_t}
        >
          <div class="grid">
            <div class="field">
              <label for="s-first">Име</label>
              <input id="s-first" name="firstName" type="text" required />
            </div>
            <div class="field">
              <label for="s-last">Фамилия</label>
              <input id="s-last" name="lastName" type="text" required />
            </div>
          </div>

          <div class="field">
            <label for="s-email">Имейл</label>
            <input
              id="s-email"
              name="email"
              type="email"
              autocomplete="email"
              required
            />
          </div>

          <div class="field">
            <label for="s-pass">Парола</label>
            <input
              id="s-pass"
              name="password"
              type="password"
              autocomplete="new-password"
              minlength="6"
              required
            />
          </div>

          <label class="check">
            <input type="checkbox" required />
            <span>Приемам <a class="link" href="/terms">условията</a>.</span>
          </label>

          <button class="btn" type="submit">Създай акаунт</button>

          <p style="text-align:center;color:#cfcfcf;margin:6px 0 0">
            Имаш профил? <a class="link" href="/login">Влез</a>
          </p>
        </form>
      </div>
    </section> `}const gt={EMAIL_EXISTS:"Този имейл вече е регистриран.",OPERATION_NOT_ALLOWED:"Email/Password login е изключен в Firebase.",TOO_MANY_ATTEMPTS_TRY_LATER:"Твърде много опити. Опитайте отново по-късно.",WEAK_PASSWORD:"Паролата трябва да е поне 6 символа."};async function vt(t,e){var a,r;const s=await fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD2Vmd03Gcf9-k3uzRTHVln_gzXDhuPnqk",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t,password:e,returnSecureToken:!0})}),n=await s.json();if(!s.ok){const c=gt[(a=n.error)==null?void 0:a.message]||((r=n.error)==null?void 0:r.message)||"Грешка при регистрация.";throw new Error(c)}return n}async function _t(t){t.preventDefault();const e=t.currentTarget,i=e.email.value.trim(),s=e.password.value;if(!i||!s){alert("Моля, въведете имейл и парола.");return}if(s.length<6){alert("Паролата трябва да е поне 6 символа.");return}e.querySelector("button[type=submit]").disabled=!0;try{const n=await vt(i,s);console.log("✅ Registered:",n),window.location.href="/login"}catch(n){alert(n.message)}finally{e.querySelector("button[type=submit]").disabled=!1}}const re=document.querySelector("main");function yt(){if(!localStorage.getItem("authToken"))return b(f`<p>Моля, <a href="/login">влезте</a> в профила си.</p>`,re);b(wt([{id:"1001",date:"03.09.2025",status:"Обработва се",total:"249.00",items:[{name:"Гривна с диаманти",qty:1,image:"/images/bracelets.png"}]},{id:"1002",date:"05.09.2025",status:"Пътува",total:"249.00",items:[{name:"Колие",qty:1,image:"/images/necklaces.png"}]}]),re)}function bt(){localStorage.removeItem("authToken"),localStorage.removeItem("isAdmin"),window.location.href="/"}function wt(t){return f`
    <section class="profile">
      <div class="container">
        <div class="profile-head">
          <button class="btn-logout" @click=${bt}>Изход</button>
        </div>

        <h3 class="section-subtitle">Поръчки</h3>

        ${t.length===0?f`
              <div class="empty-orders">
                <strong>Все още няма поръчки.</strong>
                <p>Посетете магазина, за да направите поръчка.</p>
              </div>
            `:f`
              <ul class="orders-list">
                ${t.map(e=>f`
                    <li class="order-card">
                      <p><strong>Поръчка №${e.id}</strong></p>
                      <p>Дата: ${e.date}</p>
                      <p>Статус: ${e.status}</p>
                      <p>Сума: ${e.total} лв.</p>
                      <div class="order-items">
                        ${e.items.map(i=>f`
                            <div class="order-item">
                              <img src="${i.image}" alt="${i.name}" />
                              <div>
                                <p>${i.name}</p>
                                <p>Количество: ${i.qty}</p>
                              </div>
                            </div>
                          `)}
                      </div>
                    </li>
                  `)}
              </ul>
            `}
      </div>
    </section>
  `}const $t=document.querySelector("main");async function At(){localStorage.getItem("isAdmin")?b(Et(),$t):y.redirect("/")}function Et(){return f`<h1>ADMIN</h1>`}ge();y("/",We);y("/handmade",Ke);y("/admin",At);y("/collection",Ze);y("/contact",Xe);y("/about",tt);y("/login",lt);y("/register",ft);y("/profile",yt);y.start();
