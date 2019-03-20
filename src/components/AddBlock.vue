<template>
    <form class="p-5">
        <div class="input-group">
            <div class="input-group-prepend">
                <div class="input-group-text">Data</div>
            </div>
            <input 
                type="text" 
                class="form-control" 
                placeholder="Block Data" 
                v-model="data">
        </div>

        <button 
            class="btn btn-warning mx-5 mt-5" 
            type="submit" 
            @click="submitBlock">
            Create Block
        </button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            data: '',
        }
    },
    methods: {
        submitBlock(event) {
            event.preventDefault();
            let blockData = this.data;
            let index = this.$store.state.blockchain.length;
            let data = {
                blockData: blockData,
                index: index
            }
            if(this.data !== '') {
                this.$store.dispatch('addToBlockchain', data);
            }
        }
    }
}
</script>

<style scoped>

</style>
