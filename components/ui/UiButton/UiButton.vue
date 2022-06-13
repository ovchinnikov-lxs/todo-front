<template>
    <component
        :is="tag"
        v-bind="$attrs"
        :class="classList"
        class="UiButton"
        @click="$emit('click', $event)"
    >
        <slot></slot>
    </component>
</template>

<script lang="ts">
// Common
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class UiButton extends Vue {
    @Prop({
        type: String,
        default: 'button',
        validator: v => [
            'button',
            'a',
            'n-link',
            'nuxt-link',
            'span',
        ].includes(v),
    })
    tag!: string;

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
        type: String,
        default: 'primary',
        validator: v => [
            'primary',
        ].includes(v),
    })
    color!: string;

    @Prop({
        type: Boolean,
        default: false,
    })
    active!: boolean;

    @Prop({
        type: Boolean,
        default: false,
    })
    disabled!: boolean;

    get classList(): object {
        return {
            '--is-disabled': this.disabled,
            [`--${this.size}-size`]: this.size,
            [`--${this.color}-color`]: this.color,
            '--is-active': this.active,
        };
    }
}
</script>
