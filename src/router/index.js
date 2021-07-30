import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/views/Index'
import Login from '@/views/Login'
import Home from '@/views/Home'
import Register from '@/views/Register/index2'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/home',    
    name: 'Home',
    component: Index,
    children:[
      {
        path:'home',
        component:Home,
      }
    ]
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