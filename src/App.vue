<template>
  <div id="app">
    <OverallStats/>
    <CurrentPlanes/>
    <ShopPlanes/>
  </div>
</template>

<script>
import OverallStats from './components/OverallStats.vue';
import CurrentPlanes from './components/CurrentPlanes.vue';
import ShopPlanes from './components/ShopPlanes.vue';

export default {
  name: 'App',
  components: {
    OverallStats,
    CurrentPlanes,
    ShopPlanes,
  },
  methods: {
    loop() {
      this.$store.commit('gameLoop');
      requestAnimationFrame(this.loop);
    },
  },
  created() {
    this.loop();
  },
};
</script>

<style>
body {
  color: white;
  background: #242629;
  font-family: Verdana, Geneva, sans-serif;
}
</style>
