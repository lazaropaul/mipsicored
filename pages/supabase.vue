<script setup>
import { createClient } from '@supabase/supabase-js'
const config = useRuntimeConfig()
const supabase = createClient(config.public.supabaseUrl, config.public.supabaseKey)
console.log(supabase.auth)
const instruments = ref([])
async function getInstruments() {
  const { data } = await supabase.from('instruments').select()
  instruments.value = data
  console.log(data)
}
onMounted(() => {
  getInstruments()
  console.log(instruments)
})

</script>
<template>
  <ul>
    <li v-for="instrument in instruments" :key="instrument.id">{{ instrument.name }}</li>
  </ul>
</template>