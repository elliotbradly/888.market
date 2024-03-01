<template>
  <q-page class="q-gutter-sm">

    <div class="q-pa-md">

      <iframe src="https://player.twitch.tv/?channel=glopratchet&parent=fictiq.com&muted=true" height="480" width="720"
        allowfullscreen>
      </iframe>

      <button @click="visitPage('map')">Map</button>
      <button @click="visitPage('fullscreen')">Full Screen</button>
      <button @click="visitPage('gallery')">Gallery</button>
      <button @click="visitPage('artes')">Map</button>
      <button @click="visitPage('button-bar')">Button Bar</button>
      <button @click="visitPage('welcome')">Welcome</button>
      <button @click="visitPage('editor')">Editor</button>

    </div>

  </q-page>
</template>

<script setup>

import Status from '../components/Status.vue'
import Poll from '../components/Poll.vue'

import { ref, onMounted, onUnmounted, onUpdated, inject, getCurrentInstance } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useQuery } from '@tanstack/vue-query'
import { mount, update, unmount } from "../screens/horizontal-window"


var slide = ref('style');
var lorem = 'Lorem ipsum dolor, sit';

const router = useRouter()

var visitPage = (idx) => {
  router.push('/' + idx)
}


onMounted(async (props) => {


  //setTimeout(() => {
  //  router.push('/cut-scene')
  //}, 33);

  //mount('on')
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
  name: 'TitleScreen'
})
</script>
