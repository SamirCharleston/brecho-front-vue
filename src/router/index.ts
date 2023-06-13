import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import SelledProducts from '../views/SelledProducts.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/pagina-do-produto',
    name: 'pagina-do-produto',
    component: () => import('@/components/SelledProducts.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
