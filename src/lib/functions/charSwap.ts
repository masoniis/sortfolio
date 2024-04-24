import type { AnimationConfig } from "svelte/animate";
import { wait } from "$lib/functions/sorthelpers";

let flipper = true;
export function charSwap(
	node: Element,
	{ from, to }: { from: DOMRect; to: DOMRect },
	duration: number
): AnimationConfig {
	const style = getComputedStyle(node);
	const isCharSwapping = node.getAttribute('data-charswapping') === 'true';
	const transform = style.transform === "none" || isCharSwapping ? "" : style.transform;
	const [ox] = style.transformOrigin.split(" ").map(parseFloat);
	const dx = from.left + (from.width * ox) / to.width - (to.left + ox);
	flipper = !flipper;

	if (!isCharSwapping) {
		node.setAttribute('data-charswapping', 'true');
	}

	wait(duration).then(() => {
		node.setAttribute('data-charswapping', 'false');
	});

	return {
		duration: duration ? duration : 100,
		css: (t, u) => {
			if (isCharSwapping) {
				return ''; // Return empty string if the element is currently undergoing charSwap
			}
			const x = u * dx;
			var y = -2 * Math.sin(t * Math.PI);
			if (flipper) {
				y = -y;
			}

			const sx = t + (u * from.width) / to.width;
			const sy = t + (u * from.height) / to.height;

			return `
				transform: ${transform} translate(${x}px, ${y}vw) scale(${sx}, ${sy});
				background-clip: border-box;
			`;
		},
	} as AnimationConfig;
}
