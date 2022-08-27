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
        <b-row class="mt-5">
            <b-col cols="12">
                <gameTable :games="games"></gameTable>
            </b-col>
        </b-row>
    </b-container>
</template>
<script>
import gameTable from '~/components/games/gameTable.vue';
export default {
    components: {
        gameTable
    },
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
    }, 
    computed: {
        games() {
            return this.$store.getters["games/list"];
        }
    }
}
</script>