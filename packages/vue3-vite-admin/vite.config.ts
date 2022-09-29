/// <reference types="vitest" />
import { defineConfig } from 'vite';
import { viteEslint, viteVue3, jsx } from './plugins';
import { viteDefine } from './config';

export default defineConfig({
  plugins: [viteEslint, viteVue3, jsx],
  define: viteDefine,
  test: {
    threads: false,
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
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
