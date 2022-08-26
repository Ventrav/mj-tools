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
    list(s, g, rootState, rootGetters) {
        return s;
    }
}

export const actions = {
    async fetch({ commit }) {
        const { data } = await this.$axios.get('/api/games');
        commit('SET_GAMES', data);
    }, 
    async add({ commit }, payload) {
        const { data } = await this.$axios.post('/api/games', {data: payload});
        commit('ADD_GAME', data);
    }  
}