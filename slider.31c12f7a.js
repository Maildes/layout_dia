parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"QJP6":[function(require,module,exports) {
"use strict";var e=document.querySelectorAll("#slides .slider__slide"),t=0,n=setInterval(l,4e3);function i(n){e[t].className="slider__slide",t=(n+e.length)%e.length,e[t].className="slider__slide slider__slide-showing"}function l(){i(t+1)}function c(){i(t-1)}var s=!0;function o(){s=!1,clearInterval(n)}function r(){s||(s=!0,n=setInterval(l,3500))}var d=document.getElementById("pic-right"),u=document.getElementById("pic-left");d.onclick=function(){o(),l(),setTimeout(r,4e3)},u.onclick=function(){o(),c(),setTimeout(r,4e3)};
},{}]},{},["QJP6"], null)
//# sourceMappingURL=slider.31c12f7a.js.map