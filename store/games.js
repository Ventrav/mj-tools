import Vue from "vue"

export const state = () => ({})

export const mutations = {
    ADD_GAME(s, payload) {
        Vue.set(s, payload._id, payload);
    },
    SET_GAMES(s, payload) {
        Object.values(payload).forEach((el) => {
            Vue.set(s, el._id, el);
        });
    },    
}

export const getters =  {
    list (s, g, rootState, rootGetters) {
        return Object.values(s).map(el => ({
            ...el,
            characterSheet: rootGetters['character-sheets/list'].find((cs) => cs.game === el._id)
        }))
    }
}

export const actions = {
    async fetch({ commit }) {
        const { data } = await this.$axios.get('/api/games');
        await this.dispatch('character-sheets/fetch');
        commit('SET_GAMES', data);
    }, 
    async add({ commit }, payload) {
        const { data } = await this.$axios.post('/api/games', {data: payload});
        commit('ADD_GAME', data);
    }  
}