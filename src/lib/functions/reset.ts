import type { CharObj } from "./store";
import type { Writable } from "svelte/store";
import { currentAlgorithm } from "./store";

// Simple function to reset the array to its initial state
export function reset(store: Writable<CharObj[]>) {
	store.update((arr) => {
		for (let i = 0; i < arr.length; i++) {
			arr[i].scan = false;
			arr[i].final = false;
		}
		return arr;
	});

	currentAlgorithm.update((alg) => { alg.name = undefined; return alg; });
	store.update((arr) => { return arr; }); // Update store with current state for UI
}
