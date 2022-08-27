<template>
    <b-table :items="items" :fields="fields" :busy="noGames" striped>

        <template #table-busy>
            <div class="text-center text-danger my-2">
                <b-spinner class="align-middle"></b-spinner>
                <strong>Loading...</strong>
            </div>
        </template>
        <template #cell(Actions)="data">
            <b-button-group>
                <b-button variant="warning" @click="goToCharacterSheets(data.item._id)">Afficher la fiche personnage</b-button>
                <b-button variant="danger">Supprimer</b-button>
            </b-button-group>
        </template>
    </b-table>
</template>
<script>
export default {
    props: [
        "games"
    ],
    data: () => {
        return {
            fields: [
                { key: '_id', label: 'ID' },
                { key: 'name', label: 'Nom' },
                "Actions"
            ],
        }
    },
    computed: {
        items() {
            return Object.values(this.games);
        },
        noGames() {
            return (!this.games) ? true : false;
        }
    },
    methods: {
        goToCharacterSheets(idGames) {
            this.$router.push({name: "games-id-character-sheet", params: {id: idGames}})
        }
    }
}
</script>