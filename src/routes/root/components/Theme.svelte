<script lang="ts">
	import { afterUpdate } from "svelte";
	import { get } from "svelte/store";
	import { colorStore } from "$lib/functions/themeStore";

	let color: string = get(colorStore) || "#22C55D";

	function updateCSSVariable(name: string, value: string) {
		const root = document.documentElement;
		value = value ? value.replace("#", "") : "#22C55D";
		//
		const rgb = value
			.match(/.{1,2}/g)!
			.map((x) => parseInt(x, 16))
			.join(" ");

		root.style.setProperty(name, rgb);
	}

	afterUpdate(() => {
		updateCSSVariable("--color-primaryaccentbg", color);
		colorStore.set(color);
	});

	function reset() {
		color = "#22C55D";
		updateCSSVariable("--color-primaryaccentbg", color);
		colorStore.set(color);
	}
</script>

<div class="flex flex-row gap-2 items-center">
	<input class="bg-primarybg" type="color" bind:value={color} />
	{#if color !== "#22C55D"}
		<button class="text-primaryfg/50 text-dynamicp" on:click={() => reset()}>
			Reset
		</button>
	{/if}
</div>
