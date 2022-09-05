import Vue from 'vue';
import { GetterTree, ActionTree, MutationTree } from 'vuex';
import CharacterSheet from '~/types/characterSheet';

export const state = () => ({});

export type RootState = ReturnType<typeof state>;

export const mutations = {
  ADD_CHARACTER_SHEET(s: RootState, payload: CharacterSheet) {
    Vue.set(s, payload._id, payload);
  },
  SET_CHARACTER_SHEETS(s: RootState, payload: Array<CharacterSheet>) {
    Object.values(payload).forEach((el: CharacterSheet) => {
      Vue.set(s, el._id, el);
    });
  },
};

export const getters: GetterTree<RootState, RootState> = {
  list(s) {
    return Object.values(s);
  },
};

export const actions: ActionTree<RootState, RootState> = {
  async fetch({ commit }) {
    const { data } = await this.$axios.get('/api/character-sheets');
    commit('SET_CHARACTER_SHEETS', data);
  },
  async add({ commit }, payload) {
    const { data } = await this.$axios.post('/api/character-sheets', { data: payload });
    commit('ADD_CHARACTER_SHEET', data);
  },
  async update({ commit }, payload) {
    const { data } = await this.$axios.patch(`/api/character-sheets/${payload._id}`, { data: payload });
    console.table(data);
    commit('ADD_CHARACTER_SHEET', data);
  },
};
