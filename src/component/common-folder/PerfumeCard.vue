<template>
  <div class="perfume-card">
    <div class="card h-100 d-flex flex-column border-0 border-radius-0 !important">
      <div class="image-wrapper">
        <img :src="image" :alt="title" class="card-img-top perfume-img" />
      </div>

      <div class="card-body d-flex flex-column">
        <h5 class="card-title text-truncate" title="{{ title }}">{{ title }}</h5>
        <p class="card-text text-muted flex-grow-1">{{ details }}</p>

        <div class="mt-auto d-flex justify-content-between align-items-center">
          <div class="price">{{ formattedPrice }}</div>
          <router-link :to="to" class="btn">Buy</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  image: { type: String, default: "" },
  title: { type: String, default: "Perfume" },
  details: { type: String, default: "" },
  price: { type: [Number, String], default: "" },
  to: { type: [String, Object], default: "/shop" },
});

const formattedPrice = computed(() => {
  if (props.price === "" || props.price === null) return "";
  const num =
    typeof props.price === "string" ? Number(props.price) : props.price;
  if (Number.isNaN(num)) return props.price;
  return new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: "NGN",
  }).format(num);
});
</script>

<style scoped lang="scss">
.perfume-card {
  font-family: "Outfit", sans-serif;
  height: 100%;
}

.card {
  height: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
}

/* --- Make all images same height --- */
.image-wrapper {
  height: 220px; /* adjust to your preferred image height */
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: #fff;
}

.perfume-img {
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
}

.card-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 1rem;
}

.card-title {
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.3;
  min-height: 2.6rem; /* ensures title space stays same even if short */
}

.card-text {
  font-size: 0.85rem;
  color: #6c757d;
  margin-bottom: 1rem;
}

.price {
  font-weight: 500;
  font-size: 0.9rem;
}

.btn {
  background: #000;
  color: #fff;
  font-size: 0.8rem;
  padding: 0.4rem 0.8rem;
  border-radius: 4px;
}
</style>
