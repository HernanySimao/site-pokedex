import { createRouter, createWebHistory } from 'vue-router';
import Favorite from '../views/Favorite.vue';
import Home from '../views/Home.vue';
const routes = [
    {
        path: '/',
        name: 'Inicio',
        component: Home,
    },
    {
        path: '/favoritos',
        name: 'Favorito',
        component: Favorite,
    },
];
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});
export { routes };
export default router;
