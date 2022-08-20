<template>
    <div>
        <h1>Game</h1>
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

export default {
    components: {
    GamesTable
},
    data: function() {
        return {
            newGame: {
                name: ""
            },
            games: []
        }
    }, 
    beforeMount() {
        axios.get('/games/my').then((response) => {
            this.games = response.data
        });
    },
    methods: {
        saveGame() {
            axios.post('/games', {name: this.newGame.name}).then((response) => {
                this.games.push(response.data)
            })
        }
    }
}
</script>