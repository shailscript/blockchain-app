<template>
  <div id="app">
    <div class="container-fluid py-3">
      <div class="row dark">
        <div class="col py-3 d-flex flex-column justify-content-center">
          <h1 class="font-weight-light">
            <strong>Let's play around Blockchain!</strong>
          </h1>
        </div>
      </div>
      <div class="row">
        <div class="d-flex justify-content-center m-auto py-5">
            <input type="number" v-model="difficulty" class="form-control mr-3">
            <button class="btn btn-danger" @click="resetBlockchain">Reset Blockchain</button>
          </div>
      </div>
    </div>

    <div class="container">
      <div class="row d-flex justify-content-center">
        <div class="col-10">
          <Blockchain/>
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
      difficulty: this.$store.state.difficulty
    };
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
  background-color: #2c3e50;
}
.dark {
  background-color: rgba(255, 255, 255, 0.7);
  color: black;
}
</style>
