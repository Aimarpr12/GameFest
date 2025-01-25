<template>
    <div class="flex items-center justify-center min-h-screen bg-gradient-to-r">
      <div class="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        <h1 class="text-2xl font-bold text-center text-gray-900 dark:text-white">
          Iniciar Sesión
        </h1>
        <p class="text-sm text-center text-gray-600 dark:text-gray-400 mt-2">
          Accede a tu cuenta para continuar
        </p>
        <form class="mt-6">
          <!-- Campo de correo -->
          <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              class="mt-1 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
              placeholder="ejemplo@correo.com"
              required
            />
          </div>
  
          <!-- Campo de contraseña -->
          <div class="mb-6">
            <label for="password" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              class="mt-1 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
              placeholder="••••••••"
              required
            />
          </div>
  
          <!-- Botón de inicio de sesión -->
          <button
            type="submit"
            class="w-full rounded-lg bg-blue-600 px-4 py-2 text-white font-medium hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800">
            Iniciar Sesión
          </button>
        </form>
  
        <!-- Enlace para registrarse -->
        <p class="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
          ¿No tienes cuenta?
          <RouterLink
            to="/registro"
            class="text-blue-600 hover:underline dark:text-blue-500">
            Regístrate aquí
          </RouterLink>
        </p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LoginView',
  };
  </script>
  