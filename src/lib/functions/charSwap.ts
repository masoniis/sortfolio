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
	// INFO: If I want to do multi-row charswaps I would need this
	// const dy = from.top + (from.height * oy) / to.height - (to.top + oy);
	flipper = !flipper;

	return {
		duration: 100,
		css: (t, u) => {
			const x = u * dx;
			var y = -2 * Math.sin(t * Math.PI);
			if (flipper == true) {
				y = -y
			}

			const sx = t + (u * from.width) / to.width;
			const sy = t + (u * from.height) / to.height;

			return `transform: ${transform} translate(${x}px, ${y}vw) scale(${sx}, ${sy});`;
		},
	} as AnimationConfig;
}
