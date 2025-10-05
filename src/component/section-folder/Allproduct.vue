<template>
    <section class="all-products container my-5">
        <h2 class="mb-4 text-center">Most Popular</h2>
        <p class="text-center mb-5">Discover our top-quality, standout pieces.</p>

        <div class="">
           <MenPerfume />
        </div>
    </section>
</template>

<script setup>
import MenPerfume from './MenPerfume.vue';
</script>

<style scoped lang="scss">
.card{ border: none; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.06); }

.all-products { font-family: "Outfit", sans-serif; }
</style>