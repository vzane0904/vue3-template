import { RouteRecordRaw } from 'vue-router'
// const layoutPage = () => import(`@/layouts/default/view.vue`)
const error404Page = () => import(`@/layouts/error/404.vue`)
const login: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      icon: 'ion:grid-outline',
      title: 'login'
    }
  }
]
const error = [
  {
    path: '/:pathMatch(.*)*',
    component: error404Page,
    name: 'Match'
  }
]

export const staticRoutes = [...login, ...error]
