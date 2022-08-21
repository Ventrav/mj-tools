import axios from 'axios';

const commonStore = {
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
            console.log("je suis là")
            s.user = payload
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