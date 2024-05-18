import { get, type Writable } from "svelte/store";
import { wait } from "$lib/functions/helpers";
import { type CharObj, currentAlgorithm } from "$lib/functions/store/sortStore";

async function quickSort(
  store: Writable<CharObj[]>,
  ms: { interval: number },
  low: number,
  high: number,
): Promise<void> {
  if (low < high) {
    const pi = await partition(store, ms, low, high);
    await quickSort(store, ms, low, pi - 1);
    await quickSort(store, ms, pi + 1, high);
  } else if (low == high) {
    get(store)[low].style = "final";
    store.update((_) => {
      return get(store);
    });
    await wait(ms.interval);
  }
}

async function partition(
  store: Writable<CharObj[]>,
  ms: { interval: number },
  low: number,
  high: number,
): Promise<number> {
  let pivotIndex = high;
  let arr = get(store);
  let i = low - 1;

  arr[pivotIndex].addStyle("pivot");
  arr[low].addStyle("lbound");

  store.update((_) => {
    return arr;
  });

  await wait(ms.interval);

  const pivot = arr[pivotIndex].index;

  for (let j = low; j < high; j++) {
    arr[j].addStyle("rbound");
    store.update((_) => {
      return arr;
    });
    await wait(ms.interval);
    if (arr[j].index < pivot) {
      arr[i > 0 ? i : 0].removeStyle("lbound");
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
      arr[i].style = "lbound";
      store.update((_) => {
        return arr;
      });
    }
    arr[j].removeStyle("rbound");
  }
  arr[i >= low ? i : low].removeStyle("lbound");

  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];

  pivotIndex = i + 1;

  arr[pivotIndex].removeStyle("pivot");
  arr[pivotIndex].removeStyle("lbound");
  arr[pivotIndex].addStyle("final");
  store.update((_) => {
    return arr;
  });
  await wait(ms.interval);

  return pivotIndex;
}

export async function quickSortWrapper(
  store: Writable<CharObj[]>,
  ms: { interval: number },
) {
  currentAlgorithm.update((alg) => {
    alg.name = "Quicksort";
    alg.complexity = "O(nlog(n))";
    return alg;
  });
  let arr = get(store);
  await quickSort(store, ms, 0, arr.length - 1);
}

export default quickSortWrapper;
