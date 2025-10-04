<template>
  <div>
    <nav ref="navRef" class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container">
       <img :src="Logo" alt=""  @click="$router.push('/')" class="logoimage" />

        <!-- Mobile cart + toggler -->
        <div class="d-lg-none ms-auto me-2 d-flex align-items-center gap-2">
          <CartIcon />
          <button
            class="navbar-toggler custom-toggler"
            type="button"
            @click="toggleMenu"
            :aria-expanded="menuOpen.toString()"
            aria-label="Toggle navigation"
          >
            <span :class="['bar', { open: menuOpen }]"> </span>
            <span :class="['bar', { open: menuOpen }]"> </span>
            <span :class="['bar', { open: menuOpen }]"> </span>
          </button>
        </div>

        <!-- Desktop links (visible on lg and up) -->
        <div class="collapse navbar-collapse d-none d-lg-flex" id="navbarSupportedContent">
          <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link active" aria-current="page" to="/shop">Shop</router-link>
            </li>
          </ul>
        </div>

        <!-- Desktop cart -->
        <div class="d-none d-lg-flex">
          <CartIcon />
        </div>
      </div>
    </nav>

  <!-- spacer to avoid content being hidden under fixed navbar -->
  <div aria-hidden="true" :style="{ height: spacerHeight + 'px' }"></div>

  <!-- Full-screen mobile overlay menu -->
    <div v-if="menuOpen" class="mobile-overlay" @click.self="closeMenu">
      <div class="mobile-menu">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/" @click="closeMenu">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/shop" @click="closeMenu">Shop</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue';
import CartIcon from '@/component/common-folder/CartIcon.vue';
import Logo from '../../assets/norah.svg';

export default {
  components: { CartIcon },
  setup() {
    const menuOpen = ref(false)
    const toggleMenu = () => (menuOpen.value = !menuOpen.value)
    const closeMenu = () => (menuOpen.value = false)

    // fixed navbar spacer
    const navRef = ref(null)
    const spacerHeight = ref(0)

    const updateSpacer = () => {
      if (navRef.value) spacerHeight.value = Math.ceil(navRef.value.getBoundingClientRect().height)
    }

    const onResize = () => {
      nextTick(updateSpacer)
    }

    onMounted(() => {
      updateSpacer()
      window.addEventListener('resize', onResize)
    })

    onBeforeUnmount(() => {
      window.removeEventListener('resize', onResize)
    })

    return { menuOpen, toggleMenu, closeMenu, navRef, spacerHeight, Logo }
  }
}
</script>


<style lang="scss" scoped>
.nav-link{
  font-family: "Outfit", sans-serif;
}
.navbar-toggler:focus {
    text-decoration: none;
    outline: 0;
    box-shadow:none;
}
/* Custom hamburger -> X */
.custom-toggler{
  width: 36px;
  height: 36px;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 6px;
  border: none;
  background: transparent;
}
.custom-toggler .bar{
  display: block;
  width: 20px;
  height: 2px;
  background: #000000;
  margin: 3px 0;
  transition: transform 0.25s ease, opacity 0.2s ease;
}
.custom-toggler .bar.open:nth-child(1){
  transform: translateY(5px) rotate(45deg);
}
.custom-toggler .bar.open:nth-child(2){
  opacity: 0;
}
.custom-toggler .bar.open:nth-child(3){
  transform: translateY(-5px) rotate(-45deg);
}

/* Full-screen mobile menu overlay */
.mobile-overlay{
  position: fixed;
  inset: 0;
  z-index: 1050;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logoimage{
  width: 90px;
}


.navbar{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 1100;
  background: #fff; /* ensure background so content doesn't show through */
  box-shadow: 0 2px 6px rgba(0,0,0,0.08);
}
.mobile-menu ul{
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: center;
}
.mobile-menu .nav-link{
  display: block;
  font-size: 1.6rem;
  padding: 12px 24px;
  color: #111;
}
.mobile-menu .nav-link + .nav-link{
  margin-top: 8px;
}

/* Hide overlay on large screens just in case */
@media (max-width: 992px){
  .mobile-overlay{ display: none; }

  .logoimage{
  width: 60px;
}

}

</style>