// middleware/auth.global.ts
import { createClient } from '@supabase/supabase-js'

export default defineNuxtRouteMiddleware(async (to, from) => {
  const config = useRuntimeConfig()
  const supabase = createClient(config.public.supabaseUrl, config.public.supabaseKey)

  // Get current session (if any)
  const {
    data: { session },
  } = await supabase.auth.getSession()

  // Example: Protect all routes starting with /dashboard
  if (to.path.startsWith('/dashboard') && !session) {
    return navigateTo('/login')
  }
})