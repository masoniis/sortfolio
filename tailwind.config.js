import colors from "tailwindcss/colors.js";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		fontFamily: {
		},
		extend: {
			colors: {
				primary: colors.slate[900],
				primarybg: colors.slate[800],
				primaryfg: colors.slate[100],
			},
		}
	},
	plugins: [],
}

// module.exports = {
// }
