import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/osu': {
        target: 'https://osu.ppy.sh',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/osu/, ''),
        secure: true,
      },
    },
  },
});
