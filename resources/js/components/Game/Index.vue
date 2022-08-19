<template>
    <div>
        <h1>Game</h1>
        <div class="container-fluid">
            <div class="row">
                <div class="col-10">
                    <label for="game-name" class="form-label">Nom du jeu</label>
                    <input type="text" v-model="newGame.name" class="form-control">
                </div>
                <div class="col-2">
                    <button class="btn-primary btn" @click="saveGame">Créer</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
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
            console.table(this.newGame)
        }
    }
}
</script>