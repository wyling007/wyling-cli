import { defineConfig } from 'vite';
import { viteEslint, viteVue3 } from './plugins/';

export default defineConfig({
  plugins: [viteEslint, viteVue3],
  server: {
    host: '0.0.0.0',
    proxy: {
      '/api': {
        target: 'http://localhost:3009',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
