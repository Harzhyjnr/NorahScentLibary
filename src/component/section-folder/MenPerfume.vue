<template>
  <section class="menperfume container my-5">
    <div class="row justify-content-center g-4">
      <div
        class="col-12 col-sm-6 col-md-4 col-lg-3"
        v-for="product in filteredProducts"
        :key="product.id"
      >
        <PerfumeCard
          :image="product.image"
          :title="product.title"
          :details="product.details"
          :price="product.price"
          :id="product.id"
          :to="product.to || { name: 'singleproduct', params: { id: product.id } }"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
import PerfumeCard from "@/component/common-folder/PerfumeCard.vue"; // ✅ Fixed path

const props = defineProps(["searchQuery", "selectedBrand", "selectedSize"]);

import { menProducts } from "@/data/products.js";

const filteredProducts = computed(() =>
  menProducts.filter((p) => {
    const matchesSearch =
      !props.searchQuery ||
      p.title.toLowerCase().includes(props.searchQuery.toLowerCase());
    const matchesBrand =
      !props.selectedBrand || p.brand === props.selectedBrand;
    const matchesSize = !props.selectedSize || p.size === props.selectedSize;
    return matchesSearch && matchesBrand && matchesSize;
  })
);
</script>

<style scoped lang="scss">
.menperfume {
  font-family: "Outfit", sans-serif;
}

.card {
  border: none;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

.card .card-body {
  padding: 1rem;
}

.price {
  color: #111;
}

@media (max-width: 576px) {
  .menperfume .row {
    justify-content: center;
  }
}
</style>
