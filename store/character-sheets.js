import Vue from "vue"

export const state = () => ({})

export const mutations = {
    ADD_CHARACTER_SHEET(s, payload) {
        Vue.set(s, payload._id, payload);
    },
    SET_CHARACTER_SHEETS(s, payload) {
        Object.values(payload).forEach((el) => {
            Vue.set(s, el._id, el);
        });
    },    
}

export const getters =  { 
    list(s, g, rootState, rootGetters) {
        return Object.values(s);
    }   
}

export const actions = {
    async fetch({ commit }) {
        const { data } = await this.$axios.get('/api/character-sheets');
        commit('SET_CHARACTER_SHEETS', data);
    }, 
    async add({ commit }, payload) {
        const { data } = await this.$axios.post('/api/character-sheets', {data: payload});
        commit('ADD_CHARACTER_SHEET', data);
    },
    updateForBuild({ commit }, payload) {
        commit('ADD_CHARACTER_SHEET', payload);
    } 
}