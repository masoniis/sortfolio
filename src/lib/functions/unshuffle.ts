import { get } from "svelte/store";
import type { CharObj } from "./store";
import type { Writable } from "svelte/store";

export function unshuffle(store: Writable<CharObj[]>) {
	store.set(get(store).sort((a, b) => a.index - b.index));
}
