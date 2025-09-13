<script setup>

</script>

<template>
    <div>

        <div class="misc-wrapper">
            <h1 class="mb-2 mx-2" style="font-size: 6rem;">404</h1>
            <h4 class="mb-2">Page Not Found ⚠️</h4>
            <p class="mb-4 mx-2">we couldn't find the page you are looking for</p>
            <router-link to="/app" class="btn btn-primary text-center my-5 waves-effect waves-light">Back to home</router-link>

            <div class="d-flex justify-content-center mt-5">
              <img :src="`/backend/assets/img/illustrations/misc-error-object.png`" alt="misc-error" class="img-fluid misc-object d-none d-lg-inline-block" width="160">
              <img :src="`/backend/assets/img/illustrations/misc-bg-light.png`" alt="misc-error" class="misc-bg d-none d-lg-inline-block" data-app-light-img="illustrations/misc-bg-light.png" data-app-dark-img="illustrations/misc-bg-dark.png">
              <div class="d-flex flex-column align-items-center">
                <img :src="`/backend/assets/img/illustrations/misc-error-illustration.png`" alt="misc-error" class="img-fluid z-1" width="190">
                <div>
                </div>
              </div>
            </div>
          </div>
    </div>
</template>

<style>

</style>