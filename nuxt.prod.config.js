import commonModules from './config/modules/commonModules';
import prodModules from './config/modules/prodModules';

const prodConfig = {
    // * Project modules
    modules: [
        ...commonModules,
        ...prodModules,
    ],

    // * Sentry config
    sentry: {
        dsn: process.env.SENTRY_DSN || false,
    },

    // * Polyfills
    polyfill: {
        features: [{
            require: '~/config/polyfills/eventPath.js',
        }],
    },
};

export default prodConfig;
