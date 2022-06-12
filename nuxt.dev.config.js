import commonModules from './config/modules/commonModules';
import devModules from './config/modules/devModules';

const devConfig = {
    // * Project modules
    modules: [
        ...commonModules,
        ...devModules,
    ],

    // * Stylelint options
    stylelint: {
        lintDirtyModulesOnly: true,
        files: [
            'assets/**/*.s?(a||c)ss',
            'components/**/*.s?(a||c)ss',
            '{components,layout,pages}/**/*.vue',
        ],
    },

    // * Eslint options
    eslint: {
        lintDirtyModulesOnly: true,
        cache: false,
        exclude: [
            'node_modules',
        ],
    },
};

export default devConfig;
