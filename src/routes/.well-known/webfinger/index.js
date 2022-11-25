export function get() {
	const body = JSON.stringify({
		'subject': 'acct:lucianoratamero@bolha.us',
		'aliases': ['https://bolha.us/@lucianoratamero', 'https://bolha.us/users/lucianoratamero'],
		'links': [{
			'rel': 'http://webfinger.net/rel/profile-page',
			'type': 'text/html',
			'href': 'https://bolha.us/@lucianoratamero'
		}, {
			'rel': 'self',
			'type': 'application/activity+json',
			'href': 'https://bolha.us/users/lucianoratamero'
		}, {
			'rel': 'http://ostatus.org/schema/1.0/subscribe',
			'template': 'https://bolha.us/authorize_interaction?uri={uri}'
		}
		]
	});

	return {
		headers: {
			'Content-Type': 'application/json'
		},
		body
	};
}
