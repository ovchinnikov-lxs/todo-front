<template>
    <div class="IndexPage">
        <div :class="$style.wrapper">
            <h1 :class="$style.title">{{ title }}</h1>

            <TodoList
                :class="$style.todo"
            />

        </div>
    </div>
</template>

<script lang="ts">
// Common
import { Component, Vue } from 'vue-property-decorator';

// Components
import TodoList from '~/components/todo/TodoList.vue';

@Component({
    components: {
        TodoList,
    },
})
export default class IndexPage extends Vue {
    title = 'This is TODO LIST';
}
</script>

<style lang="scss" module>
.wrapper {
    width: 100%;
    height: 100%;
}

.title {
    text-align: center;
}

.todo {
    margin-top: mul($unit, 10);
}
</style>
