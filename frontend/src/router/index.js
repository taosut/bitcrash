import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../layouts/Main.vue'),
    children: [
      { path: '/', redirect: '/home' },
      {
        path: '/home',
        component: () => import('../views/Home.vue')
      },
      {
        path: '/deposit',
        component: () => import('../views/deposit.vue')
      },
      {
        path: '/referral',
        component: () => import('../views/Referral.vue')
      }
    ]
  }
]

// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes
// })
const createRouter = () => new VueRouter({
  // // mode: 'history', // require service support
  // scrollBehavior: () => ({ y: 0 }),
  // routes: constantRoutes
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

const router = createRouter()

router.beforeResolve((to, from, next) => {
  // If this isn't an initial page load.
  // eslint-disable-next-line no-undef
  NProgress.start()
  next()
})

// eslint-disable-next-line no-unused-vars
router.afterEach((to, from) => {
  // Complete the animation of the route progress bar.
  // eslint-disable-next-line no-undef
  NProgress.done()
})

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
