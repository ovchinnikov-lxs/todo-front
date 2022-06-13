import routes from '~/config/routes';
import apiConfig from '~/config/apiConfig';

declare module 'vue/types/vue' {
    interface Vue {
        $routes: typeof routes;
        $api: typeof apiConfig;
    }
}

declare module '@nuxt/types' {
    interface NuxtAppOptions {
        $routes: typeof routes;
        $api: typeof apiConfig;
    }

    interface Context {
        $routes: typeof routes;
        $api: typeof apiConfig;
    }
}
