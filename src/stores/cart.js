import { reactive, computed } from 'vue';

// Simple reactive cart store (singleton)
const state = reactive({
  items: [] // each item: { id, title, price, image, qty }
});

function findIndex(id) {
  return state.items.findIndex(i => String(i.id) === String(id));
}

export function addToCart(product, qty = 1) {
  const idx = findIndex(product.id);
  if (idx === -1) {
    state.items.push({ ...product, qty });
  } else {
    state.items[idx].qty += qty;
  }
}

export function removeFromCart(id) {
  const idx = findIndex(id);
  if (idx !== -1) state.items.splice(idx, 1);
}

export function clearCart() {
  state.items.splice(0, state.items.length);
}

export const cartItems = computed(() => state.items);
export const cartCount = computed(() => state.items.reduce((s, i) => s + (i.qty || 0), 0));
export const cartTotal = computed(() => state.items.reduce((s, i) => s + (Number(i.price) || 0) * (i.qty || 1), 0));

export default {
  state,
  addToCart,
  removeFromCart,
  clearCart,
  cartItems,
  cartCount,
  cartTotal
};
