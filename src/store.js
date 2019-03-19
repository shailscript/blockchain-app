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
        timestamp: 0,
        data: 'Shail created this block!',
        previous_hash: '0x0',
        nonce: 0,
        hash: '0x0a776947c6c998a0003268e7fed88cf50e15e85bf57b10c52879a1d102661cff'
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

    setBlockchain(state, {block, index}) {
      //state.blockchain[index] = block; -- void reactivity in Vue
      //Learning : https://vuejs.org/v2/guide/list.html#Caveats
      Vue.set(state.blockchain, index, block)
    },

  },

  actions: {
    addToBlockchain ( {commit, state}, payload ){
      let block = {
          index: payload.index,
          timestamp: Date.now(),
          data: payload.blockData,
          previous_hash: payload.index === 0 ? 0 : state.blockchain[payload.index - 1 ].hash,
          nonce: 0
      }

      console.log('Args recieved in addToBlockchain method', payload.blockData, payload.index );

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

      console.log('Final block to be commited ', block);
      let index = payload.index;
      commit('setBlockchain', {block, index} );
    },
      
      commit('setBlockchain', {block, index} );
    }
  } // end of actions

});
