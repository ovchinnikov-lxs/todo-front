<template>
    <UiPlate class="TodoListItem">
        <div :class="$style.wrapper">

            <UiCheckbox
                v-model="values.fulfilled"
                :class="$style.checkbox"
                @input="onUpdate"
            />

            <UiInput
                v-model="values.title"
                placeholder="Введите задачу"
                :class="$style.input"
                @change="onUpdate"
            />

            <UiIcon
                name="ui/close"
                size="small"
                :class="$style.close"
                @click="onRemove"
            />

        </div>
    </UiPlate>
</template>

<script lang="ts">
// Common
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

@Component
export default class TodoListItem extends Vue {
    @Prop({
        type: String,
        required: true,
    })
    readonly id!: string;

    @Prop({
        type: Boolean,
        default: false,
    })
    readonly fulfilled!: boolean;

    @Prop({
        type: String,
        default: '',
    })
    readonly title!: string;

    public values: { fulfilled: boolean, title: string} = {
        fulfilled: false,
        title: '',
    };

    @Watch('fulfilled', {
        immediate: true,
    })
    fulfilledChanged(newVal: boolean): void {
        this.values.fulfilled = newVal;
    }

    @Watch('title', {
        immediate: true,
    })
    titleChanged(newVal: string): void {
        this.values.title = newVal;
    }

    public async onUpdate(): Promise<void> {
        try {
            await this.$axios.$patch(this.$api.todo.detail(this.id), this.values);
        } catch (e) {
            console.log(e);
        }
    }

    public async onRemove(): Promise<void> {
        try {
            await this.$axios.$delete(this.$api.todo.detail(this.id));
            this.$emit('remove', this.id);
        } catch (e) {
            console.log(e);
        }
    }
}
</script>

<style lang="scss" module>
.wrapper {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    column-gap: mul($unit, 8);
    padding: mul($unit, 4);
}

.input {
    width: mul($unit, 100);
}

.close {
    transition: color .3s ease;
    cursor: pointer;

    @include hover {
        color: $primary;
    }
}
</style>
