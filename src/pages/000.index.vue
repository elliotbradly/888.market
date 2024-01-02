<template>

  <div class="full-height row wrap justify-start items-start content-start">
    <canvas id="indexCanvas"> </canvas>
  </div>

  <h4>Post {{ postId }}</h4>
  <h4>Post {{ isError }}</h4>
  <h4>Post {{ isFetching }}</h4>
  <h4>Post {{ isPending }}</h4>

  <div v-if="isPending" class="update">Loading...</div>
  <div v-else-if="isError">An error has occurred: {{ error }}</div>
  <div v-else-if="data">
    <h1>{{ data.title }}</h1>
    <div>
      <p>{{ data.body }}</p>
    </div>
    <div v-if="isFetching" class="update">Background Updating...</div>
  </div>

</template>

<script setup>
import { ref, onMounted, onUnmounted, onUpdated, inject, getCurrentInstance } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useQuery } from '@tanstack/vue-query'


import { mount, update, unmount } from "../screens/horizontal-window"
//import {mount, update, unmount } from "../composables/tiny-screen"

var postId = 6;
var isPending, isError, isFetching, data, error;

const fetcher = async (id) =>
  await fetch('https://jsonplaceholder.typicode.com/posts/${id}').then((response) =>
    response.json(),
  )



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
  name: 'GamePlay'
})
</script>
