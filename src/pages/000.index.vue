<template>
  <q-page class="q-gutter-lg window-height window-width row justify-center items-center">

    <div class="full-height row wrap justify-start items-start content-start">
      <canvas id="indexCanvas"> </canvas>
    </div>


    <div class="q-pa-md q-gutter-sm">
      <q-btn outline style="color: goldenrod;" label="CLCKWSE" />
      <q-btn outline style="color: goldenrod;" label="FORWARD" />
      <q-btn outline style="color: goldenrod;" label="CNTRCLK" />
    </div>

    <Poll></Poll>
  </q-page>
</template>

<script setup>

import Poll from '../components/Poll.vue'

import { ref, onMounted, onUnmounted, onUpdated, inject, getCurrentInstance } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useQuery } from '@tanstack/vue-query'
import { mount, update, unmount } from "../screens/horizontal-window"

onMounted(async (props) => {
  mount('on')
})

onUpdated(async () => {
  update('on')
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
