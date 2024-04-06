<svelte:head>
	<link
		href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<nav>
	<a href="/">home</a>
	<a href="/about">about</a>
</nav>

<slot />

<style>
	:global(body) {
		background: #1e1e2d;
	}

	/* https://grainy-gradients.vercel.app/ */
	/* :global(body) { */
	/* 	height: 100%; */
	/* 	width: 100%; */
	/* 	margin: 0; */
	/* 	filter: contrast(100%) brightness(100%); */
	/* 	background: linear-gradient( */
	/* 			120deg, */
	/* 			rgba(0, 0, 0, 0.75), */
	/* 			rgba(0, 0, 0, 0.79) */
	/* 		), */
	/* 		url("data:image/svg+xml,%3Csvg viewBox='0 0 75 75' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='7.07' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E"); */
	/* 	background-size: cover; */
	/* } */
</style>
