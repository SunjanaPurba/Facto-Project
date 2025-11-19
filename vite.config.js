import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'  // ← এটা import করো

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss()],  // ← এটা add করো
    },
  },
  resolve: {
    alias: {
      '@': '/src',  // তোমার আগের alias
    },
  },
})