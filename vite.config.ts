import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/AppFinalDev3/', // Remplacez par le nom de votre dépôt GitHub
});