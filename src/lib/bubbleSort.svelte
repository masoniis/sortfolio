<script lang="ts" context="module">
	import { get } from "svelte/store";
	import type { Writable } from "svelte/store";
	import type { CharObj } from "./extras.svelte";
	import { wait } from "./extras.svelte";

	export async function bubbleSort(store: Writable<CharObj[]>) {
		// get the length of the array
		let n = get(store).length;
		// loop over the array n-1 times
		for (let i = 0; i < n - 1; i++) {
			// loop over the array from 0 to n-i-1
			for (let j = 0; j < n - i - 1; j++) {
				// compare two adjacent elements by their char property
				if (get(store)[j].index > get(store)[j + 1].index) {
					// swap them if they are out of order
					let temp = get(store)[j];
					store.update((arr) => {
						arr[j] = arr[j + 1];
						arr[j + 1] = temp;
						return arr;
					});
					await wait(150);
				}
			}
		}
	}
</script>
