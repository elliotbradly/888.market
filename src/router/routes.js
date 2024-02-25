
const routes = [
  {
    path: '/',
    component: () => import('layouts/SimpleLayout.vue'),
    children: [
      { path: '', component: () => import('pages/010.log-in.vue') }
    ]
  },

  {
    path: '/welcome',
    component: () => import('layouts/SimpleLayout.vue'),
    children: [
      { path: '', component: () => import('pages/005.welcome.vue') }
    ]
  },

  {
    path: '/map',
    component: () => import('layouts/SimpleLayout.vue'),
    children: [
      { path: '', component: () => import('pages/003.map.vue') }
    ]
  },

  {
    path: '/quill',
    component: () => import('layouts/FictiqLayout.vue'),
    children: [
      { path: '', component: () => import('pages/008.quill.vue') }
    ]
  },
  {
    path: '/title',
    component: () => import('layouts/FictiqLayout.vue'),
    children: [
      { path: '', component: () => import('pages/011.title.vue') }
    ]
  },

  {
    path: '/button-bar',
    component: () => import('layouts/SimpleLayout.vue'),
    children: [
      { path: '', component: () => import('pages/004.button-bar.vue') }
    ]
  },

  {
    path: '/editor',
    component: () => import('layouts/SimpleLayout.vue'),
    children: [
      { path: '', component: () => import('pages/006.editor.vue') }
    ]
  },
  

  {
    path: '/campaigns/new',
    component: () => import('layouts/SimpleLayout.vue'),
    children: [
      { path: '', component: () => import('pages/006.editor.vue') }
    ]
  },

  {
    path: '/cut-scene',
    component: () => import('layouts/SimpleLayout.vue'),
    children: [
      { path: '', component: () => import('pages/007.cut-scene.vue') }
    ]
  },

  {
    path: '/gallery',
    component: () => import('layouts/SimpleLayout.vue'),
    children: [
      { path: '', component: () => import('pages/002.gallery.vue') }
    ]
  },

  {
    path: '/artes',
    component: () => import('layouts/SimpleLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Arte.vue') }
    ]
  },


  {
    path: '/gameTest',
    component: () => import('layouts/SimpleLayout.vue'),
    children: [
      { path: '', component: () => import('pages/000.index.vue') }
    ]
  },

  {
    path: '/fullscreen',
    component: () => import('layouts/SimpleLayout.vue'),
    children: [
      { path: '', component: () => import('pages/001.full-screen.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
