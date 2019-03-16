<template>
    <div class="card p-5">
        <div class="input-group">
            <div class="input-group-prepend">
                <div class="input-group-text">Data</div>
            </div>
            <input type="text" class="form-control" placeholder="Block Data" v-model="data">
        </div>
        <button class="btn btn-warning mx-5 mt-5" @click="submitBlock">Create Block</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            data: '',
        }
    },
    methods: {
        submitBlock() {
            if(this.data !== '') {
                this.$store.dispatch('createBlock', this.data);
            }
        }
    }
}
</script>

<style scoped>

</style>
