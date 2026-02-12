import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
import vercel from '@astrojs/vercel'; // Usaremos el adaptador de Vercel

export default defineConfig({
  // 'server' permite que el login y las peticiones dinámicas funcionen en producción
  output: 'server', 
  
  integrations: [
    tailwind(), 
    icon()
  ],
  
  adapter: vercel({
    // Optimización para Vercel: usa funciones Edge o Serverless
    webAnalytics: { enabled: true } 
  }),
});