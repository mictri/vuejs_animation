import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue'),
  },
  {
    path: '/scene',
    name: 'scene',
    component: () => import('../views/Scene.vue'),
  },
  {
    path: '/composables/Transitions',
    name: 'transitions',
    component: () => import('../views/composables/Transitions.vue'),
  },
  {
    path: '/animations',
    name: 'animations',
    component: () => import('../views/Animations.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
