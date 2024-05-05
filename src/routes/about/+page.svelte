<script>
	import { BackArrowIcon, ArrowIcon } from "$lib/components/icons";
	import Spacer from "$lib/components/Spacer.svelte";
	import Grid from "./components/Grid.svelte";
</script>

<svelte:head>
	<title>About | Mason Bott</title>
	<meta
		name="description"
		content="Software engineer. Passion for perfection, problem solving, and the intricasies of computers"
	/>
</svelte:head>

<Spacer />
<container
	class="text-primaryfg min-h-screen flex flex-grow flex-col max-w-7xl mx-auto"
>
	<Grid />
	<a
		href="/"
		class="text-dynamich6 text-primaryaccentbg group/link items-center flex flex-row"
	>
		<BackArrowIcon />
		Mason Bott
	</a>
	<h1 class="text-5xl">About me</h1>
	<div
		class="flex flex-col items-center sm:items-start sm:flex-row sm:justify-between pt-8"
	>
		<div class="flex flex-col space-y-4">
			<p>
				Hello! My name is Mason and I have a passion for fascinating topics in
				computer science and math.
			</p>
			<p>
				Lately, I have taken up an interest in <b>computer graphics</b>,
				learning about the math and intricacies behind the scenes of 3D
				rendering. Particularly, I have been learning about shaders and
				<a
					href="https://en.wikipedia.org/wiki/OpenGL_Shading_Language"
					class="hover:text-primaryaccentbg group/link font-bold"
				>
					GLSL
					<ArrowIcon />
				</a>
			</p>
			<p>
				When I am not coding, I enjoy playing video games, reading, and spending
				time with my friends and family.
			</p>
		</div>
		<img
			src="images/picture_1.jpg"
			alt="Mason Bott"
			class="aspect-auto w-48 ml-8 border-primaryaccentbg/50 border-2 shadow-primaryaccentbg"
		/>
	</div>
</container>
