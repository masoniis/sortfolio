import { shuffle } from "$lib/functions/shuffle";
import { bubbleSort } from "$lib/functions/sorts/bubbleSort";
import { insertionSort } from "$lib/functions/sorts/insertionSort";
import { currentAlgorithm } from "$lib/functions/store";
import { bogoSort } from "$lib/functions/sorts/bogoSort";
import { reset } from "$lib/functions/reset";
import { textArray } from "$lib/functions/store";
import { writable } from "svelte/store";

function delay(ms: number) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

// List of sorting functions
const sortingFunctions = [insertionSort, bubbleSort, bogoSort];
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
		await sortingFunctions[iterator++ % length](textArray, intervalConfig);
		await delay(3000); // Wait for a bit before sorting again

		reset(textArray);
	}
}
