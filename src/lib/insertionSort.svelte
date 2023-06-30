<script lang="ts" context="module">
	import { get } from "svelte/store";
	import { wait } from "./extras.svelte";
	import type { Writable } from "svelte/store";
	import type { CharObj } from "./extras.svelte";

	export async function insertionSort(store: Writable<CharObj[]>) {
		// get the length of the array
		let n = get(store).length;
		// loop over the array starting from the second element
		for (let i = 1; i < n; i++) {
			// store the current element in a variable
			let current = get(store)[i];
			// initialize a variable j with the previous index
			let j = i - 1;
			// loop over the sorted subarray from right to left
			while (j >= 0 && get(store)[j].index > current.index) {
				// move the element at index j to the right by one position
				store.update((arr) => {
					let temp = arr[j+1];
					arr[j + 1] = arr[j];
					arr[j] = temp;
					return arr;
				});
				await wait(150);
				// decrement j
				j--;
			}
			// insert the current element at the correct position
			store.update((arr) => {
				arr[j + 1] = current;
				return arr;
			});
			await wait(150);
		}
	}
</script>
