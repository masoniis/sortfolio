import { type Writable } from "svelte/store";
import { get } from "svelte/store";
import { type CharObj, currentAlgorithm } from "./textStore";

export function wait(delay: number) {
	return new Promise((resolve) => {
		setTimeout(resolve, delay);
	});
}

export function prestyle(store: Writable<CharObj[]>, style: string) {
	get(store).forEach((char: CharObj) => {
		char.style = style;
	});
	store.update((arr) => { return arr });
}

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

export function unshuffle(store: Writable<CharObj[]>) {
	store.set(get(store).sort((a, b) => a.index - b.index));
}

export function isSorted(store: Writable<CharObj[]>): boolean {
	const arr = get(store);
	for (let i = 0; i < arr.length - 1; i++) {
		if (arr[i].index > arr[i + 1].index) {
			return false;
		}
	}
	return true;
}

export function reset(store: Writable<CharObj[]>) {
	store.update((arr) => {
		for (let i = 0; i < arr.length; i++) {
			arr[i].style = "";
		}
		return arr;
	});

	currentAlgorithm.update((alg) => { alg.name = undefined; return alg; });
	store.update((arr) => { return arr; }); // Update store with current state for UI
}
