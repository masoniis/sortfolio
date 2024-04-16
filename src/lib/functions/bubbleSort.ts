import { get } from "svelte/store";
import { wait } from "./extras";
import { type Writable } from "svelte/store";
import { type CharObj, currentAlgorithm } from "./store";

export async function bubbleSort(store: Writable<CharObj[]>, ms: { interval: number }) {
	currentAlgorithm.update((alg) => { alg.name = 'Bubble sort'; alg.complexity = 'O(n^2)'; return alg; });

	let n = get(store).length;
	for (let i = 0; i < n; i++) { // N passes
		for (let j = 0; j < n - i - 1; j++) { // N comparisons between adjacent elements
			get(store)[j].scan = true;
			get(store)[j + 1].scan = true;
			if (get(store)[j].index > get(store)[j + 1].index) {
				let temp = get(store)[j];
				store.update((arr) => {
					arr[j] = arr[j + 1];
					arr[j + 1] = temp;
					return arr;
				});
				await wait(ms.interval);
			}
			get(store)[j].scan = false;
			get(store)[j + 1].scan = false;
		}
		get(store)[n - i - 1].final = true;
	}
}
