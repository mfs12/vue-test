<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Swiper msg="message to swipe"/>
  </div>
</template>

<script>
import Swiper from './components/Swiper.vue'

export default {
  name: 'App',
  components: {
    Swiper
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
  margin-top: 60px;
}
</style>
