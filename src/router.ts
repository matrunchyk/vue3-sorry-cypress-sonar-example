import { createRouter, createWebHistory } from 'vue-router';
import { getUser } from './useStore';

declare module 'vue-router' {
    interface RouteMeta {
        title: string;
        protected?: boolean;
    }
}

const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./components/AppHome.vue'),
      meta: {
        title: 'Latest posts',
      },
    },
    {
      path: '/create-new',
      name: 'create-new',
      component: () => import('./components/CreateNew.vue'),
      meta: {
        title: 'Add article',
        protected: true,
      },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./components/AppLogin.vue'),
      meta: {
        title: 'Please log in',
      },
    },
    {
      path: '/forgot',
      name: 'forgot',
      component: () => import('./components/AppLogin.vue'),
      meta: {
        title: 'Forgot password',
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.meta.protected && !getUser()) {
    return next({ name: 'login' });
  }

  return next();
});

export default router;
