<script setup lang="ts">
import { Helpers } from '../Utils/Helper';

const props = defineProps(['id', 'title', 'buttonLabel','buttonClass'])
const offCanvasRef = Helpers.useDynamicRef<HTMLElement | null>(null);

Helpers.useDynamicOnMounted(() => {
 console.log('offCanvasRef', offCanvasRef.value);
});
</script>
<template>
    <div>
        <!-- Off-Canvas Trigger Button -->
        <button :class="`${buttonClass} mb-1`" type="button" :data-bs-toggle="'offcanvas'" :data-bs-target="`#${id}`" aria-controls="offcanvasRight">
            <slot name="button-icon"></slot>
            {{ buttonLabel }}
        </button>

        <!-- Off-Canvas Modal -->
        <div :id="id" class="offcanvas offcanvas-end" tabindex="-1" :aria-labelledby="`offcanvasRightLabel-${id}`">
            <div class="offcanvas-header border-bottom border-block-end-dashed">
            <h5 class="offcanvas-title" :id="`offcanvasRightLabel-${id}`">{{ title }}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body p-0">
            <slot name="body"></slot>
            </div>
        </div>
    </div>

</template>
