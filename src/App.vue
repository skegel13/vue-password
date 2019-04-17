<template>
    <div id="app" class="container mx-auto my-4">
        <h1 class="mb-4 text-2xl">Vue Password</h1>

        <h2 class="mb-3 text-lg">Vue Password with Custom Strength</h2>

        <div class="mb-4">
            <label for="password">Password</label>
            <VuePassword
                v-model="password"
                id="password"
                :strength="strength"
                type="text"
            />
        </div>
        <div class="mb-4 text-right">
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

        <h2 class="mb-3 text-lg">Vue Password with Dropbox ZXVBCN</h2>

        <div class="mb-4">
            <label for="password-strength">Password</label>
            <VuePasswordStrength
                v-model="password"
                id="password-strength"
                type="text"
            />
        </div>
    </div>
</template>

<script>
import VuePassword from "./components/VuePassword.vue";
import VuePasswordStrength from "./components/VuePasswordStrength.vue";

export default {
    name: "app",
    components: {
        VuePassword,
        VuePasswordStrength,
    },
    data() {
        return {
            password: "",
            strength: 0,
        };
    },
};
</script>

<style>
body {
    padding: 1rem;
}
</style>
