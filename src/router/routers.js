export default [
  {
    path: '/',
    name: 'index',
    component: () => import('@/view/textComp.vue')
  },
  {
    path: '*',
    name: '404',
    component: () => import('@/view/notFound.vue')
  }
]
