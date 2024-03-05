<template>
  <q-page class="q-gutter-sm">

    <div class="absolute-top-right">
      <q-btn outline label="access" @click="action('login')" />
    </div>

    <div class="absolute-bottom-left">
      <q-btn outline label="admin" @click="action('admin')" />
    </div>

    <div class="q-pa-md absolute-center">

      <iframe src="https://player.twitch.tv/?channel=glopratchet&parent=fictiq.com&muted=true" height="384" width="640"
        allowfullscreen>
      </iframe>

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

var action = (idx) => {
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
