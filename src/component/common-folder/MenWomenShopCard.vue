<template>
  <div class="col col-12 col-lg-6 col-md-6 mb-4 menshopcard">
    <div class="card text-bg-dark h-100 border-0 !important">
      <img :src="image" class="card-img" :alt="title || 'image'">
        <div class="card-img-overlay d-flex flex-column justify-content-end p-3 overlay-bottom">
          <div class="overlay-content text-start w-100">
            <h2 class="card-title">{{ title }}</h2>
            <div class=" d-flex justify-content-center align-items-end">
            <p class="card-text mb-2">{{ description }}</p>
            <router-link :to="to" class="btn routebtn">
              {{ btn }}
            </router-link>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

defineProps({
  title: String,
  description: String,
  btn: String,
  image: {
    type: String,
    default: ''
  },
  to: {
    type: String,
    default: '#'
  }
})
</script>

<style lang="scss" scoped>
.menshopcard {
    font-family: "Outfit", sans-serif;
}

 .routebtn {
    background-color: #fff;
    color: #000;
    padding: 10px 20px;
    text-decoration: none;
    transition: background-color 0.3s, color 0.3s;
    white-space: nowrap ;
    border-radius: 0 !important;
  }
  
.card-img.cover {
  object-fit: cover;
  height: 300px;
}

.overlay-bottom {
  background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 60%);
  align-items: flex-end;
}

.overlay-content {
  color: #fff;
}


// .menshopcard {
//   flex: 1 1 100%;
//   max-width: 100%;
// }

@media (max-width: 768px) {
//   .menshopcard {
//     flex: 0 0 48%;
//     max-width: 48%;
//   }
  .card-img.cover {
    height: 360px;
  }

 p{
    font-size: .8rem;
  }
}

    
  

</style>