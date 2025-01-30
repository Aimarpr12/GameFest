import { defineStore } from 'pinia';

export const useGameStore = defineStore('gameStore', {
  state: () => ({
    games: [], // Lista de videojuegos
  }),
  actions: {
    // Acción para cargar los videojuegos desde el archivo JSON
    async loadGames() {
      try {
        const response = await fetch("/src/assets/games.json");
        if (!response.ok) {
          throw new Error('Error al cargar los juegos');
        }
        this.games = await response.json();
      } catch (error) {
        console.error('Error cargando los juegos:', error);
      }
    },
  },
  getters: {
    filteredGames: (state) => (searchQuery) => {
      if (!searchQuery) return state.games; // Si no hay búsqueda, devuelve todos los juegos
      const query = searchQuery.toLowerCase();
      return state.games.filter((game) =>
        game.titulo.toLowerCase().includes(query) ||
        game.genero.toLowerCase().includes(query) ||
        game.plataformas.some((platform) =>
          platform.toLowerCase().includes(query)
        )
      );
    },
  },
});
