import { defineConfig } from 'vite';
import { viteLegacy, viteVue2, viteEslint } from './plugins';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [viteLegacy, viteVue2, viteEslint],
  server: {
    host: '0.0.0.0',
    proxy: {
      '/api': {
        target: 'http://jsonplaceholder.typicode.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
