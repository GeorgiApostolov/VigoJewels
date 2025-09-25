(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function i(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(n){if(n.ep)return;n.ep=!0;const r=i(n);fetch(n.href,r)}})();var W=Array.isArray||function(t){return Object.prototype.toString.call(t)=="[object Array]"},C=ce,_e=F,ye=Ae,be=re,we=oe,$e=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^()])+)\\))?|\\(((?:\\\\.|[^()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function F(t){for(var e=[],i=0,s=0,n="",r;(r=$e.exec(t))!=null;){var a=r[0],c=r[1],o=r.index;if(n+=t.slice(s,o),s=o+a.length,c){n+=c[1];continue}n&&(e.push(n),n="");var l=r[2],h=r[3],d=r[4],m=r[5],p=r[6],b=r[7],ge=p==="+"||p==="*",me=p==="?"||p==="*",Y=l||"/",ve=d||m||(b?".*":"[^"+Y+"]+?");e.push({name:h||i++,prefix:l||"",delimiter:Y,optional:me,repeat:ge,pattern:Ee(ve)})}return s<t.length&&(n+=t.substr(s)),n&&e.push(n),e}function Ae(t){return re(F(t))}function re(t){for(var e=new Array(t.length),i=0;i<t.length;i++)typeof t[i]=="object"&&(e[i]=new RegExp("^"+t[i].pattern+"$"));return function(s){for(var n="",r=s||{},a=0;a<t.length;a++){var c=t[a];if(typeof c=="string"){n+=c;continue}var o=r[c.name],l;if(o==null){if(c.optional)continue;throw new TypeError('Expected "'+c.name+'" to be defined')}if(W(o)){if(!c.repeat)throw new TypeError('Expected "'+c.name+'" to not repeat, but received "'+o+'"');if(o.length===0){if(c.optional)continue;throw new TypeError('Expected "'+c.name+'" to not be empty')}for(var h=0;h<o.length;h++){if(l=encodeURIComponent(o[h]),!e[a].test(l))throw new TypeError('Expected all "'+c.name+'" to match "'+c.pattern+'", but received "'+l+'"');n+=(h===0?c.prefix:c.delimiter)+l}continue}if(l=encodeURIComponent(o),!e[a].test(l))throw new TypeError('Expected "'+c.name+'" to match "'+c.pattern+'", but received "'+l+'"');n+=c.prefix+l}return n}}function J(t){return t.replace(/([.+*?=^!:${}()[\]|\/])/g,"\\$1")}function Ee(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function G(t,e){return t.keys=e,t}function ae(t){return t.sensitive?"":"i"}function xe(t,e){var i=t.source.match(/\((?!\?)/g);if(i)for(var s=0;s<i.length;s++)e.push({name:s,prefix:null,delimiter:null,optional:!1,repeat:!1,pattern:null});return G(t,e)}function Te(t,e,i){for(var s=[],n=0;n<t.length;n++)s.push(ce(t[n],e,i).source);var r=new RegExp("(?:"+s.join("|")+")",ae(i));return G(r,e)}function He(t,e,i){for(var s=F(t),n=oe(s,i),r=0;r<s.length;r++)typeof s[r]!="string"&&e.push(s[r]);return G(n,e)}function oe(t,e){e=e||{};for(var i=e.strict,s=e.end!==!1,n="",r=t[t.length-1],a=typeof r=="string"&&/\/$/.test(r),c=0;c<t.length;c++){var o=t[c];if(typeof o=="string")n+=J(o);else{var l=J(o.prefix),h=o.pattern;o.repeat&&(h+="(?:"+l+h+")*"),o.optional?l?h="(?:"+l+"("+h+"))?":h="("+h+")?":h=l+"("+h+")",n+=h}}return i||(n=(a?n.slice(0,-2):n)+"(?:\\/(?=$))?"),s?n+="$":n+=i&&a?"":"(?=\\/|$)",new RegExp("^"+n,ae(e))}function ce(t,e,i){return e=e||[],W(e)?i||(i={}):(i=e,e=[]),t instanceof RegExp?xe(t,e):W(t)?Te(t,e,i):He(t,e,i)}C.parse=_e;C.compile=ye;C.tokensToFunction=be;C.tokensToRegExp=we;var T=typeof document<"u",v=typeof window<"u",q=typeof history<"u",Le=typeof process<"u",z=T&&document.ontouchstart?"touchstart":"click",w=v&&!!(window.history.location||window.location);function u(){this.callbacks=[],this.exits=[],this.current="",this.len=0,this._decodeURLComponents=!0,this._base="",this._strict=!1,this._running=!1,this._hashbang=!1,this.clickHandler=this.clickHandler.bind(this),this._onpopstate=this._onpopstate.bind(this)}u.prototype.configure=function(t){var e=t||{};this._window=e.window||v&&window,this._decodeURLComponents=e.decodeURLComponents!==!1,this._popstate=e.popstate!==!1&&v,this._click=e.click!==!1&&T,this._hashbang=!!e.hashbang;var i=this._window;this._popstate?i.addEventListener("popstate",this._onpopstate,!1):v&&i.removeEventListener("popstate",this._onpopstate,!1),this._click?i.document.addEventListener(z,this.clickHandler,!1):T&&i.document.removeEventListener(z,this.clickHandler,!1),this._hashbang&&v&&!q?i.addEventListener("hashchange",this._onpopstate,!1):v&&i.removeEventListener("hashchange",this._onpopstate,!1)};u.prototype.base=function(t){if(arguments.length===0)return this._base;this._base=t};u.prototype._getBase=function(){var t=this._base;if(t)return t;var e=v&&this._window&&this._window.location;return v&&this._hashbang&&e&&e.protocol==="file:"&&(t=e.pathname),t};u.prototype.strict=function(t){if(arguments.length===0)return this._strict;this._strict=t};u.prototype.start=function(t){var e=t||{};if(this.configure(e),e.dispatch!==!1){this._running=!0;var i;if(w){var s=this._window,n=s.location;this._hashbang&&~n.hash.indexOf("#!")?i=n.hash.substr(2)+n.search:this._hashbang?i=n.search+n.hash:i=n.pathname+n.search+n.hash}this.replace(i,null,!0,e.dispatch)}};u.prototype.stop=function(){if(this._running){this.current="",this.len=0,this._running=!1;var t=this._window;this._click&&t.document.removeEventListener(z,this.clickHandler,!1),v&&t.removeEventListener("popstate",this._onpopstate,!1),v&&t.removeEventListener("hashchange",this._onpopstate,!1)}};u.prototype.show=function(t,e,i,s){var n=new I(t,e,this),r=this.prevContext;return this.prevContext=n,this.current=n.path,i!==!1&&this.dispatch(n,r),n.handled!==!1&&s!==!1&&n.pushState(),n};u.prototype.back=function(t,e){var i=this;if(this.len>0){var s=this._window;q&&s.history.back(),this.len--}else setTimeout(t?function(){i.show(t,e)}:function(){i.show(i._getBase(),e)})};u.prototype.redirect=function(t,e){var i=this;typeof t=="string"&&typeof e=="string"&&B.call(this,t,function(s){setTimeout(function(){i.replace(e)},0)}),typeof t=="string"&&typeof e>"u"&&setTimeout(function(){i.replace(t)},0)};u.prototype.replace=function(t,e,i,s){var n=new I(t,e,this),r=this.prevContext;return this.prevContext=n,this.current=n.path,n.init=i,n.save(),s!==!1&&this.dispatch(n,r),n};u.prototype.dispatch=function(t,e){var i=0,s=0,n=this;function r(){var c=n.exits[s++];if(!c)return a();c(e,r)}function a(){var c=n.callbacks[i++];if(t.path!==n.current){t.handled=!1;return}if(!c)return Re.call(n,t);c(t,a)}e?r():a()};u.prototype.exit=function(t,e){if(typeof t=="function")return this.exit("*",t);for(var i=new k(t,null,this),s=1;s<arguments.length;++s)this.exits.push(i.middleware(arguments[s]))};u.prototype.clickHandler=function(t){if(this._which(t)===1&&!(t.metaKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented){var e=t.target,i=t.path||(t.composedPath?t.composedPath():null);if(i){for(var s=0;s<i.length;s++)if(i[s].nodeName&&i[s].nodeName.toUpperCase()==="A"&&i[s].href){e=i[s];break}}for(;e&&e.nodeName.toUpperCase()!=="A";)e=e.parentNode;if(!(!e||e.nodeName.toUpperCase()!=="A")){var n=typeof e.href=="object"&&e.href.constructor.name==="SVGAnimatedString";if(!(e.hasAttribute("download")||e.getAttribute("rel")==="external")){var r=e.getAttribute("href");if(!(!this._hashbang&&this._samePath(e)&&(e.hash||r==="#"))&&!(r&&r.indexOf("mailto:")>-1)&&!(n?e.target.baseVal:e.target)&&!(!n&&!this.sameOrigin(e.href))){var a=n?e.href.baseVal:e.pathname+e.search+(e.hash||"");a=a[0]!=="/"?"/"+a:a,Le&&a.match(/^\/[a-zA-Z]:\//)&&(a=a.replace(/^\/[a-zA-Z]:\//,"/"));var c=a,o=this._getBase();a.indexOf(o)===0&&(a=a.substr(o.length)),this._hashbang&&(a=a.replace("#!","")),!(o&&c===a&&(!w||this._window.location.protocol!=="file:"))&&(t.preventDefault(),this.show(c))}}}}};u.prototype._onpopstate=function(){var t=!1;return v?(T&&document.readyState==="complete"?t=!0:window.addEventListener("load",function(){setTimeout(function(){t=!0},0)}),function(i){if(t){var s=this;if(i.state){var n=i.state.path;s.replace(n,i.state)}else if(w){var r=s._window.location;s.show(r.pathname+r.search+r.hash,void 0,void 0,!1)}}}):function(){}}();u.prototype._which=function(t){return t=t||v&&this._window.event,t.which==null?t.button:t.which};u.prototype._toURL=function(t){var e=this._window;if(typeof URL=="function"&&w)return new URL(t,e.location.toString());if(T){var i=e.document.createElement("a");return i.href=t,i}};u.prototype.sameOrigin=function(t){if(!t||!w)return!1;var e=this._toURL(t),i=this._window,s=i.location;return s.protocol===e.protocol&&s.hostname===e.hostname&&(s.port===e.port||s.port===""&&(e.port==80||e.port==443))};u.prototype._samePath=function(t){if(!w)return!1;var e=this._window,i=e.location;return t.pathname===i.pathname&&t.search===i.search};u.prototype._decodeURLEncodedURIComponent=function(t){return typeof t!="string"?t:this._decodeURLComponents?decodeURIComponent(t.replace(/\+/g," ")):t};function le(){var t=new u;function e(){return B.apply(t,arguments)}return e.callbacks=t.callbacks,e.exits=t.exits,e.base=t.base.bind(t),e.strict=t.strict.bind(t),e.start=t.start.bind(t),e.stop=t.stop.bind(t),e.show=t.show.bind(t),e.back=t.back.bind(t),e.redirect=t.redirect.bind(t),e.replace=t.replace.bind(t),e.dispatch=t.dispatch.bind(t),e.exit=t.exit.bind(t),e.configure=t.configure.bind(t),e.sameOrigin=t.sameOrigin.bind(t),e.clickHandler=t.clickHandler.bind(t),e.create=le,Object.defineProperty(e,"len",{get:function(){return t.len},set:function(i){t.len=i}}),Object.defineProperty(e,"current",{get:function(){return t.current},set:function(i){t.current=i}}),e.Context=I,e.Route=k,e}function B(t,e){if(typeof t=="function")return B.call(this,"*",t);if(typeof e=="function")for(var i=new k(t,null,this),s=1;s<arguments.length;++s)this.callbacks.push(i.middleware(arguments[s]));else typeof t=="string"?this[typeof e=="string"?"redirect":"show"](t,e):this.start(t)}function Re(t){if(!t.handled){var e,i=this,s=i._window;i._hashbang?e=w&&this._getBase()+s.location.hash.replace("#!",""):e=w&&s.location.pathname+s.location.search,e!==t.canonicalPath&&(i.stop(),t.handled=!1,w&&(s.location.href=t.canonicalPath))}}function Se(t){return t.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function I(t,e,i){var s=this.page=i||B,n=s._window,r=s._hashbang,a=s._getBase();t[0]==="/"&&t.indexOf(a)!==0&&(t=a+(r?"#!":"")+t);var c=t.indexOf("?");this.canonicalPath=t;var o=new RegExp("^"+Se(a));if(this.path=t.replace(o,"")||"/",r&&(this.path=this.path.replace("#!","")||"/"),this.title=T&&n.document.title,this.state=e||{},this.state.path=t,this.querystring=~c?s._decodeURLEncodedURIComponent(t.slice(c+1)):"",this.pathname=s._decodeURLEncodedURIComponent(~c?t.slice(0,c):t),this.params={},this.hash="",!r){if(!~this.path.indexOf("#"))return;var l=this.path.split("#");this.path=this.pathname=l[0],this.hash=s._decodeURLEncodedURIComponent(l[1])||"",this.querystring=this.querystring.split("#")[0]}}I.prototype.pushState=function(){var t=this.page,e=t._window,i=t._hashbang;t.len++,q&&e.history.pushState(this.state,this.title,i&&this.path!=="/"?"#!"+this.path:this.canonicalPath)};I.prototype.save=function(){var t=this.page;q&&t._window.history.replaceState(this.state,this.title,t._hashbang&&this.path!=="/"?"#!"+this.path:this.canonicalPath)};function k(t,e,i){var s=this.page=i||Z,n=e||{};n.strict=n.strict||s._strict,this.path=t==="*"?"(.*)":t,this.method="GET",this.regexp=C(this.path,this.keys=[],n)}k.prototype.middleware=function(t){var e=this;return function(i,s){if(e.match(i.path,i.params))return i.routePath=e.path,t(i,s);s()}};k.prototype.match=function(t,e){var i=this.keys,s=t.indexOf("?"),n=~s?t.slice(0,s):t,r=this.regexp.exec(decodeURIComponent(n));if(!r)return!1;delete e[0];for(var a=1,c=r.length;a<c;++a){var o=i[a-1],l=this.page._decodeURLEncodedURIComponent(r[a]);(l!==void 0||!hasOwnProperty.call(e,o.name))&&(e[o.name]=l)}return!0};var Z=le(),y=Z,Pe=Z;y.default=Pe;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const R=globalThis,U=R.trustedTypes,X=U?U.createPolicy("lit-html",{createHTML:t=>t}):void 0,he="$lit$",$=`lit$${Math.random().toFixed(9).slice(2)}$`,de="?"+$,Ne=`<${de}>`,x=document,S=()=>x.createComment(""),P=t=>t===null||typeof t!="object"&&typeof t!="function",K=Array.isArray,Oe=t=>K(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",V=`[ 	
\f\r]`,L=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Q=/-->/g,ee=/>/g,A=RegExp(`>|${V}(?:([^\\s"'>=/]+)(${V}*=${V}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),te=/'/g,ie=/"/g,ue=/^(?:script|style|textarea|title)$/i,Ce=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),g=Ce(1),N=Symbol.for("lit-noChange"),f=Symbol.for("lit-nothing"),ne=new WeakMap,E=x.createTreeWalker(x,129);function pe(t,e){if(!K(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return X!==void 0?X.createHTML(e):e}const Ie=(t,e)=>{const i=t.length-1,s=[];let n,r=e===2?"<svg>":e===3?"<math>":"",a=L;for(let c=0;c<i;c++){const o=t[c];let l,h,d=-1,m=0;for(;m<o.length&&(a.lastIndex=m,h=a.exec(o),h!==null);)m=a.lastIndex,a===L?h[1]==="!--"?a=Q:h[1]!==void 0?a=ee:h[2]!==void 0?(ue.test(h[2])&&(n=RegExp("</"+h[2],"g")),a=A):h[3]!==void 0&&(a=A):a===A?h[0]===">"?(a=n??L,d=-1):h[1]===void 0?d=-2:(d=a.lastIndex-h[2].length,l=h[1],a=h[3]===void 0?A:h[3]==='"'?ie:te):a===ie||a===te?a=A:a===Q||a===ee?a=L:(a=A,n=void 0);const p=a===A&&t[c+1].startsWith("/>")?" ":"";r+=a===L?o+Ne:d>=0?(s.push(l),o.slice(0,d)+he+o.slice(d)+$+p):o+$+(d===-2?c:p)}return[pe(t,r+(t[i]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),s]};class O{constructor({strings:e,_$litType$:i},s){let n;this.parts=[];let r=0,a=0;const c=e.length-1,o=this.parts,[l,h]=Ie(e,i);if(this.el=O.createElement(l,s),E.currentNode=this.el.content,i===2||i===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(n=E.nextNode())!==null&&o.length<c;){if(n.nodeType===1){if(n.hasAttributes())for(const d of n.getAttributeNames())if(d.endsWith(he)){const m=h[a++],p=n.getAttribute(d).split($),b=/([.?@])?(.*)/.exec(m);o.push({type:1,index:r,name:b[2],strings:p,ctor:b[1]==="."?Me:b[1]==="?"?Ue:b[1]==="@"?qe:D}),n.removeAttribute(d)}else d.startsWith($)&&(o.push({type:6,index:r}),n.removeAttribute(d));if(ue.test(n.tagName)){const d=n.textContent.split($),m=d.length-1;if(m>0){n.textContent=U?U.emptyScript:"";for(let p=0;p<m;p++)n.append(d[p],S()),E.nextNode(),o.push({type:2,index:++r});n.append(d[m],S())}}}else if(n.nodeType===8)if(n.data===de)o.push({type:2,index:r});else{let d=-1;for(;(d=n.data.indexOf($,d+1))!==-1;)o.push({type:7,index:r}),d+=$.length-1}r++}}static createElement(e,i){const s=x.createElement("template");return s.innerHTML=e,s}}function H(t,e,i=t,s){var a,c;if(e===N)return e;let n=s!==void 0?(a=i._$Co)==null?void 0:a[s]:i._$Cl;const r=P(e)?void 0:e._$litDirective$;return(n==null?void 0:n.constructor)!==r&&((c=n==null?void 0:n._$AO)==null||c.call(n,!1),r===void 0?n=void 0:(n=new r(t),n._$AT(t,i,s)),s!==void 0?(i._$Co??(i._$Co=[]))[s]=n:i._$Cl=n),n!==void 0&&(e=H(t,n._$AS(t,e.values),n,s)),e}class ke{constructor(e,i){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:i},parts:s}=this._$AD,n=((e==null?void 0:e.creationScope)??x).importNode(i,!0);E.currentNode=n;let r=E.nextNode(),a=0,c=0,o=s[0];for(;o!==void 0;){if(a===o.index){let l;o.type===2?l=new M(r,r.nextSibling,this,e):o.type===1?l=new o.ctor(r,o.name,o.strings,this,e):o.type===6&&(l=new Be(r,this,e)),this._$AV.push(l),o=s[++c]}a!==(o==null?void 0:o.index)&&(r=E.nextNode(),a++)}return E.currentNode=x,n}p(e){let i=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,i),i+=s.strings.length-2):s._$AI(e[i])),i++}}class M{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,i,s,n){this.type=2,this._$AH=f,this._$AN=void 0,this._$AA=e,this._$AB=i,this._$AM=s,this.options=n,this._$Cv=(n==null?void 0:n.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const i=this._$AM;return i!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=i.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,i=this){e=H(this,e,i),P(e)?e===f||e==null||e===""?(this._$AH!==f&&this._$AR(),this._$AH=f):e!==this._$AH&&e!==N&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Oe(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==f&&P(this._$AH)?this._$AA.nextSibling.data=e:this.T(x.createTextNode(e)),this._$AH=e}$(e){var r;const{values:i,_$litType$:s}=e,n=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=O.createElement(pe(s.h,s.h[0]),this.options)),s);if(((r=this._$AH)==null?void 0:r._$AD)===n)this._$AH.p(i);else{const a=new ke(n,this),c=a.u(this.options);a.p(i),this.T(c),this._$AH=a}}_$AC(e){let i=ne.get(e.strings);return i===void 0&&ne.set(e.strings,i=new O(e)),i}k(e){K(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,n=0;for(const r of e)n===i.length?i.push(s=new M(this.O(S()),this.O(S()),this,this.options)):s=i[n],s._$AI(r),n++;n<i.length&&(this._$AR(s&&s._$AB.nextSibling,n),i.length=n)}_$AR(e=this._$AA.nextSibling,i){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,i);e!==this._$AB;){const n=e.nextSibling;e.remove(),e=n}}setConnected(e){var i;this._$AM===void 0&&(this._$Cv=e,(i=this._$AP)==null||i.call(this,e))}}class D{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,i,s,n,r){this.type=1,this._$AH=f,this._$AN=void 0,this.element=e,this.name=i,this._$AM=n,this.options=r,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=f}_$AI(e,i=this,s,n){const r=this.strings;let a=!1;if(r===void 0)e=H(this,e,i,0),a=!P(e)||e!==this._$AH&&e!==N,a&&(this._$AH=e);else{const c=e;let o,l;for(e=r[0],o=0;o<r.length-1;o++)l=H(this,c[s+o],i,o),l===N&&(l=this._$AH[o]),a||(a=!P(l)||l!==this._$AH[o]),l===f?e=f:e!==f&&(e+=(l??"")+r[o+1]),this._$AH[o]=l}a&&!n&&this.j(e)}j(e){e===f?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Me extends D{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===f?void 0:e}}class Ue extends D{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==f)}}class qe extends D{constructor(e,i,s,n,r){super(e,i,s,n,r),this.type=5}_$AI(e,i=this){if((e=H(this,e,i,0)??f)===N)return;const s=this._$AH,n=e===f&&s!==f||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,r=e!==f&&(s===f||n);n&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var i;typeof this._$AH=="function"?this._$AH.call(((i=this.options)==null?void 0:i.host)??this.element,e):this._$AH.handleEvent(e)}}class Be{constructor(e,i,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){H(this,e)}}const j=R.litHtmlPolyfillSupport;j==null||j(O,M),(R.litHtmlVersions??(R.litHtmlVersions=[])).push("3.3.1");const _=(t,e,i)=>{const s=e;let n=s._$litPart$;return n===void 0&&(s._$litPart$=n=new M(e.insertBefore(S(),null),null,void 0,{})),n._$AI(t),n},De=document.querySelector("main");async function Ve(){_(je(),De)}function je(){return g`<!-- HERO с видео на фон -->
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
    </section> `}const We=document.querySelector("main");async function ze(){_(Fe(),We)}function Fe(){return g` <section class="categories" aria-label="Категории">
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
  </section>`}const Ge=document.querySelector("main");async function Ze(){_(Ke(),Ge)}function Ke(){return g``}const Ye=document.querySelector("main");async function Je(){_(Xe(),Ye)}function Xe(){return g``}const Qe=document.querySelector("main");async function et(){_(tt(),Qe)}function tt(){return g``}function it(){const t=document.documentElement,e=document.getElementById("openMenu"),i=document.getElementById("closeMenu"),s=document.getElementById("backdrop"),n=document.getElementById("mHeader");if(!e||!i||!s||!n)return;function r(){t.classList.add("menu-open","noscroll"),setTimeout(()=>i&&i.focus(),10)}function a(){t.classList.remove("menu-open","noscroll"),e&&e.focus()}e.addEventListener("click",r),i.addEventListener("click",a),s.addEventListener("click",a),window.addEventListener("keydown",p=>{p.key==="Escape"&&a()});const c=12,o=24;let l=window.scrollY,h=!1,d=!1;function m(){d||(d=!0,requestAnimationFrame(()=>{if(t.classList.contains("menu-open")){d=!1;return}const p=window.scrollY,b=p-l;!h&&b>c&&p>o&&(n.classList.add("hide"),h=!0),h&&b<-4&&(n.classList.remove("hide"),h=!1),l=p,d=!1}))}window.addEventListener("scroll",m,{passive:!0}),window.addEventListener("resize",()=>{n.classList.remove("hide"),h=!1})}const nt=document.getElementById("header-root");function st(){return!!localStorage.getItem("authToken")}async function fe(){_(rt(),nt),it()}function rt(){const t=st()?"/profile":"/login";return g`<!-- HEADER -->
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
        </nav>
      </div>
    </header>

    <!-- Drawer -->
    <div class="backdrop" id="backdrop" hidden></div>
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
      </nav>
    </aside>`}const at=document.querySelector("main");function ot(){_(ct(),at)}function ct(){return g`
    <section class="auth" id="view-login">
      <div class="card">
        <form class="form" id="login-form" @submit=${ht}>
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

          <p style="text-align:center;color:#cfcfcf;margin:6px 0 0">
            Нямаш акаунт?
            <a class="link" href="/register">Създай акаунт</a>
          </p>
        </form>
      </div>
    </section>
  `}async function lt(t,e){var r;const s=await fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD2Vmd03Gcf9-k3uzRTHVln_gzXDhuPnqk",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t,password:e,returnSecureToken:!0})}),n=await s.json();if(!s.ok)throw new Error(((r=n.error)==null?void 0:r.message)||"Login failed");return n}async function ht(t){t.preventDefault();const e=t.target.email.value,i=t.target.password.value;try{const s=await lt(e,i);console.log("✅ Logged in:",s),localStorage.setItem("authToken",s.idToken),alert("Успешен вход!"),window.location.href="/",fe()}catch(s){console.error("❌",s.message),alert("Грешка: "+s.message)}}const dt=document.querySelector("main");async function ut(){_(pt(),dt)}function pt(){return g`<!-- register.html -->
    <section class="auth" id="view-register">
      <div class="card">
        <form
          class="form"
          id="register-form"
          autocomplete="on"
          @submit=${mt}
        >
          <div class="grid">
            <div class="field">
              <label for="s-first">Име</label>
              <input id="s-first" name="firstName" required />
            </div>
            <div class="field">
              <label for="s-last">Фамилия</label>
              <input id="s-last" name="lastName" required />
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
    </section> `}const ft={EMAIL_EXISTS:"Този имейл вече е регистриран.",OPERATION_NOT_ALLOWED:"Email/Password login е изключен в Firebase.",TOO_MANY_ATTEMPTS_TRY_LATER:"Твърде много опити. Опитайте отново по-късно.",WEAK_PASSWORD:"Паролата трябва да е поне 6 символа."};async function gt(t,e){var r,a;const s=await fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD2Vmd03Gcf9-k3uzRTHVln_gzXDhuPnqk",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t,password:e,returnSecureToken:!0})}),n=await s.json();if(!s.ok){const c=ft[(r=n.error)==null?void 0:r.message]||((a=n.error)==null?void 0:a.message)||"Грешка при регистрация.";throw new Error(c)}return n}async function mt(t){t.preventDefault();const e=t.currentTarget,i=e.email.value.trim(),s=e.password.value;if(!i||!s){alert("Моля, въведете имейл и парола.");return}if(s.length<6){alert("Паролата трябва да е поне 6 символа.");return}e.querySelector("button[type=submit]").disabled=!0;try{const n=await gt(i,s);console.log("✅ Registered:",n),window.location.href="/login"}catch(n){alert(n.message)}finally{e.querySelector("button[type=submit]").disabled=!1}}const se=document.querySelector("main");function vt(){if(!localStorage.getItem("authToken"))return _(g`<p>Моля, <a href="/login">влезте</a> в профила си.</p>`,se);_(_t([{id:"1001",date:"03.09.2025",status:"Обработва се",total:"249.00",items:[{name:"Гривна с диаманти",qty:1,image:"/images/bracelets.png"}]},{id:"1002",date:"05.09.2025",status:"Пътува",total:"249.00",items:[{name:"Колие",qty:1,image:"/images/necklaces.png"}]}]),se)}function _t(t){return g`
    <section class="profile">
      <div class="container">
        <h2 class="section-title">Поръчки</h2>

        ${t.length===0?g`
              <div class="empty-orders">
                <strong>Все още няма поръчки.</strong>
                <p>Посетете магазина, за да направите поръчка.</p>
              </div>
            `:g`
              <ul class="orders-list">
                ${t.map(e=>g`
                    <li class="order-card">
                      <p><strong>Поръчка №${e.id}</strong></p>
                      <p>Дата: ${e.date}</p>
                      <p>Статус: ${e.status}</p>
                      <p>Сума: ${e.total} лв.</p>
                      <div class="order-items">
                        ${e.items.map(i=>g`
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
  `}fe();y("/",Ve);y("/handmade",Ze);y("/collection",ze);y("/contact",Je);y("/about",et);y("/login",ot);y("/register",ut);y("/profile",vt);y.start();
