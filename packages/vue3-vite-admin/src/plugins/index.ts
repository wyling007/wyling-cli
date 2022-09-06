import '@/style/index.scss';
import { App } from 'vue';
import { initPinia } from './modules/pinia';
import { initRouter } from './modules/router';
import { initElementPlus } from './modules/elementPlus';
import { initApiInterceptors } from './modules/api';

export const initAllPlugins = (app: App) => {
  initPinia(app);
  initElementPlus(app);
  initRouter(app);
  initApiInterceptors();
};
