<template>
  <div class="overall-stats">
    <div class="balance">${{ balance }}</div>
    <div class="other-stats">Revenue Per Minute: {{ revenuePerMinute }}</div>
    <div class="other-stats">Level: {{ currentLevel }}</div>
    <div class="other-stats">Next Level: {{ revenueForNextLevel }}</div>
  </div>
</template>

<script>
export default {
  computed: {
    balance() {
      return this.$store.state.balance;
    },
    revenuePerMinute() {
      return this.$store.state.revenuePerMinute;
    },
    currentLevel() {
      return this.$store.state.currentLevel;
    },
    revenueForNextLevel() {
      return this.$store.state.brevenueForNextLevellance;
    },
  },
};
</script>

<style scoped>
.overall-stats {
  margin-bottom: 50px;
  color: #fff;
  text-align: center;
  align-content: center;
}

.balance {
  margin: 0 auto;
  text-align: center;
  width: 100%;
  min-width: 200px;
  max-width: fit-content;
  padding: 15px 25px;
  background-color: #19334d;
  border-radius: 8px;
  font-size: 60px;
}

.other-stats {
  font-size: 18px;
}

</style>
