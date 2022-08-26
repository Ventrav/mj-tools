<template>
    <b-container fluid>
        <h1>Jeux</h1>
        <b-row>
            <b-col cols="11">
                <b-form-input placeholder="Nom du jeu" v-model="gameName"></b-form-input>
            </b-col>
            <b-col cols="1">
                <b-button block @click="storeGame">Sauvegarder</b-button>
            </b-col>
        </b-row>
    </b-container>
</template>
<script>
export default {
    beforeMount() {
        this.$store.dispatch('games/fetch')
    }, 
    data: () => {
        return {
            gameName: ''
        }
    },
    methods: {
        storeGame() {
            this.$store.dispatch('games/add', {name: this.gameName});
        }
    }
}
</script>