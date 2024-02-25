 
<template>
  <q-page class="bg-grey window-height window-width row justify-center items-center">

    title page
    
  </q-page>
</template>


<script setup>

import Status from '../components/Status.vue'
import Poll from '../components/Poll.vue'

import { ref, onMounted, onUnmounted, onUpdated, inject, getCurrentInstance } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useQuery } from '@tanstack/vue-query'
import { mount, update, unmount } from "../screens/horizontal-window"

const router = useRouter()

onMounted(async (props) => {
})

onUpdated(async () => {
  //update('on')
})

onUnmounted(async () => {
})


</script>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Login Screen'
})
</script>




<style>
.q-card {
  width: 360px;
}
</style>