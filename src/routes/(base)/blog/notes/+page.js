import { error } from '@sveltejs/kit';

export const prerender = true; // turned off so it refreshes quickly
export async function load({ fetch }) {
	const res = await fetch(`/api/listNotes.json`);

	if (res.status > 400) {
		throw error(res.status, await res.text());
	}

	/** @type {import('$lib/types.js').ContentItem[]} */
	const items = await res.json();
	return {
		items
	};
}
