<template>
  <div class="w-full h-screen flex flex-col bg-center bg-no-repeat bg-cover bg-fixed bg-[url('/GameFest.jpg')] bg-blend-multiply"> 
    <!-- Navegación fija en la parte superior -->
    <header class="w-full">
      <Navegation />
    </header>

    <!-- Área del contenido principal (scrollable) -->
    <main class="flex-grow overflow-y-auto pb-16"> <!-- Se agrega padding-bottom para evitar que el contenido se sobreponga al footer -->
      <router-view />
    </main>

    <!-- Pie de página fijo -->
    <footer class="w-full">
      <FooterSection />
    </footer>
  </div>
</template>

<script setup>
import Navegation from './components/Navegation.vue';
import FooterSection from './components/FooterSection.vue';
</script>
