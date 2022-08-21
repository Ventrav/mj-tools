import axios from 'axios';

const games = {
    namespaced: true,
    state: {
        games: []
    }, 
    getters: {
        games(s, g, rootState, rootGetters) {
            return s.games
        }
    },
    mutations: {
        SET_GAMES(s, payload) {
            s.games = payload
        }
    },
    actions: {
        async fetchAuthUser({commit, payload}) {
            const { data } = await axios.get('/games/my');
            commit('SET_GAMES', data);
        }
    }
} 

export default games