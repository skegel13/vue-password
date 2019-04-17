// Import vue component
import VuePassword from "./components/VuePassword.vue";

// install function executed by Vue.use()
function install(Vue) {
    if (install.installed) return;
    install.installed = true;
    Vue.component("VuePassword", VuePassword);
}

// Create module definition for Vue.use()
const plugin = {
    install,
};

// To auto-install when vue is found
/* global window global */
let GlobalVue = null;
if (typeof window !== "undefined") {
    GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
    GlobalVue = global.Vue;
}
if (GlobalVue) {
    GlobalVue.use(plugin);
}

// Inject install function into component - allows component
// to be registered via Vue.use() as well as Vue.component()
VuePassword.install = install;

// Export component by default
export default VuePassword;

// Add export for VuePasswordStrength
export {
    default as VuePasswordStrength,
} from "./components/VuePasswordStrength.vue";
