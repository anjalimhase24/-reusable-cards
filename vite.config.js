import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repoBase = '/-reusable-cards/'

export default defineConfig({
  base: process.env.GITHUB_ACTIONS ? repoBase : '/',
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
})
