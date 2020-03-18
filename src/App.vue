<template>
  <div class="app" id="app">
  <OverallStats/>
  <b-tabs content-class="mt-3" align="center">
    <b-tab title="Current Planes"><CurrentPlanes/></b-tab>
    <b-tab title="Shop for Planes"><ShopPlanes/></b-tab>
    <b-tab title="Upgrades">Coming Soon!</b-tab>
  </b-tabs>
    <div class="footer">
      v1.0.0
      <button @click="resetGame()">Reset Game</button>
    </div>
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
    resetGame() {
      this.$store.commit('resetGame');
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
.app {
  text-align: center;
  align-content: center;
  margin: 0 auto;
}
.footer {
  margin: 0 auto;
  margin-top: 200px;
  bottom: 1px;
  align-content: center;
  text-align: center;
}
</style>
