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

    <hr class="border-t-4 border-dotted border-gray-300 my-12">

    <h2 class="text-lg">Installation</h2>
    <div class="mb-6">
      <pre class="border border-gray-400 rounded shadow-md"><code class="language-bash">npm install --save vue-password</code></pre>
    </div>

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

export default {
  name: "app",
  components: {
    VuePassword,
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
      vpJS: `// Locally import the VuePassword component.
import VuePassword from 'vue-password';

export default {
  components: {
    VuePassword,
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
