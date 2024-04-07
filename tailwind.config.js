/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		fontFamily: {
		},
		extend: {
			colors: {
				primarybg: 'rgb(var(--color-primarybg) / 1.0)',
				primaryfg: 'rgb(var(--color-primaryfg) / 1.0)',
				primaryaccentbg: 'rgb(var(--color-primaryaccentbg) / 1.0)',
				primaryaccentfg: 'rgb(var(--color-primaryaccentfg) / 1.0)',

				secondarybg: 'rgb(var(--color-secondarybg) / 1.0)',
				secondaryfg: 'rgb(var(--color-secondaryfg) / 1.0)',
				secondaryaccentbg: 'rgb(var(--color-secondaryaccentbg) / 1.0)',
				secondaryaccentfg: 'rgb(var(--color-secondaryaccentfg) / 1.0)',
			},
			fontSize: {
				dynamich1: "clamp(0.5rem, 15vw, 8.5rem)", // 1rem min, 10% of viewport width, 8.5rem max
			},
		}
	},
	plugins: [],
}

