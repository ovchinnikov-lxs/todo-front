<template>
    <div class="UiIcon"
         :class="classList"
         v-bind="$attrs"
         v-on="$listeners"
    >
        <SvgIcon
            :viewBox="viewBox"
            :name="name"
            class="UiIcon__el"
        />
    </div>
</template>

<script lang="ts">
// Common
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class UiIcon extends Vue {
    @Prop({
        type: String,
        default: '0 0 32 32',
    })
    readonly viewBox!: string;

    @Prop({
        type: String,
        default: 'none',
        required: true,
    })
    readonly name!: string;

    @Prop({
        type: String,
        default: 'medium',
        validator: (v: string): boolean => [
            'small',
            'medium',
            'large',
            'custom',
        ].includes(v),
    })
    readonly size!: string;

    get classList(): Array<string> {
        return [
            `_${this.size}`,
        ];
    }
}
</script>
