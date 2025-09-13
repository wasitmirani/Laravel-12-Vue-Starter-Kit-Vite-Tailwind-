<script setup lang="ts">
let auth_user = window.user;

function logOut(event:any) {
    event.preventDefault();
    window.location.href = window.location.origin + '/logout';

    }
</script>
<template >
<div>
    <!-- Head -->
</div>
</template>

<style lang="">

</style>
