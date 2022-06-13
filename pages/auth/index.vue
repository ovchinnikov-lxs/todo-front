<template>
    <div class="AuthPage">
        <NuxtChild/>
    </div>
</template>

<script lang="ts">
// Common
import { Component, Vue } from 'vue-property-decorator';
import { Context } from '@nuxt/types';

@Component({
    // todo: Поправить эту ошибку линтера
    asyncData({ redirect, $routes } : Context): Promise<object | void> | object | void {
        redirect($routes.auth.login);
    },
})
export default class AuthPage extends Vue {
}
</script>
