import { writable } from "svelte/store";

// Define the interface for the object type
export interface CharObj {
	value: string;
	scan?: boolean;
	index: number;
}

interface AlgorithmObj {
	name?: string;
	complexity?: string;
}

const algorithm: AlgorithmObj = {};

// Track which sorting algorithm is running at a given time
export const currentAlgorithm = writable<AlgorithmObj>(algorithm);

// Create a writable store that holds an array of objects
export const textArray = writable<CharObj[]>([]);

// Populate the store with some initial data
textArray.set([
	{ value: "M", scan: false, index: 0 },
	{ value: "a", scan: false, index: 1 },
	{ value: "s", scan: false, index: 2 },
	{ value: "o", scan: false, index: 3 },
	{ value: "n", scan: false, index: 4 },
	{ value: "&ensp;", scan: false, index: 5 },
	{ value: "B", scan: false, index: 6 },
	{ value: "o", scan: false, index: 7 },
	{ value: "t", scan: false, index: 8 },
	{ value: "t", scan: false, index: 9 },
]);
