<script lang="ts">
	import { charSwap } from "../lib/charSwap";
	import { textArray } from "../lib/store";
	import { bubbleSort } from "../lib/bubbleSort.svelte";
	import { shuffle } from "../lib/shuffle.svelte";
</script>

<body>
	<button on:click={() => bubbleSort(textArray)}>bubble sort</button>
	<button on:click={() => shuffle(textArray)}>shuffle</button>
	<h1 class="text">
		{#each $textArray as char, i (char)}
			<span animate:charSwap={i}>{char.value}</span>
		{/each}
	</h1>
</body>

<style>
	h1 {
		font-family: "Source Code Pro", monospace;
		color: #c8d0f2;
		font-size: 5em;
	}

	.text {
		display: inline-block;
		font-size: 4rem;
		font-family: "Source Code Pro", monospace;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
