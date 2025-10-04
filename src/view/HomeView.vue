<template>
    <div class="home-view">

<HeroSection />

<div class="mt-5">
<HeroContent />
</div>

<div class="container mt-5">
    <div class="row ">
        <MenWomenShopCard
            v-for="item in menWomen"
            :key="item.id"
            :title="item.title"
            :description="item.description"
            :btn="item.btn"
            :to="item.to"
            :image="item.image"
        />
    </div>
</div>

<FAQs />

    </div>
</template>

<script setup>
import HeroSection from '@/component/section-folder/HeroSection.vue';

import HeroContent from '@/component/common-folder/HeroContent.vue';

import MenWomenShopCard from '@/component/common-folder/MenWomenShopCard.vue';

import FAQs from '@/component/FAQs.vue';

import Men from "../assets/men.jpg";
import Women from "../assets/women.jpg";

const menWomen = [
    {
        id :1,
        title  : "Men",
        description : "Discover a curated collection of bold, sophisticated fragrances designed to capture the essence of confidence, and timeless masculinity.",
        btn : "Shop Now",
        image : Men, 
        to : "/shop"
    },
    {
        id :2,
        title  : "Women",
        description : "Discover a curated collection of bold, sophisticated fragrances designed to capture the essence of confidence, and timeless masculinity.",
        btn : "Shop Now",
        image :Women, 
        to : "/shop"
    },

]
</script>

<style lang="scss" scoped>

</style>