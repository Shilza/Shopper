(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{74:function(n,e,t){"use strict";var r=t(1),i=t(0),a=t.n(i),o=t(6),c=t(27),u=t(11);function l(){var n=f(["\n    position: relative;\n    display: inline-block;\n    border-bottom: 1px dotted black;\n    outline: 0;\n    border: 0;\n\n    &:hover "," {\n        visibility: visible;\n        opacity: 1;\n    }\n"]);return l=function(){return n},n}function d(){var n=f(["\n    visibility: hidden;\n    position: absolute;\n    width: 120px;\n    background-color: #555;\n    color: #fff;\n    text-align: center;\n    padding: 5px 10px;\n    border-radius: 6px;\n    z-index: 1;\n    opacity: 0;\n    transition: opacity 0.3s;\n    top: -5px;\n    left: 125%;\n\n    &::after {\n        content: '';\n        position: absolute;\n        top: 50%;\n        right: 100%;\n        margin-top: -5px;\n        border-width: 5px;\n        border-style: solid;\n        border-color: transparent #555 transparent transparent;\n    }\n"]);return d=function(){return n},n}function f(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}var s=r.a.span(d()),p=r.a.div(l(),s),m=function(n){var e=n.text,t=n.children;return i.createElement(p,null,t,i.createElement(s,null,e))};function b(){var n=x(["\n    margin: 0 0 26px;\n    border: 0;\n    outline: none;\n    cursor: pointer;\n    background: transparent;\n"]);return b=function(){return n},n}function v(){var n=x(["\n    position: absolute;\n    top: 0;\n    left: 0;\n    display: flex;\n    align-items: flex-end;\n    height: 100%;\n    padding-left: 8px;\n"]);return v=function(){return n},n}function x(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}var g=r.a.div(v()),E=r.a.button(b()),h=Object(o.a)(function(n){var e=n.id,t=u.a.isAdded(e)?"black":"transparent",r=u.a.isAdded(e)?"Remove":"Add to wish list";return a.a.createElement(g,null,a.a.createElement(m,{text:r},a.a.createElement(E,null,a.a.createElement(c.a,{background:t,onClick:function(){u.a.isAdded(e)?u.a.removeItemId(e):u.a.addItemId(e)}}))))}),j=t(24);function w(){var n=O(["\n    max-width: 100%;\n    width: 100%;\n"]);return w=function(){return n},n}function y(){var n=O(["\n    position: relative;\n"]);return y=function(){return n},n}function O(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}var k=r.a.div(y()),z=r.a.img(w());e.a=function(n){var e=n.item;return a.a.createElement(k,null,a.a.createElement(j.a,null,e.images.map(function(n,e){return a.a.createElement(j.b,{key:e},a.a.createElement(z,{src:n}))})),a.a.createElement(h,{id:e.id}))}},76:function(n,e,t){"use strict";t.r(e);var r=t(1),i=t(0),a=t.n(i),o=t(72),c=t(14),u=t(36),l=t(74);function d(){var n=v(["\n    display: flex;\n    margin-top: 10px;\n    align-items: center;\n"]);return d=function(){return n},n}function f(){var n=v(["\n    margin-right: 5px;\n    margin: 0;\n"]);return f=function(){return n},n}function s(){var n=v(["\n    text-decoration: none;\n    color: black;\n"]);return s=function(){return n},n}function p(){var n=v(["\n    margin: 0px;\n"]);return p=function(){return n},n}function m(){var n=v(["\n    display: flex;\n    flex-direction: column;\n    padding: 20px;\n    justify-content: center;\n    align-items: center;\n"]);return m=function(){return n},n}function b(){var n=v(["\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    align-items: flex-start;\n"]);return b=function(){return n},n}function v(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}var x=r.a.div(b()),g=r.a.div(m()),E=r.a.h4(p()),h=Object(r.a)(o.a)(s()),j=r.a.h5(f()),w=r.a.div(d());e.default=function(){return a.a.createElement(x,null,c.a.map(function(n){return a.a.createElement(g,{key:n.id},a.a.createElement(l.a,{item:n}),a.a.createElement(h,{to:"/product/".concat(n.id)},a.a.createElement(E,null,n.title)),a.a.createElement(w,null,a.a.createElement(j,null,"Price: ",n.price,"$"),a.a.createElement(u.a,{color:n.color})))}))}}}]);