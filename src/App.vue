<template>
  <div id="app">
    <password-input v-model="password"></password-input>
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
