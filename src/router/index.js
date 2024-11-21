import { createMemoryHistory, createRouter } from 'vue-router'

import DefaultLayout from '../layouts/Default.vue';

const routes = [
  {
    path: '/',
    component: DefaultLayout,
  },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;