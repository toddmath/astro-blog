import { defineConfig } from 'astro/config'

import vercel from '@astrojs/vercel/static'

// https://astro.build/config
export default defineConfig({
	site: 'https://astro-blog-seven-rose.vercel.app',
	output: 'static',
	adapter: vercel()
})
