export const state = () => ({
    loggedIn: false,
});

export const actions = {
    async fetchInitial({ dispatch }) {
        dispatch('getToken');
    },

    async getToken({ commit }) {
        const token = this.$cookies.get('auth:token');

        if (token) {
            commit('SET_LOGGED_IN', true);
        }
    },

    async setToken({ commit }, payload) {
        this.$cookies.set('auth:token', payload);
        commit('SET_LOGGED_IN', true);
    },

    async logOut({ commit }) {
        commit('SET_LOGGED_IN', false);
    },
};

export const mutations = {
    SET_LOGGED_IN(state, payload) {
        state.loggedIn = payload;
    },
};
