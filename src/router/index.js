import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home'
import About from '@/views/About'
import Index from '@/views/Index'
import Login from '@/views/Login'
import Register from '@/views/Register/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name:'Index',
    component:Index
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,    
  },
  {
    path: '/about',  
    name: 'About',
    component: About,
  },
  {
    path: '/login',
    name: 'Login',  
    component:Login    
  },
  {
    path: '/register',
    name: 'Register',     
    component:Register
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router