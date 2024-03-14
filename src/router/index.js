import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '/login', component: () => import('../views/Login') },
  { path: '/register', component: () => import('../views/Register') },
  {
    path: '/',
    redirect: '/article',
    component: () => import('../views/Layout'),
    children: [
      { path: '/article', component: () => import('../views/Article') },
      { path: '/collect', component: () => import('../views/Collect') },
      { path: '/like', component: () => import('../views/Like') },
      { path: '/user', component: () => import('../views/User') }
    ]
  },
  { path: '/detail', component: () => import('../views/ArticleDetail') },
  { path: '*', component: () => import('../views/NotFound') }
]

const router = new VueRouter({
  routes
})

export default router
