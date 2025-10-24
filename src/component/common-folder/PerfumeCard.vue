<template>
  <router-link :to="computedTo" class="perfume-card-link">
    <div class="perfume-card card h-100 d-flex flex-column border-0">
      <div class="image-wrapper">
        <img :src="image" :alt="title" class="card-img-top perfume-img" />
      </div>

      <div class="card-body d-flex flex-column">
        <h5 class="card-title text-truncate" :title="title">{{ title }}</h5>
        <p class="card-text text-muted flex-grow-1">{{ details }}</p>
        <div class="mt-auto d-flex justify-content-between align-items-center">
          <div class="price">{{ formattedPrice }}</div>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  image: String,
  title: String,
  details: String,
  price: [Number, String],
  id: [String, Number],
  to: { type: [String, Object], default: null },
});

const computedTo = computed(() => {
  if (props.to) return props.to;
  if (props.id !== undefined && props.id !== null) {
    return {
      name: "singleproduct",
      params: { id: props.id },
    };
  }
  return "/shop";
});

const formattedPrice = computed(() => {
  const num = Number(props.price);
  if (isNaN(num)) return props.price;
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
  }).format(num);
});
</script>

<style scoped lang="scss">
.perfume-card-link {
  text-decoration: none;
  color: inherit;
}
.perfume-card {
  font-family: "Outfit", sans-serif;
  border-radius: 10px;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}
.perfume-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}
.image-wrapper {
  height: 220px;
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
</style>
