import routes from '~/config/routes';
import apiConfig from '~/config/apiConfig';
import { toast } from '~/config/plugins/toast';

declare module 'vue/types/vue' {
    interface Vue {
        $routes: typeof routes;
        $api: typeof apiConfig;
        $toast: typeof toast;
    }
}

declare module '@nuxt/types' {
    interface NuxtAppOptions {
        $routes: typeof routes;
        $api: typeof apiConfig;
        $toast: typeof toast;
    }

    interface Context {
        $routes: typeof routes;
        $api: typeof apiConfig;
        $toast: typeof toast;
    }
}
