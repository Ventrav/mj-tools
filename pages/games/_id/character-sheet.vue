<template>
    <b-container v-if="game" fluid class="flex flex-column gap--5px">
        <h1>{{ game.name }}</h1>
        <!-- Boutons to switch from edit mode / read only mode -->
        <div class="flex flex-row gap--5px justify-content-end">
            <b-btn variant="primary" @click="save" v-if="editMode">
                Save
            </b-btn>
            <b-btn :pressed="editMode"  @click="toggleMode">
                <b-icon-pencil-square />
            </b-btn>
            <b-btn :pressed="!editMode" @click="toggleMode">
                <b-icon-eye-fill />
            </b-btn>
        </div>
        <b-btn block v-if="!game.characterSheet" @click="createCharacterSheet">
            Créer
        </b-btn>
        <!-- Component to create / edit the character sheet -->
        <builder v-else-if="editMode" :characterSheetId="game.characterSheet._id" ref="builder" />
        <!-- Component to display the character sheet -->
        <visualizer
            v-else :characterSheetId="game.characterSheet._id"
            @editModeAsked="toggleMode"
        />
    </b-container>
</template>

<script>
import Vue from 'vue';
import builder from '~/components/character-sheets/builder.vue';
import visualizer from '~/components/character-sheets/visualizer.vue';

export default Vue.extend({
  components: {
    builder,
    visualizer,
  },
  data: () => ({
    editMode: true,
  }),
  beforeMount() {
    this.$store.dispatch('games/fetch');
  },
  computed: {
    game() {
      return this.$store.getters['games/list'].find((el) => el._id === this.$route.params.id);
    },
  },
  methods: {
    createCharacterSheet() {
      this.$store.dispatch('character-sheets/add', { game: this.game._id });
    },
    toggleMode() {
      this.editMode = !this.editMode;
    },
    save() {
      // Bon c'est moche mais j'ai eu la flemme
      this.$refs.builder.saveCharacterSheet();
    },
  },
});
</script>
