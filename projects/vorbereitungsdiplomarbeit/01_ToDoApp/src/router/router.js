import { createWebHistory, createRouter } from 'vue-router'

import Todos from '../views/Todos.vue'

const history = createWebHistory()

const routes = [
  {
    path: '/',
    component: Todos,
    name: 'home',
  },
  {
    // erweitern
  }
]

const router = createRouter({ history, routes })

export default router
