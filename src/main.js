import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import HomeComponent from './components/HomeComponent.vue'
import ReservarComponent from './components/ReservarComponent.vue'
import '/src/index.css'

// Definir rutas
const routes = [
  { path: '/', component: HomeComponent },
  { path: '/reservar', component: ReservarComponent }
]

// Crear router
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Manejar el scroll para anclas en la página principal
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    // Para otras navegaciones, volver al inicio
    return { top: 0 }
  }
})

// Crear y montar la aplicación
const app = createApp(App)
app.use(router)
app.mount('#app')