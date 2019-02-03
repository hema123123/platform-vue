import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from '@/router/routes'
import session from '@/libs/session'

Vue.use(VueRouter)

const INACCESSIBLE_LOGIN_ROUTES = ['/login', '/login-mobile']

export const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!session.isLogin()) {
      next({
        path: '/login',
        query: {redirect: to.fullPath}
      })
    } else {
      next()
    }
  } else {
    if (session.isLogin() && INACCESSIBLE_LOGIN_ROUTES.includes(to.path)) {
      next('/home')
    }
    next()
  }
})
