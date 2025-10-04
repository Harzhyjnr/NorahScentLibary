<template>
    <div>
        <footer class="footer d-flex flex-column justify-content-between align-items-center p-4">
            <div>

            </div>

            <div>
                <p class="mb-0">&copy; {{ currentYear }} Norah. All rights reserved.</p>
            </div>
        </footer>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const currentYear = ref (new Date().getFullYear());
</script>

<style lang="scss" scoped>
footer{
    font-family: "Outfit", sans-serif;
}
</style>