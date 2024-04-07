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
	<div class="flex-col">
		<h3 class="m-3.5 text-primaryfg">Hi, I'm</h3>
		<h1 class="flex justify-center overflow-clip text-dynamich1 text-primaryfg">
			{#each $textArray as charObj, i (charObj)}
				<span class:scan={charObj.scan} animate:charSwap={i}>
					{@html charObj.value}
				</span>
			{/each}
		</h1>
	</div>
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

	span.scan {
		background: linear-gradient(
			90deg,
			rgba(2, 0, 36, 1) 0%,
			rgba(9, 9, 121, 1) 35%,
			theme(colors.primaryaccentbg) 100%
		);
		background-clip: text;
		-webkit-background-clip: text;
		color: transparent;
	}
</style>
