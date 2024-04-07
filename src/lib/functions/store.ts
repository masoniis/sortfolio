import { writable } from "svelte/store";

// Define the interface for the object type
export interface CharObj {
	value: string;
	index: number;
}

// Track which sorting algorithm is running at a given time
export const currentAlgorithm = writable<null | string>(null);

// Create a writable store that holds an array of objects
export const textArray = writable<CharObj[]>([]);

// Populate the store with some initial data
textArray.set([
	{ value: "M", index: 0 },
	{ value: "a", index: 1 },
	{ value: "s", index: 2 },
	{ value: "o", index: 3 },
	{ value: "n", index: 4 },
	{ value: "&ensp;", index: 5 },
	{ value: "B", index: 6 },
	{ value: "o", index: 7 },
	{ value: "t", index: 8 },
	{ value: "t", index: 9 },
]);
