import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home/Home.vue'
import About from '@/views/About.vue'
import Animations from '@/views/Animations.vue'
import Scene from '@/views/Scene.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/animations', name: 'Animations', component: Animations },
  { path: '/scene', name: 'Scene', component: Scene },
  { path: '/:catchAll(.*)', name: 'NotFound', component: () => import('@/views/NotFound.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
})

export default router
