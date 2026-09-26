const site = "https://masonbott.com";

//** @type {import('./$types').RequestHandler} */
export async function GET() {
  const body = `<?xml version="1.0" encoding="UTF-8" ?>
	<urlset
		xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
		xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
		xmlns:xhtml="https://www.w3.org/1999/xhtml"
		xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
		xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
		xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
	>
		<url>
			<loc>${site}/</loc>
			<changefreq>monthly</changefreq>
			<priority>1.0</priority>
			<description>Software engineer and CS master's student (AI) at CU Boulder. AI research, graphics programming, and software projects.</description>
		</url>
		<url>
			<loc>${site}/about</loc>
			<changefreq>yearly</changefreq>
			<priority>0.2</priority>
			<description>Hey, my name is Mason. I love computer science, math, graphics, and AI.</description>
		</url>
		<url>
			<loc>${site}/projects</loc>
			<changefreq>monthly</changefreq>
			<priority>0.9</priority>
			<description>Rust voxel game engine. Desmos-like graphing calculator. Expense splitting web app. Rust shell. Competition winning website design.</description>
		</url>
	</urlset>`;

  const response = new Response(body);
  response.headers.set("Cache-Control", "max-age=0, s-maxage=3600");
  response.headers.set("Content-Type", "application/xml");

  return response;
}
