<template>
<div class="shop-planes">
  <h3>Shop for Planes</h3>
    <table>
      <tr>
        <th>Name</th>
        <th>Flying Time</th>
        <th>Revenue Per Flight</th>
        <th>Cost</th>
      </tr>
      <tr v-for="(plane, index) in planes" v-bind:key="index">
        <td>{{plane.name}}</td>
        <td>{{plane.flyTime}}s</td>
        <td>${{plane.revenue}}</td>
        <td>${{plane.cost}}</td>
        <td><button @click="buyPlane(index)">Buy</button></td>
      </tr>
    </table>
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
  text-align: center;
}
table {
  margin: 0 auto;
  text-align: center;
}
th {
  padding: 10px;
}
td {
  padding: 5px;
  border-bottom: 1px solid #000000;
}
</style>
