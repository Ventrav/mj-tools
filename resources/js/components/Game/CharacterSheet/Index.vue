<template>
    <div class="container-fluid">
        <button class="btn btn-primary" @click="goToBuilder">Editer</button>
    </div>

</template>
<script>
import axios from 'axios'

    export default {
        props: [
            "id"
        ],
        beforeMount() {
            axios.get(`/character-sheets/${this.id}`).then((response) => {
                console.log(response)
                this.characterSheet = response.data
            })
        },
        data: function() {
            return {
                characterSheet: undefined
            }
        },
        methods: {
            goToBuilder() {
                this.$router.push({name: "character-sheet-builder", params: {id: this.id}})
            }
        }
    }

</script>
