import { createRouter, createWebHistory } from "vue-router";
import MainPage from '@pages/main-page/main-page.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'home',
      path: '/',
      component: MainPage,
      meta: {},
      redirect: {
        name: 'posts'
      },
      children: [
        {
          name: 'posts',
          path: 'posts',
          component: () => import('@pages/posts/posts-page.vue'),
          meta: {},
        }
      ]
    }
  ]
});

export default router;