<template>
    <div>
        <h1>Jeux</h1>
        <div class="container-fluid">
            <div class="row">
                <div class="col-10">
                    <input type="text" placeholder="Nom du jeu" v-model="newGame.name" class="form-control">
                </div>
                <div class="col-2">
                    <button class="btn-primary btn" @click="saveGame">Créer</button>
                </div>
            </div>
            <div class="row">
                <GamesTable :games="games"></GamesTable>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import GamesTable from "./addons/GamesTable.vue";
import { mapGetters } from 'vuex';

export default {
    components: {
    GamesTable
},
    data: function() {
        return {
            newGame: {
                name: ""
            }
        }
    }, 
    beforeMount() {
        if(this.user === undefined){
            this.$store.dispatch('common/fetch')
        }
    },
    methods: {
        saveGame() {
            axios.post('/games', {name: this.newGame.name}).then((response) => {
                this.games.push(response.data)
            })
        }
    },
    computed: {
        ...mapGetters([
            'common/user',
            'games/games'
        ]), 
        fullNameUser() {
            return `${this["common/user"].first_name} ${this["common/user"].last_name}`
        },
        games() {
            return this["games/games"]
        }
    }
}
</script>