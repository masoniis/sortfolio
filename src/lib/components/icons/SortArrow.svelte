<script lang="ts">
	export let ascending = true;
	let color = "fill-green-500";

	$: rotation = `rotate(${ascending ? 135 : -45}deg)`;
	$: color = ascending ? "fill-red-500" : "fill-green-500";
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 0 20 20"
	class="{color} inline-block h-4 w-4 shrink-0 transition-all group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px duration-200"
	aria-hidden="true"
	style:transform={rotation}
>
	<path
		fill-rule="evenodd"
		d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
		clip-rule="evenodd"
	/>
</svg>
