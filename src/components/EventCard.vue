<template>
  <div class="max-w-sm bg-white rounded-lg shadow-sm text-black">
    <img class="w-full h-48 object-cover rounded-t-lg" :src="event.imagen" alt="Imagen del evento" />
    <div class="p-5">
      <h6 class="mb-2 text-2xl font-bold tracking-tight">{{ event.titulo }}</h6>
      <p class="mb-3 font-normal"><strong class="font-bold">Fecha: </strong>{{ event.fecha }}</p>
      <p class="mb-3 font-normal"><strong class="font-bold">Hora: </strong>{{ event.hora }}</p>
      <p class="mb-3 font-normal"><strong class="font-bold">Plazas libres: </strong>{{ event.plazasLibres }}</p>
    </div>
  </div>
</template>

<script>
import { useModalStore } from '@/stores/modalStore';

export default {
  props: {
    event: Object,
  },
  methods: {
    
  },
};
</script>
