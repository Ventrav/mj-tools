<template>
    <b-container fluid>
        <h1>Jeux</h1>
        <div class="flex gap--5px flex-column">
            <div class="flex align-items-center gap--5px">
                <b-form-input placeholder="Nom du jeu" v-model="gameName" class="flex-grow-1" />
                <b-button @click="storeGame">
                    Sauvegarder
                </b-button>
            </div>
            <gameTable :games="games" />
        </div>
    </b-container>
</template>
<script lang="ts">
import Vue from 'vue';
import gameTable from '~/components/games/gameTable.vue';

export default Vue.extend({
  name: 'Index-jeux',
  components: {
    gameTable,
  },
  beforeMount() {
    this.$store.dispatch('games/fetch');
  },
  data: () => ({
    gameName: '',
  }),
  methods: {
    storeGame() {
      this.$store.dispatch('games/add', { name: this.gameName });
    },
  },
  computed: {
    games() {
      return this.$store.getters['games/list'];
    },
  },
});
</script>
