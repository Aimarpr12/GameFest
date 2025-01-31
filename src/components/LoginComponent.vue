<template>
    <div v-if="modalStore.isLoginModalOpen" class="fixed inset-0 flex items-center justify-center  backdrop-blur-md bg-opacity-50">
      <div class="bg-white p-6 rounded-lg shadow-lg w-96 relative">
        <button @click="closeModal" class="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
          ✕
        </button>
        <h2 class="text-xl font-semibold mb-4">
          {{ isRegistering ? "Registro" : "Iniciar sesión" }}
        </h2>
        
        <p v-if="errorMessage" class="text-red-500 mb-2">{{ errorMessage }}</p>
  
        <form @submit.prevent="handleSubmit">
          <div class="mb-3">
            <label class="block text-sm font-medium text-gray-700">Email</label>
            <input
              v-model="form.email"
              type="email"
              required
              class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          
          <div class="mb-3">
            <label class="block text-sm font-medium text-gray-700">Contraseña</label>
            <input
              v-model="form.password"
              type="password"
              required
              class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
  
          <button type="submit" class="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
            {{ isRegistering ? "Registrarse" : "Iniciar sesión" }}
          </button>
        </form>
  
        <p class="mt-4 text-sm text-gray-600">
          {{ isRegistering ? "¿Ya tienes cuenta?" : "¿Aún no tienes cuenta?" }}
          <button @click="toggleMode" class="text-blue-500 hover:underline">
            {{ isRegistering ? "Inicia sesión" : "¡Regístrate!" }}
          </button>
        </p>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { useUserStore } from '@/stores/userStore';
  import { useModalLogInStore } from '@/stores/modalLogInStore';
  
  export default {
    setup() {
      const userStore = useUserStore();
      const modalStore = useModalLogInStore(); // Importa el estado global del modal
      const isRegistering = ref(false);
      const form = ref({ email: '', password: '' });
      const errorMessage = ref('');
  
      const handleSubmit = async () => {
        try {
          errorMessage.value = '';
          if (isRegistering.value) {
            await userStore.register({ ...form.value });
          } else {
            await userStore.login(form.value);
          }
          closeModal(); // Cierra el modal tras un login o registro exitoso
        } catch (error) {
          errorMessage.value = error.message;
        }
      };
  
      const closeModal = () => {
        modalStore.closeLoginModal(); // Llama a la acción para cerrar el modal
      };
  
      const toggleMode = () => {
        isRegistering.value = !isRegistering.value;
        errorMessage.value = '';
      };
  
      return { form, isRegistering, handleSubmit, toggleMode, errorMessage, modalStore, closeModal };
    },
  };
  </script>
  