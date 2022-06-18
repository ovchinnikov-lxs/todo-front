import Vue from 'vue';

const DEFAULT_ERROR_TEXT = 'Что-то пошло не так, но мы уже увидели и вскоре починим.';
export const DEFAULT_ERROR_FORM_TEXT = 'Некорректно введены данные при заполнении формы';
const DEFAULT_TOAST_TIMEOUT = 2000;

export const toast = {
    event: new Vue(),

    success(text, time = DEFAULT_TOAST_TIMEOUT) {
        this.event.$emit('show', {
            type: 'success',
            text,
            time,
        });
    },

    info(text, time = DEFAULT_TOAST_TIMEOUT) {
        this.event.$emit('show', {
            type: 'info',
            text,
            time,
        });
    },

    error(text = DEFAULT_ERROR_TEXT, time = DEFAULT_TOAST_TIMEOUT) {
        this.event.$emit('show', {
            type: 'error',
            text,
            time,
        });
    },
};

export default (ctx, inject) => {
    ctx.$toast = toast;
    inject('toast', toast);
};
