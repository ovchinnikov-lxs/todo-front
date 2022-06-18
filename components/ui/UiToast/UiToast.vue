<template>
    <div class="UiToast">
        <transition-group
            name="toast-list"
            tag="ul"
            class="UiToast__wrapper"
        >
            <li v-for="item in list"
                :key="item.id"
                class="UiToast__cell"
            >

                <UiToastItem
                    :key="item.id"
                    :text="item.text"
                    :type="item.type"
                    :time="item.time"
                    @close="removeItem(item.id)"
                />

            </li>
        </transition-group>
    </div>
</template>

<script lang="ts">
// Common
import { Component, Vue } from 'vue-property-decorator';

import UiToastItem from '~/components/ui/UiToast/UiToastItem.vue';

interface Toast {
    id: number,
    text: string,
    type: string,
    time: number,
}

@Component({
    components: {
        UiToastItem,
    },
})
export default class UiToast extends Vue {
    list: Array<object> = [];

    beforeMount(): void {
        this.$toast.event.$on('show', this.addNew);
    }

    beforeDestroy(): void {
        this.$toast.event.$off('show', this.addNew);
    }

    public addNew({ text = 'Оповещение', type = 'info', time = 300 }: Toast): void {
        this.list.push({
            text,
            type,
            time,
            id: Math.random(),
        });
    }

    public removeItem(itemId: number): void {
        // eslint-disable-next-line
        const index: number = this.list.findIndex((item: { id: number }): boolean => {
            return item.id === itemId;
        });
        this.list.splice(index, 1);
    }
}
</script>

<style lang="scss">
.UiToast {
    pointer-events: none;

    &__wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        margin: 0;
        padding: 8px;
        list-style: none;
    }

    &__cell {
        padding: 8px;
        pointer-events: auto;
        transition: all .3s ease;

        &.toast-list-enter {
            opacity: 0;
            transform: translate3d(0, 16px, 0);
        }

        &.toast-list-leave-to {
            opacity: 0;
            transform: translate3d(0, -16px, 0);
        }

        &.toast-list-leave-active {
            position: absolute;

            //@include respond-to(mobile) {
            //    position: relative;
            //}
        }
    }
}
</style>
