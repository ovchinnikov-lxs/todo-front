<template>
    <main :class="$style.Default">
        <div :class="$style.container">
            <NuxtChild/>
        </div>
    </main>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'Default',
});
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

.container {
    margin: 0 auto;
    padding: mul($unit, 10);
}
</style>
