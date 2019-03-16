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
        nonce: 0
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
          nonce: 0
        }
      ]
    },

    pushToBlockchain(state, payload) {
      state.blockchain.push(payload);
    }
  },
  
  actions: {}
});
