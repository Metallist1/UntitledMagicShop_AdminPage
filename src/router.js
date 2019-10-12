import Vue from 'vue'
import Router from 'vue-router'
import About from './views/About.vue'
import Home from './views/Home.vue'
import ProductOverview from './views/ProductOverview.vue'
import CustomerService from './views/CustomerService.vue'
import Basket from './views/Basket.vue'
import Login from './views/Login.vue'
import AllProducts from './views/AllProducts.vue'
//import 'material-design-icons-iconfont/dist/material-design-icons.css'
import AdminMainPage from './views/Admin/AdminMainPage.vue'

Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
        path: '/about',
        name: 'about',
        component: About
    },
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/product/:cat',
        name: 'productOverview',
        component: ProductOverview,
        props: true
    },
    {
      path: '/customerservice',
      name: 'customerservice',
      component: CustomerService
    },
    {
      path: '/basket',
      name: 'basket',
      component: Basket
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/allproducts',
      name: 'allproducts',
      component: AllProducts
    },
    {
      path: '/AdminMain',
      name: 'AdminMain',
      component: AdminMainPage
    } ,
    
  ]
})

