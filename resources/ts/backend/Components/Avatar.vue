<script setup lang="ts">
defineProps<{
    name?: string
    img?: string
    profile?: boolean,
}>()
</script>
<template>
    <div v-if="name" class="avatar me-2 -mb-2">
        <span class="avatar-initial rounded-circle bg-primary">{{ name?.slice(0, 2) }}</span>
    </div>
    <div v-else class="avatar avatar-md flex-shrink-0 me-4" v-show="!profile">
        <div class="avatar-initial rounded-3">
            <div>
                <img :src="img" alt="img">
            </div>
        </div>
    </div>
    <div v-if="profile" class="avatar-wrapper">
        <div class="avatar avatar-sm me-3">
            <img :src="img" alt="Avatar" class="rounded-circle">
        </div>
    </div>
</template>



<style></style>
