import { get } from "svelte/store";
import type { CharObj } from "./store";
import type { Writable } from "svelte/store";

export function shuffle(store: Writable<CharObj[]>) {
	// get the length of the array
	let n = get(store).length;
	// loop over the array from the last element to the second element
	for (let i = n - 1; i > 0; i--) {
		// generate a random integer between 0 and i
		let j = Math.floor(Math.random() * (i + 1));
		// swap the element at i with the element at j

		store.update((arr) => {
			let temp = arr[i];
			arr[i] = arr[j];
			arr[j] = temp;
			return arr;
		});
	}
}
