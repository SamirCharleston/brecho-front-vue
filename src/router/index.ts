import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import SelledProducts from '../views/SelledProducts.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/produtos-vendidos',
    name: 'produtos-vendidos',
    component: () => import('@/components/SelledProducts.vue')
  },
  {
    path: '/cadastrar-produtos',
    name: 'cadastrar-produtos',
    component: () => import('@/components/RegisterProduct.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
