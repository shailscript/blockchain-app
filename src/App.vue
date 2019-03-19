<template>
  <div id="app" class="container">
    <div class="row">
      <div class="col-10">
        <Blockchain />
      </div>

      <div class="col-2">
        <div class="d-flex flex-column">
          <input type="number" v-model='difficulty'>
          <button class="btn btn-danger" @click='resetBlockchain'>Reset Blockchain</button>
        </div>
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
  data() {
    return {
      difficulty : this.$store.state.difficulty
    }
  },
  methods: {
    resetBlockchain(event) {
      event.preventDefault();
      this.$store.dispatch("resetBlockchain", this.difficulty);
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
