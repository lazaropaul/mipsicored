<template>
    <div class="container flex items-center justify-center min-h-screen py-12 px-4">
      <div class="w-full max-w-md bg-white rounded-lg shadow-lg overflow-hidden">
        <div class="p-6 space-y-6">
          <div class="space-y-2 text-center">
            <h1 class="text-2xl font-bold">Iniciar sesión</h1>
            <p class="text-gray-500">Ingresa tus credenciales para acceder a tu cuenta</p>
          </div>
          
          <form @submit.prevent="handleLogin" class="space-y-4">
            <div class="space-y-2">
              <label for="email" class="block text-sm font-medium">Correo electrónico</label>
              <input 
                id="email" 
                v-model="email" 
                type="email" 
                placeholder="correo@ejemplo.com" 
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6A9997]"
              />
            </div>
            
            <div class="space-y-2">
              <div class="flex items-center justify-between">
                <label for="password" class="block text-sm font-medium">Contraseña</label>
                <NuxtLink to="/#" class="text-sm text-gray-500 hover:text-[#6A9997]">
                  ¿Olvidaste tu contraseña?
                </NuxtLink>
              </div>
              <input 
                id="password" 
                v-model="password" 
                type="password" 
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6A9997]"
              />
            </div>
            
            <button 
              type="submit" 
              class="w-full py-2 px-4 bg-[#6A9997] hover:bg-[#5a8886] text-white font-medium rounded-md transition duration-200"
              :disabled="isLoading"
            >
              {{ isLoading ? 'Iniciando sesión...' : 'Iniciar sesión' }}
            </button>
          </form>
          
          <div class="text-center text-sm">
            ¿No tienes una cuenta?
            <NuxtLink to="/register" class="text-[#6A9997] hover:underline ml-1">
              Regístrate
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  
  const router = useRouter()
  const email = ref('')
  const password = ref('')
  const isLoading = ref(false)
  const error = ref(null)
  
  const handleLogin = async () => {
    isLoading.value = true
    error.value = null
    
    try {
      // Here you would implement your actual login logic
      // For example with Nuxt Auth or a custom authentication service
      await new Promise(resolve => setTimeout(resolve, 1000)) // Simulating API call
      
      // If login is successful, redirect to dashboard or home
      router.push('/dashboard')
    } catch (err) {
      error.value = 'Credenciales incorrectas. Por favor, inténtalo de nuevo.'
    } finally {
      isLoading.value = false
    }
  }
  </script>