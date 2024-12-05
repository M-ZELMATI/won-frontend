import { createRouter, createWebHistory } from 'vue-router'
import BoardTable from '@/views/BoardTable.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'board',
      component: BoardTable,
    },
  ],
})

export default router
