<template>
  <section class="menperfume container my-5">
    <div class="row g-4">
      <div
        class="col-12 col-md-4 col-lg-3 h-100"
        v-for="product in filteredProducts"
        :key="product.id"
      >
        <PerfumeCard
          :image="product.image"
          :title="product.title"
          :details="product.details"
          :price="product.price"
          :to="product.to"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
import PerfumeCard from "@/component/common-folder/PerfumeCard.vue";
import Img1 from "../../assets/mancre 2.webp";
import Img2 from "../../assets/louis.webp";
import Img3 from "../../assets/victor.webp";
import Img4 from "../../assets/mancre.webp";

const props = defineProps(["searchQuery", "selectedBrand", "selectedSize"]);

const products = [
  { id: 1, title: "Mancera Red Tobacco Intense EDP 120ml", details: "", price: 24000, image: Img1, to: "/shop", brand: "Mancera", size: "Large (100–200ml)" },
  { id: 2, title: "Louis Vuitton Ombre Nomade EDP 100ML", details: "", price: 97000, image: Img2, to: "/shop", brand: "Louis Vuitton", size: "Medium (50–99ml)" },
  { id: 3, title: "Viktor&Rolf Spicebomb Night Vision EDP 90ML", details: "", price: 21500, image: Img3, to: "/shop", brand: "Viktor&Rolf", size: "Medium (50–99ml)" },
  { id: 4, title: "Mancera Red Tobacco EDP 120ml", details: "", price: 21000, image: Img4, to: "/shop", brand: "Mancera", size: "Large (100–200ml)" },
];

const filteredProducts = computed(() =>
  products.filter((p) => {
    const matchesSearch =
      !props.searchQuery ||
      p.title.toLowerCase().includes(props.searchQuery.toLowerCase());
    const matchesBrand = !props.selectedBrand || p.brand === props.selectedBrand;
    const matchesSize = !props.selectedSize || p.size === props.selectedSize;
    return matchesSearch && matchesBrand && matchesSize;
  })
);
</script>

<style scoped lang="scss">
.card {
  border: none;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}
.menperfume {
  font-family: "Outfit", sans-serif;
}
.card .card-body {
  padding: 1rem;
}
.price {
  color: #111;
}
</style>
