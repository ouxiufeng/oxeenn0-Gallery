import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/index.vue'

import login from '../views/login/index.vue'
import registered from '../views/login/registered.vue'


import shopcart from '../views/shopcart.vue'

import about from '../views/about.vue'

import introduction from '../views/introduction.vue'

import product from '../views/product/index.vue'
// import flowers from '../views/product/flowers.vue'
// import seed from '../views/product/seed.vue'
// import material from '../views/product/material.vue'

import service from '../views/service.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: index
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/login/registered',
    name: 'registered',
    component: registered
  },
  {
    path: '/shopcart',
    name: 'shopcart',
    component: shopcart
  },
  {
    path: '/about',
    name: 'about',
    component: about,
  },
  {
    path: '/introduction',
    name: 'introduction',
    component: introduction
  },
  {
    path: '/product',
    redirect: '/product/all',
    name: 'product',
    component: product,
    children: [
      {
        path: 'all',
        name: 'all',
        // component: flowers
      },
      {
        path: 'flowers',
        name: 'flowers',
        // component: flowers
      },
      {
        path: 'seed',
        name: 'seed',
        // component: seed
      },
      {
        path: 'material',
        name: 'material',
        // component: material
      },
    ]
  },
  {
    path: '/service',
    name: 'service',
    component: service
  },
  {
    path: '/*',
    name: 'other',
    component: index
  },
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  let filterPath = ["flowers", "seed", "material"]
  let notToGo = false
  for (const item of filterPath) {
    if(to.name === item){
      notToGo = true
    }
  }
  if(!notToGo){
    window.scrollTo(0, 0)
  }
  next()
})

export default router
