import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    proxy: {
      // Redirecionando chamadas à API para o backend
      '/api': {
        target: 'https://hospeda-back-end-production.up.railway.app',
        changeOrigin: true,
        secure: false,
        // rewrite: (path) => path.replace(/^\/api/, '') // Opcional: remove '/api' da URL
      },
    },
  },
})
