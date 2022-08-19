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
        </div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    data: function() {
        return {
            newGame: {
                name: ""
            }
        }
    }, 
    methods: {
        saveGame() {
            axios.post('/games', {name: this.newGame.name})
            console.table(this.newGame)
        }
    }
}
</script>