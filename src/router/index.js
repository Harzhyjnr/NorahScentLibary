import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/view/HomeView.vue'
import ShopView from '@/view/ShopView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      name:"home",
      path:"/",
      component: HomeView
    },

    {
      name:"shop",
      path:"/shop",
      component:ShopView
    }
  ],
})

export default router
