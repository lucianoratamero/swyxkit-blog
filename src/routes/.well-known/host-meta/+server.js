export function GET() {
	return new Response('<?xml version="1.0" encoding="UTF-8"?>\n<XRD xmlns="http://docs.oasis-open.org/ns/xri/xrd-1.0">\n  <Link rel="lrdd" template="https://bolha.us/.well-known/webfinger?resource={uri}"/>\n</XRD>\n', {
		headers: {
			'Content-Type': 'application/xml'
		}
	});
}
