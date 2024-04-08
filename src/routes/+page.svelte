<script lang="ts">
	import { charSwap } from "$lib/functions/charSwap";
	import { textArray } from "$lib/functions/store";
	import { bubbleSort } from "$lib/functions/bubbleSort";
	import { insertionSort } from "$lib/functions/insertionSort";
	import { bogoSort } from "$lib/functions/bogoSort";
	import { shuffle } from "$lib/functions/shuffle";
	import { currentAlgorithm } from "$lib/functions/store";
	import { fade } from "svelte/transition";
	import { autoplay } from "$lib/functions/autoplay";
	import { onMount } from "svelte";

	onMount(() => {
		autoplay();
	});
</script>

<spacer class="flex flex-grow pt-32 sm:pt-52"></spacer>
<container
	class="text-primaryfg min-h-screen flex flex-grow flex-col max-w-7xl mx-auto"
>
	<div class="flex flex-col">
		<h3 class="text-primaryfg w-fit text-dynamich3">Hey, I'm</h3>
		<h1 class="flex overflow-clip text-dynamich1 text-primaryfg ml-6">
			{#each $textArray as charObj, i (charObj)}
				<span class:scan={charObj.scan} animate:charSwap={i}>
					{@html charObj.value}
				</span>
			{/each}
		</h1>
		<container class="min-h-12 mt-4 font-code">
			{#if $currentAlgorithm?.name}
				<h6
					class="text-green-500 text-dynamich6"
					transition:fade={{ duration: 200 }}
				>
					{$currentAlgorithm.name}: {$currentAlgorithm.complexity}
				</h6>
			{/if}
		</container>
	</div>
</container>

<!-- background: linear-gradient( -->
<!-- 	90deg, -->
<!-- 	rgba(2, 0, 36, 1) 0%, -->
<!-- 	rgba(9, 9, 121, 1) 35%, -->
<!-- 	theme(colors.primaryaccentbg) 100% -->
<!-- ); -->

<style lang="postcss">
	h1 {
		line-height: 0.9;
		overflow: visible;
	}

	button {
		@apply text-primaryaccentfg bg-primaryaccentbg mx-2 p-2 cursor-pointer;
		@apply border-none rounded-md;
	}

	span.scan {
		@apply border-b-2 border-green-500;
	}
</style>
