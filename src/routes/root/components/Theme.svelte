<script lang="ts">
	import { afterUpdate } from "svelte";
	import { get } from "svelte/store";
	import { colorStore, updateTheme } from "$lib/functions/themeStore";

	let color: string = get(colorStore) || "#22C55D";

	afterUpdate(() => {
		updateTheme(color);
		colorStore.set(color);
	});

	function reset() {
		color = "#22C55D";
		updateTheme(color);
		colorStore.set(color);
	}
</script>

<div class="flex flex-row gap-2 items-center">
	<input class="bg-transparent" type="color" bind:value={color} />
	{#if color !== "#22C55D"}
		<button class="text-primaryfg/50 text-dynamicp" on:click={() => reset()}>
			Reset
		</button>
	{/if}
</div>
