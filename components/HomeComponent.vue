<template>
  <div class="font-sans bg-[#fcfaf7]">
    <!-- Header -->
    <header class="bg-[#fcfaf7]/90 backdrop-blur-sm shadow-sm top-0 z-99 border-b border-[#e8d5c4]/30 sticky w-full">
      <div class="container mx-auto px-4 py-4 flex justify-between items-center">
        <div class="flex items-center">
          <router-link to="#home">
            <img src="/images/logo.svg" alt="NatureMind Logo" class="h-12 w-auto" />
          </router-link>
        </div>
        <nav class="hidden md:flex space-x-8">
          <router-link to="#services" class="text-[#5a7d7c] hover:text-[#7a9e9f] transition">Servicios</router-link>
          <router-link to="#terapeutas" class="text-[#5a7d7c] hover:text-[#7a9e9f] transition">Nuestros
            Terapeutas</router-link>
          <a href="#how-it-works" class="text-[#5a7d7c] hover:text-[#7a9e9f] transition">Cómo Funciona</a>
          <a href="#pricing" class="text-[#5a7d7c] hover:text-[#7a9e9f] transition">Precios</a>
        </nav>
        <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden text-[#5a7d7c]">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <div class="flex space-x-8">
          <a href="/register"
            class="hidden md:block bg-[#7a9e9f] text-white px-6 py-2 rounded-full hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
            Registrarse
          </a>
          <a href="/login"
            class="bg-[#fcfaf7] text-[#7a9e9f] px-4 py-2 rounded-full text-center hover:shadow-lg transition border-[#7a9e9f] border-1">
            Iniciar sesión
          </a>
        </div>

      </div>
      <!-- Mobile menu -->
      <div v-if="mobileMenuOpen" class="md:hidden bg-[#fcfaf7]/90 backdrop-blur-sm px-4 py-2 shadow-md">
        <nav class="flex flex-col space-y-3 pb-3">
          <a href="#services" class="text-[#5a7d7c] hover:text-[#7a9e9f] transition">Servicios</a>
          <a href="#therapists" class="text-[#5a7d7c] hover:text-[#7a9e9f] transition">Nuestros Terapeutas</a>
          <a href="#how-it-works" class="text-[#5a7d7c] hover:text-[#7a9e9f] transition">Cómo Funciona</a>
          <a href="#pricing" class="text-[#5a7d7c] hover:text-[#7a9e9f] transition">Precios</a>
          <a href="/blog" class="text-[#5a7d7c] hover:text-[#7a9e9f] transition">Blog</a>
          <div>
            <a href="/register"
              class="bg-gradient-to-r from-[#7a9e9f] to-[#b8d8d8] text-white px-0 py-2 rounded-full text-center hover:shadow-lg transition">
              Registrate
            </a>
            <a href="/login"
              class="bg-gradient-to-r from-[#7a9e9f] to-[#b8d8d8] text-white px-0 py-2 rounded-full text-center hover:shadow-lg transition">
              Iniciar sesión
            </a>
          </div>

        </nav>
      </div>
    </header>

    <!-- Hero Section -->
    <section id="home" class="relative overflow-hidden py-20">
      <div class="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1600')] bg-cover bg-center opacity-10">
      </div>
      <div class="absolute inset-0 bg-gradient-to-r from-[#f8f3eb]/90 to-[#e8d5c4]/50"></div>
      <div class="absolute top-0 right-0 w-96 h-96 bg-[#e8d5c4] rounded-full opacity-20 blur-3xl -mr-48 -mt-48"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-[#b8d8d8] rounded-full opacity-20 blur-3xl -ml-48 -mb-48"></div>
      <div class="container mx-auto px-4 flex flex-col md:flex-row items-center relative z-10">
        <div class="md:w-1/2 mb-10 md:mb-0">
          <div class="inline-block px-3 py-1 bg-[#b8d8d8]/30 text-[#5a7d7c] rounded-full text-sm font-medium mb-4">
            Terapia online
          </div>
          <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">
            Reserva <span class="text-[#5a7d7c]">GRATIS</span> tu primera sesión
          </h2>
          <p class="text-lg text-gray-600 mb-8">
            Agenda tus sesiones en línea con expertos certificados de forma rápida, segura y desde la comodidad de tu
            hogar. Conecta con profesionales verificados en distintas áreas y recibe atención personalizada sin salir de
            casa.
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <a href="/reservar"
              class="bg-[#7a9e9f] text-white px-8 py-3 rounded-full text-center hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
              Pide tu cita
            </a>
            <router-link to="/login"
              class="border border-[#7a9e9f] text-[#5a7d7c] px-8 py-3 rounded-full text-center hover:bg-[#f8f3eb] transition">
              Inicia sesión
            </router-link>
          </div>
        </div>
        <div class="md:w-1/2 md:pl-10">
          <div class="relative">
            <div class="absolute -top-4 -left-4 w-24 h-24 bg-[#e8d5c4] rounded-full opacity-70"></div>
            <div class="absolute -bottom-4 -right-4 w-32 h-32 bg-[#b8d8d8] rounded-full opacity-70"></div>
            <img src="/images/bram.jpeg" alt="Sesión de terapia online"
              class="rounded-[2.5rem] shadow-lg w-full relative z-10 h-[500px] object-cover" />
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="bg-[#fcfaf7] relative overflow-hidden py-16">
      <div class="absolute top-0 right-0 w-64 h-64 bg-[#e8d5c4] rounded-full opacity-30 -mr-32 -mt-32"></div>
      <div class="absolute bottom-0 left-0 w-64 h-64 bg-[#b8d8d8] rounded-full opacity-30 -ml-32 -mb-32"></div>
      <div class="container mx-auto px-4 relative z-10">
        <div class="text-center max-w-3xl mx-auto mb-12">
          <h2 class="text-3xl font-bold text-gray-800 mb-4">Terapias Online Personalizadas Para Tu Bienestar</h2>
          <p class="text-gray-600">
            Terapias adaptadas a ti: combinamos distintos métodos psicológicos para ofrecer el tratamiento que mejor se
            ajuste a tus necesidades
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="(service, index) in services" :key="index"
            class="bg-white p-8 rounded-[2rem] shadow-md hover:shadow-xl transition duration-300 border border-[#e8d5c4]/30">
            <div
              class="w-16 h-16 bg-gradient-to-br from-[#b8d8d8]/50 to-[#e8d5c4]/50 rounded-2xl flex items-center justify-center mb-6 transform -rotate-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-[#5a7d7c]" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="service.icon" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-800 mb-3">{{ service.title }}</h3>
            <p class="text-gray-600">{{ service.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Therapists Section -->
    <section class="py-16 bg-gradient-to-b from-[#fcfaf7] to-[#f8f3eb]">
      <div class="container mx-auto px-4">
        <div class="text-center max-w-3xl mx-auto mb-12">
          <h2 class="text-3xl font-bold text-gray-800 mb-4">Conoce a nuestros psicológicos certificados</h2>
          <p class="text-gray-600">
            Conoce a nuestro equipo de terapeutas experimentados dedicados a apoyar tu viaje de bienestar mental.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="(therapist, index) in therapists" :key="index"
            class="bg-white p-6 rounded-[2rem] shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
            <div class="relative mb-6">
              <div
                class="absolute inset-0 bg-gradient-to-br from-[#e8d5c4]/70 to-[#b8d8d8]/50 rounded-2xl transform rotate-3">
              </div>
              <img :src="therapist.image" :alt="therapist.name"
                class="w-full h-64 object-cover rounded-[1.5rem] relative z-10" />
            </div>
            <h3 class="text-xl font-semibold text-gray-800 mb-1">{{ therapist.name }}</h3>
            <p class="text-[#5a7d7c] mb-3">{{ therapist.specialty }}</p>
            <p class="text-gray-600 mb-4">{{ therapist.bio }}</p>
            <router-link to="/reservar"
              class="text-[#5a7d7c] hover:text-[#7a9e9f] font-medium inline-flex items-center">
              Conecta con {{ therapist.name.split(" ")[0] }}
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clip-rule="evenodd" />
              </svg>
            </router-link>
          </div>
        </div>
        <div class="w-full flex justify-center container mx-auto px-4 mt-8">
          <a href="#book"
            class="bg-[#7a9e9f] text-white text-xl px-8 py-2 mt-8 rounded-full text-center hover:shadow-lg transition">
            Conoce a todos nuestros terapeutas
          </a>

        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-[#f8f3eb] py-12 border-t border-[#e8d5c4]/30">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div class="mb-4">
              <img src="/images/logo.svg" alt="NatureMind Logo" class="h-10 w-auto" />
            </div>
            <p class="text-gray-600">
              Tu red de apoyo emocional, estés donde estés
            </p>
          </div>
          <div>
            <h4 class="text-lg font-semibold text-gray-800 mb-4">Enlaces Rápidos</h4>
            <ul class="space-y-2">
              <li>
                <a href="#services" class="text-gray-600 hover:text-[#7a9e9f] transition">Servicios</a>
              </li>
              <li>
                <a href="#therapists" class="text-gray-600 hover:text-[#7a9e9f] transition">Nuestros Terapeutas</a>
              </li>
              <li>
                <a href="#how-it-works" class="text-gray-600 hover:text-[#7a9e9f] transition">Cómo Funciona</a>
              </li>
              <li>
                <a href="#pricing" class="text-gray-600 hover:text-[#7a9e9f] transition">Precios</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 class="text-lg font-semibold text-gray-800 mb-4">Contacto</h4>
            <ul class="space-y-2 text-gray-600">
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[#7a9e9f] mr-2 mt-0.5" viewBox="0 0 20 20"
                  fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>info@mipsicored.com</span>
              </li>
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[#7a9e9f] mr-2 mt-0.5" viewBox="0 0 20 20"
                  fill="currentColor">
                  <path
                    d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>(555) 123-4567</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 class="text-lg font-semibold text-gray-800 mb-4">Boletín</h4>
            <p class="text-gray-600 mb-4">Recibe consejos de psicología y mindfulness</p>
            <div class="flex">
              <input type="email" placeholder="Tu correo"
                class="px-4 py-2 rounded-l-xl w-full focus:outline-none border border-gray-200 text-gray-800" />
              <button
                class="bg-gradient-to-r from-[#7a9e9f] to-[#b8d8d8] px-4 py-2 rounded-r-xl hover:shadow-md transition">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" viewBox="0 0 20 20"
                  fill="currentColor">
                  <path fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div class="border-t border-[#e8d5c4]/30 mt-12 pt-8 text-center text-gray-500">
          <p>&copy; {{ new Date().getFullYear() }} MiPsicoRed. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ReservarComponent from '@/components/ReservarComponent.vue';

    const scrollToSection = (id, offset = 100) => {
      const el = document.getElementById(id);
      if (el) {
        const y = el.getBoundingClientRect().top + window.pageYOffset - offset;

        window.scrollTo({
          top: y,
          behavior: 'smooth'
        });
      }
    }

    const services = ref([
      {
        title: "Terapia Individual",
        description: "Sesiones personalizadas con un terapeuta compasivo adaptadas a tu viaje único y crecimiento personal.",
        icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
      },
      {
        title: "Terapia de Parejas",
        description: "Nutre tu relación en un espacio seguro y guiado donde ambos pueden crecer juntos y sanar.",
        icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
      },
      {
        title: "Mindfulness y Alivio del Estrés",
        description: "Aprende técnicas naturales para manejar la ansiedad, reducir el estrés y cultivar la paz interior en tu vida diaria.",
        icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
      },
    ])

    const therapists = ref([
      {
        name: "Dra. Sara Jiménez",
        specialty: "Psicóloga Holística",
        bio: "Especializada en ansiedad, depresión y recuperación de traumas con un enfoque en la conexión mente-cuerpo y la sanación natural.",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        name: "Dr. Miguel Chen",
        specialty: "Guía de Relaciones",
        bio: "Experto en terapia de parejas, dinámicas familiares y crecimiento interpersonal a través de la comunicación compasiva.",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        name: "Dra. Luisa Rodríguez",
        specialty: "Practicante de Mindfulness",
        bio: "Especializada en terapia cognitiva basada en mindfulness para ansiedad, manejo del estrés y transformación personal.",
        image: "/placeholder.svg?height=300&width=300",
      },
    ])

    const steps = ref([
      {
        title: "Conecta",
        description: "Crea tu cuenta y comparte tus necesidades a través de nuestro cuestionario nutritivo.",
      },
      {
        title: "Empareja",
        description: "Te asignaremos un terapeuta cuyo enfoque resuene con tu viaje único.",
      },
      {
        title: "Programa",
        description: "Elige horarios de sesiones que fluyan naturalmente con el ritmo de tu vida.",
      },
      {
        title: "Crece",
        description: "Comienza tu viaje de sanación a través de nuestro entorno online seguro y de apoyo.",
      },
    ])

    const testimonials = ref([
      {
        text: "El enfoque natural de la terapia ha transformado mi vida. Me siento más centrada y en paz de lo que he estado en años. Mi terapeuta realmente escucha y guía con tanta compasión.",
        name: "Jaime L.",
      },
      {
        text: "Estaba dudoso sobre la terapia online, pero la experiencia ha sido increíblemente nutritiva. Puedo conectarme desde mi jardín o mi lugar favorito en casa, lo que contribuye al proceso de sanación.",
        name: "Alejandro T.",
      },
      {
        text: "Las técnicas de mindfulness que he aprendido se han convertido en herramientas esenciales en mi vida diaria. Estoy más presente, equilibrado y capaz de navegar los desafíos con una sensación de calma.",
        name: "Mónica K.",
      },
    ])

    const plans = ref([
      {
        name: "Semilla",
        price: 99,
        popular: false,
        features: [
          "1 sesión nutritiva al mes",
          "Soporte por texto en horario laboral",
          "Biblioteca de meditaciones guiadas",
          "Acceso al diario de bienestar",
        ],
      },
      {
        name: "Florecimiento",
        price: 179,
        popular: true,
        features: [
          "2 sesiones nutritivas al mes",
          "Soporte por teyxto ilimitado",
          "Biblioteca de meditaciones guiadas",
          "Acceso al diario de bienestar",
          "Ejercicios semanales de mindfulness",
          "Programación prioritaria",
        ],
      },
      {
        name: "Prosperidad",
        price: 249,
        popular: false,
        features: [
          "4 sesiones nutritivas al mes",
          "Soporte por texto ilimitado",
          "Biblioteca de meditaciones guiadas",
          "Acceso al diario de bienestar",
          "Ejercicios semanales de mindfulness",
          "Programación prioritaria",
          "Taller mensual de bienestar",
        ],
      },
    ])
</script>