<script lang="ts">
	import { onMount } from "svelte";
	import { GithubIcon, LinkedinIcon } from "$lib/components/icons";

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
		class="mx-auto max-w-7xl py-12 2xs:flex 2xs:items-center 2xs:justify-between"
	>
		<div class="flex justify-center space-x-6 2xs:order-2">
			<GithubIcon />
			<LinkedinIcon />
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
