import rss, { pagesGlobToRssItems } from '@astrojs/rss'

export async function GET(context) {
	return rss({
		title: 'Todd Learns Astro | Blog',
		description: "Todd's journey learning Astro",
		site: context.site,
		items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
		customData: `<language>en-us</language>`
	})
}
