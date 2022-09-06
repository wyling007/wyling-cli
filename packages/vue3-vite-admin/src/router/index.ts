import { createRouter, createWebHashHistory } from 'vue-router';
import { routes } from './modules/routes';
export * from './modules/navigator';

export const router = createRouter({
  routes,
  history: createWebHashHistory(),
});
