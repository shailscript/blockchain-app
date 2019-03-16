<template>
    <div class="card my-5">
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
