import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about-us',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
  // {
  //   path: '/sustainability',
  //   name: 'Sustainability',
  //   component: () => import(/* webpackChunkName: "sustainability" */ '../views/Sustainability.vue')
  // },
  // {
  //   path: '/contact-us',
  //   name: 'Contact',
  //   component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue')
  // }
]

const router = createRouter({
  scrollBehavior (to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
  history: createWebHistory(),
  routes
})

export default router
