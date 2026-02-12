import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
import vercel from '@astrojs/vercel';

export default defineConfig({
  // Mantenemos 'server' para manejar el login y sesiones
  output: 'server', 
  
  integrations: [
    tailwind(), 
    icon()
  ],
  
  adapter: vercel({
    // Cambiamos a Serverless Functions para mayor compatibilidad con librerías de Node
    webAnalytics: { enabled: true },
    isr: false // Desactivamos ISR para evitar conflictos con el Login dinámico
  }),

  build: {
    // Esto ayuda a Vercel a organizar mejor los archivos en estructuras de carpetas anidadas
    format: 'directory'
  },

  // Asegura que Astro sepa que está corriendo en un subdirectorio si es necesario
  vite: {
    build: {
      cssCodeSplit: true,
    }
  }
});