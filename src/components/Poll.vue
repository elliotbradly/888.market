<template>
	
  <span v-if="isPending">Loading...</span>
    <span v-else-if="isError">Error: {{ error.message }}</span>
    <ul v-else-if="data">
      <pre>{{ JSON.stringify(data, null, 2) }}</pre>
    </ul>

</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useQuery } from '@tanstack/vue-query'

const readNow = async () =>
  await fetch('readNow/').then((response) =>
    response.json(),
  )

const { isPending, isError, data, error } = useQuery({
  queryKey: ['dat'],
  queryFn: readNow,
  refetchInterval: 1111
})


onMounted(() => {
	
})

onUnmounted(() => {
	
})
</script>
