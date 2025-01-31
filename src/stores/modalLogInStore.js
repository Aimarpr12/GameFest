import { defineStore } from 'pinia';

export const useModalLogInStore = defineStore('modalLoginStore', {
  state: () => ({
    isLoginModalOpen: false, // Controla la visibilidad del modal
  }),
  actions: {
    openLoginModal() {
        debugger;
      this.isLoginModalOpen = true;
    },
    closeLoginModal() {
      this.isLoginModalOpen = false;
    },
  },
});
