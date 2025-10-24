<template>
  <router-link :to="to" class="cart-icon" aria-label="Cart" role="button">
    <svg
      :width="size"
      :height="size"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M3 3h2l.4 2M7 13h10l3-8H6.4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="10" cy="19" r="1" fill="currentColor"/>
      <circle cx="18" cy="19" r="1" fill="currentColor"/>
    </svg>

    <span v-if="count > 0" class="badge" :aria-label="`${count} items in cart`">{{ displayCount }}</span>
  </router-link>
</template>

<script setup>
import { computed } from 'vue'
const { count, size, to } = defineProps({
  count: { type: [Number, Object], default: 0 },
  size: { type: [Number, String], default: 24 },
  to: { type: [String, Object], default: '/cart' }
})

const numericCount = computed(() => {
  if (typeof count === 'number') return count
  if (count && typeof count.value === 'number') return count.value
  return 0
})

const displayCount = computed(() => (numericCount.value > 99 ? '99+' : numericCount.value))
</script>

<style scoped lang="scss">
.cart-icon{
  position: relative;
  display: inline-flex;
  align-items: center;
  color: #333;
  text-decoration: none;
}
.cart-icon svg{ display: block; }
.badge{
  position: absolute;
  right: -6px;
  top: -6px;
  background: #ff4d6d;
  color: #fff;
  border-radius: 999px;
  padding: 0 6px;
  font-size: 11px;
  line-height: 20px;
  min-width: 20px;
  text-align: center;
  box-shadow: 0 1px 2px rgba(0,0,0,0.15);
}
</style>
