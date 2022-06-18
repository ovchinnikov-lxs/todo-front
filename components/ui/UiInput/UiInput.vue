<template>
    <input
        v-bind="$attrs"
        :value="innerValue"
        :disabled="disabled"
        :class="classList"
        class="UiInput"
        @input="onInput"
        @change="onChange"
    >
</template>

<script lang="ts">
// Common
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

@Component
export default class UiInput extends Vue {
    @Prop({
        type: [String, Number],
        default: '',
    })
    value!: string;

    @Prop({
        type: String,
        default: 'medium',
        validator: v => [
            'small',
            'medium',
            'large',
        ].includes(v),
    })
    size!: string;

    @Prop({
        type: Boolean,
        default: false,
    })
    disabled!: boolean;

    @Prop({
        type: [String],
        default: null,
    })
    error!: string;

    innerValue = '';

    get classList(): object {
        return {
            '--is-disabled': this.disabled,
            '--is-error': this.error,
            [`--${this.size}-size`]: this.size,
        };
    }

    @Watch('value', {
        immediate: true,
        deep: true,
    })
    valueChanged(newVal: string) {
        this.innerValue = newVal;
    }

    onInput(e: { target: { value: string; }; }): void {
        this.innerValue = e.target?.value || '';

        this.$emit('input', this.innerValue);
    }

    onChange(e: {target: {value: string} }): void {
        this.innerValue = e.target?.value || '';

        this.$emit('change', this.innerValue);
    }
}
</script>
