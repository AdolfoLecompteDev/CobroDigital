// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
import node from '@astrojs/node';

export default defineConfig({
  integrations: [
    tailwind(), 
    icon()
  ],
  adapter: node({
    mode: 'standalone',
  }),
});