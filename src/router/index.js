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
    path: '/mainHome',
    name: 'mainHome',
    component: () => import('@/views/MainView.vue')
  },
  {
    path: '/mainView',
    name: 'mainView',
    component: () => import('@/views/MainView.vue')
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
    component: () => import('@/views/user/Board/BoardList.vue')
  },
  {
    path: '/boardView',
    name: 'boardView',
    component: () => import('@/views/user/Board/BoardView.vue')
  },
  {
    path: '/boardCreate',
    name: 'boardCreate',
    component: () => import('@/views/user/Board/BoardCreate.vue')
  },
  {
    path: '/boardComments',
    name: 'boardComments',
    component: () => import('@/components/Comments/BoardComments.vue')
  },
  {
    path: '/memberLogin',
    name: 'memberLogin',
    component: () => import('@/views/user/Member/MemberLogin.vue')
  },
  {
    path: '/productList',
    name: 'productList',
    component: () => import('@/views/user/Product/ProductList.vue')
  },
  {
    path: '/productView',
    name: 'productView',
    component: () => import('@/views/user/Product/ProductView.vue')
  },
  {
    path: '/productCreate',
    name: 'productCreate',
    component: () => import('@/views/user/Product/ProductCreate.vue')
  },
  {
    path: '/signIn',
    name: 'signIn',
    component: () => import('@/views/user/Member/SignIn.vue')
  } 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
