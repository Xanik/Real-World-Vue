import Vue from 'vue'
import VueRouter from 'vue-router'
import EventList from '../views/EventList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/user/:username',
    name: 'User',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/User.vue'),
    props: true
  },
  {
    path: '/',
    name: 'EventList',
    component: EventList
  },
  {
    path: '/event-show/:id',
    name: 'EventShow',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/EventShow.vue'),
    props: true
  },
  {
    path: '/event-create',
    name: 'EventCreate',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/EventCreate.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
