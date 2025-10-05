import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/view/HomeView.vue';
import ShopView from '@/view/ShopView.vue';
import MenPerfume from '@/component/section-folder/MenPerfume.vue';
import WomenPerfume from '@/component/section-folder/WomenPerfume.vue';
import Allproduct from '@/component/section-folder/Allproduct.vue';
import PerfumeCard from '@/component/common-folder/PerfumeCard.vue';
import PerfumeSelector from '@/component/section-folder/PerfumeSelector.vue';


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
    name:"perfumecard",  
    path:"/perfumecard",
    component:  PerfumeCard,
  },
  {
    name:"perfumeselector",  
    path:"/perfumeselector",
    component: PerfumeSelector,
  }
  ],
})

export default router
