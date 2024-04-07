<script lang="ts">
	import { charSwap } from "$lib/functions/charSwap";
	import { textArray } from "$lib/functions/store";
	import { bubbleSort } from "$lib/functions/bubbleSort";
	import { insertionSort } from "$lib/functions/insertionSort";
	import { bogoSort } from "$lib/functions/bogoSort";
	import { shuffle } from "$lib/functions/shuffle";
	import { currentAlgorithm } from "$lib/functions/store";
</script>

<body class="m-8">
	<h1 class="overflow-clip text-7xl sm:text-8xl md:text-9xl">
		{#each $textArray as char, i (char)}
			<span animate:charSwap={i}>{@html char.value}</span>
		{/each}
	</h1>
	<h3 class="flex justify-center">
		<span class="bg-primaryaccentbg text-primaryaccentfg"
			>Current algorithm: {$currentAlgorithm || "None"}
		</span>
	</h3>
	<div class="flex justify-center overflow-clip">
		<button on:click={() => shuffle(textArray)}>shuffle</button>
		<button on:click={() => bubbleSort(textArray)}>bubble sort</button>
		<button on:click={() => insertionSort(textArray)}>insertion sort</button>
		<button on:click={() => bogoSort(textArray)}>BOGO sort</button>
	</div>
</body>

<style lang="postcss">
	h1 {
		color: theme(colors.primaryfg);
		display: flex;
		justify-content: center;
		align-items: center;
	}
	h3 {
		font-size: 3em;
	}

	button {
		font-family: "Source Code Pro", monospace;
		color: theme(colors.primaryaccentfg);
		background-color: theme(colors.primaryaccentbg);
		border: none;
		padding: 0.5em 1em;
		margin: 0.5em;
		cursor: pointer;
	}
</style>
