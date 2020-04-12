import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/poker-planning-add-story-list'
  },
  {
    path: '/poker-planning-add-story-list',
    name: 'AddStoryList',
    // route level code-splitting
    // this generates a separate chunk for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "scrum-master-planning" */ '../views/AddStoryList.vue')
  },
  {
    path: '/poker-planning-view-as-scrum-master/:sprintName',
    name: 'ViewAsScrumMaster',
    component: () => import(/* webpackChunkName: "scrum-master-planning" */ '../views/ViewPokerPlan.vue')
  },
  {
    path: '/poker-planning-view-as-developer/:sessionId',
    name: 'ViewAsDeveloper',
    component: () => import(/* webpackChunkName: "scrum-master-planning" */ '../views/ViewPokerPlan.vue')
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "scrum-master-planning" */ '../views/NotFound.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
