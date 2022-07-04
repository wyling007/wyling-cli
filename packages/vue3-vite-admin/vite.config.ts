import { defineConfig } from 'vite';
import { viteEslint, viteVue3 } from './plugins/';

export default defineConfig({
  plugins: [viteEslint, viteVue3],
});
