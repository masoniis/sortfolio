<script>
	import { HTML5Icon, RustIcon } from "$lib/components/icons";
</script>

<div class="flex flex-col">
	<h3 class="text-dynamich6 font-extrabold">Skills</h3>
	<spacer class="h-4"></spacer>
	<div class="grid cols-4 grid-flow-col-dense gap-4 justify-start">
		<HTML5Icon />
		<RustIcon />
	</div>
</div>

<style lang="postcss">
	:global(.skill svg) {
		@apply w-12 h-12 text-primaryfg/80;
	}

	:global(.skill) {
		@apply w-fit p-2 rounded-lg border-2 border-primaryaccentbg/5;
		@apply bg-primaryaccentbg/10 transition-colors ease-in-out duration-200;
		position: relative;
		display: inline-block;
	}

	:global(.skill:hover::before) {
		@apply absolute bg-primaryaccentbg/70 rounded-lg text-black top-0 left-0 w-full h-full flex flex-col items-center justify-center overflow-auto;
		content: attr(data-hover-text);
	}
</style>
