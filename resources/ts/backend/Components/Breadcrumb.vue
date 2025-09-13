<script setup lang="ts">
const props = defineProps(['current', 'links'])

</script>
<template>
    <div class="row">
        <div class="d-md-flex d-block align-items-center justify-content-between my-4 page-header-breadcrumb">
            <h1 class="page-title fw-semibold fs-18 mb-0">{{ props.current }}</h1>
            <div class="ms-md-1 ms-0">
                <nav>
                    <ol class="breadcrumb mb-0">
                        <li class="breadcrumb-item">
                            <router-link to="/">Home</router-link>
                        </li>
                        <li class="breadcrumb-item" v-for="link in props.links" :key="link.id">
                            <router-link :to="{ name: link.route }">{{ link.name }}</router-link>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">{{ props.current }}</li>
                    </ol>
                </nav>
            </div>
        </div>
    </div>
</template>
<style></style>
