<template>
  <div class="full-height row wrap justify-start items-start content-start">

    <canvas id="indexCanvas"> </canvas>

    <span v-if="isPending">Loading...</span>
    <span v-else-if="isError">Error: {{ error.message }}</span>

    <ul v-else-if="data">
      <pre>{{ JSON.stringify(data, null, 2) }}</pre>
    </ul>

  </div>

</template>

<script setup>
import { ref, onMounted, onUnmounted, onUpdated, inject, getCurrentInstance } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useQuery } from '@tanstack/vue-query'


import { mount, update, unmount } from "../screens/horizontal-window"
//import {mount, update, unmount } from "../composables/tiny-screen"

var postId = 6;

const readNow = async () =>
  await fetch('readNow/').then((response) =>
    response.json(),
  )

const { isPending, isError, data, error } = useQuery({
  queryKey: ['dat'],
  queryFn: readNow,
  refetchInterval: 1111
})


onMounted(async (props) => {
  let { isPending, isError, isFetching, data, error } = useQuery({
    queryKey: ['post', postId],
    queryFn: () => fetcher(postId),
  })

  mount('on')

  //alert(window.electron.store.get('foo'));
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
  name: 'TitleScreen'
})
</script>
