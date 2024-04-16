import { shuffle } from "$lib/functions/shuffle";
import { bubbleSort } from "$lib/functions/bubbleSort";
import { insertionSort } from "$lib/functions/insertionSort";
import { bogoSort } from "$lib/functions/bogoSort";
import { reset } from "$lib/functions/reset";
import { textArray } from "$lib/functions/store";
import { writable } from "svelte/store";

function delay(ms: number) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

// List of sorting functions
const sortingFunctions = [bogoSort, insertionSort, bubbleSort];
const length = sortingFunctions.length;
let iterator = Math.round(Math.random() * length);


export const msInterval = writable<number>(200);

let intervalConfig = { interval: 200 };
msInterval.subscribe((value) => {
	intervalConfig.interval = value;
	if (intervalConfig.interval < 100) {
		intervalConfig.interval = 100;
	}
	console.log(intervalConfig.interval + "ms");
});

export async function autoplay() {
	await delay(1500);
	while (true) {
		shuffle(textArray);
		await delay(500);
		await sortingFunctions[iterator % length](textArray, intervalConfig);

		iterator++;
		textArray.update((arr) => { return arr; }); // Update store with current state for UI
		await delay(3000); // Wait for a bit before sorting again

		reset(textArray);
	}
}
