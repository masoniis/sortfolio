<script lang="ts">
	import { onMount } from "svelte";

	//INFO: Last updated text that automatically updates when github changes
	let lastUpdatedText = "Updated a while ago...";

	onMount(() => {
		fetch("https://api.github.com/repos/masoniis/portfolio")
			.then((response) => {
				if (response.ok) {
					return response.json();
				} else {
					throw new Error("Failed to fetch repository");
				}
			})
			.then((repo) => {
				if (repo) {
					const lastUpdated = new Date(repo.pushed_at).toLocaleDateString();
					lastUpdatedText = `Updated ${lastUpdated}`;
				}
			})
			.catch((error) => {
				console.error("Error:", error);
			});
	});
</script>

<footer class="bg-primarybg">
	<div
		class="mx-auto max-w-7xl py-12 2xs:flex 2xs:items-center 2xs:justify-between lg:px-8"
	>
		<div class="flex justify-center space-x-6 2xs:order-2">
			<a
				href="https://github.com/masoniis"
				class="text-primaryfg hover:text-primaryaccentbg transition-colors ease-in-out duration-300"
			>
				<span class="sr-only">GitHub</span>
				<svg
					class="h-6 w-6"
					fill="currentColor"
					viewBox="0 0 24 24"
					aria-hidden="true"
				>
					<path
						fill-rule="evenodd"
						d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
						clip-rule="evenodd"
					/>
				</svg>
			</a>
			<a
				href="https://www.linkedin.com/in/masonmbott/"
				class="text-primaryfg hover:text-primaryaccentbg transition-colors ease-in-out duration-300"
			>
				<span class="sr-only">LinkedIn</span>
				<svg
					class="h-6 w-6"
					fill="currentColor"
					viewBox="0 0 24 24"
					aria-hidden="true"
				>
					<path
						d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z"
					/>
				</svg>
			</a>
		</div>
		<div class="mt-8 2xs:order-1 2xs:mt-0">
			<p class="text-center text-xs leading-5 text-primaryfg">
				&copy; 2024 Mason Bott
			</p>
			<p class="text-center text-xs leading-5 text-primaryfg/70">
				{lastUpdatedText}
			</p>
		</div>
	</div>
</footer>
