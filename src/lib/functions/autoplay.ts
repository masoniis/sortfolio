import { shuffle, wait } from "$lib/functions/sorthelpers";
import { bubbleSort, insertionSort, bogoSort } from "$lib/functions/sorts";
import { reset } from "$lib/functions/reset";
import { textArray } from "$lib/functions/store";
import { writable } from "svelte/store";

// List of sorting functions
const sortingFunctions = [insertionSort, bubbleSort, bogoSort];
const length = sortingFunctions.length;
let iterator = Math.round(Math.random() * length);


export const msInterval = writable<number>(150);

let intervalConfig = { interval: 150 };
msInterval.subscribe((value) => {
	intervalConfig.interval = value;
	if (intervalConfig.interval < 100) {
		intervalConfig.interval = 100;
	}
});

export async function autoplay() {
	await wait(1500);
	while (true) {
		shuffle(textArray);
		await wait(500);
		await sortingFunctions[iterator++ % length](textArray, intervalConfig);
		await wait(3000);
		reset(textArray);
	}
}
