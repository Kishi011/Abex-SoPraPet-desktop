import { createMemoryHistory, createRouter } from 'vue-router'

import DefaultLayout from '../layouts/Default.vue';
import Index from '../pages/Index.vue';


const routes = [
  {
    path: '/',
    component: Index,
  },
  {
    path: '/app',
    component: DefaultLayout,
  }
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;