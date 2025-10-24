<template>
  <section class="cart-view container py-5">
    <h2 class="mb-4">Your Cart</h2>

    <div v-if="!items.length" class="alert alert-info">Your cart is empty.</div>

    <div v-else>
      <div class="list-group">
        <div class="list-group-item d-flex align-items-center" v-for="item in items" :key="item.id">
          <img :src="item.image" alt="" style="width:80px; height:80px; object-fit:contain; border-radius:6px; margin-right:12px;" />
          <div class="flex-grow-1">
            <div class="fw-bold">{{ item.title }}</div>
            <div class="text-muted">{{ formatCurrency(item.price) }} &times; {{ item.qty }}</div>
          </div>
          <div class="ms-3 text-end">
            <div class="fw-semibold">{{ formatCurrency((item.price || 0) * (item.qty || 1)) }}</div>
            <button class="btn btn-sm btn-outline-danger mt-2" @click="remove(item.id)">Remove</button>
          </div>
        </div>
      </div>

      <div class="mt-4 d-flex justify-content-between align-items-center">
        <div class="h5">Total: {{ formatCurrency(total) }}</div>
        <div>
          <!-- <button class="btn btn-outline-secondary me-2" @click="clear">Clear</button> -->
          <router-link class="btn btn-dark" :to="{ name: 'checkout' }">Proceed to Checkout</router-link>
        </div>
      </div>
    </div>

    <!-- Recommendations -->
    <div class="recommendations mt-5">
      <h4>Recommended for you</h4>
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
import { cartItems, cartTotal, removeFromCart, clearCart } from '@/stores/cart.js';
import { computed } from 'vue';
import { menProducts, womenProducts } from '@/data/products.js';
import PerfumeCard from '@/component/common-folder/PerfumeCard.vue';

const items = cartItems;
const total = cartTotal;

function remove(id) {
  removeFromCart(id);
}

function clear() {
  clearCart();
}

function formatCurrency(v) {
  return new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(Number(v) || 0);
}

// pick N unique random items from array (or fewer if array shorter)
function pickNRandom(arr, n = 4, excludeIds = []) {
  if (!arr || !arr.length) return [];
  const pool = arr.filter((p) => !excludeIds.includes(String(p.id)));
  // Fisher-Yates shuffle
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, Math.min(n, pool.length));
}

const suggestedMenList = computed(() => pickNRandom(menProducts, 4));
const suggestedWomenList = computed(() => pickNRandom(womenProducts, 4));
</script>

<style scoped>
.cart-view { font-family: 'Outfit', sans-serif; }
</style>
