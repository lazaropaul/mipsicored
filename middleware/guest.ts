// middleware/guest.ts
import { createClient } from '@supabase/supabase-js'

export default defineNuxtRouteMiddleware(async (to) => {
  const config = useRuntimeConfig()
  const supabase = createClient(config.public.supabaseUrl, config.public.supabaseKey)

  const {
    data: { session },
  } = await supabase.auth.getSession()

  if ((to.path.startsWith('/login') || to.path.startsWith('/register')) && session) {
    return navigateTo('/dashboard')
  }
})