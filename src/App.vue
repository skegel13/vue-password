<template>
  <div id="app">
    <div class="panel">
      <p class="panel-heading">Demo:</p>
      <div class="panel-block">
        <p class="control">
          <label for="password">Password</label>
          <password-input v-model="password" classes="input"></password-input>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import PasswordInput from './components/PasswordInput'

export default {
  name: 'app',
  components: {
    PasswordInput
  },
  data () {
    return {
      password: 'password'
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
