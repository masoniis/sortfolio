<script lang="ts">
	import { get } from "svelte/store";
	import { charSwap } from "$lib/functions/charSwap";
	import { textArray } from "$lib/functions/store";
	import { currentAlgorithm } from "$lib/functions/store";
	import { fade } from "svelte/transition";
	import { autoplay } from "$lib/functions/autoplay";
	import { onMount } from "svelte";

	onMount(() => {
		if (get(currentAlgorithm).name == "start") {
			currentAlgorithm.set({ name: "", complexity: "" });
			autoplay();
		}
	});
</script>

<container
	class="text-primaryfg min-h-screen flex flex-col space-y-8 lg:flex-row max-w-7xl mx-auto lg:space-x-16 lg:space-y-0 mt-8 sm:mt-12 lg:mt-20"
>
	<span class="h-full min-h-screen lg:flex-1">
		<span class="fixed">
			<div class="sticky top-0 flex flex-col">
				<h1 class="flex overflow-clip text-dynamich3 text-primaryfg">
					{#each $textArray as charObj, i (charObj)}
						<span class:scan={charObj.scan} animate:charSwap={i}>
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
				<p class="text-primaryfg/80 text-dynamichp max-w-[70%] font-light">
					Computer science student, software developer, and a tech enthusiast.
				</p>
				<spacer class="flex-grow" />
				<p class="pb-60">bottom</p>
			</div>
		</span>
	</span>
	<div
		class="flex-1 flex flex-col overflow-auto text-dynamicp text-primaryfg/80"
	>
		<p>
			I'm a 2nd year in Computer Science at the University of Colorado Boulder.
			I love to learn, and fascinated by computers, and such.
		</p>
		<button
			class="bg-primaryaccentbg text-primaryaccentfg rounded-sm p-2 hover:bg-primaryaccentbg/80"
		>
			see resume
		</button>
		<spacer class="flex-grow mb-96" />
		<p>test</p>
		<spacer class="mb-96" />
		<p>test</p>
		<spacer class="mb-96" />
		<p>test</p>
		<p>test</p>
		<spacer class="mb-96" />
		<p>test</p>
		<p>test</p>
	</div>
</container>

<style lang="postcss">
	h1 {
		line-height: 0.9;
		overflow: visible;
	}

	span.scan {
		@apply border-b-2 border-primaryaccentbg;
	}
</style>
