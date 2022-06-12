export default ({ $axios }) => {
    if (!process.env.DEVELOPMENT && process.browser) {
        $axios.defaults.baseURL = location.origin;
    }
};
