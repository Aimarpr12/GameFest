<template>
  <div v-if="isOpen" class="fixed inset-0 flex items-center justify-center bg-opacity-20 backdrop-blur-sm z-50">
    <div class="bg-white p-6 rounded-lg max-w-lg w-full">
      <!-- Cerrar el modal -->
    <button @click="closeModal" type="button"
      class="justify-end text-gray-400 bg-transparent hover:bg-gray-200 rounded-lg text-sm ms-auto inline-flex w-full items-center dark:hover:bg-gray-600 dark:hover:text-white"
      data-modal-hide="default-modal">
      <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
      </svg>
      <span class="sr-only">Close modal</span>
    </button>

      <!-- Título del evento -->
      <h2 class="text-2xl font-semibold mb-4 text-center">{{ selectedEvent?.titulo }}</h2>

      <!-- Imagen del evento -->
      <img :src="selectedEvent?.imagen" alt="Imagen del evento" class="w-full h-48 object-cover mb-4 rounded-md" />

      <!-- Información del evento (Fecha, Hora, Tipo, Plazas) -->
      <div class="flex flex-row text-gray-600 text-center justify-around">
        <!-- Primera fila: Fecha y Hora -->
        <div class="text-lg flex flex-col justify-center space-x-4 mb-2">
          <p><strong>Fecha:</strong> {{ selectedEvent?.fecha }}</p>
          <p><strong>Tipo:</strong> {{ selectedEvent?.tipo }}</p>
        </div>

        <!-- Segunda fila: Tipo y Plazas disponibles -->
        <div class="flex flex-col justify-center space-x-4">
          <p><strong>Hora:</strong> {{ selectedEvent?.hora }}</p>
          <p><strong>Plazas libres:</strong> {{ selectedEvent?.plazasLibres }}</p>
        </div>
      </div>

      <!-- Checkbox de confirmación -->
      <div class="flex items-center mt-4">
        <input type="checkbox" v-model="confirmed" class="form-checkbox h-5 w-5 text-purple-600" />
        <span class="ml-2">Estoy seguro de que quiero apuntarme a este evento.</span>
      </div>

      <!-- Botón de confirmación -->
      <button :disabled="!confirmed" @click="closeModal" class="mt-4 w-full bg-purple-600 text-white py-2 rounded-md disabled:bg-gray-400">
        Confirma el check superior
      </button>
    </div>
  </div>
</template>

<script>
import { useModalStore } from '@/stores/modalStore';

export default {
  computed: {
    isOpen() {
      const modalStore = useModalStore();
      return modalStore.isOpen;
    },
    selectedEvent() {
      const modalStore = useModalStore();
      return modalStore.selectedEvent;
    },
  },
  data() {
    return {
      confirmed: false, // Estado del checkbox
    };
  },
  methods: {
    closeModal() {
      const modalStore = useModalStore();
      modalStore.closeModal(); // Cerrar el modal
    },
  },
};
</script>

<style scoped>
/* Estilos opcionales para el modal */
</style>
