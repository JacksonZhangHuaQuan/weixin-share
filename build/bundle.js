!function(e){function t(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=3)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(1);n.i(i.a)("XXXX新闻",location.href,"http://xxxxxx.com/img.png","description")},function(e,t,n){"use strict";function i(){$.ajax({type:"post",url:"wechat/getconfig.do",data:{url:location.href},success:function(e){"000000"==e.code&&o.a.config({debug:!1,appId:"wx75b#@**********",timestamp:e.data.timestamp,nonceStr:e.data.nonceStr,signature:e.data.signature,jsApiList:["onMenuShareTimeline","onMenuShareAppMessage","onMenuShareQQ","onMenuShareWeibo","onMenuShareQZone"]})}})}var r=n(4),o=n.n(r),a=n(2),c=(n.n(a),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"XXX新闻标题",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"https://xxxx.com/logo/108.png",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";i(),o.a.ready(function(){o.a.onMenuShareTimeline({title:e,link:t,imgUrl:n,success:function(){alert("分享成功")},cancel:function(){}}),o.a.onMenuShareAppMessage({title:e,link:t,imgUrl:n,desc:r,success:function(){alert("分享成功")},cancel:function(){}}),o.a.onMenuShareQQ({title:e,link:t,imgUrl:n,desc:r,success:function(){alert("分享成功")},cancel:function(){}}),o.a.onMenuShareWeibo({title:e,link:t,imgUrl:n,desc:r,success:function(){alert("分享成功")},cancel:function(){}}),o.a.onMenuShareQZone({title:e,link:t,imgUrl:n,desc:r,success:function(){alert("分享成功")},cancel:function(){}})})});t.a=c},function(e,t){var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=function(){function e(e){return null==e?String(e):z[F.call(e)]||"object"}function t(t){return"function"==e(t)}function i(e){return null!=e&&e==e.window}function r(e){return null!=e&&e.nodeType==e.DOCUMENT_NODE}function o(t){return"object"==e(t)}function a(e){return o(e)&&!i(e)&&Object.getPrototypeOf(e)==Object.prototype}function c(e){return"number"==typeof e.length}function s(e){return P.call(e,function(e){return null!=e})}function u(e){return e.length>0?_.fn.concat.apply([],e):e}function l(e){return e.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function f(e){return e in j?j[e]:j[e]=new RegExp("(^|\\s)"+e+"(\\s|$)")}function d(e,t){return"number"!=typeof t||A[l(e)]?t:t+"px"}function p(e){var t,n;return N[e]||(t=O.createElement(e),O.body.appendChild(t),n=getComputedStyle(t,"").getPropertyValue("display"),t.parentNode.removeChild(t),"none"==n&&(n="block"),N[e]=n),N[e]}function h(e){return"children"in e?M.call(e.children):_.map(e.childNodes,function(e){return 1==e.nodeType?e:void 0})}function m(e,t,n){for(T in t)n&&(a(t[T])||Y(t[T]))?(a(t[T])&&!a(e[T])&&(e[T]={}),Y(t[T])&&!Y(e[T])&&(e[T]=[]),m(e[T],t[T],n)):t[T]!==b&&(e[T]=t[T])}function g(e,t){return null==t?_(e):_(e).filter(t)}function v(e,n,i,r){return t(n)?n.call(e,i,r):n}function y(e,t,n){null==n?e.removeAttribute(t):e.setAttribute(t,n)}function x(e,t){var n=e.className||"",i=n&&n.baseVal!==b;return t===b?i?n.baseVal:n:void(i?n.baseVal=t:e.className=t)}function w(e){try{return e?"true"==e||"false"!=e&&("null"==e?null:+e+""==e?+e:/^[\[\{]/.test(e)?_.parseJSON(e):e):e}catch(t){return e}}function S(e,t){t(e);for(var n=0,i=e.childNodes.length;i>n;n++)S(e.childNodes[n],t)}var b,T,_,E,I,C,k=[],M=k.slice,P=k.filter,O=window.document,N={},j={},A={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},L=/^\s*<(\w+|!)[^>]*>/,V=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,R=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,B=/^(?:body|html)$/i,D=/([A-Z])/g,W=["val","css","html","text","data","width","height","offset"],U=["after","prepend","before","append"],J=O.createElement("table"),Z=O.createElement("tr"),$={tr:O.createElement("tbody"),tbody:J,thead:J,tfoot:J,td:Z,th:Z,"*":O.createElement("div")},q=/complete|loaded|interactive/,Q=/^[\w-]*$/,z={},F=z.toString,X={},H=O.createElement("div"),G={tabindex:"tabIndex",readonly:"readOnly",for:"htmlFor",class:"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},Y=Array.isArray||function(e){return e instanceof Array};return X.matches=function(e,t){if(!t||!e||1!==e.nodeType)return!1;var n=e.webkitMatchesSelector||e.mozMatchesSelector||e.oMatchesSelector||e.matchesSelector;if(n)return n.call(e,t);var i,r=e.parentNode,o=!r;return o&&(r=H).appendChild(e),i=~X.qsa(r,t).indexOf(e),o&&H.removeChild(e),i},I=function(e){return e.replace(/-+(.)?/g,function(e,t){return t?t.toUpperCase():""})},C=function(e){return P.call(e,function(t,n){return e.indexOf(t)==n})},X.fragment=function(e,t,n){var i,r,o;return V.test(e)&&(i=_(O.createElement(RegExp.$1))),i||(e.replace&&(e=e.replace(R,"<$1></$2>")),t===b&&(t=L.test(e)&&RegExp.$1),t in $||(t="*"),o=$[t],o.innerHTML=""+e,i=_.each(M.call(o.childNodes),function(){o.removeChild(this)})),a(n)&&(r=_(i),_.each(n,function(e,t){W.indexOf(e)>-1?r[e](t):r.attr(e,t)})),i},X.Z=function(e,t){return e=e||[],e.__proto__=_.fn,e.selector=t||"",e},X.isZ=function(e){return e instanceof X.Z},X.init=function(e,n){var i;if(!e)return X.Z();if("string"==typeof e)if(e=e.trim(),"<"==e[0]&&L.test(e))i=X.fragment(e,RegExp.$1,n),e=null;else{if(n!==b)return _(n).find(e);i=X.qsa(O,e)}else{if(t(e))return _(O).ready(e);if(X.isZ(e))return e;if(Y(e))i=s(e);else if(o(e))i=[e],e=null;else if(L.test(e))i=X.fragment(e.trim(),RegExp.$1,n),e=null;else{if(n!==b)return _(n).find(e);i=X.qsa(O,e)}}return X.Z(i,e)},_=function(e,t){return X.init(e,t)},_.extend=function(e){var t,n=M.call(arguments,1);return"boolean"==typeof e&&(t=e,e=n.shift()),n.forEach(function(n){m(e,n,t)}),e},X.qsa=function(e,t){var n,i="#"==t[0],o=!i&&"."==t[0],a=i||o?t.slice(1):t,c=Q.test(a);return r(e)&&c&&i?(n=e.getElementById(a))?[n]:[]:1!==e.nodeType&&9!==e.nodeType?[]:M.call(c&&!i?o?e.getElementsByClassName(a):e.getElementsByTagName(t):e.querySelectorAll(t))},_.contains=O.documentElement.contains?function(e,t){return e!==t&&e.contains(t)}:function(e,t){for(;t&&(t=t.parentNode);)if(t===e)return!0;return!1},_.type=e,_.isFunction=t,_.isWindow=i,_.isArray=Y,_.isPlainObject=a,_.isEmptyObject=function(e){var t;for(t in e)return!1;return!0},_.inArray=function(e,t,n){return k.indexOf.call(t,e,n)},_.camelCase=I,_.trim=function(e){return null==e?"":String.prototype.trim.call(e)},_.uuid=0,_.support={},_.expr={},_.map=function(e,t){var n,i,r,o=[];if(c(e))for(i=0;i<e.length;i++)null!=(n=t(e[i],i))&&o.push(n);else for(r in e)null!=(n=t(e[r],r))&&o.push(n);return u(o)},_.each=function(e,t){var n,i;if(c(e)){for(n=0;n<e.length;n++)if(!1===t.call(e[n],n,e[n]))return e}else for(i in e)if(!1===t.call(e[i],i,e[i]))return e;return e},_.grep=function(e,t){return P.call(e,t)},window.JSON&&(_.parseJSON=JSON.parse),_.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){z["[object "+t+"]"]=t.toLowerCase()}),_.fn={forEach:k.forEach,reduce:k.reduce,push:k.push,sort:k.sort,indexOf:k.indexOf,concat:k.concat,map:function(e){return _(_.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return _(M.apply(this,arguments))},ready:function(e){return q.test(O.readyState)&&O.body?e(_):O.addEventListener("DOMContentLoaded",function(){e(_)},!1),this},get:function(e){return e===b?M.call(this):this[e>=0?e:e+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(e){return k.every.call(this,function(t,n){return!1!==e.call(t,n,t)}),this},filter:function(e){return t(e)?this.not(this.not(e)):_(P.call(this,function(t){return X.matches(t,e)}))},add:function(e,t){return _(C(this.concat(_(e,t))))},is:function(e){return this.length>0&&X.matches(this[0],e)},not:function(e){var n=[];if(t(e)&&e.call!==b)this.each(function(t){e.call(this,t)||n.push(this)});else{var i="string"==typeof e?this.filter(e):c(e)&&t(e.item)?M.call(e):_(e);this.forEach(function(e){i.indexOf(e)<0&&n.push(e)})}return _(n)},has:function(e){return this.filter(function(){return o(e)?_.contains(this,e):_(this).find(e).size()})},eq:function(e){return-1===e?this.slice(e):this.slice(e,+e+1)},first:function(){var e=this[0];return e&&!o(e)?e:_(e)},last:function(){var e=this[this.length-1];return e&&!o(e)?e:_(e)},find:function(e){var t=this;return e?"object"==(void 0===e?"undefined":n(e))?_(e).filter(function(){var e=this;return k.some.call(t,function(t){return _.contains(t,e)})}):1==this.length?_(X.qsa(this[0],e)):this.map(function(){return X.qsa(this,e)}):_()},closest:function(e,t){var i=this[0],o=!1;for("object"==(void 0===e?"undefined":n(e))&&(o=_(e));i&&!(o?o.indexOf(i)>=0:X.matches(i,e));)i=i!==t&&!r(i)&&i.parentNode;return _(i)},parents:function(e){for(var t=[],n=this;n.length>0;)n=_.map(n,function(e){return(e=e.parentNode)&&!r(e)&&t.indexOf(e)<0?(t.push(e),e):void 0});return g(t,e)},parent:function(e){return g(C(this.pluck("parentNode")),e)},children:function(e){return g(this.map(function(){return h(this)}),e)},contents:function(){return this.map(function(){return M.call(this.childNodes)})},siblings:function(e){return g(this.map(function(e,t){return P.call(h(t.parentNode),function(e){return e!==t})}),e)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(e){return _.map(this,function(t){return t[e]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=p(this.nodeName))})},replaceWith:function(e){return this.before(e).remove()},wrap:function(e){var n=t(e);if(this[0]&&!n)var i=_(e).get(0),r=i.parentNode||this.length>1;return this.each(function(t){_(this).wrapAll(n?e.call(this,t):r?i.cloneNode(!0):i)})},wrapAll:function(e){if(this[0]){_(this[0]).before(e=_(e));for(var t;(t=e.children()).length;)e=t.first();_(e).append(this)}return this},wrapInner:function(e){var n=t(e);return this.each(function(t){var i=_(this),r=i.contents(),o=n?e.call(this,t):e;r.length?r.wrapAll(o):i.append(o)})},unwrap:function(){return this.parent().each(function(){_(this).replaceWith(_(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(e){return this.each(function(){var t=_(this);(e===b?"none"==t.css("display"):e)?t.show():t.hide()})},prev:function(e){return _(this.pluck("previousElementSibling")).filter(e||"*")},next:function(e){return _(this.pluck("nextElementSibling")).filter(e||"*")},html:function(e){return 0 in arguments?this.each(function(t){var n=this.innerHTML;_(this).empty().append(v(this,e,t,n))}):0 in this?this[0].innerHTML:null},text:function(e){return 0 in arguments?this.each(function(t){var n=v(this,e,t,this.textContent);this.textContent=null==n?"":""+n}):0 in this?this[0].textContent:null},attr:function(e,t){var n;return"string"!=typeof e||1 in arguments?this.each(function(n){if(1===this.nodeType)if(o(e))for(T in e)y(this,T,e[T]);else y(this,e,v(this,t,n,this.getAttribute(e)))}):this.length&&1===this[0].nodeType?!(n=this[0].getAttribute(e))&&e in this[0]?this[0][e]:n:b},removeAttr:function(e){return this.each(function(){1===this.nodeType&&e.split(" ").forEach(function(e){y(this,e)},this)})},prop:function(e,t){return e=G[e]||e,1 in arguments?this.each(function(n){this[e]=v(this,t,n,this[e])}):this[0]&&this[0][e]},data:function(e,t){var n="data-"+e.replace(D,"-$1").toLowerCase(),i=1 in arguments?this.attr(n,t):this.attr(n);return null!==i?w(i):b},val:function(e){return 0 in arguments?this.each(function(t){this.value=v(this,e,t,this.value)}):this[0]&&(this[0].multiple?_(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(e){if(e)return this.each(function(t){var n=_(this),i=v(this,e,t,n.offset()),r=n.offsetParent().offset(),o={top:i.top-r.top,left:i.left-r.left};"static"==n.css("position")&&(o.position="relative"),n.css(o)});if(!this.length)return null;var t=this[0].getBoundingClientRect();return{left:t.left+window.pageXOffset,top:t.top+window.pageYOffset,width:Math.round(t.width),height:Math.round(t.height)}},css:function(t,n){if(arguments.length<2){var i,r=this[0];if(!r)return;if(i=getComputedStyle(r,""),"string"==typeof t)return r.style[I(t)]||i.getPropertyValue(t);if(Y(t)){var o={};return _.each(t,function(e,t){o[t]=r.style[I(t)]||i.getPropertyValue(t)}),o}}var a="";if("string"==e(t))n||0===n?a=l(t)+":"+d(t,n):this.each(function(){this.style.removeProperty(l(t))});else for(T in t)t[T]||0===t[T]?a+=l(T)+":"+d(T,t[T])+";":this.each(function(){this.style.removeProperty(l(T))});return this.each(function(){this.style.cssText+=";"+a})},index:function(e){return e?this.indexOf(_(e)[0]):this.parent().children().indexOf(this[0])},hasClass:function(e){return!!e&&k.some.call(this,function(e){return this.test(x(e))},f(e))},addClass:function(e){return e?this.each(function(t){if("className"in this){E=[];var n=x(this);v(this,e,t,n).split(/\s+/g).forEach(function(e){_(this).hasClass(e)||E.push(e)},this),E.length&&x(this,n+(n?" ":"")+E.join(" "))}}):this},removeClass:function(e){return this.each(function(t){if("className"in this){if(e===b)return x(this,"");E=x(this),v(this,e,t,E).split(/\s+/g).forEach(function(e){E=E.replace(f(e)," ")}),x(this,E.trim())}})},toggleClass:function(e,t){return e?this.each(function(n){var i=_(this);v(this,e,n,x(this)).split(/\s+/g).forEach(function(e){(t===b?!i.hasClass(e):t)?i.addClass(e):i.removeClass(e)})}):this},scrollTop:function(e){if(this.length){var t="scrollTop"in this[0];return e===b?t?this[0].scrollTop:this[0].pageYOffset:this.each(t?function(){this.scrollTop=e}:function(){this.scrollTo(this.scrollX,e)})}},scrollLeft:function(e){if(this.length){var t="scrollLeft"in this[0];return e===b?t?this[0].scrollLeft:this[0].pageXOffset:this.each(t?function(){this.scrollLeft=e}:function(){this.scrollTo(e,this.scrollY)})}},position:function(){if(this.length){var e=this[0],t=this.offsetParent(),n=this.offset(),i=B.test(t[0].nodeName)?{top:0,left:0}:t.offset();return n.top-=parseFloat(_(e).css("margin-top"))||0,n.left-=parseFloat(_(e).css("margin-left"))||0,i.top+=parseFloat(_(t[0]).css("border-top-width"))||0,i.left+=parseFloat(_(t[0]).css("border-left-width"))||0,{top:n.top-i.top,left:n.left-i.left}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent||O.body;e&&!B.test(e.nodeName)&&"static"==_(e).css("position");)e=e.offsetParent;return e})}},_.fn.detach=_.fn.remove,["width","height"].forEach(function(e){var t=e.replace(/./,function(e){return e[0].toUpperCase()});_.fn[e]=function(n){var o,a=this[0];return n===b?i(a)?a["inner"+t]:r(a)?a.documentElement["scroll"+t]:(o=this.offset())&&o[e]:this.each(function(t){a=_(this),a.css(e,v(this,n,t,a[e]()))})}}),U.forEach(function(t,n){var i=n%2;_.fn[t]=function(){var t,r,o=_.map(arguments,function(n){return t=e(n),"object"==t||"array"==t||null==n?n:X.fragment(n)}),a=this.length>1;return o.length<1?this:this.each(function(e,t){r=i?t:t.parentNode,t=0==n?t.nextSibling:1==n?t.firstChild:2==n?t:null;var c=_.contains(O.documentElement,r);o.forEach(function(e){if(a)e=e.cloneNode(!0);else if(!r)return _(e).remove();r.insertBefore(e,t),c&&S(e,function(e){null==e.nodeName||"SCRIPT"!==e.nodeName.toUpperCase()||e.type&&"text/javascript"!==e.type||e.src||window.eval.call(window,e.innerHTML)})})})},_.fn[i?t+"To":"insert"+(n?"Before":"After")]=function(e){return _(e)[t](this),this}}),X.Z.prototype=_.fn,X.uniq=C,X.deserializeValue=w,_.zepto=X,_}();window.Zepto=i,void 0===window.$&&(window.$=i),function(e){function t(e){return e._zid||(e._zid=d++)}function n(e,n,o,a){if(n=i(n),n.ns)var c=r(n.ns);return(g[t(e)]||[]).filter(function(e){return!(!e||n.e&&e.e!=n.e||n.ns&&!c.test(e.ns)||o&&t(e.fn)!==t(o)||a&&e.sel!=a)})}function i(e){var t=(""+e).split(".");return{e:t[0],ns:t.slice(1).sort().join(" ")}}function r(e){return new RegExp("(?:^| )"+e.replace(" "," .* ?")+"(?: |$)")}function o(e,t){return e.del&&!y&&e.e in x||!!t}function a(e){return w[e]||y&&x[e]||e}function c(n,r,c,s,l,d,p){var h=t(n),m=g[h]||(g[h]=[]);r.split(/\s/).forEach(function(t){if("ready"==t)return e(document).ready(c);var r=i(t);r.fn=c,r.sel=l,r.e in w&&(c=function(t){var n=t.relatedTarget;return!n||n!==this&&!e.contains(this,n)?r.fn.apply(this,arguments):void 0}),r.del=d;var h=d||c;r.proxy=function(e){if(e=u(e),!e.isImmediatePropagationStopped()){e.data=s;var t=h.apply(n,e._args==f?[e]:[e].concat(e._args));return!1===t&&(e.preventDefault(),e.stopPropagation()),t}},r.i=m.length,m.push(r),"addEventListener"in n&&n.addEventListener(a(r.e),r.proxy,o(r,p))})}function s(e,i,r,c,s){var u=t(e);(i||"").split(/\s/).forEach(function(t){n(e,t,r,c).forEach(function(t){delete g[u][t.i],"removeEventListener"in e&&e.removeEventListener(a(t.e),t.proxy,o(t,s))})})}function u(t,n){return(n||!t.isDefaultPrevented)&&(n||(n=t),e.each(_,function(e,i){var r=n[e];t[e]=function(){return this[i]=S,r&&r.apply(n,arguments)},t[i]=b}),(n.defaultPrevented!==f?n.defaultPrevented:"returnValue"in n?!1===n.returnValue:n.getPreventDefault&&n.getPreventDefault())&&(t.isDefaultPrevented=S)),t}function l(e){var t,n={originalEvent:e};for(t in e)T.test(t)||e[t]===f||(n[t]=e[t]);return u(n,e)}var f,d=1,p=Array.prototype.slice,h=e.isFunction,m=function(e){return"string"==typeof e},g={},v={},y="onfocusin"in window,x={focus:"focusin",blur:"focusout"},w={mouseenter:"mouseover",mouseleave:"mouseout"};v.click=v.mousedown=v.mouseup=v.mousemove="MouseEvents",e.event={add:c,remove:s},e.proxy=function(n,i){var r=2 in arguments&&p.call(arguments,2);if(h(n)){var o=function(){return n.apply(i,r?r.concat(p.call(arguments)):arguments)};return o._zid=t(n),o}if(m(i))return r?(r.unshift(n[i],n),e.proxy.apply(null,r)):e.proxy(n[i],n);throw new TypeError("expected function")},e.fn.bind=function(e,t,n){return this.on(e,t,n)},e.fn.unbind=function(e,t){return this.off(e,t)},e.fn.one=function(e,t,n,i){return this.on(e,t,n,i,1)};var S=function(){return!0},b=function(){return!1},T=/^([A-Z]|returnValue$|layer[XY]$)/,_={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};e.fn.delegate=function(e,t,n){return this.on(t,e,n)},e.fn.undelegate=function(e,t,n){return this.off(t,e,n)},e.fn.live=function(t,n){return e(document.body).delegate(this.selector,t,n),this},e.fn.die=function(t,n){return e(document.body).undelegate(this.selector,t,n),this},e.fn.on=function(t,n,i,r,o){var a,u,d=this;return t&&!m(t)?(e.each(t,function(e,t){d.on(e,n,i,t,o)}),d):(m(n)||h(r)||!1===r||(r=i,i=n,n=f),(h(i)||!1===i)&&(r=i,i=f),!1===r&&(r=b),d.each(function(f,d){o&&(a=function(e){return s(d,e.type,r),r.apply(this,arguments)}),n&&(u=function(t){var i,o=e(t.target).closest(n,d).get(0);return o&&o!==d?(i=e.extend(l(t),{currentTarget:o,liveFired:d}),(a||r).apply(o,[i].concat(p.call(arguments,1)))):void 0}),c(d,t,r,i,n,u||a)}))},e.fn.off=function(t,n,i){var r=this;return t&&!m(t)?(e.each(t,function(e,t){r.off(e,n,t)}),r):(m(n)||h(i)||!1===i||(i=n,n=f),!1===i&&(i=b),r.each(function(){s(this,t,i,n)}))},e.fn.trigger=function(t,n){return t=m(t)||e.isPlainObject(t)?e.Event(t):u(t),t._args=n,this.each(function(){t.type in x&&"function"==typeof this[t.type]?this[t.type]():"dispatchEvent"in this?this.dispatchEvent(t):e(this).triggerHandler(t,n)})},e.fn.triggerHandler=function(t,i){var r,o;return this.each(function(a,c){r=l(m(t)?e.Event(t):t),r._args=i,r.target=c,e.each(n(c,t.type||t),function(e,t){return o=t.proxy(r),!r.isImmediatePropagationStopped()&&void 0})}),o},"focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(t){e.fn[t]=function(e){return 0 in arguments?this.bind(t,e):this.trigger(t)}}),e.Event=function(e,t){m(e)||(t=e,e=t.type);var n=document.createEvent(v[e]||"Events"),i=!0;if(t)for(var r in t)"bubbles"==r?i=!!t[r]:n[r]=t[r];return n.initEvent(e,i,!0),u(n)}}(i),function(e){function t(t,n,i){var r=e.Event(n);return e(t).trigger(r,i),!r.isDefaultPrevented()}function n(e,n,i,r){return e.global?t(n||y,i,r):void 0}function i(t){t.global&&0==e.active++&&n(t,null,"ajaxStart")}function r(t){t.global&&!--e.active&&n(t,null,"ajaxStop")}function o(e,t){var i=t.context;return!1!==t.beforeSend.call(i,e,t)&&!1!==n(t,i,"ajaxBeforeSend",[e,t])&&void n(t,i,"ajaxSend",[e,t])}function a(e,t,i,r){var o=i.context,a="success";i.success.call(o,e,a,t),r&&r.resolveWith(o,[e,a,t]),n(i,o,"ajaxSuccess",[t,i,e]),s(a,t,i)}function c(e,t,i,r,o){var a=r.context;r.error.call(a,i,t,e),o&&o.rejectWith(a,[i,t,e]),n(r,a,"ajaxError",[i,r,e||t]),s(t,i,r)}function s(e,t,i){var o=i.context;i.complete.call(o,t,e),n(i,o,"ajaxComplete",[t,i]),r(i)}function u(){}function l(e){return e&&(e=e.split(";",2)[0]),e&&(e==T?"html":e==b?"json":w.test(e)?"script":S.test(e)&&"xml")||"text"}function f(e,t){return""==t?e:(e+"&"+t).replace(/[&?]{1,2}/,"?")}function d(t){t.processData&&t.data&&"string"!=e.type(t.data)&&(t.data=e.param(t.data,t.traditional)),!t.data||t.type&&"GET"!=t.type.toUpperCase()||(t.url=f(t.url,t.data),t.data=void 0)}function p(t,n,i,r){return e.isFunction(n)&&(r=i,i=n,n=void 0),e.isFunction(i)||(r=i,i=void 0),{url:t,data:n,success:i,dataType:r}}function h(t,n,i,r){var o,a=e.isArray(n),c=e.isPlainObject(n);e.each(n,function(n,s){o=e.type(s),r&&(n=i?r:r+"["+(c||"object"==o||"array"==o?n:"")+"]"),!r&&a?t.add(s.name,s.value):"array"==o||!i&&"object"==o?h(t,s,i,n):t.add(n,s)})}var m,g,v=0,y=window.document,x=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,w=/^(?:text|application)\/javascript/i,S=/^(?:text|application)\/xml/i,b="application/json",T="text/html",_=/^\s*$/,E=y.createElement("a");E.href=window.location.href,e.active=0,e.ajaxJSONP=function(t,n){if(!("type"in t))return e.ajax(t);var i,r,s=t.jsonpCallback,u=(e.isFunction(s)?s():s)||"jsonp"+ ++v,l=y.createElement("script"),f=window[u],d=function(t){e(l).triggerHandler("error",t||"abort")},p={abort:d};return n&&n.promise(p),e(l).on("load error",function(o,s){clearTimeout(r),e(l).off().remove(),"error"!=o.type&&i?a(i[0],p,t,n):c(null,s||"error",p,t,n),window[u]=f,i&&e.isFunction(f)&&f(i[0]),f=i=void 0}),!1===o(p,t)?(d("abort"),p):(window[u]=function(){i=arguments},l.src=t.url.replace(/\?(.+)=\?/,"?$1="+u),y.head.appendChild(l),t.timeout>0&&(r=setTimeout(function(){d("timeout")},t.timeout)),p)},e.ajaxSettings={type:"GET",beforeSend:u,success:u,error:u,complete:u,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:b,xml:"application/xml, text/xml",html:T,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},e.ajax=function(t){var n,r=e.extend({},t||{}),s=e.Deferred&&e.Deferred();for(m in e.ajaxSettings)void 0===r[m]&&(r[m]=e.ajaxSettings[m]);i(r),r.crossDomain||(n=y.createElement("a"),n.href=r.url,n.href=n.href,r.crossDomain=E.protocol+"//"+E.host!=n.protocol+"//"+n.host),r.url||(r.url=window.location.toString()),d(r);var p=r.dataType,h=/\?.+=\?/.test(r.url);if(h&&(p="jsonp"),!1!==r.cache&&(t&&!0===t.cache||"script"!=p&&"jsonp"!=p)||(r.url=f(r.url,"_="+Date.now())),"jsonp"==p)return h||(r.url=f(r.url,r.jsonp?r.jsonp+"=?":!1===r.jsonp?"":"callback=?")),e.ajaxJSONP(r,s);var v,x=r.accepts[p],w={},S=function(e,t){w[e.toLowerCase()]=[e,t]},b=/^([\w-]+:)\/\//.test(r.url)?RegExp.$1:window.location.protocol,T=r.xhr(),I=T.setRequestHeader;if(s&&s.promise(T),r.crossDomain||S("X-Requested-With","XMLHttpRequest"),S("Accept",x||"*/*"),(x=r.mimeType||x)&&(x.indexOf(",")>-1&&(x=x.split(",",2)[0]),T.overrideMimeType&&T.overrideMimeType(x)),(r.contentType||!1!==r.contentType&&r.data&&"GET"!=r.type.toUpperCase())&&S("Content-Type",r.contentType||"application/x-www-form-urlencoded"),r.headers)for(g in r.headers)S(g,r.headers[g]);if(T.setRequestHeader=S,T.onreadystatechange=function(){if(4==T.readyState){T.onreadystatechange=u,clearTimeout(v);var t,n=!1;if(T.status>=200&&T.status<300||304==T.status||0==T.status&&"file:"==b){p=p||l(r.mimeType||T.getResponseHeader("content-type")),t=T.responseText;try{"script"==p?(0,eval)(t):"xml"==p?t=T.responseXML:"json"==p&&(t=_.test(t)?null:e.parseJSON(t))}catch(e){n=e}n?c(n,"parsererror",T,r,s):a(t,T,r,s)}else c(T.statusText||null,T.status?"error":"abort",T,r,s)}},!1===o(T,r))return T.abort(),c(null,"abort",T,r,s),T;if(r.xhrFields)for(g in r.xhrFields)T[g]=r.xhrFields[g];var C=!("async"in r)||r.async;T.open(r.type,r.url,C,r.username,r.password);for(g in w)I.apply(T,w[g]);return r.timeout>0&&(v=setTimeout(function(){T.onreadystatechange=u,T.abort(),c(null,"timeout",T,r,s)},r.timeout)),T.send(r.data?r.data:null),T},e.get=function(){return e.ajax(p.apply(null,arguments))},e.post=function(){var t=p.apply(null,arguments);return t.type="POST",e.ajax(t)},e.getJSON=function(){var t=p.apply(null,arguments);return t.dataType="json",e.ajax(t)},e.fn.load=function(t,n,i){if(!this.length)return this;var r,o=this,a=t.split(/\s/),c=p(t,n,i),s=c.success;return a.length>1&&(c.url=a[0],r=a[1]),c.success=function(t){o.html(r?e("<div>").html(t.replace(x,"")).find(r):t),s&&s.apply(o,arguments)},e.ajax(c),this};var I=encodeURIComponent;e.param=function(t,n){var i=[];return i.add=function(t,n){e.isFunction(n)&&(n=n()),null==n&&(n=""),this.push(I(t)+"="+I(n))},h(i,t,n),i.join("&").replace(/%20/g,"+")}}(i),function(e){e.fn.serializeArray=function(){var t,n,i=[],r=function e(n){return n.forEach?n.forEach(e):void i.push({name:t,value:n})};return this[0]&&e.each(this[0].elements,function(i,o){n=o.type,(t=o.name)&&"fieldset"!=o.nodeName.toLowerCase()&&!o.disabled&&"submit"!=n&&"reset"!=n&&"button"!=n&&"file"!=n&&("radio"!=n&&"checkbox"!=n||o.checked)&&r(e(o).val())}),i},e.fn.serialize=function(){var e=[];return this.serializeArray().forEach(function(t){e.push(encodeURIComponent(t.name)+"="+encodeURIComponent(t.value))}),e.join("&")},e.fn.submit=function(t){if(0 in arguments)this.bind("submit",t);else if(this.length){var n=e.Event("submit");this.eq(0).trigger(n),n.isDefaultPrevented()||this.get(0).submit()}return this}}(i),function(e){"__proto__"in{}||e.extend(e.zepto,{Z:function(t,n){return t=t||[],e.extend(t,e.fn),t.selector=n||"",t.__Z=!0,t},isZ:function(t){return"array"===e.type(t)&&"__Z"in t}});try{getComputedStyle(void 0)}catch(e){var t=getComputedStyle;window.getComputedStyle=function(e){try{return t(e)}catch(e){return null}}}}(i)},function(e,t,n){n(0)},function(e,t){function n(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}!function(t,i){e.exports=function(e,t){function i(t,n,i){e.WeixinJSBridge?WeixinJSBridge.invoke(t,o(n),function(e){s(t,e,i)}):f(t,i)}function r(t,n,i){e.WeixinJSBridge?WeixinJSBridge.on(t,function(e){i&&i.trigger&&i.trigger(e),s(t,e,n)}):i?f(t,i):f(t,n)}function o(e){return e=e||{},e.appId=O.appId,e.verifyAppId=O.appId,e.verifySignType="sha1",e.verifyTimestamp=O.timestamp+"",e.verifyNonceStr=O.nonceStr,e.verifySignature=O.signature,e}function a(e){return{timeStamp:e.timestamp+"",nonceStr:e.nonceStr,package:e.package,paySign:e.paySign,signType:e.signType||"SHA1"}}function c(e){return e.postalCode=e.addressPostalCode,delete e.addressPostalCode,e.provinceName=e.proviceFirstStageName,delete e.proviceFirstStageName,e.cityName=e.addressCitySecondStageName,delete e.addressCitySecondStageName,e.countryName=e.addressCountiesThirdStageName,delete e.addressCountiesThirdStageName,e.detailInfo=e.addressDetailInfo,delete e.addressDetailInfo,e}function s(e,t,n){"openEnterpriseChat"==e&&(t.errCode=t.err_code),delete t.err_code,delete t.err_desc,delete t.err_detail;var i=t.errMsg;i||(i=t.err_msg,delete t.err_msg,i=u(e,i),t.errMsg=i),n=n||{},n._complete&&(n._complete(t),delete n._complete),i=t.errMsg||"",O.debug&&!n.isInnerInvoke&&alert(JSON.stringify(t));var r=i.indexOf(":");switch(i.substring(r+1)){case"ok":n.success&&n.success(t);break;case"cancel":n.cancel&&n.cancel(t);break;default:n.fail&&n.fail(t)}n.complete&&n.complete(t)}function u(e,t){var n=e,i=y[n];i&&(n=i);var r="ok";if(t){var o=t.indexOf(":");r=t.substring(o+1),"confirm"==r&&(r="ok"),"failed"==r&&(r="fail"),-1!=r.indexOf("failed_")&&(r=r.substring(7)),-1!=r.indexOf("fail_")&&(r=r.substring(5)),r=r.replace(/_/g," "),r=r.toLowerCase(),("access denied"==r||"no permission to execute"==r)&&(r="permission denied"),"config"==n&&"function not exist"==r&&(r="ok"),""==r&&(r="fail")}return t=n+":"+r}function l(e){if(e){for(var t=0,n=e.length;n>t;++t){var i=e[t],r=v[i];r&&(e[t]=r)}return e}}function f(e,t){if(!(!O.debug||t&&t.isInnerInvoke)){var n=y[e];n&&(e=n),t&&t._complete&&delete t._complete,console.log('"'+e+'",',t||"")}}function d(e){if(!(T||_||O.debug||"6.0.2">k||P.systemType<0)){var t=new Image;P.appId=O.appId,P.initTime=M.initEndTime-M.initStartTime,P.preVerifyTime=M.preVerifyEndTime-M.preVerifyStartTime,V.getNetworkType({isInnerInvoke:!0,success:function(e){P.networkType=e.networkType;var n="https://open.weixin.qq.com/sdk/report?v="+P.version+"&o="+P.isPreVerifyOk+"&s="+P.systemType+"&c="+P.clientVersion+"&a="+P.appId+"&n="+P.networkType+"&i="+P.initTime+"&p="+P.preVerifyTime+"&u="+P.url;t.src=n}})}}function p(){return(new Date).getTime()}function h(t){E&&(e.WeixinJSBridge?t():x.addEventListener&&x.addEventListener("WeixinJSBridgeReady",t,!1))}function m(){V.invoke||(V.invoke=function(t,n,i){e.WeixinJSBridge&&WeixinJSBridge.invoke(t,o(n),i)},V.on=function(t,n){e.WeixinJSBridge&&WeixinJSBridge.on(t,n)})}if(!e.jWeixin){var g,v={config:"preVerifyJSAPI",onMenuShareTimeline:"menu:share:timeline",onMenuShareAppMessage:"menu:share:appmessage",onMenuShareQQ:"menu:share:qq",onMenuShareWeibo:"menu:share:weiboApp",onMenuShareQZone:"menu:share:QZone",previewImage:"imagePreview",getLocation:"geoLocation",openProductSpecificView:"openProductViewWithPid",addCard:"batchAddCard",openCard:"batchViewCard",chooseWXPay:"getBrandWCPayRequest",openEnterpriseRedPacket:"getRecevieBizHongBaoRequest",startSearchBeacons:"startMonitoringBeacons",stopSearchBeacons:"stopMonitoringBeacons",onSearchBeacons:"onBeaconsInRange",consumeAndShareCard:"consumedShareCard",openAddress:"editAddress"},y=function(){var e={};for(var t in v)e[v[t]]=t;return e}(),x=e.document,w=x.title,S=navigator.userAgent.toLowerCase(),b=navigator.platform.toLowerCase(),T=!(!b.match("mac")&&!b.match("win")),_=-1!=S.indexOf("wxdebugger"),E=-1!=S.indexOf("micromessenger"),I=-1!=S.indexOf("android"),C=-1!=S.indexOf("iphone")||-1!=S.indexOf("ipad"),k=function(){var e=S.match(/micromessenger\/(\d+\.\d+\.\d+)/)||S.match(/micromessenger\/(\d+\.\d+)/);return e?e[1]:""}(),M={initStartTime:p(),initEndTime:0,preVerifyStartTime:0,preVerifyEndTime:0},P={version:1,appId:"",initTime:0,preVerifyTime:0,networkType:"",isPreVerifyOk:1,systemType:C?1:I?2:-1,clientVersion:k,url:encodeURIComponent(location.href)},O={},N={_completes:[]},j={state:0,data:{}};h(function(){M.initEndTime=p()});var A=!1,L=[],V=(g={config:function(e){O=e,f("config",e);var t=!1!==O.check;h(function(){if(t)i(v.config,{verifyJsApiList:l(O.jsApiList)},function(){N._complete=function(e){M.preVerifyEndTime=p(),j.state=1,j.data=e},N.success=function(e){P.isPreVerifyOk=0},N.fail=function(e){N._fail?N._fail(e):j.state=-1};var e=N._completes;return e.push(function(){d()}),N.complete=function(t){for(var n=0,i=e.length;i>n;++n)e[n]();N._completes=[]},N}()),M.preVerifyStartTime=p();else{j.state=1;for(var e=N._completes,n=0,r=e.length;r>n;++n)e[n]();N._completes=[]}}),O.beta&&m()},ready:function(e){0!=j.state?e():(N._completes.push(e),!E&&O.debug&&e())},error:function(e){"6.0.2">k||(-1==j.state?e(j.data):N._fail=e)},checkJsApi:function(e){var t=function(e){var t=e.checkResult;for(var n in t){var i=y[n];i&&(t[i]=t[n],delete t[n])}return e};i("checkJsApi",{jsApiList:l(e.jsApiList)},function(){return e._complete=function(e){if(I){var n=e.checkResult;n&&(e.checkResult=JSON.parse(n))}e=t(e)},e}())},onMenuShareTimeline:function(e){r(v.onMenuShareTimeline,{complete:function(){i("shareTimeline",{title:e.title||w,desc:e.title||w,img_url:e.imgUrl||"",link:e.link||location.href,type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareAppMessage:function(e){r(v.onMenuShareAppMessage,{complete:function(){i("sendAppMessage",{title:e.title||w,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareQQ:function(e){r(v.onMenuShareQQ,{complete:function(){i("shareQQ",{title:e.title||w,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareWeibo:function(e){r(v.onMenuShareWeibo,{complete:function(){i("shareWeiboApp",{title:e.title||w,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareQZone:function(e){r(v.onMenuShareQZone,{complete:function(){i("shareQZone",{title:e.title||w,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},startRecord:function(e){i("startRecord",{},e)},stopRecord:function(e){i("stopRecord",{},e)},onVoiceRecordEnd:function(e){r("onVoiceRecordEnd",e)},playVoice:function(e){i("playVoice",{localId:e.localId},e)},pauseVoice:function(e){i("pauseVoice",{localId:e.localId},e)},stopVoice:function(e){i("stopVoice",{localId:e.localId},e)},onVoicePlayEnd:function(e){r("onVoicePlayEnd",e)},uploadVoice:function(e){i("uploadVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadVoice:function(e){i("downloadVoice",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},translateVoice:function(e){i("translateVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},chooseImage:function(e){i("chooseImage",{scene:"1|2",count:e.count||9,sizeType:e.sizeType||["original","compressed"],sourceType:e.sourceType||["album","camera"]},function(){return e._complete=function(e){if(I){var t=e.localIds;t&&(e.localIds=JSON.parse(t))}},e}())},getLocation:function(e){},previewImage:function(e){i(v.previewImage,{current:e.current,urls:e.urls},e)},uploadImage:function(e){i("uploadImage",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadImage:function(e){i("downloadImage",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},getLocalImgData:function(e){!1===A?(A=!0,i("getLocalImgData",{localId:e.localId},function(){return e._complete=function(e){if(A=!1,L.length>0){var t=L.shift();wx.getLocalImgData(t)}},e}())):L.push(e)},getNetworkType:function(e){var t=function(e){var t=e.errMsg;e.errMsg="getNetworkType:ok";var n=e.subtype;if(delete e.subtype,n)e.networkType=n;else{var i=t.indexOf(":"),r=t.substring(i+1);switch(r){case"wifi":case"edge":case"wwan":e.networkType=r;break;default:e.errMsg="getNetworkType:fail"}}return e};i("getNetworkType",{},function(){return e._complete=function(e){e=t(e)},e}())},openLocation:function(e){i("openLocation",{latitude:e.latitude,longitude:e.longitude,name:e.name||"",address:e.address||"",scale:e.scale||28,infoUrl:e.infoUrl||""},e)}},n(g,"getLocation",function(e){e=e||{},i(v.getLocation,{type:e.type||"wgs84"},function(){return e._complete=function(e){delete e.type},e}())}),n(g,"hideOptionMenu",function(e){i("hideOptionMenu",{},e)}),n(g,"showOptionMenu",function(e){i("showOptionMenu",{},e)}),n(g,"closeWindow",function(e){e=e||{},i("closeWindow",{},e)}),n(g,"hideMenuItems",function(e){i("hideMenuItems",{menuList:e.menuList},e)}),n(g,"showMenuItems",function(e){i("showMenuItems",{menuList:e.menuList},e)}),n(g,"hideAllNonBaseMenuItem",function(e){i("hideAllNonBaseMenuItem",{},e)}),n(g,"showAllNonBaseMenuItem",function(e){i("showAllNonBaseMenuItem",{},e)}),n(g,"scanQRCode",function(e){e=e||{},i("scanQRCode",{needResult:e.needResult||0,scanType:e.scanType||["qrCode","barCode"]},function(){return e._complete=function(e){if(C){var t=e.resultStr;if(t){var n=JSON.parse(t);e.resultStr=n&&n.scan_code&&n.scan_code.scan_result}}},e}())}),n(g,"openAddress",function(e){i(v.openAddress,{},function(){return e._complete=function(e){e=c(e)},e}())}),n(g,"openProductSpecificView",function(e){i(v.openProductSpecificView,{pid:e.productId,view_type:e.viewType||0,ext_info:e.extInfo},e)}),n(g,"addCard",function(e){for(var t=e.cardList,n=[],r=0,o=t.length;o>r;++r){var a=t[r],c={card_id:a.cardId,card_ext:a.cardExt};n.push(c)}i(v.addCard,{card_list:n},function(){return e._complete=function(e){var t=e.card_list;if(t){t=JSON.parse(t);for(var n=0,i=t.length;i>n;++n){var r=t[n];r.cardId=r.card_id,r.cardExt=r.card_ext,r.isSuccess=!!r.is_succ,delete r.card_id,delete r.card_ext,delete r.is_succ}e.cardList=t,delete e.card_list}},e}())}),n(g,"chooseCard",function(e){i("chooseCard",{app_id:O.appId,location_id:e.shopId||"",sign_type:e.signType||"SHA1",card_id:e.cardId||"",card_type:e.cardType||"",card_sign:e.cardSign,time_stamp:e.timestamp+"",nonce_str:e.nonceStr},function(){return e._complete=function(e){e.cardList=e.choose_card_info,delete e.choose_card_info},e}())}),n(g,"openCard",function(e){for(var t=e.cardList,n=[],r=0,o=t.length;o>r;++r){var a=t[r],c={card_id:a.cardId,code:a.code};n.push(c)}i(v.openCard,{card_list:n},e)}),n(g,"consumeAndShareCard",function(e){i(v.consumeAndShareCard,{consumedCardId:e.cardId,consumedCode:e.code},e)}),n(g,"chooseWXPay",function(e){i(v.chooseWXPay,a(e),e)}),n(g,"openEnterpriseRedPacket",function(e){i(v.openEnterpriseRedPacket,a(e),e)}),n(g,"startSearchBeacons",function(e){i(v.startSearchBeacons,{ticket:e.ticket},e)}),n(g,"stopSearchBeacons",function(e){i(v.stopSearchBeacons,{},e)}),n(g,"onSearchBeacons",function(e){r(v.onSearchBeacons,e)}),n(g,"openEnterpriseChat",function(e){i("openEnterpriseChat",{useridlist:e.userIds,chatname:e.groupName},e)}),g),R=1,B={};return x.addEventListener("error",function(e){if(!I){var t=e.target,n=t.tagName,i=t.src;if("IMG"==n||"VIDEO"==n||"AUDIO"==n||"SOURCE"==n){if(-1!=i.indexOf("wxlocalresource://")){e.preventDefault(),e.stopPropagation();var r=t["wx-id"];if(r||(r=R++,t["wx-id"]=r),B[r])return;B[r]=!0,wx.getLocalImgData({localId:i,success:function(e){t.src=e.localData}})}}}},!0),x.addEventListener("load",function(e){if(!I){var t=e.target,n=t.tagName;if(t.src,"IMG"==n||"VIDEO"==n||"AUDIO"==n||"SOURCE"==n){var i=t["wx-id"];i&&(B[i]=!1)}}},!0),t&&(e.wx=e.jWeixin=V),V}}(t)}(window)}]);