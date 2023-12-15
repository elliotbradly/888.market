
<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-yellow glossy bg-green headerCustomStyle">
      <q-toolbar class="q-gutter-sm">
        <q-toolbar-title>
          <q-avatar style="position:relative; top:34px;">
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          <span class="angle-font text-red" style="position:relative; top:40px; left:5px">
            Ficti
          </span>

          <span class="new-art-font text-orange" style="position:relative; top:37px; left:3px">
            q
          </span>

          <br>

          <span class='pixily-font text-white ' style="position:relative; top:-20px; left:44px">
            current simulation time
          </span>


          <br>

          <span class='pixily-font' style="position:relative; top:-18px; left:44px">

            deployed by T>A>S>U>S>S

          </span>

        </q-toolbar-title>



        <div class="q-pa-md q-pr-m angle-font">
          <q-btn-dropdown class="glossy" color="orange" label="Connect" outline rounded size="l">



            <div class="row no-wrap q-pa-md q-gutter-y-lg">
              <div class="column">
                <div class="text-h6 q-mb-md angle-font text-orange">Connect Wallet</div>


                <q-separator />

                <q-btn round @click="connectWallet(0, $event)">
                  <q-avatar size="32px">
                    <img src="/img/nami.png">
                  </q-avatar>
                </q-btn>

                <q-separator />

                <q-btn round @click="connectWallet(1, $event)">
                  <q-avatar size="32px">
                    <img src="/img/eternl.png">
                  </q-avatar>
                </q-btn>

              </div>

            </div>
          </q-btn-dropdown>
        </div>



        <div class="q-pa-md q-pr-m angle-font">
          <q-btn-dropdown class="glossy" color="orange" label="Lore" outline rounded size="l">
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

                <q-btn color="primary" label="Logout" push size="sm" v-close-popup />
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




<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'



const linksList = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup() {
    const leftDrawerOpen = ref(false)

    const connectWallet = (val, evt) => {

      alert(val)

    }

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
