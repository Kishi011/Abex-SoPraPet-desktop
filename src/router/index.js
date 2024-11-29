import { createMemoryHistory, createRouter } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../pages/Index.vue'),
  },
  {
    path: '/dashboard',
    components: {
      default: () => import('../pages/Dashboard.vue'),
      navbar: () => import('../components/NavBar.vue'),
      cardmsg: () => import('../components/CardMensagens.vue'),
    },
  },
  {
    path: '/servicos',
    components: {
      default: () => import('../pages/Servicos.vue'),
      navbar: () => import('../components/NavBar.vue'),
      cardmsg: () => import('../components/CardMensagens.vue'),
    },
  },
  {
    path: '/agendamentos',
    components: {
      default: () => import('../pages/Agendamentos.vue'),
      navbar: () => import('../components/NavBar.vue'),
      cardmsg: () => import('../components/CardMensagens.vue'),
    },
  },
  {
    path: '/config',
    components: {
      default: () => import('../pages/Configuracoes.vue'),
      navbar: () => import('../components/NavBar.vue'),
      cardmsg: () => import('../components/CardMensagens.vue'),
    },
  },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;