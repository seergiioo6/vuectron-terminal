import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'shell',
      component: require('@/components/shell').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
