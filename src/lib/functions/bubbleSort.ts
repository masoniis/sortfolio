import { get } from "svelte/store";
import { wait } from "./extras";
import { type Writable } from "svelte/store";
import { type CharObj, currentAlgorithm } from "./store";

export async function bubbleSort(store: Writable<CharObj[]>) {
	if (get(currentAlgorithm).name == 'Bubble sort') { // If already doing bubble, return
		return;
	}
	currentAlgorithm.update((alg) => { alg.name = 'Bubble sort'; return alg; });
	currentAlgorithm.update((alg) => { alg.complexity = 'O(n^2)'; return alg; });

	// get the length of the array
	let n = get(store).length;
	for (let i = 0; i < n - 1; i++) {
		for (let j = 0; j < n - i - 1; j++) {
			if (get(store)[j].index > get(store)[j + 1].index) {
				if (get(currentAlgorithm).name !== 'Bubble sort') // If algorithm changes, stop doing bubblesort
					return;
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
	currentAlgorithm.update((alg) => { alg.name = undefined; return alg; });
}
