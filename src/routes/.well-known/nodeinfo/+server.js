import { json } from '@sveltejs/kit';

export function GET() {
	const body = JSON.stringify({
			'links': [{
				'rel': 'http://nodeinfo.diaspora.software/ns/schema/2.0',
				'href': 'https://bolha.us/nodeinfo/2.0'
			}
			]
		}
	);

	return json(body, {
		headers: {
			'Content-Type': 'application/json'
		}
	});
}
