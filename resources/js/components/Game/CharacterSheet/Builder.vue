<template>
    
</template>
<script>
import axios from 'axios'
export default {
    props: [
        "id",
        "characterSheet"
    ],
    beforeMount() {
        if(!this.characterSheet) {
            axios.get(`/character-sheets/${this.id}`).then((response) => {
                this.characterSheet = response.data
            })
        }
    },
    data: function() {
        characterSheet: undefined
    }
}
</script>