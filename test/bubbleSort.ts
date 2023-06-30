/* import { textArray } from "../lib/store";

interface CharObj {
	value: string;
	index: number;
}

function wait(delay: number) {
	return new Promise((resolve) => {
		setTimeout(resolve, delay);
	});
}

export async function bubbleSort() {
	// get the length of the array
	let n = $textArray.length;
	// loop over the array n-1 times
	for (let i = 0; i < n - 1; i++) {
		// loop over the array from 0 to n-i-1
		for (let j = 0; j < n - i - 1; j++) {
			// compare two adjacent elements by their char property
			if (textArray[j].index > textArray[j + 1].index) {
				// swap them if they are out of order
				let temp = textArray[j];
				textArray[j] = textArray[j + 1];
				textArray[j + 1] = temp;
				await wait(150);
			}
		}
	}
} */
