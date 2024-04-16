import { get } from "svelte/store";
import { wait } from "./extras";
import { shuffle } from "./shuffle";
import { unshuffle } from "./unshuffle";
import { type Writable } from "svelte/store";
import { type CharObj, currentAlgorithm } from "./store";
import { msInterval } from "./autoplay";

export async function bogoSort(store: Writable<CharObj[]>, ms: { interval: number }) {
	currentAlgorithm.update((alg) => { alg.name = 'Bogosort'; alg.complexity = 'O(n*n!)'; return alg; });

	// keep shuffling the array until it is sorted
	while (!isSorted(store)) {
		if (Math.random() < 0.08) {
			unshuffle(store);
		} else {
			shuffle(store);
		}

		console.log("MS IN SORT: " + ms.interval);

		await wait(ms.interval);
	}

	currentAlgorithm.update((alg) => { alg.name = undefined; return alg; });
}

function isSorted(store: Writable<CharObj[]>): boolean {
	const arr = get(store);
	for (let i = 0; i < arr.length - 1; i++) {
		if (arr[i].index > arr[i + 1].index) {
			return false;
		}
	}
	return true;
}
