import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: false,
    blockchain: [
      {
        index: 0,
        timestamp: '',
        data: 'Shail created this block!',
        previous_hash: '0x0',
        nonce: 0,
        hash: ''
      },
      {
        index: 1,
        timestamp: '',
        data: 'Shail created this block 2 !',
        previous_hash: '0x0',
        nonce: 0,
        hash: ''
      }
    ],
    block: '',

  },

  mutations: {
    setLoading(state, payload) {
      state.loading = payload;
    },

    resetBlockchain(state) {
      state.blockchain = [
        {
          index: 0,
          timestamp: '',
          data: 'Shail created this block!',
          previous_hash: '0x0',
          nonce: 0,
          hash: '' 
        }
      ]
    },

    pushToBlockchain(state, payload) {
      state.blockchain.push(payload);
    }
  },

  actions: {
    createBlock( { commit, state}, data ) {
      let block = {
          index: state.blockchain.length,
          timestamp: Date.now(),
          data: data,
          previous_hash: state.blockchain[state.blockchain.length - 1].hash,
          nonce: 0
      }
    }
  }
});
