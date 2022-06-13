<template>
    <div class="AuthSignupPage">
        <div :class="$style.wrapper">
            <h1 :class="$style.title">
                {{ title }}
            </h1>

            <form :class="$style.form" @submit.prevent="onSubmit">

                <UiInput
                    v-model="values.login"
                    placeholder="login"
                />

                <UiInput
                    v-model="values.password"
                    placeholder="password"
                />

                <UiButton :disabled="!allowSubmit">
                    Зарегистрироваться
                </UiButton>
            </form>
        </div>
    </div>
</template>

<script lang="ts">
// Common
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class AuthSignupPage extends Vue {
    title = 'Регистрация';
    values: { login: string, password: string } = {
        login: '',
        password: '',
    };

    get allowSubmit(): boolean {
        return Boolean(this.values.login) && Boolean(this.values.password);
    }

    // todo: Убрать эти ошибки
    async onSubmit(): Promise<object | void> {
        try {
            const res = await this.$axios.$post(this.$api.auth.signup, this.values);
            console.log(res);
        } catch (e) {
            console.log(e.response.data);
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
</style>
