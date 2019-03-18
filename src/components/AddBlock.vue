<template>
    <form class="card p-5">
        <div class="input-group">
            <div class="input-group-prepend">
                <div class="input-group-text">Data</div>
            </div>
            <input type="text" class="form-control" placeholder="Block Data" v-model="data">
        </div>
        <button class="btn btn-warning mx-5 mt-5" type="submit" @click="submitBlock">Create Block</button>
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
            if(this.data !== '') {
                this.$store.dispatch('addToBlockchain', { blockData, index });
            }
        }
    }
}
</script>

<style scoped>

</style>
