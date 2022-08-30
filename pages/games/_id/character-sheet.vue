<template>
    <b-container v-if="game" fluid>
        <h1>{{game.name}}</h1>
        <b-row>
            <b-col cols="12" class="mt-3">
                <b-btn block v-if="!game.characterSheet" @click="createCharacterSheet">Créer</b-btn>
                <builder v-else-if="editMode" :characterSheetId="game.characterSheet._id" @visuModeAsked="passToVisuMode"></builder>
                <visualizer v-else :characterSheetId="game.characterSheet._id" @editModeAsked="passToEditMode"></visualizer>
            </b-col>
        </b-row>
    </b-container>
</template>
<script>
import builder from '~/components/character-sheets/builder.vue';
import visualizer from '~/components/character-sheets/visualizer.vue';
export default {
    components: {
        builder,
        visualizer
    },
    data: () => {
        return {
            editMode: true
        }
    },
    beforeMount() {
        this.$store.dispatch('games/fetch')
    },
    computed: {
        game() {
            return this.$store.getters["games/list"].find(el => el._id === this.$route.params.id);
        }
    },
    methods: {
        createCharacterSheet() {
            this.$store.dispatch("character-sheets/add", {game: this.game._id});
        },
        passToEditMode() {
            this.editMode = true;
        },
        passToVisuMode() {
            this.editMode = false;
        }
    }
}
</script>