import { createApp } from 'vue';
import App from './App.vue';
import { initAllPlugins } from './plugins';

export const app = createApp(App);

//引入所有插件
initAllPlugins(app);
//挂载vue实例
app.mount('#app');
