import { createMemoryHistory, createRouter } from 'vue-router'

import DefaultLayout from '../layouts/Default.vue';

import Index from '../pages/Index.vue';
import HomeView from '../pages/HomeView.vue';
import AboutView from '../pages/AboutView.vue';
import ButtonView from '../pages/ButtonView.vue';

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: 'help',
        component: Index,
      }
    ],
  },
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: 'home',
        component: HomeView,
      }
    ],
  },
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: 'about',
        component: AboutView,
      }
    ],
  },
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: 'button',
        component: ButtonView,
      }
    ],
  },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;