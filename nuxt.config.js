import fs from 'fs';
import path from 'path';
import sass from 'sass';
import { config } from 'dotenv';
import headConfig from './config/headConfig';
import devConfig from './nuxt.dev.config';
import prodConfig from './nuxt.prod.config';
import pluginsConfig from './config/pluginsConfig';

config();

const isDev = process.env.NODE_ENV === 'development';

const env = {
    SERVER_API_URL: process.env.SERVER_API_URL,
    SENTRY_DSN: process.env.SENTRY_DSN,
    DEVELOPMENT: isDev,
};

module.exports = {
    // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // * MAIN SECTION
    // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // * Global environments
    env,

    // * Server settings
    server: {
        port: 3000,
        host: '0.0.0.0',
        https: env.HTTPS_KEY && env.HTTPS_CERT
            ? {
                key: fs.readFileSync(path.resolve(__dirname, env.HTTPS_KEY)),
                cert: fs.readFileSync(path.resolve(__dirname, env.HTTPS_CERT)),
            }
            : null,
    },

    // * Router settings
    router: {
        prefetchLinks: false,
        linkActiveClass: '--is-active-link',
        linkExactActiveClass: '--is-exact-link',
    },

    // * Customize the progress-bar color
    loading: {
        color: '#00DC82',
        failedColor: '#f84f4f',
    },

    // * Headers of the page
    head: headConfig,

    // * Plugins
    plugins: pluginsConfig,

    ...isDev
        ? devConfig
        : prodConfig,

    buildModules: ['@nuxt/typescript-build'],

    // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // * MODULES SECTION
    // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // * Axios && proxy
    axios: {
        progress: false,
        proxy: true,
    },

    proxy: {
        '/api/': {
            target: process.env.SERVER_API_URL,
        },
    },

    // * Global CSS
    css: ['~/assets/scss/common/_bundle.scss'],


    styleResources: {
        scss: [
            '~/assets/scss/shared/*.scss',
        ],
        hoistUseStatements: true,
    },

    // * Add external fonts
    webfontloader: {
        google: {
            families: [
                'Pacifico:300,400,600,700&display=swap&subset=cyrillic',
            ],
        },
    },

    pwa: {
        manifest: {
            lang: 'ru',
        },
    },

    // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // * BUILD SECTION
    // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    build: {
        publicPath: '/n/',

        // * You can extend webpack config here
        loaders: {
            sass: {
                implementation: sass,
            },
            scss: {
                implementation: sass,
            },
        },

        terser: !isDev && {
            terserOptions: {
                mangle: {
                    safari10: true,
                },
            },
        },

        postcss: {
            preset: {
                autoprefixer: {
                    grid: true,
                },
            },
        },

        optimization: {
            splitChunks: {
                name: true,
            },
        },

        extend(config) {
            // Fixes npm packages that depend on `fs` module
            config.node = {
                fs: 'empty',
            };
        },
    },

    typescript: {
        typeCheck: {
            eslint: {
                files: './**/*.{ts,js,vue}',
            },
        },
    },
};
