<template>
    <div class="IndexPage">
        <div :class="$style.wrapper">
            <h1 :class="$style.title">{{ title }}</h1>

            <TodoList
                :list="list"
                :class="$style.todo"
            />

        </div>
    </div>
</template>

<script lang="ts">
// Common
import { Component, Vue } from 'vue-property-decorator';
import { Context } from '@nuxt/types';

// Components
import TodoList from '~/components/todo/TodoList/TodoList.vue';

@Component({
    components: {
        TodoList,
    },

    async asyncData({ $axios, $api } : Context): Promise<void | object> {
        try {
            const list = await $axios.$get($api.todo.list);

            return {
                list,
            };
        } catch (e) {
            console.log(e);
        }
    },
})
export default class IndexPage extends Vue {
    public title = 'This is TODO LIST';
    public list: Array<object> = [];
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
    width: mul($unit, 100);
    margin-top: mul($unit, 10);
}
</style>
