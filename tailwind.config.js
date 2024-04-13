/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		fontFamily: {
			'mono': ['"Fira Code"', 'monospace'],
			'code': ['VT323', 'monospace'],
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
				dynamich1: "clamp(2.0rem, 13vw, 8.5rem)", // 1rem min, 10% of viewport width, 8.5rem max
				dynamich2: "clamp(2.0rem, 13vw, 8rem)", // 1rem min, 10% of viewport width, 8.5rem max
				dynamich3: "clamp(0.5rem, 13vw, 5rem)", // 1rem min, 10% of viewport width, 8.5rem max
				dynamich5: "clamp(0.5rem, 7.5vw, 2.25rem)", // 1rem min, 10% of viewport width, 8.5rem max
				dynamich6: "clamp(0.5rem, 6vw, 1.5rem)", // 1rem min, 10% of viewport width, 8.5rem max
				dynamicp: "clamp(0.5rem, 4vw, 1rem)", // 1rem min, 10% of viewport width, 8.5rem max
			},
			screens: {
				'xs': '440px',
				'2xs': '320px',
			},
		}
	},
	plugins: [],
}

