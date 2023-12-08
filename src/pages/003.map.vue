<template>

<div class="full-height row wrap justify-start items-start content-start">

<canvas id="indexCanvas"> </canvas>

</div>

</template>

<script setup>
import { ref, onMounted, onUnmounted, onUpdated, inject, getCurrentInstance } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useQuery } from '@tanstack/vue-query'

import { mount, update, unmount } from "../display/world-map"

onMounted(async (props) => {

  mount('on')

})

onUpdated(async () => {
  // text content should be the same as current `count.value`

  update('on')


})

onUnmounted(async () => {

  //unmount('on')


})


</script>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'GamePlay'
})
</script>


