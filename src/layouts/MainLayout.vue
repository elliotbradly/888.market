
<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white headerCustomStyle">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar style="position:relative; top:34px;">
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          <span class="angle-font" style="position:relative; top:40px; left:5px">
            Gator
          </span>

          <span class="new-art-font" style="position:relative; top:38px;">
            Earth
          </span>

          <br>

          <span class='pixily-font' style="position:relative; top:-20px; left:44px">

            deployed by T>A>S>U>S>S

          </span>

          <br>

          <span class='pixily-font' style="position:relative; top:-20px; left:44px">

            deployed by T>A>S>U>S>S

          </span>





        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          <div>Title</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>


<style scoped>
.headerCustomStyle {
  height: 60px !important;
  display: flex;
  align-items: center !important;
}
</style>
