import { shuffle, wait } from "$lib/functions/sorthelpers";
import { bubbleSort, insertionSort, bogoSort, quickSort, selectionSort } from "$lib/functions/sorts";
import { reset } from "$lib/functions/reset";
import { textArray } from "$lib/functions/store";
import { writable, type Writable } from "svelte/store";

// List of sorting functions
// const sortingFunctions: Function[] = [bubbleSort, insertionSort, bogoSort, quickSort];
const sortingFunctions: Function[] = [selectionSort];
const length: number = sortingFunctions.length;
let iterator: number = Math.round(Math.random() * length);

export const msInterval: Writable<number> = writable<number>(200);

let intervalConfig = { interval: 200 }; //INFO: This is an object because I want to pass it in as reference (kinda scuffed)
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
