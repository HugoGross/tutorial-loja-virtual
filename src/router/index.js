import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LayoutFull from '@/layouts/LayoutFull.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '',
      component: LayoutFull,
      children: [
        {
          path: '',
          name: 'Home',
          component: HomeView,
        },
        {
          path: '/acessorios',
          name: 'Acessorios',
          component: () => import('@/views/AcessorioView.vue'),
        },
        {
          path: '/categorias',
          name: 'Categorias',
          component: () => import('@/views/CategoriaView.vue'),
        },
        {
          path: '/cores',
          name: 'Cores',
          component: () => import('@/views/CorView.vue'),
        },
        {
          path: '/marcas',
          name: 'Marcas',
          component: () => import('@/views/MarcaView.vue'),
        },
        {
          path: '/login',
          name: 'Login',
          component: () => import('@/views/LoginView.vue'),
        },
      ],
    },
  ],
});

export default router;