import { createRouter, createWebHashHistory } from 'vue-router';
import { routes } from './modules/routes';

export const router = createRouter({
  routes,
  history: createWebHashHistory(),
});
