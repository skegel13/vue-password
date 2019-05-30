<template>
  <div id="app" class="container mx-auto my-4">
    <h1 class="mb-4 text-2xl">Vue Password</h1>

    <h2 class="mb-3 text-lg">Vue Password with Custom Strength</h2>

    <div class="mb-4">
      <label for="password">Password</label>
      <VuePassword
        v-model="password1"
        id="password1"
        :strength="strength"
        type="text"
      />
    </div>

    <div class="mb-2">
      <label for="strength" class="block">Strength</label>
      <input
        v-model.number="strength"
        id="strength"
        class="border p-2 text-right w-12"
        max="4"
        min="0"
        type="number"
      />
    </div>
    <p class="mb-8 text-gray-600">
      Pass a strength value from 0-4 as a prop to the VuePassword component
      to set the level of the strength meter.
    </p>


    <h2 class="mb-3 text-lg">Vue Password with Dropbox zxcvbn Library</h2>
    <div class="mb-6">
      <label for="password">Password</label>
      <VuePasswordAuto
        v-model="password2"
        id="password2"
        type="text"
      />
    </div>

    <hr class="border-t-4 border-dotted border-gray-300 my-12">

    <h2 class="text-lg">Installation</h2>
    <div class="mb-6">
      <pre class="border border-gray-400 rounded shadow-md"><code class="language-bash">npm install --save vue-password</code></pre>
    </div>
    <p class="mb-2 text-gray-600">
      If you would like to use the Dropbox zxcvbn library to automatically calculate
      the password strength, install the zxvbn libary and use the
      VuePasswordAuto component.
    </p>
    <p class="bg-white border border-red-600 mb-4 p-4 rounded shadow">
      <strong>Please note:</strong> The Dropbox zxcvbn library is very large at roughly
      900 kb. It is recommended to use your own library or a server-side library
      and manually pass the strength value to the component.
    </p>

    <h2 class="text-lg">HTML</h2>
    <div class="mb-6">
      <pre class="border border-gray-400 rounded shadow-md"><code class="language-html">{{ vpHtml }}</code></pre>
    </div>
    <h2 class="text-lg">JS</h2>
    <div class="mb-6">
      <pre class="border border-gray-400 rounded shadow-md"><code class="language-js">{{ vpJS }}</code></pre>
    </div>

  </div>
</template>

<script>
import VuePassword from "../src/components/VuePassword.vue";
import VuePasswordAuto from "../src/components/VuePasswordAuto.vue";

export default {
  name: "app",
  components: {
    VuePassword,
    VuePasswordAuto
  },
  data() {
    return {
      password1: "",
      password2: "",
      strength: 0,
      vpHtml: `<div class="mb-4">
  <label for="password">Password</label>
  <VuePassword
    v-model="password"
    id="password"
    :strength="strength"
    type="text"
  />
</div>`,
      vpJS: `// Import VuePassword without the Dropbox zxcvbn strength library.
// This will automatically register the component.
import VuePassword from 'vue-password';

Vue.use(
  VuePassword,
);

// Locally import the VuePassword component.
import { VuePassword } from 'vue-password';

export default {
  components: {
    VuePassword,
  },
  ...
};

// Locally import the VuePasswordAuto component
// This requires the zxcvbn library to be installed.
import { VuePasswordAuto } from 'vue-password';

export default {
  components: {
    VuePasswordAuto,
  },
  ...
};`,

    };
  },
  mounted() {
    Prism.highlightAll();
  },
};
</script>

<style>
body {
  padding: 1rem;
}
</style>
