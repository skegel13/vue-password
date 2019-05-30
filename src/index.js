import Vue from "vue";
import VuePassword from "./components/VuePassword.vue";
import VuePasswordAuto from "./components/VuePasswordAuto.vue";

function install(Vue, options = {}) {
  if (options.type === "auto") {
    Vue.component(options.name || "VuePassword", VuePasswordAuto);
  } else {
    Vue.component(options.name || "VuePassword", VuePassword);
  }
}

export default install;

if (typeof window !== undefined && window.Vue && window.Vue === Vue) {
  install(window.Vue);
}

export { VuePassword, VuePasswordAuto };
