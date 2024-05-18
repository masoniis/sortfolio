import { get } from "svelte/store";
import { fullstyle } from "./sorthelpers";
import { wait } from "$lib/functions/helpers";
import { type Writable } from "svelte/store";
import { type CharObj, currentAlgorithm } from "$lib/functions/store/textStore";

async function bubbleSort(
  store: Writable<CharObj[]>,
  ms: { interval: number },
) {
  currentAlgorithm.update((alg) => {
    alg.name = "Bubble sort";
    alg.complexity = "O(n^2)";
    return alg;
  });

  fullstyle(store, "transition duration-100 ease-in-out");

  let n = get(store).length;
  for (let i = 0; i < n; i++) {
    // N passes
    for (let j = 0; j < n - i - 1; j++) {
      // N comparisons between adjacent elements
      scan(store, j, j + 1);
      if (get(store)[j].index > get(store)[j + 1].index) {
        let temp = get(store)[j];
        store.update((arr) => {
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          return arr;
        });
      }
      await wait(ms.interval);
      get(store)[j].removeStyle("scan");
      get(store)[j + 1].removeStyle("scan");
    }
    get(store)[n - i - 1].addStyle("final");
  }
  store.update((arr) => {
    return arr;
  });
}

// Scan helper
function scan(store: Writable<CharObj[]>, i: number, j: number) {
  get(store)[i].addStyle("scan");
  get(store)[j].addStyle("scan");
  store.update((arr) => {
    return arr;
  });
}

export default bubbleSort;
