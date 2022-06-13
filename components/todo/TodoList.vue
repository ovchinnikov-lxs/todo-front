<template>
    <div class="TodoList">
        <div :class="$style.wrapper">

        </div>
    </div>
</template>

<script>
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class TodoList extends Vue {
    @Prop({
        type: Array,
        default: () => [],
    })
    list
}
</script>

<style lang="scss" module>
.wrapper {
    width: 100%;
    height: 100%;
}
</style>
