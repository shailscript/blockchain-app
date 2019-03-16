<template>
    <div class="card">
        {{blockchain[index].data}}
    </div>
</template>

<script>
export default {
    props: [
        'index'
    ],
    computed: {
        blockchain() {
            return this.$store.state.blockchain;
        }
    }
}
</script>


<style scoped>

</style>
