<template>
  <div class="shop-page d-flex">
    <!-- Sidebar -->
    <transition name="slide">
      <aside
        v-if="showSidebar || windowWidth >= 992"
        class="sidebar bg-white border-end p-4"
      >
        <div class="d-flex justify-content-between align-items-center mb-3 d-lg-none">
          <h5 class="fw-semibold mb-0">Filters</h5>
          <i class="bi bi-x-lg fs-5" @click="toggleSidebar"></i>
        </div>

        <!-- Category Filter -->
        <div class="filter-group mb-4">
          <h6 class="fw-semibold">Categories</h6>
          <div v-for="cat in categories" :key="cat" class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="category"
              :id="cat"
              :checked="selectedCategory === cat"
              @change="toggleSelection('category', cat)"
            />
            <label class="form-check-label" :for="cat">{{ cat }}</label>
          </div>
        </div>

        <!-- Brand Filter -->
        <div class="filter-group mb-4">
          <h6 class="fw-semibold">Brand</h6>
          <div v-for="brand in brands" :key="brand" class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="brand"
              :id="brand"
              :checked="selectedBrand === brand"
              @change="toggleSelection('brand', brand)"
            />
            <label class="form-check-label" :for="brand">{{ brand }}</label>
          </div>
        </div>

        <!-- Size Filter -->
        <div class="filter-group">
          <h6 class="fw-semibold">Size</h6>
          <div v-for="size in sizes" :key="size" class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="size"
              :id="size"
              :checked="selectedSize === size"
              @change="toggleSelection('size', size)"
            />
            <label class="form-check-label" :for="size">{{ size }}</label>
          </div>
        </div>

        <!-- Reset Button -->
        <div class="mt-4">
          <button class="btn btn-outline-dark w-100" @click="resetFilters">Reset Filters</button>
        </div>
      </aside>
    </transition>

    <!-- Main Content -->
    <div class="content flex-grow-1 p-4">
      <!-- Hamburger + Search bar -->
      <div class="d-flex align-items-center gap-3 mb-4">
        <button class="btn p-2 fw-bold d-lg-none" @click="toggleSidebar">
          <i :class="showSidebar ? 'bi bi-x-lg fs-5' : 'bi bi-list fs-4'"></i>
        </button>

        <!-- Search bar -->
        <div class="search-box d-flex align-items-center border rounded-pill px-3 py-2 flex-grow-1">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search perfume..."
            class="form-control border-0 shadow-none flex-grow-1"
          />
          <i class="bi bi-search fs-5"></i>
        </div>
      </div>

      <!-- Dynamic Product Grid -->
      <div>
        <MenPerfume
          v-if="selectedCategory === 'Men'"
          :search-query="searchQuery"
          :selected-brand="selectedBrand"
          :selected-size="selectedSize"
        />
        <WomanPerfume
          v-else-if="selectedCategory === 'Women'"
          :search-query="searchQuery"
          :selected-brand="selectedBrand"
          :selected-size="selectedSize"
        />
        <div v-else class="text-center text-muted mt-5">
          Please select a category to view products.
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import MenPerfume from "../section-folder/MenPerfume.vue";
import WomanPerfume from "../section-folder/WomenPerfume.vue";

const showSidebar = ref(false);
const windowWidth = ref(window.innerWidth);
const searchQuery = ref("");
const selectedCategory = ref("");
const selectedBrand = ref("");
const selectedSize = ref("");

const categories = ["Men", "Women"];
const brands = ["Chanel", "Louis Vuitton", "Escada", "Mancera", "Viktor&Rolf"];
const sizes = ["Small (15–49ml)", "Medium (50–99ml)", "Large (100–200ml)"];

const toggleSidebar = () => (showSidebar.value = !showSidebar.value);

// 🟢 Allow toggling (click again to unselect)
const toggleSelection = (type, value) => {
  if (type === "category") {
    selectedCategory.value = selectedCategory.value === value ? "" : value;
  } else if (type === "brand") {
    selectedBrand.value = selectedBrand.value === value ? "" : value;
  } else if (type === "size") {
    selectedSize.value = selectedSize.value === value ? "" : value;
  }
};

// 🟡 Reset all filters
const resetFilters = () => {
  selectedCategory.value = "";
  selectedBrand.value = "";
  selectedSize.value = "";
  searchQuery.value = "";
};

onMounted(() => {
  window.addEventListener("resize", () => (windowWidth.value = window.innerWidth));
});
</script>

<style scoped>
.shop-page {
  position: relative;
  min-height: 100vh;
  background: #fff;
  overflow-x: hidden;
}
.sidebar {
  width: 260px;
  height: calc(100vh - 70px);
  position: fixed;
  top: 70px;
  left: 0;
  overflow-y: auto;
  z-index: 1050;
  background: white;
  box-shadow: 2px 0 6px rgba(0, 0, 0, 0.05);
}
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
}
.search-box i {
  color: #000;
}
.search-box i:hover {
  color: #555;
}
button i {
  color: #000;
  font-weight: 700;
  transition: color 0.2s ease, transform 0.3s ease;
}
button:hover i {
  color: #555;
  transform: scale(1.1);
}
@media (min-width: 992px) {
  .sidebar {
    position: static;
    height: auto;
    box-shadow: none;
    top: 0;
  }
}
</style>
