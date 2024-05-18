import { get } from "svelte/store";
import { shuffle, unshuffle, fullstyle, isSorted } from "./sorthelpers";
import { wait } from "$lib/functions/helpers";
import { type Writable } from "svelte/store";
import { type CharObj, currentAlgorithm } from "$lib/functions/store/sortStore";

async function bogoSort(store: Writable<CharObj[]>, ms: { interval: number }) {
  currentAlgorithm.update((alg) => {
    alg.name = "Bogosort";
    alg.complexity = "O(n*n!)";
    return alg;
  });
  fullstyle(store, "bogo");

  let counter = 0;

  while (!isSorted(store)) {
    for (let i = 0; i < get(store).length; i++)
      get(store)[i].removeStyle("scan");

    if (Math.random() < 0.25 && counter > 9) {
      unshuffle(store);
    } else {
      shuffle(store);
    }

    store.update((arr) => {
      return arr;
    });

    counter++;
    await wait(ms.interval);

    for (let i = 0; i < get(store).length; i++) {
      get(store)[i].addStyle("scan");
      await wait(ms.interval / 10);
      store.update((arr) => {
        return arr;
      });
    }

    await wait(ms.interval);
  }

  fullstyle(store, "bogo-end");

  for (let i = 0; i < get(store).length; i++) {
    get(store)[i].addStyle("final");
    get(store)[i].removeStyle("scan");
  }

  store.update((arr) => {
    return arr;
  });
}

export default bogoSort;
