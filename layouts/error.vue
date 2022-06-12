<template>
    <main :class="$style.Error">
        <pre>
            {{ error }}
        </pre>
    </main>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'Error',

    props: {
        error: {
            type: Object,
            default: () => ({}),
        },
    },
});
</script>

<style lang="scss" module>
.Error {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    min-height: 700px;
}
</style>
