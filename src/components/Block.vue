<template>
    <div class="card m-5 p-5">
        <div class="input-group">
            <div class="input-group-prepend">
                <div class="input-group-text">Data</div>
            </div>
            <input type="text" class="form-control" placeholder="Block Data" v-model="blockData">
        </div>
        <p class="text-left"><span class="hash">PREVIOUS HASH</span> <span>{{ block.previous_hash }}</span></p>
        <p class="text-left"><span class="hash">BLOCK HASH</span> <span>{{ block.hash }}</span></p>
        <div class="d-flex justify-content-between">
            <p class="lead"><strong>{{ blockName }}</strong></p>
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
                console.log(`Here's the DATA: ${blockData} and INDEX: ${blockIndex}`);
                this.$store.dispatch('addToBlockchain', { blockData, blockIndex });
            }
        },
        block() {
            return this.$store.state.blockchain[this.index];
        },
        blockName() {
            return this.$store.state.blockchain[this.index].index === 0 ? 'GENESIS BLOCK' : `BLOCK #${this.$store.state.blockchain[this.index].index}`; 
        }
    }
}
</script>


<style scoped>
.hash {
        font-family: DINPro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
        font-size: 12px;
    }
</style>
