<template>
  <nav class="bg-gradient-to-r from-purple-700 dark:bg-gray-900">
    <div class="flex items-center justify-between p-4">
      <!-- Logo -->
      <div class="flex items-center">
        <RouterLink to="/" class="text-sm dark:text-blue-500 hover:underline">
          <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-4" alt="Flowbite Logo" />
        </RouterLink>
        <span class="text-2xl font-semibold whitespace-nowrap dark:text-white">GameFest</span>
      </div>

      <!-- Botón para abrir/cerrar el menú en pantallas pequeñas -->
      <button @click="toggleMenu" type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default" :aria-expanded="isMenuOpen ? 'true' : 'false'">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15" />
        </svg>
      </button>

      <!-- Menú desplegable -->
      <div :class="{ 'hidden': !isMenuOpen, 'w-full': isMenuOpen, 'md:block': true }" id="navbar-default">
        <ul
          class="font-medium flex flex-col p-4 md:p-0 mt-4 border md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 text-white">
          <li v-if="!userStore.isAuthenticated">
              <button v-if="!userStore.isAuthenticated" @click="openLoginModal"
                class="text-sm text-blue-500 hover:underline">
                Iniciar Sesión
              </button>
          </li>
          <li v-else>
            <button @click="logout" class="text-sm dark:text-blue-500 hover:underline">
              Cerrar Sesión
            </button>
          </li>
          <li>
            <RouterLink to="/eventos" class="text-sm hover:underline">Eventos</RouterLink>
          </li>
          <li>
            <RouterLink to="/juegos" class="text-sm hover:underline">Juegos</RouterLink>
          </li>
          <li v-if="userStore.isAuthenticated">
            <RouterLink to="/profile" class="text-sm hover:underline">Perfil</RouterLink>
          </li>
          <li v-if="userStore.isAuthenticated && userStore.user?.role === 'admin'">
            <RouterLink to="/create-event" class="text-sm hover:underline">Nuevo Evento</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { useUserStore } from '@/stores/userStore';
import { useModalLogInStore } from '@/stores/modalLogInStore';

export default {
  setup() {
    const userStore = useUserStore();
    const modalStore = useModalLogInStore();

    const openLoginModal = () => {
      debugger;
      modalStore.openLoginModal();
    };

    const logout = () => {
      userStore.logout();
      
    };

    return { userStore, modalStore, openLoginModal, logout };
  }
};
</script>

<style scoped>
/* Agrega estilos personalizados si lo deseas */
</style>
