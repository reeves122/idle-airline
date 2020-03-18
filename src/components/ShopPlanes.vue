<template>
<div class="shop-planes">
  <h3>Shop for Planes</h3>
  <div v-for="(plane, index) in planes" v-bind:key="plane.name">
    <button @click="buyPlane(index)">{{ plane.name }} {{ plane.cost }}Buy!</button>
  </div>
</div>
</template>

<script>
export default {
  computed: {
    planes() {
      return this.$store.state.availablePlanes;
    },
  },
  methods: {
    buyPlane(index) {
      this.$store.commit('buyPlane', index);
    },
  },
};
</script>

<style scoped>
.shop-planes {
  margin-bottom: 50px;
}
</style>
