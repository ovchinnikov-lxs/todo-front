import Vue from 'vue';
import consola from 'consola';

export default (ctx, inject) => {
    const consolePlugin = {
        event: new Vue(),

        success(text, production) {
            if (!ctx.isDev && !production) {
                return false;
            }

            if (process.client) {
                console.log(`%c ${text} `, 'background: #65b359; color: #fff');
            } else {
                consola.success(` ${text} `);
            }
        },

        info(text, production) {
            if (!ctx.isDev && !production) {
                return false;
            }

            if (process.client) {
                console.log(`%c ${text} `, 'background: #1e8df3; color: #fff');
            } else {
                consola.info(` ${text} `);
            }
        },

        error(app, error, production) {
            if (!ctx.isDev && !production) {
                return false;
            }

            if (process.client) {
                console.log(`%c ${app} `, 'background: #f84f4f; color: #fff', error || '');
            } else {
                consola.error(` ${app} `, error || '');
            }
        },
    };

    ctx.$console = consolePlugin;
    inject('console', consolePlugin);
};
