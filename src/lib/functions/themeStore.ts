import { type Writable, writable } from "svelte/store";
import { browser } from '$app/environment';

const stored = browser ? window.localStorage.colorStore : "#22C55D";

export var colorStore: Writable<string> = writable<string>(stored);

colorStore.subscribe((value) => {
	if (browser) {
		window.localStorage.setItem('colorStore', value);
	}
}
);
