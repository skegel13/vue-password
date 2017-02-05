<template>
  <div id="app">
    <form>
      <label for="email">Email</label>
      <p class="control">
          <input id="email" class="input" type="email" name="email" v-model="user.email">
      </p>

      <label for="password">Password</label>
      <p class="control">
          <vue-password v-model="user.password"
                        classes="input"
                        :user-inputs="[user.email]"
          >
          </vue-password>
      </p>

      <p class="control">
          <button class="button is-primary">Register</button>
      </p>
    </form>
  </div>
</template>

<script>
import VuePassword from './components/VuePassword'

export default {
  name: 'app',
  components: {
    VuePassword
  },
  data () {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  }
}
</script>

<style>
  body {
    max-width: 600px;
    margin: 10rem auto;
  }
</style>
