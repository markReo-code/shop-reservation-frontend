import HomeView from '@/views/HomeView.vue'
import ReservationListView from '@/views/ReservationListView.vue'
import StaffListView from '@/views/StaffListView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/reservations',
      name: 'reservations',
      component: ReservationListView,
    },
    {
      path: '/staff',
      name: 'staff',
      component: StaffListView,
    },
  ],
})

export default router
