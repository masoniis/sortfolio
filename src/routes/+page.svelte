<script lang="ts">
	import { charSwap } from "$lib/functions/charSwap";
	import { textArray } from "$lib/functions/store";
	import { bubbleSort } from "$lib/functions/bubbleSort";
	import { insertionSort } from "$lib/functions/insertionSort";
	import { bogoSort } from "$lib/functions/bogoSort";
	import { shuffle } from "$lib/functions/shuffle";
	import { currentAlgorithm } from "$lib/functions/store";
</script>

<body>
	<button on:click={() => shuffle(textArray)}>shuffle</button>
	<button on:click={() => bubbleSort(textArray)}>bubble sort</button>
	<button on:click={() => insertionSort(textArray)}>insertion sort</button>
	<button on:click={() => bogoSort(textArray)}>BOGO sort</button>
	<h1>
		{#each $textArray as char, i (char)}
			<span animate:charSwap={i}>{char.value}</span>
		{/each}
	</h1>
	<h3>Current algorithm: {$currentAlgorithm || "None"}</h3>
</body>

<style>
	h1 {
		font-family: "Source Code Pro", monospace;
		color: #c8d0f2;
		font-size: 8em;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	h3 {
		font-family: "Source Code Pro", monospace;
		color: #c8d0f2;
		font-size: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
