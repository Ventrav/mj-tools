import Vue from 'vue';
import { GetterTree, ActionTree, MutationTree } from 'vuex';
import CharacterSheet from '~/types/characterSheet.ts';
import Game from '~/types/game.ts';

export const state = () => ({});

export type RootState = ReturnType<typeof state>;

export const mutations: MutationTree<RootState> = {
  ADD_GAME(s, payload: Game) {
    Vue.set(s, payload._id, payload);
  },
  SET_GAMES(s: RootState, payload: Array<Game>) {
    Object.values(payload).forEach((el: Game) => {
      Vue.set(s, el._id, el);
    });
  },
};

export const getters: GetterTree<RootState, RootState> = {
  list(s: RootState, g, rootState, rootGetters) {
    return Object.values(s).map((el) => ({
      ...el,
      characterSheet: rootGetters['character-sheets/list'].find((cs:CharacterSheet) => cs.game === el._id),
    }));
  },
};

export const actions: ActionTree<RootState, RootState> = {
  async fetch({ commit }) {
    const { data } = await this.$axios.get('/api/games');
    await this.dispatch('character-sheets/fetch');
    commit('SET_GAMES', data);
  },
  async add({ commit }, payload) {
    const { data } = await this.$axios.post('/api/games', { data: payload });
    commit('ADD_GAME', data);
  },
};
