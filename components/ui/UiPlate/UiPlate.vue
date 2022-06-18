<template>
    <component
        :is="componentTag"
        v-bind="$attrs"
        class="UiPlate"
        :class="classList"
    >
        <div class="UiPlate__wrapper">
            <slot></slot>
        </div>
    </component>
</template>

<script lang="ts">
// Common
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class UiPlate extends Vue {
    @Prop({
        type: String,
        default: 'div',
        validator: v => [
            'button',
            'a',
            'n-link',
            'nuxt-link',
            'span',
            'div',
        ].includes(v),
    })
    readonly tag!: string;


    @Prop({
        type: String,
        default: 'white',
        validator: (v: string): boolean => [
            'white',
            'grey',
            'transparent',
        ].includes(v),
    })
    readonly color!: string;

    @Prop({
        type: String,
        default: 'none',
        validator: (v: string): boolean => [
            'none',
            'dashed',
            'solid',
        ].includes(v),
    })
    readonly stroke!: string;

    @Prop({
        type: Boolean,
        default: false,
    })
    readonly rounded!: boolean;

    @Prop({
        type: Boolean,
        default: false,
    })
    readonly interactive!: boolean;

    @Prop({
        type: Boolean,
        default: false,
    })
    readonly active!: boolean;

    @Prop({
        type: Boolean,
        default: false,
    })
    readonly disabled!: boolean;

    get componentTag(): string {
        if (this.tag) {
            return this.tag;
        } else if (this.$attrs.to) {
            return 'n-link';
        } else if (this.$attrs.href) {
            return 'a';
        } else {
            return 'div';
        }
    }

    get classList(): Array<string|object> {
        const interactiveTags = [
            'n-link',
            'a',
            'button',
        ];

        return [
            `_stroke-${this.stroke}`,
            `_${this.color}`,
            {
                '--is-rounded': this.rounded,
                _isInteractive: this.interactive || interactiveTags.includes(this.componentTag),
                '--is-active': this.active,
                '--is-disabled': this.disabled,
            },
        ];
    }
}
</script>
