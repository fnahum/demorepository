import { createRouter, createWebHistory } from 'vue-router'

import routes from './routes'
// import actions from '@/store/action'
// import mutations from '@/store/mutations'
import state from '@/store/state'

let router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach(async (to, from, next) => {
  // if (to.matched.some(record => record.meta.requiresAuth)) {
  //   if (await actions.getAuthUser()) { // if logged in
  //     next()
  //   } else { // not logged in
  //     next({
  //       path: '/login',
  //       params: { nextUrl: to.fullPath }
  //     })
  //   }
  // } else {
  next()
  // }
})

router.afterEach((to, from) => {
  // turn off spinner
  // mutations.updateLoadingStatus(state, false)
})

export default router
