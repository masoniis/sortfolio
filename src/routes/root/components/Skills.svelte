<script>
	import {
		HTML5Icon,
		RustIcon,
		CPPIcon,
		TSIcon,
		CSSIcon,
		JSIcon,
		SvelteIcon,
		NeovimIcon,
		GitIcon,
		NixOSIcon,
		PythonIcon,
		SQLIcon,
	} from "$lib/components/icons";
</script>

<div class="flex flex-col">
	<h3
		class="text-dynamich6 font-extrabold border-primaryaccentbg/80 border-b-2 text-primaryfg"
	>
		Skills
	</h3>
	<spacer class="h-4"></spacer>
	<grid>
		<PythonIcon />
		<HTML5Icon />
		<CPPIcon />
		<RustIcon />
		<TSIcon />
		<CSSIcon />
		<JSIcon />
		<SvelteIcon />
		<NixOSIcon />
		<NeovimIcon />
		<SQLIcon />
		<GitIcon />
	</grid>
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
		@apply bg-primaryaccentbg/70 text-primaryaccentfg font-extrabold;
		@apply absolute rounded-lg top-0 left-0 w-full h-full flex flex-col items-center justify-center overflow-auto;
		content: attr(data-hover-text);
	}

	grid {
		@apply grid justify-between w-full gap-4;
		grid-template-columns: repeat(auto-fit, minmax(68px, 68px));
	}
</style>
