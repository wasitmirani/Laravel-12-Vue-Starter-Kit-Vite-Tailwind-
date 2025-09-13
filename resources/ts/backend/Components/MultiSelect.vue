<template>
    <div>
        <VueMultiselect
            v-model="selectedOption"
            :placeholder="placeholder"
            :trackBy="trackBy"
            :label="label"
            :options="options">
        </VueMultiselect>
    </div>
</template>

<script lang="ts">

import VueMultiselect from 'vue-multiselect';
import { Helpers } from '../Utils/Helper';
const props = defineProps(['modelValue', 'placeholder','trackBy','label','options']);

const selectedOption = Helpers.useDynamicRef(props.modelValue);


</script>

<style scoped>
/* Add any styles you need here */
</style>
