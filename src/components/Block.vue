<template>
    <div class="card mb-5 px-5 py-5">
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <div class="input-group-text">Data</div>
            </div>

            <input 
                type="text" 
                class="form-control" 
                placeholder="No data here" 
                v-model="blockData" 
                :disabled="!match">
        </div>
        
        <p 
            class="text-left hash">
            LAST BLOCK HASH 
            <span 
                class="small badge" 
                :class="[ match ? 'badge-success' : 'badge-danger' ]">
                {{ block.previous_hash }}
            </span>
        </p>
        
        <p class="text-left hash">THIS BLOCK HASH <span class="small badge badge-success">{{ block.hash }}</span></p>
        
        <div class="d-flex justify-content-between py-3">
            <p class="lead"><strong>{{ blockName }}</strong></p>
            <p class="lead">{{ date }}</p>
            <button 
                class="btn btn-secondary-outline btn-sm" 
                v-if="!match" 
                @click='remineBlock'>
                Remine!
            </button>
            <p v-else class="nounce">{{ block.nonce }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: [
        'index'
    ],

    computed: {
        blockData: {
            get() {
                return this.$store.state.blockchain[this.index].data;
            },
            set(blockData) {
                const blockIndex = this.index;
                let data = {
                    blockData: blockData,
                    index: blockIndex
                }
                this.updatedBlockData = blockData; 
                this.$store.dispatch('addToBlockchain', data);
            }
        },

        date() {
            let date = 'Eternity';
            if(this.$store.state.blockchain[this.index].timestamp !== 0) {
                date = new Date(this.$store.state.blockchain[this.index].timestamp)
                let ms = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                return date.getDate() + ' ' + ms[date.getMonth()] + ' ' + date.getFullYear() + ', at ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
            }
            return date;
        },

        block() {
            return this.$store.state.blockchain[this.index];
        },

        blockName() {
            return this.$store.state.blockchain[this.index].index === 0 ? 'GENESIS BLOCK' : `BLOCK #${this.$store.state.blockchain[this.index].index}`; 
        },

        match() {
            if(this.index !== 0)
            return this.$store.state.blockchain[this.index].previous_hash ===  this.$store.state.blockchain[this.index - 1].hash;
            return true;
        }
    },

    methods: {
        remineBlock() {
            const blockIndex = this.index;
            //const blockData = this.blockData.get(); -- didn't work!!
            const blockData = this.$store.state.blockchain[this.index].data;
            let data = {
                blockData: blockData,
                index: blockIndex
            }
            this.$store.dispatch('addToBlockchain', data);
        }
    }
}
</script>


<style scoped>
.hash {
    font-family: DINPro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
    font-size: 12px;
}
.small {
    font-size: 9pt;
    font-family: "Courier New";
}
.nounce {
    padding: 2px 10px;
    border: solid grey 1px;
    border-radius: 10px;
    background: rgb(212, 210, 210);
    color: black;

}
</style>
