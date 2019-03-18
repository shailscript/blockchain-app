<template>
  <div id="app" class="container">
    <div class="row">
      <div class="col-2">
        Peer 1
      </div>

      <div class="col-8">
        <Blockchain />
      </div>

      <div class="col-2">
        <button class="btn btn-danger" @click='resetBlockchain'>Reset Blockchain</button>
      </div>
    </div>
  </div>
</template>

<script>
import Blockchain from "./components/Blockchain.vue";

export default {
  name: "app",
  components: {
    Blockchain
  },
  methods: {
    resetBlockchain() {
      this.$store.commit('resetBlockchain');
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
