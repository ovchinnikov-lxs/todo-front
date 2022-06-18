export const state = () => ({
    inited: false,
    locale: 'RU',
});

export const actions = {
    async nuxtServerInit({ dispatch }) {
        console.log('nuxtServerInit:start');
        await dispatch('fetchInitial');
        console.log('nuxtServerInit:end');
    },

    async fetchInitial({ state, dispatch }) {
        dispatch('auth/fetchInitial');

        if (state.auth.loggedIn) {
            const time = new Date().getTime();

            const initials = [
            ];

            await Promise.all(initials);

            this.$console.info(`ssr initial store timing: ${new Date().getTime() - time}`);
        }
    },
};

export const mutations = {};
