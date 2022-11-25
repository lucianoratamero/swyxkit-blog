export function get() {
	const body = JSON.stringify({
			'links': [{
				'rel': 'http://nodeinfo.diaspora.software/ns/schema/2.0',
				'href': 'https://bolha.us/nodeinfo/2.0'
			}
			]
		}
	);

	return {
		headers: {
			'Content-Type': 'application/json'
		},
		body
	};
}
