import { json } from '@sveltejs/kit';
/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
import { processAll } from '$lib/markdown.js';

export async function GET() {
	const list = await processAll();
	return json(list, {
		headers: {
			'Cache-Control': `max-age=0, s-maxage=${60}` // 1 minute.. for now
		}
	});
}
