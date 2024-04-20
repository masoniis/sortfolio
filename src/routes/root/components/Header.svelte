<script>
	import { get } from "svelte/store";
	import { charSwap } from "$lib/functions/charSwap";
	import { textArray, currentAlgorithm } from "$lib/functions/store";
	import { fade } from "svelte/transition";
	import { autoplay } from "$lib/functions/autoplay";
	import { onMount } from "svelte";
	import { GithubIcon, LinkedinIcon } from "$lib/components/icons";
	import Sortsettings from "./Sortsettings.svelte";

	onMount(() => {
		if (get(currentAlgorithm).name == "start") {
			currentAlgorithm.set({ name: "", complexity: "" });
			autoplay();
		}
	});
</script>

<div class="flex flex-col">
	<h1 class="flex overflow-clip text-dynamich3 text-primaryfg pt-16 sm:pt-24">
		{#each $textArray as charObj (charObj)}
			<span
				class:scan={charObj.scan}
				class:final={charObj.final}
				class="transition-colors duration-500 {charObj.style}"
				animate:charSwap
			>
				{@html charObj.value}
			</span>
		{/each}
	</h1>
	<container class="min-h-16 mt-4 text-dynamich6 font-code">
		{#if $currentAlgorithm?.name && $currentAlgorithm?.complexity}
			<h6
				class="text-primaryaccentbg text-dynamich5"
				transition:fade={{ duration: 200 }}
			>
				{$currentAlgorithm.name}: {$currentAlgorithm.complexity}
			</h6>
		{/if}
	</container>
	<p class="text-primaryfg/80 text-dynamicp sm:max-w-[70%] font-light">
		Computer science student, software developer, and a tech enthusiast.
	</p>
	<div class="flex flex-row space-x-2 pt-6">
		<GithubIcon />
		<LinkedinIcon />
	</div>
	<Sortsettings />
</div>

<style lang="postcss">
	h1 {
		line-height: 0.9;
		overflow: visible;
	}

	span.scan {
		@apply bg-primaryaccentbg/30;
	}

	span.final {
		@apply underline decoration-primaryaccentbg/80 underline-offset-1;
	}

	span.bogo {
		@apply transition duration-100;
	}

	span.pivot {
		@apply underline decoration-yellow-500 underline-offset-1;
	}

	span.lbound {
		@apply underline decoration-blue-500 underline-offset-1;
	}

	span.rbound {
		@apply underline decoration-red-500 underline-offset-1;
	}
</style>
