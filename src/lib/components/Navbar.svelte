<script lang="ts">
	import { page } from "$app/stores";
	import { fade } from "svelte/transition";
	import { Hamburger } from "svelte-hamburgers";

	let open: boolean = false;
</script>

<nav class="bg-primarybg">
	<div class="mx-auto max-w-7xl">
		<div class="relative flex h-16 items-center justify-between">
			<div class="flex flex-1">
				<a
					href="/"
					id="icon"
					class="flex flex-shrink-0 items-center hover:border-b-0 p-4 m-[-16px]"
				>
					<img class="h-8 w-auto text-primaryfg" src="favicon.svg" alt="Icon" />
				</a>
			</div>
			<div></div>
			<div class="hidden sm:ml-6 sm:block">
				<div class="flex space-x-4">
					<a
						href="/"
						class:active={$page.url.pathname === "/"}
						aria-current="page">Home</a
					>
					<a
						href="/projects"
						class:active={$page.url.pathname === "/projects"}
						aria-current="page">Projects</a
					>
					<a
						href="/about"
						class:active={$page.url.pathname === "/about"}
						aria-current="page">About</a
					>
				</div>
			</div>

			<div class="flex items-center sm:hidden m-[-16px]">
				<Hamburger
					bind:open
					--color="var(--primary-fg-color)"
					ariaLabel="mobile-menu"
				/>
			</div>
		</div>
	</div>

	<!-- Mobile menu, show/hide based on menu state. -->
	{#if open}
		<div
			class="sm:hidden absolute right-0 mx-4 xs:mx-8 sm:mx-10"
			id="mobile-menu"
			transition:fade
		>
			<div class="space-y-1 pl-2 pb-3 pt-2">
				<a
					href="/"
					class:active={$page.url.pathname === "/"}
					on:click={() => (open = false)}
					aria-current="page">Home</a
				>
				<a
					href="/projects"
					class:active={$page.url.pathname === "/projects"}
					on:click={() => (open = false)}
					aria-current="page">Projects</a
				>
				<a
					href="/about"
					class:active={$page.url.pathname === "/about"}
					on:click={() => (open = false)}
					aria-current="page">About</a
				>
			</div>
		</div>
	{/if}
</nav>

<style lang="postcss">
	a:not(#icon).active {
		@apply border-primaryaccentbg border-b-2;
		@apply transition-all ease-in-out duration-200;
		@apply hover:translate-y-1 hover:border-b-4;
	}

	nav {
		--primary-fg-color: theme(colors.primaryfg);
	}

	nav a:not(#icon) {
		@apply bg-primarybg text-primaryfg px-3 py-2 text-sm font-medium border-primarybg;
		@apply hover:border-b-2 hover:border-primaryaccentbg/40;
		@apply transition-colors ease-in-out duration-300;
	}
</style>
