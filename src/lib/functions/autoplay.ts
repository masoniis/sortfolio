import { textArray } from "$lib/functions/store";
import { shuffle } from "$lib/functions/shuffle";
import { bubbleSort } from "$lib/functions/bubbleSort";
import { insertionSort } from "$lib/functions/insertionSort";
import { bogoSort } from "$lib/functions/bogoSort";

function delay(ms: number) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

// List of sorting functions
const sortingFunctions = [bubbleSort, insertionSort, bogoSort];
let iterator = Math.round(Math.random() * 1000);

export async function autoplay() {
	await delay(1500);
	while (true) {
		shuffle(textArray);
		await delay(500);
		await sortingFunctions[iterator % sortingFunctions.length](textArray);

		iterator++;
		await delay(3000); // Wait for a bit before sorting again
	}
}
