
<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-yellow glossy bg-purple headerCustomStyle">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar style="position:relative; top:34px;">
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          <span class="angle-font text-green" style="position:relative; top:40px; left:5px">
            Gator
          </span>

          <span class="new-art-font text-orange" style="position:relative; top:38px;">
            Earth
          </span>

          <br>

          <span class='pixily-font text-white ' style="position:relative; top:-20px; left:44px">
            current simulation time
          </span>


          <br>

          <span class='pixily-font' style="position:relative; top:-20px; left:44px">

            deployed by T>A>S>U>S>S

          </span>

        </q-toolbar-title>


        <div class="q-pa-md">
    <q-btn-dropdown
      class="glossy"
      color="purple"
      label="Game"
    >
      <div class="row no-wrap q-pa-md">
        <div class="column">
          <div class="text-h6 q-mb-md">Settings</div>
          <q-toggle v-model="mobileData" label="Use Mobile Data" />
          <q-toggle v-model="bluetooth" label="Bluetooth" />
        </div>

        <q-separator vertical inset class="q-mx-lg" />

        <div class="column items-center">
          <q-avatar size="72px">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>

          <div class="text-subtitle1 q-mt-md q-mb-xs">John Doe</div>

          <q-btn
            color="primary"
            label="Logout"
            push
            size="sm"
            v-close-popup
          />
        </div>
      </div>
    </q-btn-dropdown>
  </div>


  <div class="q-pa-md">
    <q-btn-dropdown
      class="glossy"
      color="purple"
      label="Account Settings"
    >
      <div class="row no-wrap q-pa-md">
        <div class="column">
          <div class="text-h6 q-mb-md">Settings</div>
          <q-toggle v-model="mobileData" label="Use Mobile Data" />
          <q-toggle v-model="bluetooth" label="Bluetooth" />
        </div>

        <q-separator vertical inset class="q-mx-lg" />

        <div class="column items-center">
          <q-avatar size="72px">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>

          <div class="text-subtitle1 q-mt-md q-mb-xs">John Doe</div>

          <q-btn
            color="primary"
            label="Logout"
            push
            size="sm"
            v-close-popup
          />
        </div>
      </div>
    </q-btn-dropdown>
  </div>



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
