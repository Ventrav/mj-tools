<template>
    <table>
        <thead>
            <tr>
                <td>Nom</td>
                <td>Actions</td>
            </tr>
        </thead>
        <tbody>
            <tr v-for="game in games" :key="game.id">
                <td>{{game.name}}</td>
                <td>
                    <div class="btn-group" role="group" aria-label="Game actions">
                        <button v-if="!game.character_sheet" class="btn btn-success" @click="createCharacterSheet(game)"> Créer fiche </button>
                        <button v-else class="btn btn-warning" @click="goToCharacterSheet(game.id)"> Modifier fiche </button>
                        <button class="btn btn-danger"> Supprimer</button>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</template>
<script>
import { mapActions } from 'vuex';
    export default {
        props: [
            'games'
        ],
        methods: {
            ...mapActions("games", [
                "createCharacterSheet"
            ]),
            goToCharacterSheet(idCS) {
                this.$router.push({name:'character-sheet-index', params: {id: idCS}})
            }
        }
    }
</script>