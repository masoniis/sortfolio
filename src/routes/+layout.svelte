<script lang="ts">
	import "../app.css";
	import Navbar from "$lib/components/Navbar.svelte";
	import Footer from "$lib/components/Footer.svelte";
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

<Navbar />
<slot />
<Footer />

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.primarybg);
	}

	:global(body) {
		@apply mx-4 xs:mx-8 sm:mx-10;
	}
</style>
