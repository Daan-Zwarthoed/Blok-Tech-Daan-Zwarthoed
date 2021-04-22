import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Profiel',
    component: () => import(/* webpackChunkName: "profiel" */ '../views/Profiel.vue')
  },
  {
    path: '/zoeken',
    name: 'Zoeken',
    component: () => import(/* webpackChunkName: "zoeken" */ '../views/Zoeken.vue')
  },
  {
    path: '/berichten',
    name: 'Berichten',
    component: () => import(/* webpackChunkName: "berichten" */ '../views/Berichten.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
