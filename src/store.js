import Vue from "vue";
import Vuex from "vuex";
import { ethers } from 'ethers';

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
    difficulty: 1
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
      
      let str = JSON.stringify(block)
      let hexifiedBl = ''
      for (var i=0; i<str.length; i++) {
        hexifiedBl += str.charCodeAt(i).toString(16);
      }

      let hashedBlock = ethers.utils.keccak256("0x" + hexifiedBl);

      while(!(hashedBlock.substr(2,state.difficulty) === '0'.repeat(state.difficulty))) {
        block.nonce = block.nonce + 1;
        str = JSON.stringify(block)
        hexifiedBl = ''
        for (i=0; i<str.length; i++) {
          hexifiedBl += str.charCodeAt(i).toString(16);
        }
        hashedBlock = ethers.utils.keccak256("0x" + hexifiedBl);
      }

      block [ "hash" ] = hashedBlock;
      commit('pushToBlockchain', block);
    }
  } // end of actions

});
