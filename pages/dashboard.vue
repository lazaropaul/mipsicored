<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <header class="bg-white shadow-sm border-b">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <!-- Logo -->
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <NuxtLink to="/">
                <img src="/images/logo.svg" alt="MiPsicoRed Logo" class="h-8 w-auto" />
              </NuxtLink>
            </div>
            <div class="ml-3">
              <h1 class="text-xl font-semibold text-gray-900">Mi Panel</h1>
            </div>
          </div>

          <!-- User Menu -->
          <div class="flex items-center space-x-4">
            <button class="text-gray-500 hover:text-gray-700">
              <Bell class="h-5 w-5" />
            </button>
            <div class="relative">
              <button @click="showUserMenu = !showUserMenu" class="flex items-center space-x-2 text-gray-700 hover:text-gray-900">
                <div class="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                  <User class="h-4 w-4 text-teal-600" />
                </div>
                <span class="text-sm font-medium">{{ profile?.first_name }}</span>
                <ChevronDown class="h-4 w-4" />
              </button>
              
              <!-- Dropdown Menu -->
              <div v-if="showUserMenu" class="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border z-10">
                <div class="py-1">
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Mi Perfil</a>
                  <a href="#" @click="activeTab = 'settings'" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Configuración</a>
                  <hr class="my-1">
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Cerrar Sesión</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Navigation Tabs -->
      <div class="border-b border-gray-200 mb-8">
        <nav class="-mb-px flex space-x-8">
          <button 
            @click="activeTab = 'dashboard'"
            :class="activeTab === 'dashboard' ? 'border-teal-500 text-teal-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'"
            class="whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm"
          >
            Panel Principal
          </button>
          <button 
            @click="activeTab = 'sessions'"
            :class="activeTab === 'sessions' ? 'border-teal-500 text-teal-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'"
            class="whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm"
          >
            Mis Sesiones
          </button>
          <button 
            @click="activeTab = 'book'"
            :class="activeTab === 'book' ? 'border-teal-500 text-teal-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'"
            class="whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm"
          >
            Reservar Cita
          </button>
          <button 
            @click="activeTab = 'settings'"
            :class="activeTab === 'settings' ? 'border-teal-500 text-teal-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'"
            class="whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm"
          >
            Configuración
          </button>
        </nav>
      </div>

      <!-- Dashboard Content -->
      <div v-if="activeTab === 'dashboard'">
        <!-- Welcome Section -->
        <div class="bg-gradient-to-r from-teal-50 to-green-50 rounded-xl p-6 mb-8 shadow-sm border">
          <div class="flex items-center justify-between">
            <div>
              <h2 class="text-2xl font-bold text-gray-900 mb-2">¡Hola, {{ profile?.first_name }}!</h2>
              <p class="text-gray-600">Bienvenido a tu panel de terapia online</p>
            </div>
            <div class="hidden md:block">
              <div class="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center">
                <Heart class="h-8 w-8 text-teal-600" />
              </div>
            </div>
          </div>
        </div>

        <!-- Stats Cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div class="bg-white rounded-xl shadow-sm border p-6">
            <div class="flex items-center">
              <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Calendar class="h-6 w-6 text-blue-600" />
              </div>
              <div class="ml-4">
                <p class="text-sm font-medium text-gray-600">Próxima Sesión</p>
                <p class="text-2xl font-bold text-gray-900">{{ nextSession.date }}</p>
                <p class="text-sm text-gray-500">{{ nextSession.time }}</p>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-xl shadow-sm border p-6">
            <div class="flex items-center">
              <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <CheckCircle class="h-6 w-6 text-green-600" />
              </div>
              <div class="ml-4">
                <p class="text-sm font-medium text-gray-600">Sesiones Completadas</p>
                <p class="text-2xl font-bold text-gray-900">{{ stats.completed }}</p>
                <p class="text-sm text-gray-500">Este mes</p>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-xl shadow-sm border p-6">
            <div class="flex items-center">
              <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Clock class="h-6 w-6 text-purple-600" />
              </div>
              <div class="ml-4">
                <p class="text-sm font-medium text-gray-600">Tiempo Total</p>
                <p class="text-2xl font-bold text-gray-900">{{ stats.totalHours }}h</p>
                <p class="text-sm text-gray-500">En terapia</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Upcoming Sessions -->
        <div class="bg-white rounded-xl shadow-sm border p-6 mb-8">
          <div class="flex items-center justify-between mb-6">
            <h3 class="text-lg font-semibold text-gray-900">Próximas Sesiones</h3>
            <button @click="activeTab = 'sessions'" class="text-teal-600 hover:text-teal-700 text-sm font-medium">
              Ver todas
            </button>
          </div>
          
          <div class="space-y-4">
            <div v-for="session in upcomingSessions" :key="session.id" class="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div class="flex items-center">
                <div class="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                  <User class="h-5 w-5 text-teal-600" />
                </div>
                <div class="ml-4">
                  <p class="font-medium text-gray-900">{{ session.therapist }}</p>
                  <p class="text-sm text-gray-500">{{ session.date }} - {{ session.time }}</p>
                </div>
              </div>
              <div class="flex items-center space-x-2">
                <span class="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                  Confirmada
                </span>
                <button class="text-gray-400 hover:text-gray-600">
                  <MoreVertical class="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Quick Actions -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-white rounded-xl shadow-sm border p-6">
            <h3 class="text-lg font-semibold text-gray-900 mb-4">Acciones Rápidas</h3>
            <div class="space-y-3">
              <button @click="activeTab = 'book'" class="w-full flex items-center justify-center px-4 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors">
                <Plus class="h-4 w-4 mr-2" />
                Reservar Nueva Sesión
              </button>
              <button class="w-full flex items-center justify-center px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                <MessageCircle class="h-4 w-4 mr-2" />
                Contactar Terapeuta
              </button>
            </div>
          </div>

          <div class="bg-white rounded-xl shadow-sm border p-6">
            <h3 class="text-lg font-semibold text-gray-900 mb-4">Recursos</h3>
            <div class="space-y-3">
              <a href="#" class="block p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div class="flex items-center">
                  <FileText class="h-5 w-5 text-gray-400 mr-3" />
                  <div>
                    <p class="font-medium text-gray-900">Ejercicios de Relajación</p>
                    <p class="text-sm text-gray-500">Técnicas para el bienestar</p>
                  </div>
                </div>
              </a>
              <a href="#" class="block p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div class="flex items-center">
                  <BookOpen class="h-5 w-5 text-gray-400 mr-3" />
                  <div>
                    <p class="font-medium text-gray-900">Biblioteca de Recursos</p>
                    <p class="text-sm text-gray-500">Artículos y guías</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Sessions Tab -->
      <div v-if="activeTab === 'sessions'">
        <div class="bg-white rounded-xl shadow-sm border">
          <div class="p-6 border-b border-gray-200">
            <div class="flex items-center justify-between">
              <h2 class="text-xl font-semibold text-gray-900">Mis Sesiones</h2>
              <div class="flex space-x-2">
                <button 
                  @click="sessionFilter = 'upcoming'"
                  :class="sessionFilter === 'upcoming' ? 'bg-teal-100 text-teal-700' : 'text-gray-500 hover:text-gray-700'"
                  class="px-3 py-1 rounded-md text-sm font-medium"
                >
                  Próximas
                </button>
                <button 
                  @click="sessionFilter = 'completed'"
                  :class="sessionFilter === 'completed' ? 'bg-teal-100 text-teal-700' : 'text-gray-500 hover:text-gray-700'"
                  class="px-3 py-1 rounded-md text-sm font-medium"
                >
                  Completadas
                </button>
              </div>
            </div>
          </div>
          
          <div class="p-6">
            <div class="space-y-4">
              <div v-for="session in filteredSessions" :key="session.id" class="border rounded-lg p-4">
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <div class="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                      <User class="h-6 w-6 text-teal-600" />
                    </div>
                    <div class="ml-4">
                      <h3 class="font-medium text-gray-900">{{ session.therapist }}</h3>
                      <p class="text-sm text-gray-500">{{ session.specialty }}</p>
                      <p class="text-sm text-gray-500">{{ session.date }} - {{ session.time }}</p>
                    </div>
                  </div>
                  <div class="flex items-center space-x-3">
                    <span :class="getStatusClass(session.status)" class="px-2 py-1 text-xs font-medium rounded-full">
                      {{ session.status }}
                    </span>
                    <button v-if="session.status === 'Próxima'" class="text-teal-600 hover:text-teal-700 text-sm font-medium">
                      Unirse
                    </button>
                    <button class="text-gray-400 hover:text-gray-600">
                      <MoreVertical class="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Book Session Tab -->
      <div v-if="activeTab === 'book'">
        <div class="max-w-2xl mx-auto">
          <div class="bg-white rounded-xl shadow-sm border p-6">
            <h2 class="text-xl font-semibold text-gray-900 mb-6">Reservar Nueva Sesión</h2>
            
            <form @submit.prevent="bookSession" class="space-y-6">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Seleccionar Terapeuta</label>
                <select v-model="bookingForm.therapist" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500">
                  <option value="">Selecciona un terapeuta</option>
                  <option v-for="therapist in therapists" :key="therapist.id" :value="therapist.id">
                    {{ therapist.name }} - {{ therapist.specialty }}
                  </option>
                </select>
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Fecha Preferida</label>
                <input 
                  v-model="bookingForm.date" 
                  type="date" 
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                >
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Hora Preferida</label>
                <select v-model="bookingForm.time" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500">
                  <option value="">Selecciona una hora</option>
                  <option value="09:00">09:00</option>
                  <option value="10:00">10:00</option>
                  <option value="11:00">11:00</option>
                  <option value="14:00">14:00</option>
                  <option value="15:00">15:00</option>
                  <option value="16:00">16:00</option>
                  <option value="17:00">17:00</option>
                </select>
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Notas (Opcional)</label>
                <textarea 
                  v-model="bookingForm.notes" 
                  rows="3" 
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  placeholder="Comparte cualquier información relevante para tu sesión..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                class="w-full bg-teal-600 text-white py-3 px-4 rounded-lg hover:bg-teal-700 transition-colors font-medium"
              >
                Reservar Sesión
              </button>
            </form>
          </div>
        </div>
      </div>

      <!-- Settings Tab -->
      <div v-if="activeTab === 'settings'">
        <div class="max-w-2xl mx-auto space-y-6">
          <!-- Profile Settings -->
          <div class="bg-white rounded-xl shadow-sm border p-6">
            <h3 class="text-lg font-semibold text-gray-900 mb-4">Información Personal</h3>
            <form class="space-y-4">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                  <input 
                    v-model="settings.name" 
                    type="text" 
                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  >
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input 
                    v-model="settings.email" 
                    type="email" 
                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  >
                </div>
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
                <input 
                  v-model="settings.phone" 
                  type="tel" 
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                >
              </div>
            </form>
          </div>

          <!-- Notification Settings -->
          <div class="bg-white rounded-xl shadow-sm border p-6">
            <h3 class="text-lg font-semibold text-gray-900 mb-4">Notificaciones</h3>
            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <div>
                  <p class="font-medium text-gray-900">Recordatorios de sesión</p>
                  <p class="text-sm text-gray-500">Recibe recordatorios antes de tus sesiones</p>
                </div>
                <button 
                  @click="settings.notifications.sessions = !settings.notifications.sessions"
                  :class="settings.notifications.sessions ? 'bg-teal-600' : 'bg-gray-200'"
                  class="relative inline-flex h-6 w-11 items-center rounded-full transition-colors"
                >
                  <span 
                    :class="settings.notifications.sessions ? 'translate-x-6' : 'translate-x-1'"
                    class="inline-block h-4 w-4 transform rounded-full bg-white transition-transform"
                  ></span>
                </button>
              </div>
              
              <div class="flex items-center justify-between">
                <div>
                  <p class="font-medium text-gray-900">Nuevos recursos</p>
                  <p class="text-sm text-gray-500">Notificaciones sobre nuevos materiales</p>
                </div>
                <button 
                  @click="settings.notifications.resources = !settings.notifications.resources"
                  :class="settings.notifications.resources ? 'bg-teal-600' : 'bg-gray-200'"
                  class="relative inline-flex h-6 w-11 items-center rounded-full transition-colors"
                >
                  <span 
                    :class="settings.notifications.resources ? 'translate-x-6' : 'translate-x-1'"
                    class="inline-block h-4 w-4 transform rounded-full bg-white transition-transform"
                  ></span>
                </button>
              </div>
            </div>
          </div>

          <!-- Save Button -->
          <div class="flex justify-end">
            <button 
              @click="saveSettings"
              class="bg-teal-600 text-white py-2 px-6 rounded-lg hover:bg-teal-700 transition-colors font-medium"
            >
              Guardar Cambios
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
const { user, profile } = useAuth()
import { 
  Bell, User, ChevronDown, Heart, Calendar, CheckCircle, Clock, 
  MoreVertical, Plus, MessageCircle, FileText, BookOpen 
} from 'lucide-vue-next'

// Reactive data
const activeTab = ref('dashboard')
const showUserMenu = ref(false)
const sessionFilter = ref('upcoming')

// Renamed to avoid conflict with useAuth's user
const localUser = ref({
  name: 'Iker',
  email: 'iker@mipsicored.com'
})

const nextSession = ref({
  date: '15 Ene',
  time: '10:00 AM'
})

const stats = ref({
  completed: 8,
  totalHours: 12
})

const upcomingSessions = ref([
  {
    id: 1,
    therapist: 'Dr. Carlos Ruiz',
    specialty: 'Psicología Clínica',
    date: '15 Enero 2024',
    time: '10:00 AM',
    status: 'Próxima'
  },
  {
    id: 2,
    therapist: 'Dra. Ana López',
    specialty: 'Terapia Familiar',
    date: '18 Enero 2024',
    time: '3:00 PM',
    status: 'Próxima'
  }
])

const allSessions = ref([
  ...upcomingSessions.value,
  {
    id: 3,
    therapist: 'Dr. Carlos Ruiz',
    specialty: 'Psicología Clínica',
    date: '10 Enero 2024',
    time: '10:00 AM',
    status: 'Completada'
  },
  {
    id: 4,
    therapist: 'Dra. Ana López',
    specialty: 'Terapia Familiar',
    date: '8 Enero 2024',
    time: '2:00 PM',
    status: 'Completada'
  }
])

const therapists = ref([
  { id: 1, name: 'Dr. Carlos Ruiz', specialty: 'Psicología Clínica' },
  { id: 2, name: 'Dra. Ana López', specialty: 'Terapia Familiar' },
  { id: 3, name: 'Dr. Miguel Torres', specialty: 'Psicología Cognitiva' }
])

const bookingForm = ref({
  therapist: '',
  date: '',
  time: '',
  notes: ''
})

const settings = ref({
  name: 'María González',
  email: 'maria@example.com',
  phone: '+34 600 123 456',
  notifications: {
    sessions: true,
    resources: false
  }
})

// Computed properties
const filteredSessions = computed(() => {
  if (sessionFilter.value === 'upcoming') {
    return allSessions.value.filter(session => session.status === 'Próxima')
  } else {
    return allSessions.value.filter(session => session.status === 'Completada')
  }
})

// Methods
const getStatusClass = (status) => {
  switch (status) {
    case 'Próxima':
      return 'bg-blue-100 text-blue-800'
    case 'Completada':
      return 'bg-green-100 text-green-800'
    case 'Cancelada':
      return 'bg-red-100 text-red-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

const bookSession = () => {
  // Handle session booking
  console.log('Booking session:', bookingForm.value)
  alert('¡Sesión reservada exitosamente!')
  bookingForm.value = {
    therapist: '',
    date: '',
    time: '',
    notes: ''
  }
}

const saveSettings = () => {
  // Handle settings save
  console.log('Saving settings:', settings.value)
  alert('¡Configuración guardada exitosamente!')
}

// Close user menu when clicking outside
const handleClickOutside = (event) => {
  if (!event.target.closest('.relative')) {
    showUserMenu.value = false
  }
}

// Add event listener for clicking outside
if (typeof window !== 'undefined') {
  document.addEventListener('click', handleClickOutside)
}

</script>

<style scoped>
/* Custom styles to match the mipsicored.com design */
.bg-teal-600 {
  background-color: #0d9488;
}

.hover\:bg-teal-700:hover {
  background-color: #0f766e;
}

.text-teal-600 {
  color: #0d9488;
}

.border-teal-500 {
  border-color: #14b8a6;
}

.focus\:ring-teal-500:focus {
  --tw-ring-color: #14b8a6;
}

.focus\:border-teal-500:focus {
  border-color: #14b8a6;
}
</style>