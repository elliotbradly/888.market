 
<template>
  <q-page class=" window-height">

    <div class="fit row no-wrap justify-start items-start content-start">

      <div class="col-3" style="overflow: auto; min-width: 200px; max-width: 200px;">

        <q-btn outline color="text-primary" class="full-width" @click="action('sower')">Orb Sower</q-btn>

        <q-chip
        color="red"
        text-color="white"
        class="absolute-bottom-left"
      >
        <q-avatar>
          <img src="https://cdn.quasar.dev/img/boy-avatar.png">
        </q-avatar>
        <div class="ellipsis">
           cookiesLabel 
          <q-tooltip>  cookiesLabel </q-tooltip>
        </div>
      </q-chip>

      </div>

      <div class="col-grow" style="overflow: auto;">

        <h6>Admin</h6>

        <q-input outlined v-model="text" label="Title Name" />

        <q-separator color="black" spaced="true" inset="false" size="30px" />
        
      </div>

      <div style="overflow: auto; min-width: 200px; max-width: 360px;">

        <q-btn outline color="text-primary" class="full-width" @click="action('title')">View Orb</q-btn>

        <div class="q-pa-md" style="max-width: 350px">
    <q-list padding bordered class="rounded-borders">
      <q-expansion-item
        dense
        dense-toggle
        expand-separator
        icon="perm_identity"
        label="Account settings"
      >
        <q-card>
          <q-card-section>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
            commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
            eveniet doloribus ullam aliquid.
          </q-card-section>
        </q-card>
      </q-expansion-item>

      <q-expansion-item
        dense
        dense-toggle
        expand-separator
        icon="signal_wifi_off"
        label="Wifi settings"
      >
        <q-card>
          <q-card-section>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
            commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
            eveniet doloribus ullam aliquid.
          </q-card-section>
        </q-card>
      </q-expansion-item>

      <q-expansion-item
        dense
        dense-toggle
        expand-separator
        icon="drafts"
        label="Drafts"
        header-class="text-purple"
      >
        <q-card>
          <q-card-section>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
            commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
            eveniet doloribus ullam aliquid.
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-list>
  </div>

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

var action = (idx) => {
  router.push('/' + idx )
}

</script>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Title New Screen'
})
</script>

