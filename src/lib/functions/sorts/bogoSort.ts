import { get } from "svelte/store";
import { wait } from "$lib/functions/extras";
import { shuffle } from "$lib/functions/shuffle";
import { unshuffle } from "$lib/functions/unshuffle";
import { type Writable } from "svelte/store";
import { type CharObj, currentAlgorithm } from "$lib/functions/store";

export async function bogoSort(store: Writable<CharObj[]>, ms: { interval: number }) {
	currentAlgorithm.update((alg) => { alg.name = 'Bogosort'; alg.complexity = 'O(n*n!)'; return alg; });
	let counter = 0;

	while (!isSorted(store)) {
		for (let i = 0; i < get(store).length; i++)
			get(store)[i].scan = false;

		if (Math.random() < 0.25 && counter > 9) {
			unshuffle(store);
		} else {
			shuffle(store);
		}

		store.update((arr) => { return arr });

		counter++;
		await wait(ms.interval);

		for (let i = 0; i < get(store).length; i++) {
			get(store)[i].scan = true;
			get(store)[i].style = "transition duration-100 ease-in-out";
			await wait(ms.interval / 10);
			store.update((arr) => { return arr });
		}

		await wait(ms.interval);
	}

	for (let i = 0; i < get(store).length; i++) {
		get(store)[i].final = true;
		get(store)[i].scan = false;
	}

	store.update((arr) => { return arr });
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
