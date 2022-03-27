import RSS from 'rss';
import { SITE_TITLE, SITE_URL } from '$lib/siteConfig.js';
import { processAllWithContent } from "$lib/markdown";

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get() {
	const feed = new RSS({
		title: SITE_TITLE + ' - RSS Feed',
		site_url: SITE_URL,
		feed_url: SITE_URL + '/feed.xml'
	});

	const allBlogs = await processAllWithContent();
	allBlogs.forEach((post) => {
		feed.item({
			title: post.metadata.title,
			url: SITE_URL + `/blog/${post.metadata.slug}`,
			date: post.metadata.date,
			description: post.content
		});
	});

	return {
		body: feed.xml({ indent: true }), // todo - nonindent if not human
		headers: {
			'Cache-Control': `max-age=0, s-maxage=${600}`, // 10 minutes
			'Content-Type': 'application/rss+xml'
		}
	};
}
