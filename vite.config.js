import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, './src/assets'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@':path.resolve(__dirname, './src')
    }
  },
  plugins: [react()],
  css:{
    modules:{
      localsConvention:'camelCase',
      generateScopedName:'[local]__[hash:base64:3]'
    }
  }
})
