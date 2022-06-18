<template>
    <div class="AuthLoginPage">
        <div :class="$style.wrapper">
            <h1 :class="$style.title">
                {{ title }}
            </h1>

            <form :class="$style.form" @submit.prevent="onSubmit">

                <UiInput
                    v-model="values.username"
                    placeholder="login"
                />

                <UiInput
                    v-model="values.password"
                    placeholder="password"
                />


                <UiButton :disabled="!allowSubmit">
                    Войти
                </UiButton>

                <div :class="$style.info">
                    Нет аккаунта?
                    <UiLink :to="$routes.auth.signup">
                        Регистрация
                    </UiLink>
                </div>

            </form>
        </div>
    </div>
</template>

<script lang="ts">
// Common
import { Component, Vue } from 'vue-property-decorator';

interface Values {
    username: string,
    password: string,
}

@Component({
    layout: 'auth',
    middleware: ['auth-guest'],
})
export default class AuthLoginPage extends Vue {
    title = 'Вход';
    values: Values = {
        username: '',
        password: '',
    };

    get allowSubmit(): boolean {
        return Boolean(this.values.username) && Boolean(this.values.password);
    }

    async onSubmit(): Promise<object | void> {
        try {
            const { token } = await this.$axios.$post(this.$api.auth.login, this.values);
            await this.$store.dispatch('auth/setToken', token);
            await this.$router.replace('/');
        } catch (e: unknown | never) {
            const res = e.response.data;

            if (res.statusCode) {
                this.$toast.error(res.message);
            } else {
                const items: string[] = Object.keys(res).reduce((acc, cur) => [
                    ...acc,
                    ...Object.keys(res[cur]).reduce((iAcc, iCur) => [
                        ...iAcc,
                        `${cur} - ${res[cur][iCur].msg}`,
                    ], []),
                ], []);

                items.forEach(i => this.$toast.error(i));
            }
        }
    }
}
</script>

<style lang="scss" module>
.wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
}

.title {
    text-align: center;
}

.form {
    display: flex;
    flex-direction: column;
    width: mul($unit, 100);
    row-gap: mul($unit, 8);
    margin-top: mul($unit, 10);
}

.info {
    font-size: 14px;
}
</style>
