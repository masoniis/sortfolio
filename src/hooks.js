/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	// Preload fonts on the server-side
	return resolve(event, {
		preload: ({ type }) => type === 'font' || type === 'js' || type === 'css'
	});
}
