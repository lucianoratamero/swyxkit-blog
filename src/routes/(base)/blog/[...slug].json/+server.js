import { json } from '@sveltejs/kit';
import { process } from '$lib/markdown';

export function GET({ params }) {
	const { slug } = params;

	return json(process(`src/posts/${slug}.md`), {
		headers: {
			'Content-Type': 'application/json'
		}
	});
}
