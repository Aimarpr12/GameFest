import { defineStore } from 'pinia';

export const useModalStore = defineStore('modalStore', {
  state: () => ({
    isOpen: false, // Estado para controlar si el modal está abierto o cerrado
    selectedEvent: null, // Evento seleccionado para mostrar en el modal
  }),
  actions: {
    // Función para abrir el modal
    openModal(event) {
      this.selectedEvent = event; // Almacenar el evento seleccionado
      this.isOpen = true; // Cambiar el estado a abierto
    },
    // Función para cerrar el modal
    closeModal() {
      this.selectedEvent = null; // Limpiar el evento seleccionado
      this.isOpen = false; // Cambiar el estado a cerrado
    },
  },
});
