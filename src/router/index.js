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
  },
  {
    path: '/adminMainBoard',
    name: 'adminMainBoard',
    component: () => import('@/views/admin/AdminMainBoard.vue')
  },
  {
    path: '/adminUserList',
    name: 'adminUserList',
    component: () => import('@/views/admin/user/AdminUserList.vue')
  },
  {
    path: '/adminUserForm',
    name: 'adminUserForm',
    component: () => import('@/views/admin/user/AdminUserForm.vue')
  },
  {
    path: '/adminBoardList',
    name: 'adminBoardList',
    component: () => import('@/views/admin/board/AdminBoardList.vue')
  },
  {
    path: '/adminBoardForm',
    name: 'adminBoardForm',
    component: () => import('@/views/admin/board/AdminBoardForm.vue')
  },
  {
    path: '/adminProductList',
    name: 'adminProductList',
    component: () => import('@/views/admin/product/AdminProductList.vue')
  },
  {
    path: '/adminProductForm',
    name: 'adminProductForm',
    component: () => import('@/views/admin/product/AdminProductForm.vue')
  },
  {
    path: '/adminProductCommentList',
    name: 'adminProductCommentList',
    component: () => import('@/views/admin/comment/AdminProductCommentList.vue')
  },
  {
    path: '/adminBoardCommentList',
    name: 'adminBoardCommentList',
    component: () => import('@/views/admin/comment/AdminBoardCommentList.vue')
  }   
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
