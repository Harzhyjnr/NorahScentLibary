<template>
  <section class="hero-section">
    <div>
      <!-- Swiper carousel -->
      <Swiper v-if="creatorImages && creatorImages.length" :modules="[Autoplay]" :loop="true" :autoplay="{ delay: 4000, disableOnInteraction: false }" :speed="1000" class="swiper-bg">
        <SwiperSlide v-for="(img, index) in creatorImages" :key="index">
          <img :src="img" :alt="`hero-${index}`" class="slide-img" />
        </SwiperSlide>
      </Swiper>

      <!-- Static fallback (shows when Swiper isn't available) -->
      <div v-else class="swiper-bg">
        <img :src="creatorImages[i]" alt="hero-fallback" class="slide-img" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import { Autoplay } from 'swiper'

import Banner1 from '../../assets/banner1.jpg'
import Banner2 from '../../assets/banner1.jpg'

const creatorImages = [Banner1, Banner2]
</script>

<style lang="scss" scoped>
.hero-section{ .swiper-bg{ height: 360px; } }
.swiper-bg{ height: 400px; }
.slide-img{
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

@media (min-width: 992px){
  .swiper-bg{ height: 560px; }
}
</style>
