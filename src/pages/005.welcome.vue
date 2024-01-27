<template>
  <q-page class="q-gutter-sm">


    <h2>

      Welcome

    </h2>

  </q-page>
</template>

<script setup>

import { ref, onMounted, onUnmounted, onUpdated, inject, getCurrentInstance } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useQuery } from '@tanstack/vue-query'

onMounted(async (props) => {
 

  
})

onUpdated(async () => {
  


})

onUnmounted(async () => {
})


</script>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TitleScreen'
})
</script>
