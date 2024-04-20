import { get, type Writable } from "svelte/store";
import { wait, isSorted } from "$lib/functions/sorthelpers";
import { type CharObj, currentAlgorithm } from "$lib/functions/store";

async function quickSort(store: Writable<CharObj[]>, ms: { interval: number }, low: number, high: number): Promise<void> {
	if (low < high) {
		const pi = await partition(store, ms, low, high);
		await quickSort(store, ms, low, pi - 1);
		await quickSort(store, ms, pi + 1, high);
	} else if (low == high) {
		get(store)[low].final = true;
		store.update(_ => { return get(store); });
		await wait(ms.interval);
	}
}

async function partition(store: Writable<CharObj[]>, ms: { interval: number }, low: number, high: number): Promise<number> {
	console.log(`Partitioning from ${low} to ${high}`);

	let pivotIndex = high;
	let arr = get(store);
	let i = low - 1;

	get(store)[pivotIndex].style = "pivot";
	store.update(_ => { return arr; });

	await wait(ms.interval);

	const pivot = arr[pivotIndex].index;

	for (let j = low; j < high; j++) {
		arr[j].style = "rbound";
		console.log("Set rbound " + j);
		store.update(_ => { return arr; });
		await wait(ms.interval);
		if (arr[j].index < pivot) {
			arr[i >= 0 ? i : 0].style = "";
			i++;
			[arr[i], arr[j]] = [arr[j], arr[i]];
			arr[i].style = "lbound";
			console.log("Set lbound " + i);
			store.update(_ => { return arr; });
		}
		arr[j].style = "";
	}
	arr[i >= low ? i : low].style = "";

	[arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];

	pivotIndex = i + 1;

	arr[pivotIndex].style = "";
	arr[pivotIndex].final = true;
	store.update(_ => { return arr; });
	await wait(ms.interval);

	return pivotIndex;
}

function eraseBounds(store: Writable<CharObj[]>) {
	let arr: CharObj[] = get(store);
	for (let i = 0; i < arr.length; i++) {
		arr[i].style = "";
	}
	store.update(_ => { return arr; });
}

export async function quickSortWrapper(store: Writable<CharObj[]>, ms: { interval: number }) {
	currentAlgorithm.update((alg) => { alg.name = 'Quicksort'; alg.complexity = 'O(nlog(n))'; return alg; });
	let arr = get(store);
	await quickSort(store, ms, 0, arr.length - 1);
}

export default quickSortWrapper;
