// middleware/guest.ts
import { createClient } from '@supabase/supabase-js'

export default defineNuxtRouteMiddleware(async () => {
  const config = useRuntimeConfig()
  const supabase = createClient(config.public.supabaseUrl, config.public.supabaseKey)

  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (session) {
    return navigateTo('/dashboard')
  }
})