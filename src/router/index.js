import { createRouter, createWebHistory } from 'vue-router';
import Index from '../views/Index.vue';
import { useUserStore } from '@/stores/userStore';

const routes = [
  { path: '/', name: 'home', component: Index },
  { path: '/juegos', name: 'juegos', component: () => import('../views/JuegosView.vue') },
  { path: '/eventos', name: 'eventos', component: () => import('../views/EventosView.vue') },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

// Protección de rutas autenticadas
router.beforeEach((to, from, next) => {
  const userStore = useUserStore();
  if (to.path === '/login' && userStore.isAuthenticated) {
    next('/');
  } else {
    next();
  }
});

export default router;
