<template>
  <section class="single-product container py-5">
    <div class="row g-4">
      <div class="col-12 col-md-6 d-flex justify-content-center align-items-center">
        <img :src="decodedImage" :alt="product.title" class="product-image" />
      </div>

      <div class="col-12 col-md-6">
        <h2 class="product-title">{{ product.title }}</h2>
        <p class="product-details">{{ product.details }}</p>
        <div class="product-price">{{ formattedPrice }}</div>

  <button class="btn btn-dark mt-3 px-4 py-2" @click="handleAddToCart">Add to Cart</button>
      </div>
    </div>

    <div class="suggestions mt-5">
      <h4>You may also like</h4>
      <div class="row g-3 mt-3">
        <template v-if="suggestedMenList.length">
          <div class="col-6 col-md-3" v-for="p in suggestedMenList" :key="'men-'+p.id">
            <PerfumeCard
              :image="p.image"
              :title="p.title"
              :details="p.details"
              :price="p.price"
              :id="p.id"
              :to="{ name: 'singleproduct', params: { id: p.id } }"
            />
          </div>
        </template>

        <template v-if="suggestedWomenList.length">
          <div class="col-6 col-md-3" v-for="p in suggestedWomenList" :key="'women-'+p.id">
            <PerfumeCard
              :image="p.image"
              :title="p.title"
              :details="p.details"
              :price="p.price"
              :id="p.id"
              :to="{ name: 'singleproduct', params: { id: p.id } }"
            />
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { allProducts, menProducts, womenProducts } from "@/data/products.js";
import PerfumeCard from "@/component/common-folder/PerfumeCard.vue";
import { addToCart } from "@/stores/cart.js";

const route = useRoute();

const productId = computed(() => route.params.id);

const found = computed(() =>
  allProducts.find((p) => String(p.id) === String(productId.value)) || null
);

const product = computed(() => {
  if (found.value) return found.value;
  // fallback to minimal defaults when not found
  return {
    title: "Perfume Name",
    details: "No details available",
    image: "",
    price: 0,
  };
});

const decodedImage = computed(() => product.value.image || "");

const formattedPrice = computed(() => {
  const num = Number(product.value.price);
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
  }).format(num || 0);
});

// pick N unique random items from array (or fewer if array shorter), excluding given ids
function pickNRandom(arr, n = 4, excludeIds = []) {
  if (!arr || !arr.length) return [];
  const pool = arr.filter((p) => !excludeIds.includes(String(p.id)));
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, Math.min(n, pool.length));
}

const suggestedMenList = computed(() => pickNRandom(menProducts, 4, [String(productId.value)]));
const suggestedWomenList = computed(() => pickNRandom(womenProducts, 4, [String(productId.value)]));

function handleAddToCart() {
  // add a minimal product object to cart (id, title, price, image)
  addToCart({ id: product.value.id, title: product.value.title, price: product.value.price, image: product.value.image }, 1);
}
</script>

<style scoped lang="scss">
.single-product {
  font-family: "Outfit", sans-serif;
}
.product-image {
  width: 100%;
  max-width: 400px;
  height: auto;
  object-fit: contain;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}
.product-title {
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1rem;
}
.product-details {
  font-size: 1rem;
  color: #666;
  margin-bottom: 1rem;
}
.product-price {
  font-size: 1.4rem;
  font-weight: 600;
  color: #111;
}
</style>
