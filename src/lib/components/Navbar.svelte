<script>
	import { writable } from "svelte/store";
	import { page } from "$app/stores";

	const isDropdownOpen = writable(false);

	function toggleDropdown() {
		isDropdownOpen.update((prev) => !prev);
	}
</script>

<nav class="bg-secondarybg">
	<div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
		<div class="relative flex h-16 items-center justify-between">
			<div class="flex flex-1">
				<a href="/" class="flex flex-shrink-0 items-center">
					<img
						class="h-8 w-auto text-secondaryfg"
						src="knight.svg"
						alt="Icon"
					/>
				</a>
			</div>
			<div></div>
			<div class="hidden sm:ml-6 sm:block">
				<div class="flex space-x-4">
					<a
						href="/"
						class="bg-secondaryaccentbg text-secondaryaccentfg rounded-md px-3 py-2 text-sm font-medium"
						class:active={$page.url.pathname === "/"}
						aria-current="page">Home</a
					>
					<a
						href="/projects"
						class="bg-secondaryaccentbg text-secondaryaccentfg rounded-md px-3 py-2 text-sm font-medium"
						class:active={$page.url.pathname === "/projects"}
						aria-current="page">Projects</a
					>
					<a
						href="/about"
						class="bg-secondaryaccentbg text-secondaryaccentfg rounded-md px-3 py-2 text-sm font-medium"
						class:active={$page.url.pathname === "/about"}
						aria-current="page">About</a
					>
				</div>
			</div>

			<div class="flex items-center sm:hidden">
				<button
					type="button"
					class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
					aria-controls="mobile-menu"
					aria-expanded="false"
					on:click={toggleDropdown}
				>
					<span class="absolute -inset-0.5"></span>
					<span class="sr-only">Open main menu</span>
					<!--
            Icon when menu is closed.

            Menu open: "hidden", Menu closed: "block"
          -->
					<svg
						class="block h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
						/>
					</svg>
					<!--
            Icon when menu is open.

            Menu open: "block", Menu closed: "hidden"
          -->
					<svg
						class="hidden h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>
			</div>
		</div>
	</div>

	<!-- Mobile menu, show/hide based on menu state. -->
	{#if $isDropdownOpen}
		<div class="sm:hidden" id="mobile-menu">
			<div class="space-y-1 px-2 pb-3 pt-2">
				<a
					href="/"
					class="bg-secondaryaccentbg text-secondaryaccentfg rounded-md px-3 py-2 text-sm font-medium"
					class:active={$page.url.pathname === "/"}
					aria-current="page">Home</a
				>
				<a
					href="/projects"
					class="bg-secondaryaccentbg text-secondaryaccentfg rounded-md px-3 py-2 text-sm font-medium"
					class:active={$page.url.pathname === "/projects"}
					aria-current="page">Projects</a
				>
				<a
					href="/about"
					class="bg-secondaryaccentbg text-secondaryaccentfg rounded-md px-3 py-2 text-sm font-medium"
					class:active={$page.url.pathname === "/about"}
					aria-current="page">About</a
				>
			</div>
		</div>
	{/if}
</nav>

<style lang="postcss">
	a.active {
		@apply underline-offset-1;
		@apply underline;
	}
</style>
