<template>
    <div class="container flex items-center justify-center min-h-screen py-12 px-4">
      <div class="w-full max-w-md bg-white rounded-lg shadow-lg overflow-hidden">
        <div class="p-6 space-y-6">
          <div class="space-y-2 text-center">
            <h1 class="text-2xl font-bold">Crear una cuenta</h1>
            <p class="text-gray-500">Ingresa tus datos para registrarte en MiPsicoRed</p>
          </div>
          
          <form @submit.prevent="handleRegister" class="space-y-4">
            <div class="grid grid-cols-2 gap-4">
              <div class="space-y-2">
                <label for="firstName" class="block text-sm font-medium">Nombre</label>
                <input 
                  id="firstName" 
                  v-model="firstName" 
                  type="text" 
                  required
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6A9997]"
                />
              </div>
              
              <div class="space-y-2">
                <label for="lastName" class="block text-sm font-medium">Apellido</label>
                <input 
                  id="lastName" 
                  v-model="lastName" 
                  type="text" 
                  required
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6A9997]"
                />
              </div>
            </div>
            
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
              <label for="password" class="block text-sm font-medium">Contraseña</label>
              <input 
                id="password" 
                v-model="password" 
                type="password" 
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6A9997]"
              />
            </div>
            
            <div class="space-y-2">
              <label for="confirmPassword" class="block text-sm font-medium">Confirmar contraseña</label>
              <input 
                id="confirmPassword" 
                v-model="confirmPassword" 
                type="password" 
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6A9997]"
              />
            </div>
            
            <div class="flex items-center space-x-2">
              <input 
                id="terms" 
                v-model="acceptTerms" 
                type="checkbox" 
                required
                class="h-4 w-4 text-[#6A9997] focus:ring-[#6A9997] border-gray-300 rounded"
              />
              <label for="terms" class="text-sm">
                Acepto los 
                <NuxtLink to="/#" class="text-[#6A9997] hover:underline">
                  términos y condiciones
                </NuxtLink>
              </label>
            </div>
            
            <button 
              type="submit" 
              class="w-full py-2 px-4 bg-[#6A9997] hover:bg-[#5a8886] text-white font-medium rounded-md transition duration-200"
              :disabled="isLoading || !isFormValid"
            >
              {{ isLoading ? 'Registrando...' : 'Registrarse' }}
            </button>
          </form>
          
          <div class="text-center text-sm">
            ¿Ya tienes una cuenta?
            <NuxtLink to="/#" class="text-[#6A9997] hover:underline ml-1">
              Iniciar sesión
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  import { useRouter } from 'vue-router'
  
  const firstName = ref('')
  const lastName = ref('')
  const email = ref('')
  const password = ref('')
  const confirmPassword = ref('')
  const acceptTerms = ref(false)
  const isLoading = ref(false)
  const error = ref(null)
  
  const router = useRouter()
  
  const isFormValid = computed(() => {
    return firstName.value && 
           lastName.value && 
           email.value && 
           password.value && 
           confirmPassword.value && 
           password.value === confirmPassword.value && 
           acceptTerms.value
  })
  
  const handleRegister = async () => {
    if (!isFormValid.value) return
    
    isLoading.value = true
    error.value = null
    
    try {
      // Here you would implement your actual registration logic
      // For example with Nuxt Auth or a custom authentication service
      await new Promise(resolve => setTimeout(resolve, 1000)) // Simulating API call
      
      // If registration is successful, redirect to login page
      router.push('/login')
    } catch (err) {
      error.value = 'Error al registrar. Por favor, inténtalo de nuevo.'
    } finally {
      isLoading.value = false
    }
  }
  </script>