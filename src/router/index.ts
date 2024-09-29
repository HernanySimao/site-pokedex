import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Favorite from '../views/Favorite.vue';
import Home from '../views/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/favoritos',
    name: 'Favorite',
    component: Favorite,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
