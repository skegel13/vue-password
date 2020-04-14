module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "39ca":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VuePassword_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a59a");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VuePassword_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VuePassword_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VuePassword_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),

/***/ "a59a":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "f5a9":
/***/ (function(module, exports) {

module.exports = require("zxcvbn");

/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7a820fca-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/VuePassword.vue?vue&type=template&id=40720495&
var VuePasswordvue_type_template_id_40720495_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"VuePassword"},[_c('div',{staticClass:"VuePassword__Container"},[_vm._t("password-input",[_c('input',_vm._g(_vm._b({ref:"input",class:[
          _vm.classes,
          'VuePassword__Input',
          { 'VuePassword__Input--has-toggle': !_vm.disableToggle }
        ],attrs:{"title":_vm.strengthMessage},domProps:{"value":_vm.value}},'input',_vm.$attrs,false),_vm.listeners))],{"strength":this.strength,"type":_vm.type,"updatePassword":_vm.updatePassword,"value":_vm.value}),(!_vm.disableToggle)?_vm._t("password-toggle",[_c('button',{staticClass:"VuePassword__Toggle",attrs:{"title":_vm.toggleMessage,"type":"button"},on:{"click":_vm.togglePassword}},[(this.type === 'text')?_vm._t("password-hide",[_c('svg',{staticClass:"VuePassword__Toggle-Icon VuePassword__Toggle-Icon--hide",attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 20 20"}},[_c('path',{attrs:{"d":"M12.81 4.36l-1.77 1.78a4 4 0 0 0-4.9 4.9l-2.76 2.75C2.06 12.79.96 11.49.2 10a11 11 0 0 1 12.6-5.64zm3.8 1.85c1.33 1 2.43 2.3 3.2 3.79a11 11 0 0 1-12.62 5.64l1.77-1.78a4 4 0 0 0 4.9-4.9l2.76-2.75zm-.25-3.99l1.42 1.42L3.64 17.78l-1.42-1.42L16.36 2.22z"}})])]):_vm._t("password-show",[_c('svg',{staticClass:"VuePassword__Toggle-Icon VuePassword__Toggle-Icon--show",attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 20 20"}},[_c('path',{attrs:{"d":"M.2 10a11 11 0 0 1 19.6 0A11 11 0 0 1 .2 10zm9.8 4a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0-2a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"}})])])],2)],{"toggle":_vm.togglePassword}):_vm._e()],2),(!_vm.disableStrength)?_vm._t("strength-meter",[_c('div',{staticClass:"VuePassword__Meter",attrs:{"title":_vm.strengthMessage}},_vm._l((4),function(i){return _c('svg',{key:i,class:i <= _vm.strength ? _vm.strengthClass : '',attrs:{"preserveAspectRatio":"none","data-strength":i,"viewBox":"0 0 2 1"}},[_c('rect',{attrs:{"width":"100%","height":"100%"}})])}),0)],{"strength":this.strength,"strengthClass":_vm.strengthClass,"strengthClasses":_vm.strengthClasses,"strengthMessage":_vm.strengthMessage,"strengthMessages":_vm.strengthMessages}):_vm._e()],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/VuePassword.vue?vue&type=template&id=40720495&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/VuePassword.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var VuePasswordvue_type_script_lang_js_ = ({
  inheritAttrs: false,
  data: function data() {
    return {
      type: this.$attrs.type
    };
  },
  props: {
    classes: {
      type: [Object, Array, String]
    },
    disableStrength: Boolean,
    disableToggle: Boolean,
    strength: {
      type: Number,
      default: 0
    },

    /**
     * Classes to apply for the various strength levels from zxcvbn.
     */
    strengthClasses: {
      type: Array,
      default: function _default() {
        return ["VuePassword--very-weak", "VuePassword--weak", "VuePassword--medium", "VuePassword--good", "VuePassword--great"];
      }
    },

    /**
     * Messages for the password strength values.
     */
    strengthMessages: {
      type: Array,
      default: function _default() {
        return ["Very Weak Password", "Weak Password", "Medium Password", "Strong Password", "Very Strong Password"];
      }
    },
    value: String
  },
  computed: {
    inputElement: function inputElement() {
      if (this.$refs.input) {
        return this.$refs.input;
      }

      if (this.$el) {
        return this.$el.querySelector(".VuePassword__Container input");
      }

      return null;
    },
    listeners: function listeners() {
      return Object.assign({}, this.$listeners, {
        input: this.updatePassword
      });
    },
    model: {
      get: function get() {
        return this.value;
      },
      set: function set(value) {
        this.$emit("input", value);
      }
    },
    strengthClass: function strengthClass() {
      return Array.isArray(this.strengthClasses) && this.strengthClasses[this.strength];
    },
    strengthMessage: function strengthMessage() {
      if (this.disableStrength) {
        return false;
      }

      return Array.isArray(this.strengthMessages) && this.strengthMessages[this.strength];
    },
    toggleMessage: function toggleMessage() {
      return this.type === "password" ? "Show Password" : "Hide Password";
    }
  },
  watch: {
    strength: function strength(newValue, oldValue) {
      if (newValue != oldValue) {
        this.$emit("strength-updated", newValue);
      }
    }
  },
  mounted: function mounted() {
    if (!this.$attrs.type) {
      this.togglePassword();
    }
  },
  methods: {
    /**
     * Get the current strength class based on the current strength score.
     *
     * @param  {Number} strength
     * @return {String}
     */
    getStrengthClass: function getStrengthClass(strength) {
      if (this.strength > strength) {
        return this.strengthClasses[strength];
      }

      return "";
    },

    /**
     * Toggle the visibilty of the password.
     */
    togglePassword: function togglePassword() {
      this.type = this.type === "password" ? "text" : "password";
      this.inputElement.setAttribute("type", this.type);
      this.inputElement.focus();
    },

    /**
     * Update the password input.
     *
     * @param  {String} password
     */
    updatePassword: function updatePassword(event) {
      this.model = event.target.value;
    }
  }
});
// CONCATENATED MODULE: ./src/components/VuePassword.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_VuePasswordvue_type_script_lang_js_ = (VuePasswordvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/VuePassword.vue?vue&type=style&index=0&lang=css&
var VuePasswordvue_type_style_index_0_lang_css_ = __webpack_require__("39ca");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/VuePassword.vue






/* normalize component */

var component = normalizeComponent(
  components_VuePasswordvue_type_script_lang_js_,
  VuePasswordvue_type_template_id_40720495_render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var VuePassword = (component.exports);
// EXTERNAL MODULE: external {"commonjs":"zxcvbn","commonjs2":"zxcvbn","root":"zxcvbn"}
var external_commonjs_zxcvbn_commonjs2_zxcvbn_root_zxcvbn_ = __webpack_require__("f5a9");
var external_commonjs_zxcvbn_commonjs2_zxcvbn_root_zxcvbn_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_zxcvbn_commonjs2_zxcvbn_root_zxcvbn_);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/VuePasswordAuto.vue?vue&type=script&lang=js&
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* harmony default export */ var VuePasswordAutovue_type_script_lang_js_ = ({
  name: "VuePasswordAuto",
  functional: true,
  components: {
    VuePassword: VuePassword
  },
  render: function render(h, context) {
    var data = context.data;
    var inputs = Array.isArray(context.props.userInputs) ? context.props.userInputs : [];
    var strength = external_commonjs_zxcvbn_commonjs2_zxcvbn_root_zxcvbn_default()(data.attrs.value, inputs) || 0;
    return h(VuePassword, {
      props: _objectSpread({}, data.attrs, {
        strength: strength.score
      }),
      on: context.listeners,
      scopedSlots: context.scopedSlots
    });
  }
});
// CONCATENATED MODULE: ./src/components/VuePasswordAuto.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_VuePasswordAutovue_type_script_lang_js_ = (VuePasswordAutovue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/VuePasswordAuto.vue
var VuePasswordAuto_render, VuePasswordAuto_staticRenderFns




/* normalize component */

var VuePasswordAuto_component = normalizeComponent(
  components_VuePasswordAutovue_type_script_lang_js_,
  VuePasswordAuto_render,
  VuePasswordAuto_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var VuePasswordAuto = (VuePasswordAuto_component.exports);
// CONCATENATED MODULE: ./src/index.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }





function install(Vue) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (options.type === "auto") {
    Vue.component(options.name || "VuePassword", VuePasswordAuto);
  } else {
    Vue.component(options.name || "VuePassword", VuePassword);
  }
}

/* harmony default export */ var src = (install);

if ((typeof window === "undefined" ? "undefined" : _typeof(window)) !== undefined && window.Vue && window.Vue === external_commonjs_vue_commonjs2_vue_root_Vue_default.a) {
  install(window.Vue);
}


// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js
/* concated harmony reexport VuePassword */__webpack_require__.d(__webpack_exports__, "VuePassword", function() { return VuePassword; });
/* concated harmony reexport VuePasswordAuto */__webpack_require__.d(__webpack_exports__, "VuePasswordAuto", function() { return VuePasswordAuto; });


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src);



/***/ })

/******/ });
//# sourceMappingURL=VuePassword.common.js.map