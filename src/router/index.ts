import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import SelledProducts from '../views/SelledProducts.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/produtos-vendidos',
    name: 'produtos-vendidos',
    component: () => import('@/components/AskedProducts.vue')
  },
  {
    path: '/administrador',
    name: 'administrador',
    component: () => import('@/views/login-View.vue')
  },
  {
    path: '/cadastrar-produtos',
    name: 'cadastrar-produtos',
    component: () => import('@/components/RegisterProduct.vue')
  },
  {
    path: '/pedidos',
    name: 'pedidos',
    component: () => import('@/components/SelledProducts.vue')
  },
  {
    path: '/configuracoes',
    name: 'configuracoes',
    component: () => import('@/components/Settings.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
