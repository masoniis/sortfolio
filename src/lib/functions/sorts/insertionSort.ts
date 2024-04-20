import { get } from "svelte/store";
import { wait } from "$lib/functions/extras";
import { type Writable } from "svelte/store";
import { type CharObj, currentAlgorithm } from "$lib/functions/store";

export async function insertionSort(store: Writable<CharObj[]>, ms: { interval: number }) {
	currentAlgorithm.update((alg) => { alg.name = 'Insertion sort'; alg.complexity = 'O(n^2)'; return alg; });

	let n = get(store).length; // length of array
	get(store)[0].final = true;
	for (let i = 1; i < n; i++) {
		let current = get(store)[i];
		current.scan = true;
		store.update((arr) => { return arr });
		await wait(ms.interval);

		for (let j = i; j > 0; j--) {
			if (get(store)[j].index > get(store)[j - 1].index)
				break;

			store.update((arr) => {
				const temp = arr[j - 1];
				arr[j - 1] = arr[j];
				arr[j] = temp;
				return arr;
			});

			await wait(ms.interval);
		}

		await wait(ms.interval);
		current.final = true;
		current.scan = false;
	}

	store.update((arr) => { return arr }) // Update store with current state for UI

	currentAlgorithm.update((alg) => { alg.name = undefined; return alg; });
}
