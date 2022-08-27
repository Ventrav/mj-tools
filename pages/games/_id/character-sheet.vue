<template>
    <b-container v-if="game" fluid>
        <h1>{{game.name}}</h1>
        <b-row>
            <b-col cols="12" class="mt-3">
                <b-btn block v-if="!game.characterSheet" @click="createCharacterSheet">Créer</b-btn>
                <builder v-else :characterSheet="characterSheet"></builder>
            </b-col>
        </b-row>
        {{game.characterSheet}}
    </b-container>
</template>
<script>
import builder from '~/components/character-sheets/builder.vue';
export default {
    components: {
        builder
    },
    beforeMount() {
        this.$store.dispatch('games/fetch')
    },
    computed: {
        game() {
            return this.$store.getters["games/list"].find(el => el._id === this.$route.params.id);
        },
        characterSheet() {
            if(this.game)
                return {...this.$store.state['character-sheets'][this.game.characterSheet._id]}
            return {}
        }
    },
    methods: {
        createCharacterSheet() {
            this.$store.dispatch("character-sheets/add", {game: this.game._id});
        }
    }
}
</script>