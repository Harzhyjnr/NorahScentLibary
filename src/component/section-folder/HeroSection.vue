<template>
  <section class="hero-section">
    <div>
      <Swiper :modules="[Autoplay]" :loop="true" :autoplay="{ delay: 4000, disableOnInteraction: false }" :speed="700" class="swiper-bg">
        <SwiperSlide v-for="(img, index) in creatorImages" :key="index">
          <div class="slide" :style="{ backgroundImage: `url(${img})` }"></div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import { Autoplay } from 'swiper'

import Banner1 from '../../assets/banner2.jpg'
import Banner2 from '../../assets/banner1.jpg'

const creatorImages = [Banner1, Banner2]
</script>

<style lang="scss" scoped>
.hero-section{ .swiper-bg{ height: 400px; } }
.slide{
  height: 400px;
  background-size: cover;
  background-position: center;
}
</style>
