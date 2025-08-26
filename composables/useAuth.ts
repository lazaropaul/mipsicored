import { createClient } from '@supabase/supabase-js'

let supabase: ReturnType<typeof createClient>

export const useAuth = () => {
  const config = useRuntimeConfig()

  if (!supabase) {
    supabase = createClient(config.public.supabaseUrl, config.public.supabaseKey)
  }

  const user = useState<import('@supabase/supabase-js').User | null>('user', () => null)
  const profile = useState<import('@supabase/supabase-js').UserMetadata | null>('profile', () => null) // ✅ profile state
  const loading = useState('authLoading', () => true)

  const initAuth = async () => {
    const {
      data: { session },
    } = await supabase.auth.getSession()

    user.value = session?.user || null
    profile.value = session?.user?.user_metadata || null // ✅ get metadata
    loading.value = false
  }

  supabase.auth.onAuthStateChange((event, session) => {
    user.value = session?.user || null
    profile.value = session?.user?.user_metadata || null
  })

  return {
    supabase,
    user,
    profile,
    loading,
    initAuth,
  }
}