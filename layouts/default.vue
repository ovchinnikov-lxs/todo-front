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
    background-color: $secondary;
}

.container {
    width: 1440px;
    margin: 0 auto;
}
</style>
