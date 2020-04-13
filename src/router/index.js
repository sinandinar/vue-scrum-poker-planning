import Vue from 'vue'
import VueRouter from 'vue-router'
import AddStoryList from '../views/AddStoryList'
import NotFound from '../views/NotFound'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/poker-planning-add-story-list'
  },
  {
    path: '/poker-planning-add-story-list',
    name: 'AddStoryList',
    component: AddStoryList
  },
  {
    path: '/poker-planning-view-as-scrum-master/:sessionId',
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
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
