import { type Writable, writable } from "svelte/store";
import { browser } from '$app/environment';

// TODO: Make theme automatically change background and other colors to have high contrast with the selected color. This may also lead to light mode being naturally implemented.

const stored = browser ? window.localStorage.colorStore : "#22C55D";

export var colorStore: Writable<string> = writable<string>(stored);

colorStore.subscribe((value) => {
	if (browser) {
		window.localStorage.setItem('colorStore', value);
	}
}
);
