import { type Writable } from "svelte/store";
import { get } from "svelte/store";
import { type CharObj, currentAlgorithm } from "$lib/functions/store/sortStore";

/* Set the style of every element in a CharObj[] Writable */
export function fullstyle(store: Writable<CharObj[]>, style: string) {
  get(store).forEach((char: CharObj) => {
    char.style = style;
  });
  store.update((arr) => {
    return arr;
  });
}

/* Shuffles all the elements of a CharObj[] Writable */
export function shuffle(store: Writable<CharObj[]>) {
  let n = get(store).length;

  for (let i = n - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    store.update((arr) => {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      return arr;
    });
  }
}

/* Updates the state of the CharObj[] Writable to its index-ordered state */
export function unshuffle(store: Writable<CharObj[]>) {
  store.set(get(store).sort((a, b) => a.index - b.index));
}

/* Returns true if a CharObj[] Writable is currently sorted by index, and false otherwise */
export function isSorted(store: Writable<CharObj[]>): boolean {
  const arr = get(store);
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i].index > arr[i + 1].index) {
      return false;
    }
  }
  return true;
}

/* Resets the style fields of a CharObj[] Writable */
export function resetCharObjs(store: Writable<CharObj[]>) {
  store.update((arr) => {
    for (let i = 0; i < arr.length; i++) {
      arr[i].style = "";
    }
    return arr;
  });

  store.update((arr) => {
    return arr;
  }); // Update store with current state for UI
}

export function resetCurrentAlgorithm() {
  currentAlgorithm.update((alg) => {
    alg.name = undefined;
    return alg;
  });
}
