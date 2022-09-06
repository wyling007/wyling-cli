import { router } from '@/router';
import { App } from 'vue';

export const initRouter = (app: App) => {
  app.use(router);
};
