<script lang="ts">
	import "../app.css";
	import Navbar from "$lib/components/Navbar.svelte";
	import Footer from "$lib/components/Footer.svelte";

	let mouseX = 0;
	let mouseY = 0;
	let scrollY = 0;
	let prevScrolly = 0;
	let dY = 0;

	$: auraStyle = `--top: ${mouseY - 200 + dY}px; --left: ${mouseX - 200}px;`;

	$: {
		dY += scrollY - prevScrolly;
		prevScrolly = scrollY;
	}

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

<svelte:window bind:scrollY />

<div role="region" on:mousemove={handleMouseMove}>
	<Navbar />
	<div class="aura overflow-clip overflow-x-hidden" style={auraStyle}></div>
	<slot />
	<Footer />
</div>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.primarybg);
	}

	:global(body) {
		@apply mx-4 xs:mx-8 sm:mx-10;
		@apply overscroll-y-none;
	}

	.aura {
		@apply w-[400px] h-[400px] absolute rounded-full z-[1] overflow-visible;
		top: var(--top);
		left: var(--left);
		background: radial-gradient(
			circle,
			theme(colors.primaryfg/.04) 0%,
			transparent 30%
		);
		pointer-events: none;
	}
</style>
