import { createRouter, createWebHashHistory } from 'vue-router'
import { pinia, useRootStore } from '../store'

const rootStore = useRootStore(pinia)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/home.vue'),
  },
  {
    path: '/note',
    name: 'note',
    meta: {},
    component: () => import('../views/note.vue'),
  },
  {
    path: '/article/:id',
    name: 'article',
    meta: {
      show_header: false,
    },
    component: () => import('../views/article.vue'),
  },
  {
    path: '/project',
    name: 'project',
    meta: {},
    component: () => import('../views/project.vue'),
  },
  {
    path: '/about',
    name: 'about',
    meta: {},
    component: () => import('../views/about.vue'),
  },
  {
    path: '/:pathMatch(.*)',
    name: 'notfound',
    component: () => import('../views/notfound.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const { show_header = true } = to.meta
  rootStore.setShowHeader(show_header)
  next()
})

export default router
