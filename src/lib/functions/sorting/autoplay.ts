import {
  shuffle,
  resetCharObjs,
  resetCurrentAlgorithm,
} from "$lib/functions/sorting/sorthelpers";
import { wait } from "$lib/functions/helpers";
import {
  bubbleSort,
  insertionSort,
  bogoSort,
  quickSort,
  selectionSort,
} from "$lib/functions/sorting";
import { textArray } from "$lib/functions/store/textStore";
import { writable, type Writable } from "svelte/store";

const sortingFunctions: Function[] = [
  bubbleSort,
  insertionSort,
  bogoSort,
  quickSort,
  selectionSort,
];
// const sortingFunctions: Function[] = [bubbleSort];
const length: number = sortingFunctions.length;
let iterator: number = Math.round(Math.random() * length);

export const msInterval: Writable<number> = writable<number>(175);

let intervalConfig = { interval: 175 }; //INFO: This is an object because I want to pass it in as reference (kinda scuffed)
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
    resetCharObjs(textArray);
    resetCurrentAlgorithm();
  }
}
