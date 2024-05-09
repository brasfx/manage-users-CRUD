import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@components',
        replacement: path.resolve(__dirname, './src/components'),
      },
      {
        find: '@routes',
        replacement: path.resolve(__dirname, './src/routes'),
      },
      {
        find: '@theme',
        replacement: path.resolve(__dirname, './src/theme'),
      },
      {
        find: '@type',
        replacement: path.resolve(__dirname, './src/type'),
      },
      {
        find: '@services',
        replacement: path.resolve(__dirname, './src/services'),
      },
      {
        find: '@pages',
        replacement: path.resolve(__dirname, './src/pages'),
      },
      {
        find: '@utils',
        replacement: path.resolve(__dirname, './src/utils'),
      },
    ],
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
  },
});
