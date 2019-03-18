<template>
  <div class="d-flex flex-column">
    {{ blockchain }}
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
import { mapState } from 'vuex';

export default {
  name: "Blockchain",
  data() {
    return {
      testdata: "Hey this is Shailendra Shukla",
    }
  },

  computed: mapState(['blockchain']),
  watch: {
    blockchain(newValue, oldValue) {
      console.log(`Updating from ${oldValue} to ${newValue}`);
    }
  },

  // mounted() {
  //     this.$store.subscribe((mutation, state) => {
  //       switch(mutation.type) {
  //         case 'pushToBlockchain':
  //           const blockchain = state.blockchain;

  //           console.log(`Updating to ${blockchain}`);
  //       }
  //     })
  // },

  components: {
    Block,
    AddBlock
  }
};
</script>

<style scoped>

</style>
