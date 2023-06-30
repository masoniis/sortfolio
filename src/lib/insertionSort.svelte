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
	/* export async function insertionSort(store: Writable<CharObj[]>) {
		// get the length of the array
		let n = get(store).length;
		// loop over the array from index 1 to the end
		for (let i = 1; i < n; i++) {
			// save the current element as key
			let key = get(store)[i];
			// initialize j as i - 1
			let j = i - 1;
			// compare key with the elements to its left
			while (j >= 0 && get(store)[j].index > key.index) {
				// swap the element at j with the element at j + 1
				store.update((arr) => {
					arr[j + 1] = arr[j];
					return arr;
				});
				// decrement j by 1
				j--;
				// wait for 150 milliseconds
				await wait(150);
			}
			// insert key at the correct position
			store.update((arr) => {
				arr[j + 1] = key;
				return arr;
			});
		}
	} */
</script>
