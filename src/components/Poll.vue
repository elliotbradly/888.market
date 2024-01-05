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

var w = window.screen.width;

const width = () => {
  return window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth
    || 0;
}

const readNow = async () =>


  await fetch('readNow?w=' + width()).then((response) =>
    response.json(),
  )

const { isPending, isError, data, error } = useQuery({
  queryKey: ['dat'],
  queryFn: readNow,
  refetchInterval: 11111
})


onMounted(() => {

})

onUnmounted(() => {

})
</script>
