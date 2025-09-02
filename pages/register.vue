<template>
  <div class="min-w-screen container flex items-center justify-center min-h-screen py-6 px-4">
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
              <input id="firstName" v-model="state.firstName" type="text" required
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6A9997]" />
            </div>

            <div class="space-y-2">
              <label for="lastName" class="block text-sm font-medium">Apellido</label>
              <input id="lastName" v-model="state.lastName" type="text" required
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6A9997]" />
            </div>
          </div>

          <div class="space-y-2">
            <label for="email" class="block text-sm font-medium">Correo electrónico</label>
            <input id="email" v-model="state.email" type="email" placeholder="correo@ejemplo.com" required
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6A9997]" />
          </div>

          <div class="space-y-2">
            <label for="phone" class="block text-sm font-medium">Teléfono</label>
            <input id="phone" v-model="state.phone" type="tel" placeholder="123-456-7890" required
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6A9997]" />
          </div>

          <div class="space-y-2">
            <label for="password" class="block text-sm font-medium">Contraseña</label>
            <input id="password" v-model="state.password" type="password" required
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6A9997]" />
          </div>

          <div class="space-y-2">
            <label for="confirmPassword" class="block text-sm font-medium">Confirmar contraseña</label>
            <input id="confirmPassword" v-model="state.confirmPassword" type="password" required
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6A9997]" />
          </div>

          <div class="flex items-center space-x-2">
            <input id="terms" v-model="acceptTerms" type="checkbox" required
              class="h-4 w-4 text-[#6A9997] focus:ring-[#6A9997] border-gray-300 rounded" />
            <label for="terms" class="text-sm">
              Acepto los
              <NuxtLink to="/#" class="text-[#6A9997] hover:underline">
                términos y condiciones
              </NuxtLink>
            </label>
          </div>

          <div class="flex items-center space-x-2">
            <input type="text" name="resetpassword" id="resetpassword" v-model="state.email" placeholder="correo@ejemplo.com" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6A9997]" />
            <p @click="handleResetPassword" class="text-sm text-gray-600">¿Olvidaste tu contraseña?</p>
          </div>

          <button type="submit"
            class="w-full py-2 px-4 bg-[#6A9997] hover:bg-[#5a8886] text-white font-medium rounded-md transition duration-200"
            :disabled="isLoading || !isFormValid">
            {{ isLoading ? 'Registrando...' : 'Registrarse' }}
          </button>
        </form>
        <p v-if="error" class="text-red-500 text-sm text-center">{{ error }}</p>

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
import { createClient } from '@supabase/supabase-js'
const config = useRuntimeConfig()
const supabase = createClient(config.public.supabaseUrl, config.public.supabaseKey)

definePageMeta({
  middleware: 'guest'
})

const state = reactive({
  email: undefined,
  password: undefined,
  confirmPassword: undefined,
  firstName: undefined,
  lastName: undefined,
  phone: undefined,
})

const acceptTerms = ref(false)
const isLoading = ref(false)
const error = ref(null)

const isFormValid = computed(() => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return state.firstName &&
    state.lastName &&
    emailRegex.test(state.email) &&
    state.password &&
    state.confirmPassword &&
    state.password === state.confirmPassword &&
    acceptTerms.value
})

const handleRegister = async () => {
  if (!isFormValid.value) {
    error.value = "Por favor completa todos los campos correctamente."
    return
  }

  isLoading.value = true
  error.value = null

  
  try {
    const { data, error: supabaseError } = await supabase.auth.signUp({
      email: state.email,
      password: state.password,
      options: {
        data: {
          first_name: state.firstName,
          last_name: state.lastName,
          phone: state.phone,
          verified: false,
          verified_at: new Date(0),
        },
        // IMPORTANT: redirect here after clicking confirmation link
        emailRedirectTo: `${window.location.origin}/dashboard`
      }
    })

    if (supabaseError) {
      error.value = supabaseError.message
      console.error(supabaseError)
    } else {
      console.log("User registered:", data)
      alert("Registro exitoso. Revisa tu correo electrónico para confirmar tu cuenta antes de iniciar sesión.")
    }

    const { data2, error: fetchError } = await useFetch('/api/mail_conf', {
      method: 'POST',
      body: {
        email: state.email,
        firstName: state.firstName,
      }
    })

  } catch (err) {
    console.error(err)
    fetchError.value = "Error al registrar. Por favor, inténtalo de nuevo."
  } finally {
    isLoading.value = false
  }
}

const handleResetPassword = () => {
  try {
    const { data, error: supabaseError } = supabase.auth.resetPasswordForEmail({
      email: state.email
    })

    if (supabaseError) {
      error.value = supabaseError.message
      console.error(supabaseError)
    } else {
      console.log("User registered:", data)
      alert("Registro exitoso. Revisa tu correo electrónico para confirmar tu cuenta antes de iniciar sesión.")
    }
  } catch (err) {
    console.error(err)
    error.value = "Error al registrar. Por favor, inténtalo de nuevo."
  } finally {
    isLoading.value = false
  }

  console.log("Test function called")
}
</script>