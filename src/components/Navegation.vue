<template>
  <nav class="bg-white bg-gradient-to-r from-purple-700  border-b border-gray-200 dark:bg-gray-900">
    <div class="flex items-center justify-between p-4">
      <!-- Logo -->
      <div class="flex items-center">
        <div>
          <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-4" alt="Flowbite Logo" />
        </div>
        <div>
          <span class="text-2xl font-semibold whitespace-nowrap dark:text-white">
            GameFest
          </span>
        </div>
      </div>
      <!-- Right Content -->
      <div class="flex items-center space-x-6">
        <RouterLink to="/login" class="text-sm text-blue-600 dark:text-blue-500 hover:underline">
          Iniciar Sesion
        </RouterLink>
      </div>
    </div>
  </nav>
</template>