import { createRouter, createWebHistory } from 'vue-router';
import Index from '../views/Index.vue'; // Importa correctamente el componente

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // Asegúrate de que import.meta.env.BASE_URL esté configurado correctamente
  routes: [
    {
      path: '/', // Ruta raíz
      name: 'home',
      component: Index, // Componente predeterminado
    },
    {
      path: '/juegos',
      name: 'juegos',
      component: () => import('../views/JuegosView.vue'),
    },
    {
      path: '/eventos',
      name: 'eventos',
      component: () => import('../views/EventosView.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LogIn.vue'),
    },
  ],
});

export default router;
