<template>
  <div class="d-flex flex-column">
    <Block v-for='(block, index) in blockchain' :key='index' :index='index'>
    </Block>

    <div class="d-flex justify-content-around">
      <AddBlock />
    </div>
  </div>
</template>

<script>
import Block from './Block.vue'
import AddBlock from './AddBlock.vue'
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
    Block,
    AddBlock
  }
};
</script>

<style scoped>

</style>
