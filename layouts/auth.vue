<template>
    <main :class="$style.Auth">
        <UiToast :class="$style.toast"/>
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

    middleware: ['auth-guest'],
})
export default class Auth extends Vue {
}
</script>

<style lang="scss" module>
.Auth {
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

.container {
    margin: 0 auto;
    padding: mul($unit, 10);
}
</style>
