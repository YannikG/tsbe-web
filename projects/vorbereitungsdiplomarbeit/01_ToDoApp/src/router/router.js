import { createWebHistory, createRouter } from 'vue-router'

import Todos from '../views/Todos.vue'
import Todo from '../views/Todo.vue'

const history = createWebHistory()

const routes = [
  {
    path: '/',
    component: Todos,
    name: 'home',
  },
  {
    path: '/:id',
    component: Todo,
    name: 'todo',
    props: true,
  }
]

const router = createRouter({ history, routes })

export default router
