import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import DesktopLayout from '../layouts/DesktopLayout.vue';
import Content from '../components/Content.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: DesktopLayout,
    children: [
      {
        path: '',
        name: 'Home',
        component: Content,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
