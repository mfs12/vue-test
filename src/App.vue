<template>
  <!-- eslint-disable -->
  <div id="app">
    <v-container fluid>
      <v-row class="col-10 ma-2 align-center">
        <v-col class="">
          <SwiperView msg="message to swipe" />
        </v-col>
      </v-row>
      <v-row class="col-10 ma-2">
        <v-col><v-card>Hallo col1</v-card></v-col>
        <v-col><v-card>Hallo col2</v-card></v-col>
        <v-col><v-card>Hallo col3</v-card></v-col>
      </v-row>
    </v-container>
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
  width: auto;
  height: auto;
}
</style>
