<script lang="ts">
	import "../app.css";
	import Navbar from "$lib/components/Navbar.svelte";
	import Footer from "$lib/components/Footer.svelte";
	import { dev } from "$app/environment";
	import { inject } from "@vercel/analytics";
	import { injectSpeedInsights } from "@vercel/speed-insights/sveltekit";

	inject({ mode: dev ? "development" : "production" });
	injectSpeedInsights();

	let mouseX = 0;
	let mouseY = 0;
	let scrollY = 0;

	$: auraStyle = `--top: ${mouseY - 300}px; --left: ${mouseX - 300}px;`;

	const handleMouseMove = (e: MouseEvent) => {
		mouseX = e.clientX;
		mouseY = e.clientY;
	};
</script>

<svelte:head>
	<link
		rel="preload"
		as="font"
		href="/fonts/VT323.ttf"
		type="font/ttf"
		crossorigin="anonymous"
	/>
	<link
		rel="preload"
		as="font"
		href="/fonts/Inter-Variable.ttf"
		type="font/ttf"
		crossorigin="anonymous"
	/>
</svelte:head>

<svelte:window bind:scrollY on:mousemove={handleMouseMove} />

<div
	id="beast"
	class="selection:bg-primaryaccentbg selection:text-primaryaccentfg"
>
	<div class="aura" style={auraStyle}></div>
	<!-- <Navbar /> -->
	<slot class="z-10" />
	<Footer />
</div>

<style lang="postcss">
	:global(html) {
		@apply bg-primarybg;
	}

	:global(body) {
		@apply mx-4 xs:mx-8 sm:mx-10;
	}

	.aura {
		@apply w-[600px] h-[600px] fixed rounded-full z-[1] overflow-visible pointer-events-none;
		top: var(--top);
		left: var(--left);
		background: radial-gradient(
			circle,
			theme(colors.primaryfg/.05) 0%,
			transparent 50%
		);
	}

	#beast {
		@apply selection:bg-primaryfg selection:text-primarybg;
	}

	/* width */
	:root::-webkit-scrollbar {
		width: 7px;
	}

	/* Track */
	:root::-webkit-scrollbar-track {
		background: transparent;
		border-radius: 100vw;
		margin-block: 0.25rem;
	}

	/* Handle */
	:root::-webkit-scrollbar-thumb {
		background: theme(colors.primaryaccentfg/.6);
		border-radius: 100vw;
	}

	/* Handle on hover */
	:root::-webkit-scrollbar-thumb:hover {
		background: theme(colors.primaryaccentfg/.6);
	}

	@supports (scrollbar-color: theme(colors.primaryaccentfg/.3) #fff) {
		:root {
			scrollbar-color: theme(colors.primaryaccentfg/.6)
				theme(colors.primaryaccentbg/.3);
			scrollbar-width: thin;
			overflow: none;
		}
	}
</style>
