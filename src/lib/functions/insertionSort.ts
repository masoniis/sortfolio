import { get } from "svelte/store";
import { wait } from "./extras";
import { type Writable } from "svelte/store";
import { type CharObj, currentAlgorithm } from "./store";

export async function insertionSort(store: Writable<CharObj[]>) {
	if (get(currentAlgorithm).name == 'Insertion sort') { // If already doing insertionSort, return
		return;
	}
	currentAlgorithm.update((alg) => { alg.name = 'Insertion sort'; return alg; });
	currentAlgorithm.update((alg) => { alg.complexity = 'O(n^2)'; return alg; });

	let n = get(store).length; // length of array
	for (let i = 1; i < n; i++) {
		let current = get(store)[i];
		current.scan = true;
		// initialize a variable j with the previous index
		let j = i - 1;
		// loop over the sorted subarray from right to left
		while (j >= 0 && get(store)[j].index > current.index) {
			// move the element at index j to the right by one position
			if (get(currentAlgorithm).name !== 'Insertion sort') { // If algorithm changes, stop doing insertionSort
				current.scan = false;
				return;
			}
			store.update((arr) => {
				let temp = arr[j + 1];
				arr[j + 1] = arr[j];
				arr[j] = temp;
				return arr;
			});
			await wait(150);
			j--;
		}
		current.scan = false;
	}

	store.update((arr) => { return arr }) // Update store with current state for UI

	currentAlgorithm.update((alg) => { alg.name = undefined; return alg; });
}
