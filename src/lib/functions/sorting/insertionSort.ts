import { get } from "svelte/store";
import { wait } from "$lib/functions/helpers";
import { type Writable } from "svelte/store";
import { type CharObj, currentAlgorithm } from "$lib/functions/store/textStore";

async function insertionSort(
  store: Writable<CharObj[]>,
  ms: { interval: number },
) {
  currentAlgorithm.update((alg) => {
    alg.name = "Insertion sort";
    alg.complexity = "O(n^2)";
    return alg;
  });

  let n = get(store).length;

  get(store)[0].addStyle("final"); // First character is "in right place" by default
  for (let i = 1; i < n; i++) {
    const current = get(store)[i];
    current.addStyle("scan");
    store.update((arr) => {
      return arr;
    });
    await wait(ms.interval);

    for (let j = i; j > 0; j--) {
      if (get(store)[j].index > get(store)[j - 1].index) break;

      store.update((arr) => {
        const temp = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = temp;
        return arr;
      });

      await wait(ms.interval);
    }

    await wait(ms.interval);
    current.addStyle("final");
    current.removeStyle("scan");
  }

  store.update((arr) => {
    return arr;
  });
}

export default insertionSort;
