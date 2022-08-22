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
        },
        UPDATE_GAME(s, payload) {
            let index = s.games.findIndex((el) => el.id === payload.id);
            s.games[index] = payload;
        }
    },
    actions: {
        async fetchAuthUser({commit, payload}) {
            const { data } = await axios.get('/games/my');
            commit('SET_GAMES', data);
        },
        async createCharacterSheet({commit}, payload) {            
            const {data} = await axios.post(`/games/${payload.id}/character-sheet`);
            commit('UPDATE_GAME', data);
        }
    }
} 

export default games