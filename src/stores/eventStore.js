import { defineStore } from 'pinia';

export const useEventStore = defineStore('eventStore', {
  state: () => ({
    events: [], // Lista de eventos
    eventTypes: [], // Tipos de eventos disponibles
    availableDates: [], // Fechas con eventos disponibles
  }),
  actions: {
    // Cargar los eventos desde el archivo JSON
    async loadEvents() {
      debugger;
      try {
        const response = await fetch("/src/assets/events.json");
        if (!response.ok) {
          throw new Error('Error al cargar los eventos');
        }
        this.events = await response.json();

        // Extraer los tipos de eventos (únicos)
        this.eventTypes = Array.from(new Set(this.events.map(event => event.tipo)));

        // Extraer las fechas únicas en las que hay eventos
        this.availableDates = Array.from(new Set(this.events.map(event => event.fecha)));
      } catch (error) {
        console.error('Error cargando los eventos:', error);
      }
    },
  },
  getters: {
    // Getter para filtrar eventos por tipo, fecha y plazas disponibles
    filteredEvents: (state) => (selectedType, selectedDate, onlyWithPlazas) => {
      return state.events.filter((event) => {
        const matchesType = !selectedType || selectedType === 'Todos los tipos' || event.tipo === selectedType;
        const matchesDate = !selectedDate || event.fecha === selectedDate;
        const matchesPlazas = !onlyWithPlazas || event.plazasLibres > 0;

        return matchesType && matchesDate && matchesPlazas;
      });
    },
  },
});
