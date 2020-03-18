<template>
<div class="current-planes">
  <h3>Current Planes</h3>
    <table>
      <tr>
        <th>Name</th>
        <th>Flying Time</th>
        <th>Revenue Per Flight</th>
        <th>ETA (seconds)</th>
      </tr>
      <tr v-for="(plane, index) in planes" v-bind:key="index">
        <td>{{plane.name}}</td>
        <td>{{plane.flyTime}}s</td>
        <td>${{plane.revenue}}</td>
        <td v-bind:style="getETAColorStyle(eta(index))">{{eta(index)}}</td>
        <td><button @click="flyPlane(index)">Fly</button></td>
        <td><button @click="sellPlane(index)">Sell</button></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  mounted() {
    this.intervalId = setInterval(() => {
      this.$forceUpdate();
    }, 100);
  },
  data() {
    return {
      intervalId: null,
    };
  },
  destroyed() {
    clearInterval(this.intervalId);
  },
  computed: {
    planes() {
      return this.$store.state.currentPlanes;
    },
  },
  methods: {
    getETAColorStyle(eta) {
      if (eta > 5) {
        return 'color: green;';
      }
      if (eta < 0.1) {
        return 'color: white;';
      }
      if (eta < 2) {
        return 'color: red;';
      }
      return 'color: orange;';
    },
    flyPlane(planeIndex) {
      this.$store.commit('flyPlane', planeIndex);
    },
    sellPlane(planeIndex) {
      this.$store.commit('sellPlane', planeIndex);
    },
    eta(index) {
      if (this.$store.state.currentPlanes[index].arrivalTime) {
        return ((this.$store.state.currentPlanes[index].arrivalTime - Date.now())
         / 1000).toFixed(1);
      }
      return '';
    },
  },
};
</script>

<style scoped>
.current-planes {
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
