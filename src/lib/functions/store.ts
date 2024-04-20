import { writable } from "svelte/store";

export interface CharObj {
	value: string;
	index: number;
	scan?: boolean;
	final?: boolean;
	style?: string;
}

interface AlgorithmObj {
	name?: string;
	complexity?: string;
}

const algorithm: AlgorithmObj = { name: "start" };

export const currentAlgorithm = writable<AlgorithmObj>(algorithm);
export const textArray = writable<CharObj[]>([]);

textArray.set([
	{ value: "M", index: 0, scan: false, final: false },
	{ value: "a", index: 1, scan: false, final: false },
	{ value: "s", index: 2, scan: false, final: false },
	{ value: "o", index: 3, scan: false, final: false },
	{ value: "n", index: 4, scan: false, final: false },
	{ value: "&ensp;", index: 5, scan: false, final: false },
	{ value: "B", index: 6, scan: false, final: false },
	{ value: "o", index: 7, scan: false, final: false },
	{ value: "t", index: 8, scan: false, final: false },
	{ value: "t", index: 9, scan: false, final: false },
]);
