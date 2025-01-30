<template>
    <div class="max-w-sm bg-white rounded-lg shadow-sm text-black">
        <img class="w-full h-48 object-cover rounded-t-lg" :src="game.imagen" alt="" />
        <div class="p-5">
            <a href="#">
                <h6 class="mb-2 text-2xl font-bold tracking-tight ">{{ game.titulo }}</h6>
            </a>
            <p class="mb-3 font-normal ">{{ game.genero }}</p>
            <p class="mb-3 font-normal ">{{ game.descripcion }}</p>
            <p class="mb-3 font-normal "><strong class="font-bold">Plataformas: </strong>{{ game.plataformas.join(', ') }}</p>
            
        </div>
    </div>


  </template>
  
  <script>
  export default {
    props: {
      game: Object,
    },
  };
  </script>
  
  <style scoped>
  /* Estilos opcionales para la card */
  </style>
  