<template>

    <!-- <label class="form-label">{{ label }}</label>
    data-bs-custom-class="tooltip-primary"
    -->
        <input type="search" data-bs-toggle="tooltip"  data-bs-placement="top" title="Search characters should be greater than two."   v-model="query" class="form-control  form-control-sm" :placeholder="label"
            aria-label="{{ label }}">
            <!-- <input class="form-control form-control-sm" type="text" placeholder="Search Here" aria-label=".form-control-sm example"> -->

  </template>

  <script setup lang="ts">
  import { ref, watch, defineProps, onMounted, defineEmits } from 'vue';
  import axios from 'axios';
  import loadsh from 'lodash';

  const props = defineProps<{
    label: string;
    apiPath: string;
  }>();

  const emit = defineEmits(['loading', 'filterData', 'query', 'reload']);

  const query = ref<string>('');
  const apiPath = ref<string>(props.apiPath ?? ''); // Replace with actual URL

  // Debounced search function
  const searchQuery = loadsh.debounce(() => {
    setTimeout(() => {
      search();
    }, 500);
  }, 500);

  async function search() {
    if (query.value.length > 2) {
      emit('loading', true);
      try {
        const response = await axios.get(`${apiPath.value}?query=${query.value}`);

        emit('filterData', response.data);
        emit('query', query.value);
        setTimeout(() => {
            emit('loading', false);
        }, 800);
      } catch (error) {
        emit('loading', false);
        // Handle error if needed
        console.error(error);
      }
    }
  }

  // Watcher for query changes
  watch(query, (newQuery) => {
    if (newQuery === '') {
      emit('query', '');
      emit('reload');
    } else {
      searchQuery();
    }
  });

  onMounted(() => {
    // Additional setup if needed
  });
  </script>

  <style scoped>
  .margin-lf {
    margin-left: 5px;
  }
  </style>
