/** @type {import('./$types').RequestHandler} */
export async function GET({ url }: { url: URL }) {
	return new Response(`
		User-agent: *
		Allow: /

		# Google adsbot ignores robots.txt unless specifically named!
		User-agent: AdsBot-Google
		Allow: /

		# The rest I am adding just to be safe
		# General
		User-agent: *
		Allow: /

		# Google
		User-agent: Googlebot
		Allow: /

		# Bing
		User-agent: bingbot
		Allow: /

		# Baidu
		User-agent: Baiduspider
		Allow: /

		User-agent: GPTBot
		Disallow: /

		Sitemap: ${url.origin}/sitemap.xml`.trim() // Trim to remove leading whitespace
	);
}
