<template>
    <section class="menperfume container my-5">
    <div class="row g-4">
            <div class="col-12 col-md-4 col-lg-3 h-100" v-for="product in products" :key="product.id">
                <PerfumeCard :image="product.image" :title="product.title" :details="product.details" :price="product.price" :to="product.to" />
            </div>
        </div>
    </section>
</template>

<script setup>
import PerfumeCard from '@/component/common-folder/PerfumeCard.vue'
import Img1 from '../../assets/mancre 2.webp'
import Img2 from '../../assets/louis.webp'
import Img3 from '../../assets/victor.webp'
import Img4 from '../../assets/mancre.webp'

const products = [
    { id: 1, title: 'Mancera Red Tobacco Intense EDP 120m', details: '', price: 24000, image: Img1, to: '/shop' },
    { id: 2, title: 'LOUIS VUITTON OMBRE NOMADE EDP 100ML', details: '', price: 97000, image: Img2, to: '/shop' },
    { id: 3, title: "VIKTOR&ROLF Spice bomb Night Vision EDP 90ML", details: '', price: 21500, image: Img3, to: '/shop' },
    { id: 4, title: 'Mancera Red Tobacco EDP 120ml', details: '', price: 21000, image: Img4, to: '/shop' }
]
</script>

<style scoped lang="scss">
.card{ border: none; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.06); }


.menperfume{ font-family: "Outfit", sans-serif; }

p{

}

.card .card-body{ padding: 1rem; }

.price{ color: #111; }



</style>