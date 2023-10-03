import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        ebisu: resolve(__dirname, 'ebisu/index.html'),
        gadamaxima: resolve(__dirname, 'gadamaxima/index.html'),
        socmedpay: resolve(__dirname, 'socmedpay/index.html'),
      },
    },
  },
})