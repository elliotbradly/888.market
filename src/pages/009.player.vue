<template>
  <q-page class="q-gutter-sm">

    <div class="q-pa-md absolute-center">

      <iframe src="https://player.twitch.tv/?channel=glopratchet&parent=fictiq.com&muted=true" height="384" width="640"
        allowfullscreen>
      </iframe>

      <q-btn-group push class="absolute-center" style="position:relative; top:11px; left:320px">
        
      <q-btn outline label="left" @click="visitPage('map')" />
      <q-btn outline label="forward" @click="visitPage('map')" />
      <q-btn outline  label="backward" @click="visitPage('map')" />
      <q-btn outline label="right" @click="visitPage('map')" />
        

      </q-btn-group>

      

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
 //router.push('/' + idx)
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
