<template>
    <h1>Acceuil</h1>
</template>

<script>
    export default {
        mounted() {
            this.$store.dispatch('fetch')
        },
        data: function () {
            return {

            }
        }, 
        computed: {
            user() {
                return this.$store.getters.user
            }
        }
    }
</script>