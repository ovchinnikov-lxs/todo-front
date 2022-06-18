export const state = () => ({
    loggedIn: false,
    token: null,
});

export const actions = {
    async fetchInitial({ dispatch }) {
        dispatch('getToken');
    },

    async getToken({ commit }) {
        const token = this.$cookies.get('auth:token');

        if (token) {
            commit('SET_LOGGED_IN', true);
            commit('SET_TOKEN', token);
        }
    },

    async setToken({ commit }, payload) {
        await this.$cookies.set('auth:token', payload);
        this.$axios.setHeader('Authorization', `Bearer ${payload}`);
        commit('SET_LOGGED_IN', true);
        commit('SET_TOKEN', payload);
    },

    async logOut({ commit }) {
        this.$cookies.remove('auth:token');
        commit('SET_LOGGED_IN', false);
        commit('SET_TOKEN', null);
    },
};

export const mutations = {
    SET_LOGGED_IN(state, payload) {
        state.loggedIn = payload;
    },

    SET_TOKEN(state, payload) {
        state.token = payload;
    },
};
