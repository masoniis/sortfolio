import { get } from "svelte/store";
import { wait, shuffle, unshuffle, prestyle, isSorted } from "$lib/functions/sorthelpers";
import { type Writable } from "svelte/store";
import { type CharObj, currentAlgorithm } from "$lib/functions/store";

async function bogoSort(store: Writable<CharObj[]>, ms: { interval: number }) {
	currentAlgorithm.update((alg) => { alg.name = 'Bogosort'; alg.complexity = 'O(n*n!)'; return alg; });
	prestyle(store, "bogo");

	get(store).forEach((char: CharObj) => {
		console.log(char);
	});

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

export default bogoSort;
