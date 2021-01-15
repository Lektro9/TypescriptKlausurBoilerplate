<template>
  <div id="app">
    <PostBox msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import PostBox from './components/PostBox.vue'

export default {
  name: 'App',
  components: {
    PostBox
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
