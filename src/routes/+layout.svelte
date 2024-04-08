<script lang="ts">
	import "../app.css";
	import Navbar from "$lib/components/Navbar.svelte";
	import Footer from "$lib/components/Footer.svelte";
</script>

<svelte:head>
	<!-- <link -->
	<!-- 	href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" -->
	<!-- 	rel="stylesheet" -->
	<!-- /> -->
	<link
		rel="preload"
		as="font"
		href="/fonts/VT323.ttf"
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
