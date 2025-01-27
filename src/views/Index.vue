<template>
  <div class="flex items-center h-full justify-center overflow-hidden">
      <div class="w-full max-w-[18rem] bg-indigo-900 border border-gray-700 rounded-2xl shadow-lg p-6 dark:bg-gray-800 dark:border-gray-700">
        <div class="flex flex-col items-center space-y-4">
          <div class="text-center text-2xl font-extrabold tracking-tight text-white">
            ¡Bienvenido a GameFest!
          </div>
          <div class="text-center text-sm text-gray-300">
            Encuentra, organiza y participa en eventos de videojuegos y eSports
          </div>
          <div class="flex gap-4">
            <RouterLink
              class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300"
              to="/juegos">Ver Juegos</RouterLink>
            <RouterLink
              class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300"
              to="/eventos">Ver Eventos</RouterLink>
          </div>
        </div>
      </div>
    </div>
  </template>
  