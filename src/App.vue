<template>
  <div id="app">
    <Blockchain />
  </div>
</template>

<script>
import Blockchain from "./components/Blockchain.vue";

export default {
  name: "app",
  components: {
    Blockchain
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
