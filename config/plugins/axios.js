export default ({ $axios, $cookies }) => {
    if (!process.env.DEVELOPMENT && process.browser) {
        $axios.defaults.baseURL = location.origin;
    }

    const token = $cookies.get('auth:token');

    if (token) {
        $axios.setHeader('Authorization', `Bearer ${token}`);
    }
};
