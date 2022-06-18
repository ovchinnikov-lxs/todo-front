<template>
    <main :class="$style.Default">
        <UiToast :class="$style.toast"/>

        <header :class="$style.header">
            <UiButton @click="logOut">Выйти</UiButton>
        </header>

        <div :class="$style.container">
            <NuxtChild/>
        </div>
    </main>
</template>

<script lang="ts">
// Common
import { Component, Vue } from 'vue-property-decorator';

// UiComponents
import UiToast from '~/components/ui/UiToast/UiToast.vue';

@Component({
    components: {
        UiToast,
    },

    middleware: ['auth-check'],
})
export default class Default extends Vue {
    logOut() {
        this.$store.dispatch('auth/logOut');
        this.$router.push(this.$routes.auth.login);
    }
}
</script>

<style lang="scss" module>
.Default {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    background-color: $secondary;
}

.toast {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
}

.header {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    padding: mul($unit, 10);
}

.container {
    margin: 0 auto;
    padding: mul($unit, 10);
}
</style>
