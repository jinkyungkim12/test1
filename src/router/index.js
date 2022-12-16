import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/boardList',
    name: 'boardList',
    component: () => import('@/components/Board/BoardList.vue')
  },
  {
    path: '/boardView',
    name: 'boardView',
    component: () => import('@/components/Board/BoardView.vue')
  },
  {
    path: '/boardComments',
    name: 'boardComments',
    component: () => import('@/components/Comments/BoardComments.vue')
  },
  {
    path: '/memberLogin',
    name: 'memberLogin',
    component: () => import('@/components/Member/MemberLogin.vue')
  },
  {
    path: '/productList',
    name: 'productList',
    component: () => import('@/components/Product/ProductList.vue')
  },
  {
    path: '/signIn',
    name: 'signIn',
    component: () => import('@/components/Member/SignIn.vue')
  } 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
