<template>
  <div class="d-flex flex-column">
    <p>{{ testdata }}</p>
    <Block v-for='(block, index) in blockchain' :key='index'>
    </Block>
  </div>
</template>

<script>
import Block from './Block.vue'
export default {
  name: "Blockchain",
  data() {
    return {
      testdata: "Hey this is Shailendra Shukla"
    }
  },
  computed: {
    blockchain() {
      return this.$store.state.blockchain;
    }
  },
  components: {
    Block
  }
};
</script>

<style scoped>

</style>
