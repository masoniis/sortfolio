<script>
	import Theme from "./Theme.svelte";
</script>

<div class="flex flex-col">
	<h3
		class="text-dynamich6 font-extrabold border-primaryaccentbg/80 border-b-2 text-primaryfg flex flex-row gap-4"
	>
		<p>About me</p>
		<Theme />
	</h3>
	<spacer class="h-4"></spacer>
	<p>
		I'm a 2nd year in Computer Science at the University of Colorado Boulder. I
		love to learn, discover, and create. Learn
		<a
			href="about"
			class="hover:text-primaryaccentbg text-primaryfg group/link underline underline-offset-2 decoration-primaryaccentbg hover:underline-offset-4 transition-all"
		>
			more about me.
		</a>
	</p>
	<spacer class="h-4"></spacer>
	<a
		class="bg-primaryaccentbg text-primaryaccentfg rounded-sm p-2 hover:bg-primaryaccentbg/80 w-fit font-semibold transition-colors duration-200"
		href="resumes/BottMason_ResumeMay2024.pdf"
	>
		See resume
	</a>
</div>
