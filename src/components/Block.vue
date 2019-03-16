<template>
    <div class="card m-5 p-5">
        <div class="input-group">
            <div class="input-group-prepend">
                <div class="input-group-text">Data</div>
            </div>
            <input type="text" class="form-control" placeholder="Block Data" :value="block.data">
        </div>
        <p class="text-left"><strong>PREVIOUS HASH</strong> {{ block.previous_hash }}</p>
        <p class="text-left"><strong>BLOCK HASH</strong> {{ block.hash }}</p>
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
        block() {
            return this.$store.state.blockchain[this.index];
        },
        blockName() {
            return this.$store.state.blockchain[this.index].index === 0 ? 'GENESIS BLOCK' : `BLOCK #${this.$store.state.blockchain[this.index].index}` 
        }
    }
}
</script>


<style scoped>

</style>
