<template>
  <div class="bg-gray-50 min-h-screen">
    <!-- Hero Section -->
    <div class="bg-white py-12 border-b border-gray-200">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-3xl md:text-4xl font-bold mb-4">Blog de MiPsicoRed</h1>
          <p class="text-gray-600 text-lg">
            Artículos, consejos y recursos sobre salud mental y bienestar psicológico
          </p>
        </div>
      </div>
    </div>

    <!-- Featured Post -->
    <div class="container mx-auto px-4 py-12">
      <div class="bg-white rounded-lg shadow-md overflow-hidden mb-12">
        <div class="md:flex">
          <div class="md:w-1/2">
            <img 
              src="/placeholder.svg?height=600&width=800" 
              alt="Featured post" 
              class="w-full h-64 md:h-full object-cover"
            />
          </div>
          <div class="md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
            <div class="flex items-center mb-4">
              <span class="bg-[#6A9997]/10 text-[#6A9997] text-xs font-medium px-2.5 py-0.5 rounded">
                Destacado
              </span>
              <span class="text-gray-500 text-sm ml-auto">15 Mayo 2023</span>
            </div>
            <h2 class="text-2xl font-bold mb-4 text-gray-800">La importancia de cuidar tu salud mental en la era digital</h2>
            <p class="text-gray-600 mb-6">
              En un mundo cada vez más conectado, es fundamental establecer límites saludables con la tecnología y priorizar nuestro bienestar mental. Descubre estrategias efectivas para mantener un equilibrio digital.
            </p>
            <NuxtLink to="/blog/salud-mental-era-digital" class="inline-flex items-center text-[#6A9997] font-medium hover:underline">
              Leer artículo completo
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </NuxtLink>
          </div>
        </div>
      </div>

      <div class="flex flex-col lg:flex-row gap-8">
        <!-- Main Content -->
        <div class="lg:w-2/3">
          <div class="flex gap-8">
            <article 
              v-for="post in blogPosts" 
              :key="post.id" 
              class="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-1"
            >
              <NuxtLink :to="`/blog/${post.slug}`" class="block">
                <img 
                  :src="post.image" 
                  :alt="post.title" 
                  class="w-full h-48 object-cover"
                />
                <div class="p-6">
                  <div class="flex items-center mb-4">
                    <span class="bg-[#6A9997]/10 text-[#6A9997] text-xs font-medium px-2.5 py-0.5 rounded">
                      {{ post.category }}
                    </span>
                    <span class="text-gray-500 text-sm ml-auto">{{ post.date }}</span>
                  </div>
                  <h2 class="text-xl font-bold mb-2 text-gray-800">{{ post.title }}</h2>
                  <p class="text-gray-600 mb-4">{{ post.excerpt }}</p>
                  <div class="flex items-center">
                    <img 
                      :src="post.author.avatar" 
                      :alt="post.author.name" 
                      class="w-8 h-8 rounded-full mr-2"
                    />
                    <span class="text-sm text-gray-700">{{ post.author.name }}</span>
                  </div>
                </div>
              </NuxtLink>
            </article>
          </div>

          <!-- Pagination -->
          <div class="flex justify-center mt-12">
            <nav class="inline-flex rounded-md shadow">
              <a href="#" class="px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                Anterior
              </a>
              <a href="#" class="px-4 py-2 border-t border-b border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                1
              </a>
              <a href="#" class="px-4 py-2 border-t border-b border-gray-300 bg-[#6A9997] text-sm font-medium text-white">
                2
              </a>
              <a href="#" class="px-4 py-2 border-t border-b border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                3
              </a>
              <a href="#" class="px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                Siguiente
              </a>
            </nav>
          </div>
        </div>

        <!-- Sidebar -->
        <div class="lg:w-1/3">
          <BlogSearch />
          <BlogCategoryFilter />
          <BlogNewsletter />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import BlogSearch from '~/components/BlogSearch.vue'
import BlogCategoryFilter from '~/components/BlogCategoryFilter.vue'
import BlogNewsletter from '~/components/BlogNewsletter.vue'

// Sample blog post data
const blogPosts = [
  {
    id: 1,
    slug: 'como-manejar-la-ansiedad',
    title: 'Cómo manejar la ansiedad en situaciones cotidianas',
    excerpt: 'Descubre técnicas efectivas para controlar la ansiedad y mejorar tu bienestar emocional en el día a día.',
    image: '/placeholder.svg?height=400&width=600',
    category: 'Ansiedad',
    date: '12 Mayo 2023',
    author: {
      name: 'Dra. María Rodríguez',
      avatar: '/placeholder.svg?height=100&width=100'
    }
  },
  {
    id: 2,
    slug: 'beneficios-terapia-online',
    title: 'Los beneficios de la terapia online para tu salud mental',
    excerpt: 'La terapia online ofrece flexibilidad y accesibilidad. Conoce cómo puede ayudarte a mejorar tu bienestar psicológico.',
    image: '/placeholder.svg?height=400&width=600',
    category: 'Terapia Online',
    date: '28 Abril 2023',
    author: {
      name: 'Dr. Carlos Méndez',
      avatar: '/placeholder.svg?height=100&width=100'
    }
  },
  {
    id: 3,
    slug: 'mindfulness-para-principiantes',
    title: 'Mindfulness para principiantes: guía práctica',
    excerpt: 'Aprende los fundamentos del mindfulness y cómo incorporar esta práctica en tu rutina diaria para reducir el estrés.',
    image: '/placeholder.svg?height=400&width=600',
    category: 'Mindfulness',
    date: '15 Abril 2023',
    author: {
      name: 'Lic. Ana Gómez',
      avatar: '/placeholder.svg?height=100&width=100'
    }
  },
  {
    id: 4,
    slug: 'relaciones-saludables',
    title: 'Cómo construir relaciones saludables',
    excerpt: 'Consejos prácticos para desarrollar y mantener relaciones interpersonales sanas y satisfactorias.',
    image: '/placeholder.svg?height=400&width=600',
    category: 'Relaciones',
    date: '3 Abril 2023',
    author: {
      name: 'Dr. Javier Torres',
      avatar: '/placeholder.svg?height=100&width=100'
    }
  }
]
</script>