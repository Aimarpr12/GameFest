<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Navegation from './components/Navegation.vue';
import FooterSection from './components/FooterSection.vue';
</script>

<template>
  <div class="w-full h-screen flex flex-col bg-center bg-no-repeat bg-cover bg-[url('/GameFest.jpg')] bg-blend-multiply">
    <!-- Navegación fija en la parte superior -->
    <Navegation />
    <!-- Área del contenido principal (80%) -->
    <div style="height: 80%;">
      <router-view />
    </div>
    <!-- Pie de página fijo en la parte inferior -->
    <FooterSection />
  </div>
</template>
