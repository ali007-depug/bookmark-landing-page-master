import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base:'/bookmark-landing-page-master/',
  plugins: [react()],
})
