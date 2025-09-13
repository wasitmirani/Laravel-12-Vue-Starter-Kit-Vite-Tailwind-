<script setup lang="ts">
import { Helpers } from '../../Utils/Helper';

const filters = Helpers.useDynamicReactive({
    search: '',
    role: '',
    status: '',
    date: '',
    sort: '',
    order: '',
    per_page: '',
    page: '',
});

const onSubmit = (type?: string) => {

};


</script>
<template>
    <form @submit.prevent="onSubmit('tet')">
        <div class="mb-3">
            <label for="search" class="form-label">Search</label>
            <input type="text" class="form-control" id="search" v-model="filters.search">
        </div>
        <div class="mb-3">
            <label for="role" class="form-label">Role</label>
            <input type="text" class="form-control" id="role" v-model="filters.role">
        </div>
        <div class="mb-3">
            <label for="status" class="form-label">Status</label>
            <input type="text" class="form-control" id="status" v-model="filters.status">
        </div>
        <div class="mb-3">
            <label for="date" class="form-label">Date</label>
            <input type="date" class="form-control" id="date" v-model="filters.date">
        </div>
        <div class="mb-3">
            <label for="sort" class="form-label">Sort</label>
            <input type="text" class="form-control" id="sort" v-model="filters.sort">
        </div>
        <div class="mb-3">
            <label for="order" class="form-label">Order</label>
            <input type="text" class="form-control" id="order" v-model="filters.order">
        </div>
        <div class="mb-3">
            <label for="per_page" class="form-label">Per Page</label>
            <input type="number" class="form-control" id="per_page" v-model="filters.per_page">
        </div>
        <div class="mb-3">
            <label for="page" class="form-label">Page</label>
            <input type="number" class="form-control" id="page" v-model="filters.page">
        </div>
        <button type="submit" class="btn btn-primary">Apply Filters</button>
    </form>



</template>
