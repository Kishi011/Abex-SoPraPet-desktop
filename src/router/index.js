import { createMemoryHistory, createRouter } from 'vue-router'
import NavBar from '../components/NavBar.vue';
import Agendamentos from '../pages/Agendamentos.vue';
import Configuracoes from '../pages/Configuracoes.vue';
import Dashboard from '../pages/Dashboard.vue';
import inicio from '../pages/Index.vue';
import Servicos from '../pages/Servicos.vue';

const routes = [
  {
    path: '/',
    component: NavBar,
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: Dashboard
      },
      {
        path: 'servicos',
        name: 'servicos',
        component: Servicos
      },
      {
        path: 'agendamentos',
        name: 'agendamentos',
        component: Agendamentos
      },
      {
        path: 'config',
        name: 'configuracoes',
        component: Configuracoes
      },
    ]
  },
  {
    path: '',
    name: 'inicio',
    component: inicio
  },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;