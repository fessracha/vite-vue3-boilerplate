import { fileURLToPath, URL } from 'url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslintPlugin from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    eslintPlugin(), // display eslint in browser
  ],
  resolve: {
    alias: {
      // eslint-disable-next-line
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
});
