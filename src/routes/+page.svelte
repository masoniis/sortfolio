<script lang="ts">
	import { charSwap } from "../lib/charSwap";
	import { textArray } from "../lib/store";
	import { bubbleSort } from "../lib/bubbleSort.svelte";
	import { insertionSort } from "../lib/insertionSort.svelte";
	import { shuffle } from "../lib/shuffle.svelte";
</script>

<body>
	<button on:click={() => shuffle(textArray)}>shuffle</button>
	<button on:click={() => bubbleSort(textArray)}>bubble sort</button>
	<button on:click={() => insertionSort(textArray)}>insertion sort</button>
	<h1>
		{#each $textArray as char, i (char)}
			<span animate:charSwap={i}>{char.value}</span>
		{/each}
	</h1>
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
</style>
