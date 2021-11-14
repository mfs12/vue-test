<template>
  <div id="app">
    <SwiperView msg="message to swipe" />
  </div>
</template>

<script>
import SwiperView from './components/SwiperView.vue'

export default {
  name: 'App',
  components: {
    SwiperView
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
