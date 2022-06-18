<template>
    <div class="TodoList">
        <div :class="$style.wrapper">
            <UiButton :class="$style.button" @click="onCreate">
                Добавить задачу
            </UiButton>

            <transition-group
                tag="ul"
                name="todo"
                :class="$style.list"
            >
                <li v-for="item in innerList"
                    :key="item.id"
                    :class="$style.todo"
                >
                    <TodoListItem
                        v-bind="item"
                        @remove="onRemove($event)"
                    />
                </li>
            </transition-group>
        </div>
    </div>
</template>

<script lang="ts">
// Common
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

// Components
import TodoListItem from '~/components/todo/TodoList/TodoListItem.vue';

interface TodoItem {
    id: string;
    fulfilled: string;
    title: string;
}

@Component({
    components: {
        TodoListItem,
    },
})
export default class TodoList extends Vue {
    @Prop({
        type: Array,
        default: () => [],
    })
    readonly list!: Array<TodoItem>;

    public innerList: Array<TodoItem> = [];

    @Watch('list', {
        immediate: true,
        deep: true,
    })
    listChanged(newVal: Array<TodoItem>) {
        this.innerList = newVal;
    }

    public async onCreate(): Promise<void> {
        try {
            const res: TodoItem = await this.$axios.$post(this.$api.todo.list);

            this.innerList.push(res);
        } catch (e) {
            console.log(e);
        }
    }

    public onRemove(id: string) {
        this.innerList = this.innerList.filter((item: TodoItem): boolean => item.id !== id);
    }
}
</script>

<style lang="scss" module>
.wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    row-gap: mul($unit, 8);
}

.list {
    @include reset-list;

    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    row-gap: mul($unit, 4);
}

.todo {
    width: mul($unit, 100);
    height: mul($unit, 18.5);
    transition: all .3s;
}

:global(.todo-enter),
:global(.todo-leave-to) {
    opacity: 0;
    transform: translateY(30px);
}

:global(.todo-leave-active) {
    position: absolute;
}

.button {
    width: 100%;
}
</style>
