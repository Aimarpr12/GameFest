<template>
  <div class="container mx-auto p-4">
    <h1 class="text-3xl font-bold mb-4 text-white">Juegos más jugados del 2024</h1>
    
    <input
      v-model="searchQuery"
      type="text"
      placeholder="Buscar juegos..."
      class="mb-4 p-2 border rounded w-full bg-white text-gray-600"
    />

    <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 justify-items-center">
      <GameCard v-for="game in filteredGames(searchQuery)" :key="game.id" :game="game" />
    </div>
  </div>
</template>

<script>
import { useGameStore } from '@/stores/gameStore';
import GameCard from '@/components/GameCard.vue';

export default {
  components: {
    GameCard,
  },
  data() {
    return {
      searchQuery: '',
    };
  },
  computed: {
    filteredGames() {
      const gameStore = useGameStore();
      return gameStore.filteredGames;
    },
  },
  mounted() {
    const gameStore = useGameStore();
    gameStore.loadGames();
  },
};
</script>