import { defineConfig } from 'vite';
import vue2 from './plugins/vue2';
import legacy from './plugins/legacy';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue2, legacy],
  server: {
    host: '0.0.0.0',
  },
});
