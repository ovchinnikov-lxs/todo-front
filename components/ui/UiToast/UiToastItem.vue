<template>
    <UiPlate class="UiToastItem" :class="classList">
        <div class="UiToastItem__wrapper">
            <UiIcon
                :name="`toast/${type}`"
                size="small"
                class="UiToastItem__icon"
            />
            <span class="UiToastItem__text">{{ text }}</span>
        </div>
    </UiPlate>
</template>

<script lang="ts">
// Common
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class UiToastItem extends Vue {
    @Prop({
        type: String,
        default: '',
    })
    readonly text!: string;

    @Prop({
        type: String,
        default: 'success',
        validator: (v: string): boolean => [
            'success',
            'error',
            'info',
        ].includes(v),
    })
    readonly type!: string;

    @Prop({
        type: Number,
        default: 1000,
    })
    readonly time!: number;

    get classList(): object {
        return {
            [`--${this.type}`]: this.type,
        };
    }

    mounted() {
        setTimeout(() => {
            this.$emit('close');
        }, this.time);
    }
}
</script>

<style lang="scss">
.UiToastItem {
    &__wrapper {
        display: flex;
        align-items: center;
        padding: 14px 16px;
    }

    &__text {
        margin-left: 8px;
        font-size: 14px;
        line-height: 1;
    }

    &.--success {
        .UiToastItem__icon {
            color: $success;
        }
    }

    &.--error {
        .UiToastItem__icon {
            color: $error;
        }
    }

    &.--info {
        .UiToastItem__icon {
            color: $primary;
        }
    }
}
</style>
