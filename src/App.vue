<template>
  <div>
<Header/>
<!-- <HeroSection /> -->

<router-view />

<Footer/>
  </div>
</template>

<script setup>
import Header from './component/layout-folder/Header.vue';
import Footer from './component/layout-folder/Footer.vue';
// import HeroSection from './component/section-folder/HeroSection.vue';

</script>

<style lang="scss" scoped>

</style>
