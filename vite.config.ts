import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import * as path from 'path';
import tailwindcss from 'tailwindcss';

const alias = [
  {
    find: '@core',
    replacement: path.resolve(__dirname, 'src/@core'),
  },
  {
    find: '@shared',
    replacement: path.resolve(__dirname, 'src/@shared'),
  },
  { find: '@', replacement: path.resolve(__dirname, 'src') },
];

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: { alias: alias },
  base: '/oneclick-front',
});
