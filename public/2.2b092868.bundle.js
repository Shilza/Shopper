(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{70:function(e,n,t){"use strict";t.d(n,"a",function(){return p}),t.d(n,"b",function(){return d});var r=t(2),i=t(0),o=t.n(i),a=t(71),u=t.n(a);function l(){var e=s(["\n    border-right: 1px solid white;\n    min-width: 100%;\n    max-width: 100%;\n    scroll-snap-align: start;\n    cursor: pointer;\n    position: relative;\n"]);return l=function(){return e},e}function c(){var e=s(["\n    scroll-snap-type: mandatory;\n    scroll-snap-points-y: repeat(100vw);\n    scroll-snap-type: x mandatory;\n    display: flex;\n    overflow-x: scroll;\n    overflow-y: hidden;\n    scroll-behavior: smooth;\n\n    -ms-overflow-style: none;\n    overflow: -moz-scrollbars-none;\n    &::-webkit-scrollbar {\n        width: 0;\n    }\n"]);return c=function(){return e},e}function s(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var f=r.a.div(c()),d=r.a.section(l()),p=o.a.forwardRef(function(e,n){var t=e.children,r=e.onScroll,a=void 0===r?function(){}:r;return Object(i.useEffect)(function(){u()()},[]),o.a.createElement(f,{ref:n,onScroll:a},t)})},71:function(e,n,t){e.exports=function(){"use strict";function e(e){e.each(function(e){var n=document.querySelectorAll(e.getSelectors()),r=e.getDeclaration();[].forEach.call(n,function(e){!function(e,n){if(void 0!==n["scroll-snap-align"])return e.scrollSnapAlignment=function(e){var n=e["scroll-snap-align"],t=v,r=v;if(void 0!==n){var i=n.split(" ");t=i[0],r=i.length>1?i[1]:t}return{x:t,y:r}}(n),function(e){for(var n=e;e&&e!==document;e=e.parentNode)void 0!==e.snapElements&&e.snapElements.push(n)}(e);var r=e.tagName;"body"!=r.toLowerCase()&&"html"!=r.toLowerCase()||(e=document),e.addEventListener("scroll",M,!1),e.scrollPadding=function(e){var n=e["scroll-padding"],r=e["scroll-padding-top"],i=e["scroll-padding-right"],o=e["scroll-padding-bottom"],a=e["scroll-padding-left"],u={value:0,unit:"px"},l={value:0,unit:"px"},c={value:0,unit:"px"},s={value:0,unit:"px"};if(void 0!==n){var f=n.split(" ");f.forEach(function(e,n){var r=t(e);switch(n){case 0:u=r,l=r,c=r,s=r;break;case 1:l=r,s=r;break;case 2:c=r;break;case 3:s=r}})}return void 0!==r&&(u=t(r)),void 0!==i&&(l=t(i)),void 0!==o&&(c=t(o)),void 0!==a&&(s=t(a)),{top:u,right:l,bottom:c,left:s}}(n),e.snapElements=[]}(e,r)})})}function n(e){e.each(function(e){var n=document.querySelectorAll(e.getSelectors());[].forEach.call(n,function(e){!function(e){var n=e.tagName;"body"!=n.toLowerCase()&&"html"!=n.toLowerCase()||(e=document),document.removeEventListener("scroll",M,!1),e.removeEventListener("scroll",M,!1),e.snapLengthUnit=null,e.snapElements=[]}(e)})})}function t(e){var n=w.exec(e);if(null===n)return{value:0,unit:"px"};var t=m(n,3),r=(t[0],t[1]),i=t[2];return{value:parseInt(r,10),unit:i}}function r(e,n,t){return n&&"vw"===n.toLowerCase()?f(document.documentElement)*(e/100):n&&"vh"===n.toLowerCase()?s(document.documentElement)*(e/100):n&&"%"===n?f(t)*(e/100):e}function i(e,n){return-1===e?Math.floor(n):Math.ceil(n)}function o(e,n,t){return Math.max(Math.min(t,n),e)}function a(e,n,t){return n===y?0:n===g?s(e):n===b?i(t,s(e)/2):0}function u(e,n,t){return n===y?0:n===g?f(e):n===b?i(t,f(e)/2):0}function l(e){return e.scrollHeight}function c(e){return e.scrollWidth}function s(e){return e.offsetHeight}function f(e){return e.offsetWidth}function d(e){return e.offsetLeft+e.clientLeft}function p(e){return e.offsetTop+e.clientTop}function h(e,n){var t=Math.abs(e-n),r=100/Math.max(document.documentElement.clientHeight,window.innerHeight||1)*t,i=100/E*r;return isNaN(i)?0:Math.max(E/1.5,Math.min(i,E))}!function(e,n,t){function r(e){return e.replace(/^\s+|\s+$/g,"")}function i(e,n){var t,r=0;if(!e||!n)return!1;for(;t=n[r++];)if(e===t)return!0;return!1}function o(e){var n,t=0;for(this._rules=[];n=e[t++];)this._rules.push(new a(n))}function a(e){this._rule=e}function u(e){return this instanceof u?(this._options=e,e.keywords||(this._options={keywords:e}),this._promise=[],this._getStylesheets(),this._downloadStylesheets(),this._parseStylesheets(),this._filterCSSByKeywords(),this._buildMediaQueryMap(),this._reportInitialMatches(),void this._addMediaListeners()):new u(e)}var l=RegExp("^"+String({}.valueOf).replace(/[.*+?\^${}()|\[\]\\]/g,"\\$&").replace(/valueOf|for [^\]]+/g,".+?")+"$"),c=function(){var e=n.getElementsByTagName("base")[0],t=/^([a-zA-Z:]*\/\/)/;return function(n){return!t.test(n)&&!e||n.replace(RegExp.$1,"").split("/")[0]===location.host}}(),s={matchMedia:e.matchMedia&&e.matchMedia("only all").matches,nativeMatchMedia:function(e){return l.test(e)}(e.matchMedia)},f=function(){function n(){var e;0!==l.readyState&&4!==l.readyState||((e=o[0])&&function(e){u++,l.open("GET",e,!0),l.onreadystatechange=function(){4!=l.readyState||200!=l.status&&304!=l.status||(r[e]=l.responseText,o.shift(),n())},l.send(null)}(e),e||t())}function t(){for(var e;e=a.shift();)!function(e,n){for(var t,i=[],o=0;t=e[o++];)i.push(r[t]);n.call(null,i)}(e.urls,e.fn)}var r={},o=[],a=[],u=0,l=function(){var n;try{n=new e.XMLHttpRequest}catch(t){n=new e.ActiveXObject("Microsoft.XMLHTTP")}return n}();return{request:function(e,u){a.push({urls:e,fn:u}),function(e){for(var n,t=0,i=0;n=e[t++];)r[n]&&i++;return i===e.length}(e)?t():(function(e){for(var n,t=0;n=e[t++];)r[n]||i(n,o)||o.push(n)}(e),n())},clearCache:function(){r={}},_getRequestCount:function(){return u}}}(),d={_cache:{},clearCache:function(){d._cache={}},parse:function(e,n){function t(){return o(/^\{\s*/)}function i(){return o(/^\}\s*/)}function o(n){var t=n.exec(e);if(t)return e=e.slice(t[0].length),t}function a(){o(/^\s*/)}function u(n){n=n||[];for(var t;t=function(){if("/"==e[0]&&"*"==e[1]){for(var n=2;"*"!=e[n]||"/"!=e[n+1];)++n;n+=2;var t=e.slice(2,n-2);return e=e.slice(n),a(),{comment:t}}}();)n.push(t);return n}function l(){var e=o(/^([^{]+)/);if(e)return r(e[0]).split(/\s*,\s*/)}function c(){var e=o(/^(\*?[\-\w]+)\s*/);if(e&&(e=e[0],o(/^:\s*/))){var n=o(/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^\)]*?\)|[^};])+)\s*/);if(n)return n=r(n[0]),o(/^[;\s]*/),{property:e,value:n}}}function s(){for(var e,n=[];e=o(/^(from|to|\d+%|\.\d+%|\d+\.\d+%)\s*/);)n.push(e[1]),o(/^,\s*/);return n.length?{values:n,declarations:p()}:void 0}function f(e){var n=o(new RegExp("^@"+e+" *([^;\\n]+);\\s*"));if(n){var t={};return t[e]=r(n[1]),t}}function p(){var e=[];if(t()){u();for(var n;n=c();)e.push(n),u();if(i())return e}}return n&&d._cache[n]?d._cache[n]:(e=e.replace(/\/\*[\s\S]*?\*\//g,""),d._cache[n]=function n(){var d,h=[];for(a(),u(h);"}"!=e.charAt(0)&&(d=function(){if(n=o(/^@([\-\w]+)?keyframes */)){var e=n[1],n=o(/^([\-\w]+)\s*/);if(n){var r=n[1];if(t()){u();for(var a,l=[];a=s();)l.push(a),u();if(i()){var c={name:r,keyframes:l};return e&&(c.vendor=e),c}}}}}()||function(){var e=o(/^@media *([^{]+)/);if(e){var a=r(e[1]);if(t()){u();var l=n();if(i())return{media:a,rules:l}}}}()||function(){var e=o(/^@supports *([^{]+)/);if(e){var a=r(e[1]);if(t()){u();var l=n();if(i())return{supports:a,rules:l}}}}()||f("import")||f("charset")||f("namespace")||function(){if(o(/^@page */)){var e=l()||[],n=[];if(t()){u();for(var r;r=c()||function(){var e=o(/^@([a-z\-]+) */);if(e){var n=e[1];return{type:n,declarations:p()}}}();)n.push(r),u();if(i())return{type:"page",selectors:e,declarations:n}}}}()||function(){var e=l();if(e)return u(),{selectors:e,declarations:p()}}());)h.push(d),u(h);return h}())},filter:function(e,n){function t(e,n){return e||n?e?e.concat(n):[n]:void 0}function i(e){null==e.media&&delete e.media,null==e.supports&&delete e.supports,l.push(e)}function o(e,n){for(var t,i,o,a,u=/\*/,l=0;t=n[l++];)if(i=t.split(":"),o=new RegExp("^"+r(i[0]).replace(u,".*")+"$"),a=new RegExp("^"+r(i[1]).replace(u,".*")+"$"),o.test(e.property)&&a.test(e.value))return!0}function a(e,t,r){return n.selectors&&function(e,n){if(n)for(var t=n.length;t--;)if(e.indexOf(n[t])>=0)return!0}(e.selectors.join(","),n.selectors)?(i({media:t,supports:r,selectors:e.selectors,declarations:e.declarations}),!0):void 0}function u(e,t,r){if(n.declarations)for(var a,u=0;a=e.declarations[u++];)if(o(a,n.declarations))return i({media:t,supports:r,selectors:e.selectors,declarations:e.declarations}),!0}var l=[];return function e(n,r,i){for(var o,l=0;o=n[l++];)o.declarations?a(o,r,i)||u(o,r,i):o.rules&&o.media?e(o.rules,t(r,o.media),i):o.rules&&o.supports&&e(o.rules,r,t(i,o.supports))}(e),l}},p=function(){function t(){if(r)return r;var e=n.documentElement,t=n.body,i=e.style.fontSize,o=t.style.fontSize,a=n.createElement("div");return e.style.fontSize="1em",t.style.fontSize="1em",t.appendChild(a),a.style.width="1em",a.style.position="absolute",r=a.offsetWidth,t.removeChild(a),t.style.fontSize=o,e.style.fontSize=i,r}var r,i,o=/\(min\-width:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/,a=/\(max\-width:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/;return{matchMedia:function(r){return s.matchMedia?function(n){return e.matchMedia(n)}(r):function(e){var r,u,l=!1;return i=n.documentElement.clientWidth,o.test(e)&&(r="em"===RegExp.$2?parseFloat(RegExp.$1)*t():parseFloat(RegExp.$1)),a.test(e)&&(u="em"===RegExp.$2?parseFloat(RegExp.$1)*t():parseFloat(RegExp.$1)),r&&u?l=i>=r&&u>=i:(r&&i>=r&&(l=!0),u&&u>=i&&(l=!0)),{matches:l,media:e}}(r)},clearCache:function(){s.nativeMatchMedia||(i=null)}}}(),h=function(){var n=function(){var e=[];return{add:function(n,t,r){for(var i,o=0;i=e[o++];)if(i.polyfill==n&&i.mql===t&&i.fn===r)return!1;t.addListener(r),e.push({polyfill:n,mql:t,fn:r})},remove:function(n){for(var t,r=0;t=e[r++];)t.polyfill===n&&(t.mql.removeListener(t.fn),e.splice(--r,1))}}}(),t=function(n){function t(){for(var e,t=0;e=n[t++];)e.fn()}return{add:function(r,i){n.length||(e.addEventListener?e.addEventListener("resize",t,!1):e.attachEvent("onresize",t)),n.push({polyfill:r,fn:i})},remove:function(r){for(var i,o=0;i=n[o++];)i.polyfill===r&&n.splice(--o,1);n.length||(e.removeEventListener?e.removeEventListener("resize",t,!1):e.detachEvent&&e.detachEvent("onresize",t))}}}([]);return{removeListeners:function(e){s.nativeMatchMedia?n.remove(e):t.remove(e)},addListeners:function(e,r){var i=e._mediaQueryMap,o={};!function(){for(var e in i)i.hasOwnProperty(e)&&(o[e]=p.matchMedia(e).matches)}(),function(){if(s.nativeMatchMedia)for(var a in i)i.hasOwnProperty(a)&&function(t,i){n.add(e,t,function(){r.call(e,i,t.matches)})}(i[a],a);else{var u=function(e,n){var t;return function(){clearTimeout(t),t=setTimeout(e,n)}}(function(e,n){return function(){!function(e,n){var t,i={};for(t in p.clearCache(),n)n.hasOwnProperty(t)&&(i[t]=p.matchMedia(t).matches,i[t]!=o[t]&&r.call(e,t,p.matchMedia(t).matches));o=i}(e,n)}}(e,i),e._options.debounceTimeout||100);t.add(e,u)}}()}}}();o.prototype.each=function(e,n){var t,r=0;for(n||(n=this);t=this._rules[r++];)e.call(n,t)},o.prototype.size=function(){return this._rules.length},o.prototype.at=function(e){return this._rules[e]},a.prototype.getDeclaration=function(){for(var e,n={},t=0,r=this._rule.declarations;e=r[t++];)n[e.property]=e.value;return n},a.prototype.getSelectors=function(){return this._rule.selectors.join(", ")},a.prototype.getMedia=function(){return this._rule.media.join(" and ")},u.prototype.doMatched=function(e){return this._doMatched=e,this._resolve(),this},u.prototype.undoUnmatched=function(e){return this._undoUnmatched=e,this._resolve(),this},u.prototype.getCurrentMatches=function(){for(var e,n,t=0,r=[];e=this._filteredRules[t++];)(!(n=e.media&&e.media.join(" and "))||p.matchMedia(n).matches)&&r.push(e);return new o(r)},u.prototype.destroy=function(){this._undoUnmatched&&(this._undoUnmatched(this.getCurrentMatches()),h.removeListeners(this))},u.prototype._defer=function(e,n){e.call(this)?n.call(this):this._promise.push({condition:e,callback:n})},u.prototype._resolve=function(){for(var e,n=0;e=this._promise[n];)e.condition.call(this)?(this._promise.splice(n,1),e.callback.call(this)):n++},u.prototype._getStylesheets=function(){var e,t,r,o,a,u,l,s=0,f=[];if(this._options.include){for(t=this._options.include;e=t[s++];)if(r=n.getElementById(e)){if("STYLE"===r.nodeName){l={text:r.textContent},f.push(l);continue}if(r.media&&"print"==r.media)continue;if(!c(r.href))continue;l={href:r.href},r.media&&(l.media=r.media),f.push(l)}}else{for(t=this._options.exclude,o=n.getElementsByTagName("link");r=o[s++];)r.rel&&"stylesheet"==r.rel&&"print"!=r.media&&c(r.href)&&!i(r.id,t)&&(l={href:r.href},r.media&&(l.media=r.media),f.push(l));for(u=n.getElementsByTagName("style"),s=0;a=u[s++];)l={text:a.textContent},f.push(l)}return this._stylesheets=f},u.prototype._downloadStylesheets=function(){for(var e,n=this,t=[],r=0;e=this._stylesheets[r++];)t.push(e.href);f.request(t,function(e){for(var t,r=0;t=e[r];)n._stylesheets[r++].text=t;n._resolve()})},u.prototype._parseStylesheets=function(){this._defer(function(){return this._stylesheets&&this._stylesheets.length&&this._stylesheets[0].text},function(){for(var e,n=0;e=this._stylesheets[n++];)e.rules=d.parse(e.text,e.url)})},u.prototype._filterCSSByKeywords=function(){this._defer(function(){return this._stylesheets&&this._stylesheets.length&&this._stylesheets[0].rules},function(){for(var e,n,t=[],r=0;e=this._stylesheets[r++];)(n=e.media)&&"all"!=n&&"screen"!=n?t.push({rules:e.rules,media:e.media}):t=t.concat(e.rules);this._filteredRules=d.filter(t,this._options.keywords)})},u.prototype._buildMediaQueryMap=function(){this._defer(function(){return this._filteredRules},function(){var e,n,t=0;for(this._mediaQueryMap={};n=this._filteredRules[t++];)n.media&&(e=n.media.join(" and "),this._mediaQueryMap[e]=p.matchMedia(e))})},u.prototype._reportInitialMatches=function(){this._defer(function(){return this._filteredRules&&this._doMatched},function(){this._doMatched(this.getCurrentMatches())})},u.prototype._addMediaListeners=function(){this._defer(function(){return this._filteredRules&&this._doMatched&&this._undoUnmatched},function(){h.addListeners(this,function(e,n){for(var t,r=0,i=[],a=[];t=this._filteredRules[r++];)t.media&&t.media.join(" and ")==e&&(n?i:a).push(t);i.length&&this._doMatched(new o(i)),a.length&&this._undoUnmatched(new o(a))})})},u.modules={DownloadManager:f,StyleManager:d,MediaManager:p,EventManager:h},u.constructors={Ruleset:o,Rule:a},e.Polyfill=u}(window,document),function(){function n(n){function t(i,o){try{var a=n[i](o),u=a.value;u instanceof function(e){this.value=e}?Promise.resolve(u.value).then(function(e){t("next",e)},function(e){t("throw",e)}):r(a.done?"return":"normal",a.value)}catch(e){r("throw",e)}}function r(e,n){switch(e){case"return":i.resolve({value:n,done:!0});break;case"throw":i.reject(n);break;default:i.resolve({value:n,done:!1})}(i=i.next)?t(i.key,i.arg):o=null}var i,o;this._invoke=function(e,n){return new Promise(function(r,a){var u={key:e,arg:n,resolve:r,reject:a,next:null};o?o=o.next=u:(i=o=u,t(e,n))})},"function"!=typeof n.return&&(this.return=void 0)}"function"==typeof Symbol&&Symbol.asyncIterator&&(n.prototype[Symbol.asyncIterator]=function(){return this}),n.prototype.next=function(e){return this._invoke("next",e)},n.prototype.throw=function(e){return this._invoke("throw",e)},n.prototype.return=function(e){return this._invoke("return",e)}}();var m=function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,n){var t=[],r=!0,i=!1,o=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(t.push(a.value),!n||t.length!==n);r=!0);}catch(e){i=!0,o=e}finally{try{!r&&u.return&&u.return()}finally{if(i)throw o}}return t}(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")},v="none",y="start",g="end",b="center",w=/(\d+)(px|vh|vw|%)/g,x=.18,E=350,j=null,O=null,_=void 0,z=void 0,M=function(e){_=e.target,z=function(e){return e==document||e==window?document.documentElement.scrollTop>0||document.documentElement.scrollLeft>0?document.documentElement:document.querySelector("body"):e}(_),L&&(cancelAnimationFrame(L)||clearTimeout(L)),j?clearTimeout(j):O={y:z.scrollTop,x:z.scrollLeft},j=setTimeout(S,45)},S=function(){if(O.y!=z.scrollTop||O.x!=z.scrollLeft){var e={y:O.y-z.scrollTop>0?-1:1,x:O.x-z.scrollLeft>0?-1:1},n=void 0;void 0!==z.snapElements&&z.snapElements.length>0&&(n=function(e,n,t){function h(e,n){return 0===P||P===m-1?e:e-n}var m=n.snapElements.length,v=e.scrollTop,y=e.scrollLeft,g=Math.min(t.y,t.x),b={y:0,x:0},w=e.scrollPadding,E=w.top,j=w.right,O=w.bottom,_=w.left,z=i(t,r(E.value,E.unit,e)),M=(i(t,r(j.value,j.unit,e)),i(t,r(O.value,O.unit,e)),i(t,r(_.value,_.unit,e)));if(y>0&&y+f(e)===c(e)||v>0&&v+s(e)===l(e)){P=m-1;var S=n.snapElements[P],C={x:d(S)-d(e)+u(S,S.scrollSnapAlignment.x,t),y:p(S)-p(e)+a(S,S.scrollSnapAlignment.y,t)};return S.snapCoords=C,{y:o(0,l(e),C.y),x:o(0,c(e),C.x)}}var L=n.snapElements[P],A={x:0===P?0:d(L)-d(e)+u(L,L.scrollSnapAlignment.x,t)-u(e,L.scrollSnapAlignment.x,t),y:0===P?0:p(L)-p(e)+a(L,L.scrollSnapAlignment.y,t)-a(e,L.scrollSnapAlignment.y,t)};L.snapCoords=A;for(var R=A.x+t.x*f(L)*x,T=A.y+t.y*s(L)*x,N=P+g;N<m&&N>=0&&(k=n.snapElements[N],b={y:0===N?0:p(k)-p(e)+a(k,k.scrollSnapAlignment.y,t)-a(e,k.scrollSnapAlignment.y,t),x:0===N?0:d(k)-d(e)+u(k,k.scrollSnapAlignment.x,t)-u(e,k.scrollSnapAlignment.x,t)},k.snapCoords=b,!(1===t.x?y<R:y>R)||!(1===t.y?v<T:v>T));N+=g){var B=b.x+t.x*f(k)*x,I=b.y+t.y*s(k)*x;if(!(1===t.x?y>B:y<B)&&!(1===t.y?v>I:v<I))return P=N,{y:o(0,l(e),h(b.y,z)),x:o(0,c(e),h(b.x,M))}}return 1==g&&N===m-1?(P=m-1,{y:o(0,l(e),b.y),x:o(0,c(e),b.x)}):-1==g&&0===N?(P=0,{y:o(0,l(e),b.y),x:o(0,c(e),b.x)}):{y:o(0,l(e),h(n.snapElements[P].snapCoords.y,z)),x:o(0,c(e),h(n.snapElements[P].snapCoords.x,M))}}(z,_,e)),_.removeEventListener("scroll",M,!1),A(z,n,function(){_.addEventListener("scroll",M,!1)}),isNaN(n.x)&&isNaN(n.y)||(O=n)}},k=null,P=0,C=function(e,n,t,r){return t>r?n:e+(n-e)*function(e){return e*e*e}(t/r)},L=null,A=function(e,n,t){var r={y:e.scrollTop,x:e.scrollLeft},i=Date.now(),o=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||function(e){window.setTimeout(e,15)},a=Math.max(h(r.y,n.y),h(r.x,n.x));!function u(){var l=Date.now()-i;if(isNaN(n.y)||(e.scrollTop=C(r.y,n.y,l,a)),isNaN(n.x)||(e.scrollLeft=C(r.x,n.x,l,a)),l>a){if("function"==typeof t)return t(n)}else L=o(u)}()};return function(){"scrollSnapAlign"in document.documentElement.style||"webkitScrollSnapAlign"in document.documentElement.style||"msScrollSnapAlign"in document.documentElement.style||Polyfill({declarations:["scroll-snap-type:*","scroll-snap-align:*","scroll-snap-padding:*"]}).doMatched(e).undoUnmatched(n)}}()},72:function(e,n,t){"use strict";function r(){var e=function(e,n){n||(n=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(["\n    width: 10px;\n    height: 10px;\n    border-radius: 50%;\n    border: 1px solid black;\n    background: ",";\n    opacity: 0.8;\n    margin-left: 5px;\n"]);return r=function(){return e},e}var i=t(2).a.div(r(),function(e){return e.color});n.a=i},80:function(e,n,t){"use strict";t.r(n);var r,i,o=t(0),a=t.n(o),u=t(2),l=t(9),c=t(3);function s(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,n,t,r,i){var o={};return Object.keys(r).forEach(function(e){o[e]=r[e]}),o.enumerable=!!o.enumerable,o.configurable=!!o.configurable,("value"in o||o.initializer)&&(o.writable=!0),o=t.slice().reverse().reduce(function(t,r){return r(e,n,t)||t},o),i&&void 0!==o.initializer&&(o.value=o.initializer?o.initializer.call(i):void 0,o.initializer=void 0),void 0===o.initializer&&(Object.defineProperty(e,n,o),o=null),o}var d=new(i=f((r=function(){function e(){var n,t,r,o;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),n=this,t="page",o=this,(r=i)&&Object.defineProperty(n,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(o):void 0})}var n,t,r;return n=e,(t=[{key:"setPage",value:function(e){this.page=e}}])&&s(n.prototype,t),r&&s(n,r),e}()).prototype,"page",[c.e],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),f(r.prototype,"setPage",[c.b],Object.getOwnPropertyDescriptor(r.prototype,"setPage"),r.prototype),r);function p(){var e=function(e,n){n||(n=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(["\n    background: gray;\n    width: 50%;\n    height: 60%;\n    margin-bottom: 30px;\n    cursor: pointer;\n    transition: 0.3s;\n    ","\n\n    @media (max-width: 768px) {\n        width: auto;\n        margin: 0 10px;\n    }\n"]);return p=function(){return e},e}var h=u.a.img(p(),function(e){return e.border&&"border: 2px solid black;"});function m(){var e=function(e,n){n||(n=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(["\n    display: flex;\n    flex-direction: column;\n    flex: 1 1;\n    align-self: flex-start;\n\n    @media (max-width: 768px) {\n        order: 2;\n        display: flex;\n        flex-direction: row;\n        height: 100px;\n        overflow-x: scroll;\n        width: 100%;\n\n        &::-webkit-scrollbar {\n            width: 0;\n        }\n        -ms-overflow-style: none;\n        overflow: -moz-scrollbars-none;\n    }\n"]);return m=function(){return e},e}var v=u.a.div(m()),y=Object(l.a)(function(e){var n=e.images;return o.createElement(v,null,n.map(function(e,n){return o.createElement(h,{src:e,key:n,border:d.page===n,onClick:function(){d.setPage(n)}})}))}),g=t(8),b=t.n(g);function w(){var e=function(e,n){n||(n=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(["\n    color: #000;\n    position: absolute;\n    width: 16px;\n    height: 1px;\n    background-color: currentColor;\n\n    &:before {\n        content: '';\n        position: absolute;\n        left: 1px;\n        top: -5px;\n        width: 10px;\n        height: 10px;\n        border-top: solid 1px currentColor;\n        border-right: solid 1px currentColor;\n        -webkit-transform: rotate(-135deg);\n        transform: rotate(-135deg);\n    }\n"]);return w=function(){return e},e}var x=u.a.div(w());function E(){var e=function(e,n){n||(n=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(["\n    color: #000;\n    position: absolute;\n    width: 16px;\n    height: 1px;\n    background-color: currentColor;\n\n    &:before {\n        content: '';\n        position: absolute;\n        right: 1px;\n        top: -5px;\n        width: 10px;\n        height: 10px;\n        border-top: solid 1px currentColor;\n        border-right: solid 1px currentColor;\n        -webkit-transform: rotate(45deg);\n        transform: rotate(45deg);\n    }\n"]);return E=function(){return e},e}var j=u.a.div(E());function O(){var e=S(["\n    margin-right: 10px;\n"]);return O=function(){return e},e}function _(){var e=S(["\n    margin-left: 10px;\n"]);return _=function(){return e},e}function z(){var e=S(["\n    border: 0;\n    outline: 0;\n    cursor: pointer;\n    border-radius: 50%;\n    width: 36px;\n    height: 36px;\n    background: white;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n"]);return z=function(){return e},e}function M(){var e=S(["\n    height: 100%;\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    position: absolute;\n    top: 0;\n    left: 0;\n"]);return M=function(){return e},e}function S(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var k,P,C,L=u.a.div(M()),A=u.a.button(z()),R=Object(u.a)(A)(_()),T=Object(u.a)(A)(O()),N=function(e){var n=e.leftButtonShown,t=e.rightButtonShown,r=e.snapLeft,i=e.snapRight;return a.a.createElement(L,null,n?a.a.createElement(R,{onClick:r},a.a.createElement(x,null)):a.a.createElement("span",null),t&&a.a.createElement(T,{onClick:i},a.a.createElement(j,null)))};function B(e,n,t,r){t&&Object.defineProperty(e,n,{enumerable:t.enumerable,configurable:t.configurable,writable:t.writable,value:t.initializer?t.initializer.call(r):void 0})}function I(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function $(e,n,t,r,i){var o={};return Object.keys(r).forEach(function(e){o[e]=r[e]}),o.enumerable=!!o.enumerable,o.configurable=!!o.configurable,("value"in o||o.initializer)&&(o.writable=!0),o=t.slice().reverse().reduce(function(t,r){return r(e,n,t)||t},o),i&&void 0!==o.initializer&&(o.value=o.initializer?o.initializer.call(i):void 0,o.initializer=void 0),void 0===o.initializer&&(Object.defineProperty(e,n,o),o=null),o}var q=new(P=$((k=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),B(this,"shown",P,this),B(this,"src",C,this)}var n,t,r;return n=e,(t=[{key:"openViewer",value:function(e){this.shown=!0,this.src=e}},{key:"closeViewer",value:function(){this.shown=!1,this.src=""}}])&&I(n.prototype,t),r&&I(n,r),e}()).prototype,"shown",[c.e],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),C=$(k.prototype,"src",[c.e],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),$(k.prototype,"openViewer",[c.b],Object.getOwnPropertyDescriptor(k.prototype,"openViewer"),k.prototype),$(k.prototype,"closeViewer",[c.b],Object.getOwnPropertyDescriptor(k.prototype,"closeViewer"),k.prototype),k);function F(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,i=!1,o=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(t.push(a.value),!n||t.length!==n);r=!0);}catch(l){i=!0,o=l}finally{try{r||null==u.return||u.return()}finally{if(i)throw o}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function U(){var e=D(["\n    width: 100%;\n"]);return U=function(){return e},e}function V(){var e=D(["\n    outline: none;\n"]);return V=function(){return e},e}function D(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var H=u.a.div(V()),W=u.a.img(U()),Q=function(e){var n=e.src,t=e.snapRight,r=e.snapLeft,i=e.leftButtonShown,u=e.rightButtonShown,l=F(Object(o.useState)(!1),2),c=l[0],s=l[1],f=function(){return s(!0)},d=function(){return s(!1)},p=function(){q.openViewer(n)};return a.a.createElement(H,{onMouseOver:f,onMouseLeave:d,onFocus:f,onBlur:d,onClick:p,onKeyUp:p,role:"button",tabIndex:0},a.a.createElement(W,{src:n,alt:"product"}),a.a.createElement(b.a,{minWidth:769},c&&a.a.createElement(N,{leftButtonShown:i,rightButtonShown:u,snapRight:t,snapLeft:r})))};function K(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,i=!1,o=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(t.push(a.value),!n||t.length!==n);r=!0);}catch(l){i=!0,o=l}finally{try{r||null==u.return||u.return()}finally{if(i)throw o}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function X(){var e=function(e,n){n||(n=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(["\n    position: absolute;\n    top: 0;\n    left: 0;\n    cursor: pointer;\n    width: 100%;\n    height: auto;\n    z-index: 10;\n"]);return X=function(){return e},e}var J=u.a.img(X()),Y=Object(l.a)(function(){var e=K(Object(o.useState)(0),2),n=e[0],t=e[1];return a.a.createElement(a.a.Fragment,null,a.a.createElement(b.a,{minWidth:769},q.shown&&a.a.createElement(J,{src:q.src,onMouseMove:function(e){var r=e.pageY;n||t(r),window.scrollBy(0,(r-n)/1.4),t(r)},onClick:function(){return q.closeViewer()}})))}),G=t(70);function Z(){var e=function(e,n){n||(n=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(["\n    flex: 6 1;\n    max-width: 1000px;\n"]);return Z=function(){return e},e}var ee=u.a.div(Z()),ne=Object(l.a)(function(e){var n=e.images,t=o.useRef(),r=function(){if(t.current){var e=t.current.firstChild;return parseInt(window.getComputedStyle(e,null).getPropertyValue("width"),10)}return 0},i=function(e){d.setPage(d.page+1),e.stopPropagation()},a=function(e){d.setPage(d.page-1),e.stopPropagation()},u=!1,l=d.page;if(t.current){var c=l*r()-t.current.scrollLeft;Math.abs(c)>20&&t.current.scrollBy(c,0)}return o.createElement(ee,null,o.createElement(G.a,{ref:t,onScroll:function(){!1!==u&&clearTimeout(u),u=setTimeout(function(){t.current&&d.setPage(Math.round(t.current.scrollLeft/r()))},300)}},n.map(function(e,t){return o.createElement(G.b,{key:t},o.createElement(Q,{src:e,index:t,leftButtonShown:t>0,rightButtonShown:t!==n.length-1,snapRight:i,snapLeft:a}))})),o.createElement(Y,null))});function te(){var e=ie(["\n    color: #999;\n"]);return te=function(){return e},e}function re(){var e=ie(["\n    display: flex;\n    flex-direction: column;\n    border-bottom: 2px dashed #efefef;\n    padding-bottom: 15px;\n"]);return re=function(){return e},e}function ie(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var oe=u.a.div(re()),ae=u.a.span(te()),ue=function(e){var n=e.number,t=e.size,r=e.height;return a.a.createElement(oe,null,a.a.createElement(ae,null,"Number ",n),a.a.createElement(ae,null,"Model wears size ",t," |Model height:",r))};function le(){var e=se(["\n    text-transform: uppercase;\n    border: 1px solid lightgray;\n    padding: 10px;\n    width: 20px;\n    text-align: center;\n    cursor: pointer;\n\n    transition: 0.35s;\n\n    &:hover {\n        border: 1px solid black;\n    }\n"]);return le=function(){return e},e}function ce(){var e=se(["\n    display: flex;\n    list-style-type: none;\n    border: 0;\n    padding: 0;\n    margin: 15px 0 0 0;\n"]);return ce=function(){return e},e}function se(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var fe=u.a.ul(ce()),de=u.a.li(le()),pe=function(){return a.a.createElement("div",null,a.a.createElement("span",null,"Choose your size:"),a.a.createElement(fe,null,a.a.createElement(de,null,"xs"),a.a.createElement(de,null,"s"),a.a.createElement(de,null,"m"),a.a.createElement(de,null,"l"),a.a.createElement(de,null,"xl")))};function he(){var e=ve(["\n    width: 20px;\n    margin-right: 10px;\n"]);return he=function(){return e},e}function me(){var e=ve(["\n    color: #00a261;\n    text-align: center;\n    display: flex;\n    align-items: center;\n"]);return me=function(){return e},e}function ve(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var ye=u.a.div(me()),ge=u.a.img(he()),be=function(){return a.a.createElement(ye,null,a.a.createElement(ge,{src:"https://static.bershka.net/4/static/itxwebstandard/images/home/fs.png?20190319025255"}),"Free standard shipping and delivery points for orders over 1000$.")},we=t(72);function xe(){var e=function(e,n){n||(n=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(["\n    display: flex;\n    align-items: center;\n"]);return xe=function(){return e},e}var Ee=u.a.div(xe()),je=function(e){var n=e.color;return a.a.createElement(Ee,null,a.a.createElement("span",null,"Color: ",n),a.a.createElement(we.a,{color:n}))},Oe=t(25);function _e(){var e=function(e,n){n||(n=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(["\n    cursor: pointer;\n    border: 0;\n    outline: 0;\n    height: 6%;\n    min-height: 30px;\n    transition: 0.5s;\n\n    @media (max-width: 768px) {\n        width: 50%;\n        max-width: 400px;\n        margin: 0 auto 15px auto;\n    }\n"]);return _e=function(){return e},e}var ze=u.a.button(_e());function Me(){var e=function(e,n){n||(n=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(["\n    background: white;\n    color: black;\n    border: 1px solid black;\n    text-transform: uppercase;\n\n    &:hover {\n        color: #00a261;\n        border-color: #00a261;\n    }\n"]);return Me=function(){return e},e}var Se=Object(u.a)(ze)(Me()),ke=Object(l.a)(function(e){var n=e.id,t=Oe.a.isAdded(n);return a.a.createElement(Se,{onClick:function(){t?Oe.a.removeItemId(n):Oe.a.addItemId(n)}},t?"Remove from wish list":"Add to wish list")});function Pe(){var e=Te(["\n    background: black;\n    color: white;\n    text-transform: uppercase;\n\n    &:hover {\n        background: #00a261;\n    }\n"]);return Pe=function(){return e},e}function Ce(){var e=Te(["\n    text-transform: uppercase;\n    letter-spacing: 2px;\n    font-size: 1.4em;\n    margin 0;\n"]);return Ce=function(){return e},e}function Le(){var e=Te(["\n    margin: 15px 0 20px 0;\n    text-transform: uppercase;\n    font-size: 1em;\n"]);return Le=function(){return e},e}function Ae(){var e=Te(["\n    margin: 0;\n    font-size: 1.7em;\n"]);return Ae=function(){return e},e}function Re(){var e=Te(["\n    order: 3;\n    flex: 4 1;\n    margin: 0 20px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    min-height: 600px;\n    max-height: 700px;\n    font-size: 0.8em;\n"]);return Re=function(){return e},e}function Te(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var Ne=u.a.div(Re()),Be=u.a.h3(Ae()),Ie=u.a.h5(Le()),$e=u.a.h4(Ce()),qe=Object(u.a)(ze)(Pe()),Fe=function(e){var n=e.product;return a.a.createElement(Ne,null,a.a.createElement("div",null,a.a.createElement(Be,null,n.title),a.a.createElement(Ie,null,n.collection),a.a.createElement(ue,{number:n.number,size:n.size,height:n.height})),a.a.createElement($e,null,n.price," $"),a.a.createElement(je,{color:n.color}),a.a.createElement(pe,null),a.a.createElement("span",null,n.extendInfo),a.a.createElement(qe,null,"Add to Cart"),a.a.createElement(be,null),a.a.createElement(ke,{id:n.id}),a.a.createElement(Se,null,"Store search"))},Ue=t(26);function Ve(){var e=function(e,n){n||(n=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(["\n    display: flex;\n    justify-content: space-evenly;\n    max-width: 1600px;\n    margin: auto;\n    padding: 25px;\n\n    @media (max-width: 768px) {\n        display: flex;\n        flex-direction: column;\n        padding: 0;\n    }\n"]);return Ve=function(){return e},e}var De=u.a.div(Ve());n.default=function(e){var n=e.match.params,t=Ue.a.find(function(e){return e.id===parseInt(n.id,10)});return a.a.createElement(De,null,a.a.createElement(y,{images:t.images}),a.a.createElement(ne,{images:t.images}),a.a.createElement(Fe,{product:t}))}}}]);