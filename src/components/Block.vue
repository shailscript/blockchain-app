<template>
    <div class="card">
        {{blockchain[0].data}}
    </div>
</template>

<script>
export default {
    
    computed: {
        blockchain() {
            return this.$store.state.blockchain;
        }
    }
}
</script>


<style scoped>

</style>
