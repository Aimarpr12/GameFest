<template>
    <div class="flex justify-center items-center">
      <!-- Card principal -->
      <div class="bg-white p-6 rounded-lg shadow-md w-full max-w-4xl mt-4">
        <!-- Título del perfil -->
        <h1 class="text-2xl font-bold mb-4">Perfil de Usuario</h1>
  
        <!-- Información del usuario -->
        <p class="text-gray-700 mb-2">
          Bienvenido, <strong class="text-blue-600">{{ user?.email }}</strong>.
        </p>
        <p class="text-gray-700 mb-6">
          Tipo de usuario: 
          <span class="font-semibold text-blue-500">
            {{ user?.role === 'admin' ? 'Administrador' : 'Usuario normal' }}
          </span>
        </p>
  
        <!-- Título de eventos -->
        <h2 class="text-xl font-semibold mb-4">Mis Eventos</h2>
  
        <!-- Lista de eventos inscritos -->
        <p v-if="user.events.length === 0" class="text-gray-500">
          No estás inscrito a ningún evento.
        </p>
        <transition-group name="fade" tag="div">
          <div
            v-for="eventId in user.events"
            :key="eventId"
            class="items-center p-4 bg-gray-50 rounded-lg shadow-sm mb-4"
          >
            
  
          <h3 class="text-lg font-semibold text-gray-800">
            {{ getEventTitle(eventId) }}
          </h3>
          <div class="flex">

              <!-- Detalles del evento -->
              <div class="flex-1">
                  <p class="text-sm text-gray-600">
                      <strong>Fecha:</strong> {{ getEventDate(eventId) }}<br>
                      <strong>Hora:</strong> {{ getEventTime(eventId) }}
                    </p>
                    <button
                    @click="leaveEvent(eventId)"
                    class="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
                    >
                    Desapuntarse
                </button>
            </div>
            
            <!-- Botón de desapuntarse -->
            <!-- Imagen del evento -->
            <div class="ml-4">
                <img
                :src="getEventImage(eventId)"
                alt="Imagen del evento"
                class="h-20 object-cover w-100 justify-end text-left rounded-md mr-4"
                />
            </div>
        </div>
    </div>
        </transition-group>
      </div>
    </div>
  </template>
  
  <script>
  import { useUserStore } from '@/stores/userStore';
  import { useEventStore } from '@/stores/eventStore';
  
  export default {
    setup() {
      const userStore = useUserStore();
      const eventStore = useEventStore();
  
      const getEventTitle = (eventId) => {
        const event = eventStore.events.find((e) => e.id === eventId);
        return event ? event.titulo : 'Evento desconocido';
      };
  
      const getEventImage = (eventId) => {
        const event = eventStore.events.find((e) => e.id === eventId);
        return event ? event.imagen : '';
      };
  
      const getEventDate = (eventId) => {
        debugger;
        const eventStore = useEventStore();
        const event = eventStore.events.find((e) => e.id === eventId);
        return event ? event.fecha : '';
      };
  
      const getEventTime = (eventId) => {
        const event = eventStore.events.find((e) => e.id === eventId);
        return event ? event.hora : '';
      };
  
      const leaveEvent = (eventId) => {
        userStore.leaveEvent(eventId);
      };
  
      return {
        user: userStore.user,
        getEventTitle,
        getEventImage,
        getEventDate,
        getEventTime,
        leaveEvent,
      };
    },
  };
  </script>
  
  <style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
  </style>
  