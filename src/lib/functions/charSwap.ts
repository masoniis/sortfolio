import type { AnimationConfig } from "svelte/animate";

let flipper = true;
export function charSwap(
	node: Element,
	{ from, to }: { from: DOMRect; to: DOMRect },
	index: number
): AnimationConfig {
	const style = getComputedStyle(node);
	const transform = style.transform === "none" ? "" : style.transform;
	const [ox, oy] = style.transformOrigin.split(" ").map(parseFloat);
	const dx = from.left + (from.width * ox) / to.width - (to.left + ox);
	const dy = from.top + (from.height * oy) / to.height - (to.top + oy);
	// console.log(node.textContent + " is being moved at index " + index);
	flipper = !flipper;

	return {
		duration: 100,
		css: (t, u) => {
			const x = u * dx;
			var y = Math.sin(t * Math.PI) * -30;
			if (flipper == true) {
				y = Math.sin(t * Math.PI) * 30; // move up and down by 50 pixels
			}

			const sx = t + (u * from.width) / to.width;
			const sy = t + (u * from.height) / to.height;

			return `transform: ${transform} translate(${x}px, ${y}px) scale(${sx}, ${sy});`;
		},
	};
}
