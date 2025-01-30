<template>
  <div class="container mx-auto p-4">
    <h1 class="text-3xl font-bold mb-4 text-white">Eventos disponibles</h1>
    <div class="max-w-full p-6 bg-white border border-gray-200 rounded-lg shadow-sm text-black w-full mb-4">
    <!-- Filtro por Tipo (dinámico) -->
    <form class="mb-4 w-full flex flex-col sm:flex-row sm:space-x-4">
      <div class="mb-4 sm:mb-0 w-full">
        <label for="event-type" class="block mb-2 text-sm font-medium text-gray-900">Tipo de Evento</label>
        <select id="event-type" v-model="selectedType"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option value="Todos los tipos">Todos los tipos</option>
          <option v-for="type in eventTypes" :key="type" :value="type">{{ type }}</option>
        </select>
      </div>

      <!-- Filtro por Fecha -->
      <div class="mb-4 sm:mb-0 w-full">
        <label for="event-date" class="block mb-2 text-sm font-medium text-gray-900">Fecha</label>
        <input v-model="selectedDate" type="date" :min="minDate" :max="maxDate"
          class="p-2 border rounded w-full dark:bg-gray-700 text-white bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Seleccionar fecha" />
      </div>

      <!-- Filtro por Plazas Disponibles -->
      <div class="mb-4 sm:mb-0 w-full flex items-center">
        <input type="checkbox" v-model="onlyWithPlazas" class="form-checkbox" />
        <span class="ml-2 text-sm text-gray-900">Solo eventos con plazas disponibles</span>
      </div>
    </form>
  </div>


    <!-- Mostrar los eventos filtrados -->
    <div
      class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 justify-items-center">
      <EventCard v-for="event in filteredEventsList" :key="event.id" :event="event" />

    </div>
  </div>
</template>

<script>
import { useEventStore } from '@/stores/eventStore';
import EventCard from '@/components/EventCard.vue';

export default {
  components: {
    EventCard,
  },
  data() {
    return {
      selectedType: 'Todos los tipos', // Estado para el filtro por tipo (inicializado con "Todos los tipos")
      selectedDate: '', // Estado para el filtro por fecha
      onlyWithPlazas: false, // Estado para el filtro por plazas disponibles
    };
  },
  computed: {
    // Acceder al store para obtener los tipos de eventos
    eventTypes() {
      const eventStore = useEventStore();
      return eventStore.eventTypes; // Tipos de eventos extraídos del store
    },
    minDate() {
      const eventStore = useEventStore();
      return eventStore.availableDates.length > 0 ? eventStore.availableDates[0] : '';
    },
    maxDate() {
      const eventStore = useEventStore();
      return eventStore.availableDates.length > 0 ? eventStore.availableDates[eventStore.availableDates.length - 1] : '';
    },
    // Obtener los eventos filtrados como una lista
    filteredEventsList() {
      const eventStore = useEventStore();
      return eventStore.filteredEvents(
        this.selectedType,
        this.selectedDate,
        this.onlyWithPlazas
      );
    },
  },
  mounted() {
    const eventStore = useEventStore();
    eventStore.loadEvents(); // Cargar los eventos cuando el componente se monte
  },
};
</script>

<style scoped>
/* Estilos opcionales */
</style>
