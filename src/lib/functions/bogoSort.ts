import { get } from "svelte/store";
import { wait } from "./extras";
import { shuffle } from "./shuffle";
import { type Writable } from "svelte/store";
import { type CharObj, currentAlgorithm } from "./store";

export async function bogoSort(store: Writable<CharObj[]>) {
	currentAlgorithm.set('bogoSort');

	// get the length of the array
	let n = get(store).length;

	// keep shuffling the array until it is sorted
	while (!isSorted(store)) {
		if (get(currentAlgorithm) !== 'bogoSort') { // If algorithm changes, stop doing BOGO
			return;
		}

		shuffle(store);
		await wait(200);
	}

	currentAlgorithm.set(null);
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
