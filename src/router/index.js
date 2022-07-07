import { createRouter, createWebHashHistory } from 'vue-router'
import Users from './modules/User'
import Roles from './modules/Roles'
import Menus from './modules/Menu'
import Dicts from './modules/Dicts'

export const publicRoutes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login')
  },
  {
    path: '/',
    name: 'layout',
    redirect: '/index',
    component: () => import('../layout'),
    children: [
      {
        path: '/index',
        name: 'index',
        meta: {
          title: '首页',
          icon: 'el-icon-s-home'
        },
        component: () => import('../views/home')
      }
    ]
  },
  {
    path: '/404',
    component: () => import('../views/404')
  }
]

export const privateRoutes = [Users, Roles, Menus, Dicts]

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...publicRoutes, ...privateRoutes]
})

console.log(router.getRoutes(), '123')

export default router
