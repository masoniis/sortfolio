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
</script>

<input class="bg-primarybg" type="color" bind:value={color} />
