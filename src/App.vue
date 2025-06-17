<script>
import { ref } from 'vue'
const anim = ref('fade')
</script>

<template>
  <div class="layout">
    <Header />
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/scene">Scene</router-link>
      <router-link to="/composables/Transitions">Transitions</router-link>
      <router-link to="/animations">Animations</router-link>
    </nav>

    <main>
      <router-view v-slot="{ Component }">
        <Component :is="Component" />
      </router-view>
    </main>

    <Footer />
  </div>

  <main>
    <!-- <div class="check">
      <label><input type="radio" name="anim" value="fade" v-model="anim" />Fade</label>
      <label><input type="radio" name="anim" value="slide" v-model="anim" />Slide</label>
      <label><input type="radio" name="anim" value="slide-down" v-model="anim" />Slide Down</label>
      <label><input type="radio" name="anim" value="grow-in" v-model="anim" />Grow In</label>
      <label><input type="radio" name="anim" value="grow-out" v-model="anim" />Grow Out</label>
    </div> 
    <router-view v-slot="{ Component }">
     <transition :name="anim" mode="out-in">
      <Component :is="Component" />
      </transition>
    </router-view>
    
    
    -->
  </main>
</template>
<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>
