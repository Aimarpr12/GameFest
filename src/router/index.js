import { createRouter, createWebHistory } from 'vue-router';
import Index from '../views/Index.vue';
import UserProfile from '../views/UserProfile.vue';
import CreateEventView from '../views/CreateEventView.vue';
import { useUserStore } from '@/stores/userStore';

const routes = [
  { path: '/', name: 'home', component: Index },
  { path: '/juegos', name: 'juegos', component: () => import('../views/JuegosView.vue') },
  { path: '/eventos', name: 'eventos', component: () => import('../views/EventosView.vue') },
  {
    path: '/profile',
    name: 'profile',
    component: UserProfile,
    meta: { requiresAuth: true }, // Solo accesible si está autenticado
  },
  {
    path: '/create-event',
    name: 'create-event',
    component: CreateEventView,
    meta: { requiresAuth: true, requiresAdmin: true }// Solo accesible si está autenticado
  }
  
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});
/*
// Protección de rutas autenticadas
router.beforeEach((to, from, next) => {
  const userStore = useUserStore();
  if (to.path === '/login' && userStore.isAuthenticated) {
    next('/');
  } else {
    next();
  }
});*/
router.beforeEach((to, from, next) => {
  const userStore = useUserStore()
  const isAuthenticated = userStore.isAuthenticated
  const isAdmin = userStore.user?.role === 'admin'

  if (to.meta.requiresAuth && !isAuthenticated) {
    // Si la ruta requiere autenticación y el usuario no está autenticado
    next({ name: 'home' }) // Redirigir a la página principal
  } else if (to.meta.requiresAdmin && !isAdmin) {
    // Si la ruta requiere ser admin y el usuario no es admin
    next({ name: 'home' }) // Redirigir a la página principal
  } else {
    next() // Permitir acceso a la ruta
  }
})


export default router;
