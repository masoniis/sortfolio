import { get } from "svelte/store";
import { wait } from "$lib/functions/sorthelpers";
import { type Writable } from "svelte/store";
import { type CharObj, currentAlgorithm } from "$lib/functions/store";

async function insertionSort(store: Writable<CharObj[]>, ms: { interval: number }) {
	currentAlgorithm.update((alg) => { alg.name = 'Selection sort'; alg.complexity = 'O(n^2)'; return alg; });

	let n = get(store).length;

	for (let i = 0; i < n; i++) {
		let min: number = 1 / 0;
		let mindex = 0;

		for (let j = i; j < n; j++) {
			await wait(ms.interval / 2);

			const char = get(store)[j];
			char.style = "scan";
			store.update((arr) => { return arr; });

			if (char.index < min) {
				if (min != 1 / 0) {
					get(store)[mindex].removeStyle("min");
				}
				min = char.index;
				mindex = j;
				store.update((arr) => {
					arr[j].addStyle("min");
					return arr;
				});
			}
		}

		await wait(ms.interval);

		store.update((arr) => {
			[arr[i], arr[mindex]] = [arr[mindex], arr[i]];
			arr[i].style = "final";
			return arr;
		});

		store.update((arr) => {
			for (let k = 0; k < arr.length; k++) {
				arr[k].removeStyle("scan");
			}
			return arr
		});

		await wait(ms.interval);
	}

	store.update((arr) => { return arr })
}

export default insertionSort;
