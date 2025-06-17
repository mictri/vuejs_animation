import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Animations from '@/views/Animations.vue'
import Scene from '@/views/Scene.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/animations', name: 'Animations', component: Animations },
  { path: '/scene', name: 'Scene', component: Scene },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
