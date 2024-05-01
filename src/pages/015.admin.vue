 
<template>
  <q-page class=" window-height">

    <div class="fit row no-wrap justify-start items-start content-start">

      <div class="col-3" style="overflow: auto; min-width: 200px; max-width: 200px;">

        <h5> ONE </h5>

      </div>

      <div class="col-grow" style="overflow: auto;">

        <h6>Admin</h6>

        <q-input outlined v-model="text" label="Title Name" />

        <q-separator color="black" spaced="true" inset="false" size="30px" />
        
      </div>

      <div style="overflow: auto; min-width: 200px; max-width: 360px;">

        <q-btn outline color="text-primary" class="full-width" @click="viewOrb()">View Orb</q-btn>

        <h5> Three </h5>

      </div>

    </div>

  </q-page>
</template>

<script setup>

import { ref, onMounted, onUnmounted, onUpdated, inject, getCurrentInstance } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { reactive } from 'vue'

const text = ref('')
const router = useRouter()

var viewOrb = () => {
  router.push('/title')
}

</script>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Title New Screen'
})
</script>

