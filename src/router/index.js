import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
// import Search from '../views/Search.vue'
// import Details from '../views/Details.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('../views/Login.vue')
    // component: Home
  },
  {
    path: '/Home',
    name: 'Home',
    component: () => import('../views/Home.vue')
    // component: Home
  },
  {
    path: '/Search',
    name: 'Search',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Search.vue')
    // component: Search
  },
  {
    path: '/Details',
    name: 'Details',
    component: () => import('../views/Details.vue')
    // component: Details
  },
  {
    path: '/Select',
    name: 'Select',
    component: () => import('../views/Select.vue')
    // component: Details
  },
  {
    path: '/Input',
    name: 'Input',
    component: () => import('../views/Input.vue')
    // component: Details
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
