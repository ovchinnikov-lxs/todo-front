<template>
    <div class="UiCheckbox" :class="classList">
        <button
            type="button"
            class="UiCheckbox__checkbox"
            @click.stop="onClick"
        >
            <UiIcon
                v-if="innerValue"
                size="small"
                name="ui/checkbox-fill"
            />

        </button>
        <div v-if="$slots.default"
             class="UiCheckbox__label"
             @click.stop="onClick"
        >
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts">
// Common
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

@Component
export default class UiCheckbox extends Vue {
    @Prop({
        type: Boolean,
        default: false,
    })
    readonly value!: boolean;

    @Prop({
        type: Boolean,
        default: false,
    })
    readonly disabled!: boolean;

    public innerValue = false;

    get classList() {
        return {
            '--is-disabled': this.disabled,
            '--is-checked': this.innerValue,
        };
    }

    @Watch('value', {
        immediate: true,
    })
    valueChanged(newVal: boolean) {
        this.innerValue = newVal;
    }

    public onClick(): void {
        this.innerValue = !this.innerValue;

        this.$emit('input', this.innerValue);
    }
}
</script>
