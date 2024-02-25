<template>
    
    <q-card flat bordered class="my-card full-width " :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-2'">
      <q-card-section>
        <div class="row items-center no-wrap">
          <div class="col">
            <div class="text-h6">New Title</div>
          </div>
        </div>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn flat> Create </q-btn>
      </q-card-actions>
    </q-card>

    <q-separator dark spaced="true" inset="true" size="100px" />

  </template>
  
  <script setup>
  </script>