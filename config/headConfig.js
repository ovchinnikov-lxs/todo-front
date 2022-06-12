import meta from './head/meta';
import scripts from './head/scripts';

const isProd = process.env.NODE_ENV === 'production';

const headConfig = {
    htmlAttrs: {
        lang: 'ru',
    },

    title: 'TODO LIST',

    // * Head meta
    meta: [
        ...meta,
    ],

    // * Head links
    link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicons/favicon.svg' },
        { rel: 'icon', type: 'image/png', href: '/favicons/favicon.png' },
    ],

    script: isProd && scripts,

    __dangerouslyDisableSanitizers: ['script', 'noscript'],
};

export default headConfig;
