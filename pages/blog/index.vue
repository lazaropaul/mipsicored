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

    <!-- Blog Posts Grid -->
    <div class="container mx-auto px-4 py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
  </div>
</template>

<script setup>
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
  },
  {
    id: 5,
    slug: 'superar-depresion',
    title: 'Estrategias para superar la depresión',
    excerpt: 'Conoce diferentes enfoques terapéuticos y hábitos que pueden ayudarte a combatir los síntomas de la depresión.',
    image: '/placeholder.svg?height=400&width=600',
    category: 'Depresión',
    date: '22 Marzo 2023',
    author: {
      name: 'Dra. Laura Sánchez',
      avatar: '/placeholder.svg?height=100&width=100'
    }
  },
  {
    id: 6,
    slug: 'habitos-saludables-mente',
    title: '7 hábitos para mantener una mente saludable',
    excerpt: 'Incorpora estos hábitos en tu rutina diaria para mejorar tu salud mental y aumentar tu bienestar general.',
    image: '/placeholder.svg?height=400&width=600',
    category: 'Bienestar',
    date: '10 Marzo 2023',
    author: {
      name: 'Lic. Roberto Díaz',
      avatar: '/placeholder.svg?height=100&width=100'
    }
  }
]
</script>