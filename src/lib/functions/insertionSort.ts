import { get } from "svelte/store";
import { wait } from "./extras";
import { type Writable } from "svelte/store";
import { type CharObj, currentAlgorithm } from "./store";

export async function insertionSort(store: Writable<CharObj[]>) {
	if (get(currentAlgorithm) == 'insertionSort') { // If already doing insertionSort, return
		return;
	}
	currentAlgorithm.set('insertionSort');

	let n = get(store).length; // length of array
	// loop over the array starting from the second element
	for (let i = 1; i < n; i++) {
		// store the current element in a variable
		let current = get(store)[i];
		// initialize a variable j with the previous index
		let j = i - 1;
		// loop over the sorted subarray from right to left
		while (j >= 0 && get(store)[j].index > current.index) {
			// move the element at index j to the right by one position
			if (get(currentAlgorithm) !== 'insertionSort') { // If algorithm changes, stop doing insertionSort
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
	}

	currentAlgorithm.set(null);
}
