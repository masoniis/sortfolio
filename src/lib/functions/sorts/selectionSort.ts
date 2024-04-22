import { get } from "svelte/store";
import { wait } from "$lib/functions/sorthelpers";
import { type Writable } from "svelte/store";
import { type CharObj, currentAlgorithm } from "$lib/functions/store";

async function insertionSort(store: Writable<CharObj[]>, ms: { interval: number }) {
	currentAlgorithm.update((alg) => { alg.name = 'Selection sort'; alg.complexity = 'O(n^2)'; return alg; });

	let n = get(store).length;
	console.log(get(store));
	for (let i = 0; i < n; i++) {
		let min: number = 1 / 0;
		let mindex = 0;
		console.log(min);

		for (let j = i; j < n; j++) {
			const char = get(store)[j];
			char.scan = true;

			if (char.index < min) {
				min = char.index;
				mindex = j;
			}

			store.update((arr) => { return arr; });
			await wait(ms.interval);
		}
		await wait(ms.interval);

		for (let i = 0; i < get(store).length; i++) {
			get(store)[i].scan = false;
		}

		store.update((arr) => {
			[arr[i], arr[mindex]] = [arr[mindex], arr[i]];
			arr[i].final = true;
			return arr;
		});


		await wait(ms.interval);
	}

	store.update((arr) => { return arr })
}

export default insertionSort;
