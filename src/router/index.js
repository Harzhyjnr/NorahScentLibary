import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/view/HomeView.vue';
import ShopView from '@/view/ShopView.vue';
import MenPerfume from '@/component/section-folder/MenPerfume.vue';
import WomenPerfume from '@/component/section-folder/WomenPerfume.vue';
import Allproduct from '@/component/section-folder/Allproduct.vue';
import PerfumeSelector from '@/component/section-folder/PerfumeSelector.vue';
import SingleProduct from '@/view/SingleProduct.vue';


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
    },
    
  {
    name:"men",
    path:"/menPerfume",
    component: MenPerfume,
  },

  {
    name:"women",
    path:"/womenPerfume",
    component: WomenPerfume,
  },

  {
    name:"allproduct",  
    path:"/allproduct",
    component: Allproduct,
  },
  {
    name:"perfumeselector",  
    path:"/perfumeselector",
    component: PerfumeSelector,
  },

  {
    name: "cart",
    path: "/cart",
    component: () => import('@/view/CartView.vue')
  },
  {
    name: 'checkout',
    path: '/checkout',
    component: () => import('@/view/CheckoutView.vue')
  },

  {
    name:"singleproduct",
    path:"/singleproduct/:id",
    component: SingleProduct,
    props:true,
  }
  ],

  
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition   // when using back/forward button
    } else {
      return { top: 0 }      // always scroll to top on new page
    }
  }
})




export default router
