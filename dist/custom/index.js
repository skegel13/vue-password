!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["custom/index"]=t():e["custom/index"]=t()}(this,function(){return function(e){function t(s){if(n[s])return n[s].exports;var r=n[s]={i:s,l:!1,exports:{}};return e[s].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,s){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:s})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=8)}([function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var s={},r=0;r<this.length;r++){var o=this[r][0];"number"==typeof o&&(s[o]=!0)}for(r=0;r<t.length;r++){var a=t[r];"number"==typeof a[0]&&s[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(e,t){e.exports=function(e,t,n,s){var r,o=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(r=e,o=e.default);var i="function"==typeof o?o.options:o;if(t&&(i.render=t.render,i.staticRenderFns=t.staticRenderFns),n&&(i._scopeId=n),s){var u=i.computed||(i.computed={});Object.keys(s).forEach(function(e){var t=s[e];u[e]=function(){return t}})}return{esModule:r,exports:o,options:i}}},function(e,t,n){function s(e){for(var t=0;t<e.length;t++){var n=e[t],s=l[n.id];if(s){s.refs++;for(var r=0;r<s.parts.length;r++)s.parts[r](n.parts[r]);for(;r<n.parts.length;r++)s.parts.push(o(n.parts[r]));s.parts.length>n.parts.length&&(s.parts.length=n.parts.length)}else{for(var a=[],r=0;r<n.parts.length;r++)a.push(o(n.parts[r]));l[n.id]={id:n.id,refs:1,parts:a}}}}function r(){var e=document.createElement("style");return e.type="text/css",c.appendChild(e),e}function o(e){var t,n,s=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(s){if(A)return f;s.parentNode.removeChild(s)}if(h){var o=g++;s=p||(p=r()),t=a.bind(null,s,o,!1),n=a.bind(null,s,o,!0)}else s=r(),t=i.bind(null,s),n=function(){s.parentNode.removeChild(s)};return t(e),function(s){if(s){if(s.css===e.css&&s.media===e.media&&s.sourceMap===e.sourceMap)return;t(e=s)}else n()}}function a(e,t,n,s){var r=n?"":s.css;if(e.styleSheet)e.styleSheet.cssText=C(t,r);else{var o=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function i(e,t){var n=t.css,s=t.media,r=t.sourceMap;if(s&&e.setAttribute("media",s),r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var u="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!u)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var d=n(3),l={},c=u&&(document.head||document.getElementsByTagName("head")[0]),p=null,g=0,A=!1,f=function(){},h="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){A=n;var r=d(e,t);return s(r),function(t){for(var n=[],o=0;o<r.length;o++){var a=r[o],i=l[a.id];i.refs--,n.push(i)}t?(r=d(e,t),s(r)):r=[];for(var o=0;o<n.length;o++){var i=n[o];if(0===i.refs){for(var u=0;u<i.parts.length;u++)i.parts[u]();delete l[i.id]}}}};var C=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t){for(var n=[],s={},r=0;r<t.length;r++){var o=t[r],a=o[0],i=o[1],u=o[2],d=o[3],l={id:e+":"+r,css:i,media:u,sourceMap:d};s[a]?s[a].parts.push(l):n.push(s[a]={id:a,parts:[l]})}return n}},,,,function(e,t,n){n(16);var s=n(1)(n(11),n(14),null,null);e.exports=s.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(7),r=n.n(s);t.default=r.a},,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={inheritAttrs:!1,data:function(){return{type:"password",strength:{},dirty:!1}},computed:{message:function(){if(this.score>=0&&this.dirty&&this.strengthMessages[this.score])return this.strengthMessages[this.score]},strengthClass:function(){if(this.score>=0&&this.strengthClasses[this.score])return this.strengthClasses[this.score]}},props:{classes:{type:[String,Array],default:"form-control"},strengthClasses:{type:Array,default:function(){return["VuePassword--very-weak","VuePassword--weak","VuePassword--medium","VuePassword--good","VuePassword--great"]}},strengthMessages:{type:Array,default:function(){return["Very Weak","Weak","Medium","Strong","Very Strong"]}},value:{type:String,default:""},userInputs:{type:Array,default:function(){return[]}},disableToggle:{type:Boolean,default:!1},disableStrength:{type:Boolean,default:!1},score:{type:Number,default:0}},mounted:function(){this.value&&(this.dirty=!0)},watch:{userInputs:function(){this.$emit("input",this.value,this.userInputs)}},methods:{updatePassword:function(e){this.$emit("input",e,this.userInputs),this.dirty=!0},togglePassword:function(){this.type="password"===this.type?"text":"password",this.$refs.input.setAttribute("type",this.type),this.$refs.input.focus()},getStrengthClass:function(e){return this.score>e?this.strengthClass:""}}}},function(e,t,n){t=e.exports=n(0)(),t.push([e.i,"\n.VuePassword {\n  position: relative;\n}\n.VuePassword__Input {\n  position: relative;\n}\n.VuePassword input {\n  padding-right: 2.5em;\n  width: 100%;\n}\n.VuePassword__Toggle {\n  color: gray;\n  display: inline-block;\n  height: 100%;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: 1;\n}\n.VuePassword__Toggle__Icon {\n  fill: currentColor;\n  height: 100%;\n  width: 1.5em;\n  margin-right: .5em;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.VuePassword__Meter {\n  color: rgb(175, 175, 175);\n  display: block;\n  margin-top: .2rem;\n  padding-left: .5rem;\n  padding-right: .5rem;\n}\n.VuePassword__Meter path {\n  stroke: currentColor;\n  stroke-width: 2;\n}\n.VuePassword--very-weak {\n  color: rgb(175, 175, 175);\n}\n.VuePassword--weak {\n  color: rgb(230, 30, 30);\n}\n.VuePassword--medium {\n  color: rgb(255, 160, 65);\n}\n.VuePassword--good {\n  color: rgb(100, 200, 75);\n}\n.VuePassword--great {\n  color: rgb(75, 150, 50);\n}\n.VuePassword__Message {\n  cursor: default;\n  font-size: 1rem;\n  padding-left: .5rem;\n  padding-right: .5rem;\n  text-align: right;\n  text-transform: uppercase;\n}\n","",{version:3,sources:["/Users/flima/Documents/Projects/vue-password/src/components/VuePasswordCustom.vue"],names:[],mappings:";AACA;EACE,mBAAmB;CACpB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,qBAAqB;EACrB,YAAY;CACb;AACD;EACE,YAAY;EACZ,sBAAsB;EACtB,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,OAAO;EACP,WAAW;CACZ;AACD;EACE,mBAAmB;EACnB,aAAa;EACb,aAAa;EACb,mBAAmB;EACnB,0BAA0B;KACvB,uBAAuB;MACtB,sBAAsB;UAClB,kBAAkB;CAC3B;AACD;EACE,0BAA0B;EAC1B,eAAe;EACf,kBAAkB;EAClB,oBAAoB;EACpB,qBAAqB;CACtB;AACD;EACE,qBAAqB;EACrB,gBAAgB;CACjB;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,wBAAwB;CACzB;AACD;EACE,yBAAyB;CAC1B;AACD;EACE,yBAAyB;CAC1B;AACD;EACE,wBAAwB;CACzB;AACD;EACE,gBAAgB;EAChB,gBAAgB;EAChB,oBAAoB;EACpB,qBAAqB;EACrB,kBAAkB;EAClB,0BAA0B;CAC3B",file:"VuePasswordCustom.vue",sourcesContent:["\n.VuePassword {\n  position: relative;\n}\n.VuePassword__Input {\n  position: relative;\n}\n.VuePassword input {\n  padding-right: 2.5em;\n  width: 100%;\n}\n.VuePassword__Toggle {\n  color: gray;\n  display: inline-block;\n  height: 100%;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: 1;\n}\n.VuePassword__Toggle__Icon {\n  fill: currentColor;\n  height: 100%;\n  width: 1.5em;\n  margin-right: .5em;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.VuePassword__Meter {\n  color: rgb(175, 175, 175);\n  display: block;\n  margin-top: .2rem;\n  padding-left: .5rem;\n  padding-right: .5rem;\n}\n.VuePassword__Meter path {\n  stroke: currentColor;\n  stroke-width: 2;\n}\n.VuePassword--very-weak {\n  color: rgb(175, 175, 175);\n}\n.VuePassword--weak {\n  color: rgb(230, 30, 30);\n}\n.VuePassword--medium {\n  color: rgb(255, 160, 65);\n}\n.VuePassword--good {\n  color: rgb(100, 200, 75);\n}\n.VuePassword--great {\n  color: rgb(75, 150, 50);\n}\n.VuePassword__Message {\n  cursor: default;\n  font-size: 1rem;\n  padding-left: .5rem;\n  padding-right: .5rem;\n  text-align: right;\n  text-transform: uppercase;\n}\n"],sourceRoot:""}])},,function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"VuePassword"},[n("div",{staticClass:"VuePassword__Input"},[n("input",{ref:"input",class:e.classes,attrs:{type:"password"},domProps:{value:e.value},on:{input:function(t){e.updatePassword(t.target.value)}}}),e._v(" "),e.disableToggle?e._e():e._t("password-toggle",[n("a",{staticClass:"VuePassword__Toggle",attrs:{role:"button"},on:{click:e.togglePassword}},["password"===e.type?n("svg",{staticClass:"VuePassword__Toggle__Icon",attrs:{viewBox:"0 0 32 32"}},[n("path",{attrs:{d:"M16 6c-6.979 0-13.028 4.064-16 10 2.972 5.936 9.021 10 16 10s13.027-4.064 16-10c-2.972-5.936-9.021-10-16-10zM23.889 11.303c1.88 1.199 3.473 2.805 4.67 4.697-1.197 1.891-2.79 3.498-4.67 4.697-2.362 1.507-5.090 2.303-7.889 2.303s-5.527-0.796-7.889-2.303c-1.88-1.199-3.473-2.805-4.67-4.697 1.197-1.891 2.79-3.498 4.67-4.697 0.122-0.078 0.246-0.154 0.371-0.228-0.311 0.854-0.482 1.776-0.482 2.737 0 4.418 3.582 8 8 8s8-3.582 8-8c0-0.962-0.17-1.883-0.482-2.737 0.124 0.074 0.248 0.15 0.371 0.228v0zM16 13c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3z"}})]):e._e(),e._v(" "),"text"===e.type?n("svg",{staticClass:"VuePassword__Toggle__Icon",attrs:{viewBox:"0 0 32 32"}},[n("path",{attrs:{d:"M29.561 0.439c-0.586-0.586-1.535-0.586-2.121 0l-6.318 6.318c-1.623-0.492-3.342-0.757-5.122-0.757-6.979 0-13.028 4.064-16 10 1.285 2.566 3.145 4.782 5.407 6.472l-4.968 4.968c-0.586 0.586-0.586 1.535 0 2.121 0.293 0.293 0.677 0.439 1.061 0.439s0.768-0.146 1.061-0.439l27-27c0.586-0.586 0.586-1.536 0-2.121zM13 10c1.32 0 2.44 0.853 2.841 2.037l-3.804 3.804c-1.184-0.401-2.037-1.521-2.037-2.841 0-1.657 1.343-3 3-3zM3.441 16c1.197-1.891 2.79-3.498 4.67-4.697 0.122-0.078 0.246-0.154 0.371-0.228-0.311 0.854-0.482 1.776-0.482 2.737 0 1.715 0.54 3.304 1.459 4.607l-1.904 1.904c-1.639-1.151-3.038-2.621-4.114-4.323z"}}),e._v(" "),n("path",{attrs:{d:"M24 13.813c0-0.849-0.133-1.667-0.378-2.434l-10.056 10.056c0.768 0.245 1.586 0.378 2.435 0.378 4.418 0 8-3.582 8-8z"}}),e._v(" "),n("path",{attrs:{d:"M25.938 9.062l-2.168 2.168c0.040 0.025 0.079 0.049 0.118 0.074 1.88 1.199 3.473 2.805 4.67 4.697-1.197 1.891-2.79 3.498-4.67 4.697-2.362 1.507-5.090 2.303-7.889 2.303-1.208 0-2.403-0.149-3.561-0.439l-2.403 2.403c1.866 0.671 3.873 1.036 5.964 1.036 6.978 0 13.027-4.064 16-10-1.407-2.81-3.504-5.2-6.062-6.938z"}})]):e._e()])],{toggle:e.togglePassword,type:e.type})],2),e._v(" "),e.disableStrength?e._e():e._t("strength-meter",[n("svg",{staticClass:"VuePassword__Meter",attrs:{viewBox:"0 0 123 2",preserveAspectRatio:"none",width:"100%",height:".5rem"}},[n("path",{class:e.getStrengthClass(0),attrs:{d:"M0 1 L30 1"}}),e._v(" "),n("path",{class:e.getStrengthClass(1),attrs:{d:"M31 1 L61 1"}}),e._v(" "),n("path",{class:e.getStrengthClass(2),attrs:{d:"M62 1 L92 1"}}),e._v(" "),n("path",{class:e.getStrengthClass(3),attrs:{d:"M93 1 L123 1"}})])],{score:this.score}),e._v(" "),e.disableStrength?e._e():e._t("strength-message",[n("div",{staticClass:"VuePassword__Message",class:e.strengthClass},[e._v(e._s(e.message))])],{score:this.score})],2)},staticRenderFns:[]}},,function(e,t,n){var s=n(12);"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);n(2)("6def0208",s,!0)}])});