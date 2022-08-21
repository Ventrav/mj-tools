import axios from 'axios';

const commonStore = {
    namespaced: true,
    state: {
        user: undefined
    }, 
    getters: {
        user(s, g, rootState, rootGetters) {
            return s.user
        }
    },
    mutations: {
        SET_USER(s, payload) {
            s.user = payload
            this.dispatch('games/fetchAuthUser')
        }
    },
    actions: {
        async fetch({commit}) {
            const { data } = await axios.get('/users/test');
            commit('SET_USER', data);
        }
    }
} 

export default commonStore