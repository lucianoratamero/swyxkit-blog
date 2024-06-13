export const prerender = true; // you can uncomment to prerender as an optimization

export async function load({ params, fetch }) {
	const slug = params.slug;
	const { metadata, content } = await fetch(`/blog/${slug}.json`).then((r) => r.json());
	return { metadata, content, slug };
}
