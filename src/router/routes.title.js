
const routes = [
  
  {
    path: '/title-new',
    component: () => import('layouts/FictiqLayout.vue'),
    children: [
      { path: '', component: () => import('pages/012.title-new.vue') }
    ]
  },

  {
    path: '/title-list',
    component: () => import('layouts/FictiqLayout.vue'),
    children: [
      { path: '', component: () => import('pages/011.title-list.vue') }
    ]
  }

]

export default routes
