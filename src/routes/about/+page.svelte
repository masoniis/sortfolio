<script>
	import { BackArrowIcon, ArrowIcon } from "$lib/components/icons";
	import Spacer from "$lib/components/Spacer.svelte";
	import Grid from "./components/Grid.svelte";
</script>

<svelte:head>
	<title>About | Mason Bott</title>
	<meta
		name="description"
		content="About Mason Bott: CS master's student (AI) at CU Boulder, AI researcher, and graphics programmer."
	/>
</svelte:head>

<Grid />

<Spacer />
<container
	class="text-primaryfg min-h-screen flex flex-grow flex-col max-w-7xl mx-auto"
>
	<a
		href="/"
		class="text-dynamich6 text-primaryaccentbg group/link items-center flex flex-row"
	>
		<BackArrowIcon />
		Mason Bott
	</a>
	<h1 class="text-5xl">Autobiography</h1>
	<div
		class="flex flex-col items-center lg:items-start lg:flex-row lg:justify-between pt-8"
	>
		<div class="flex flex-col space-y-4 flex-shrin lg:mr-8">
			<p>
				Hey! My name is Mason and I have a passion for fascinating topics in
				computer science and math.
			</p>
			<p>
				I'm currently pursuing a Master of Science in Computer Science with a
				concentration in <b>artificial intelligence</b> at CU Boulder, after
				finishing my B.A. in Computer Science with a minor in Mathematics in
				December 2025. In summer 2025 I worked as a software engineering and AI
				researcher in the Autonomous Robotics & Perception Group, where I helped
				build an LLM reasoning agent, spatial memory and VLM data ingestion
				pipelines, and an Android app streaming pose telemetry to a Boston
				Dynamics Spot robot.
			</p>
			<p>
				I'm also into <b>computer graphics</b>, learning about the math and
				intricacies behind 3D rendering. One of my favorite projects is
				<a
					href="https://github.com/masoniis/vantablock"
					class="hover:text-primaryaccentbg group/link font-bold"
				>
					Vantablock
					<ArrowIcon />
				</a>, a voxel game engine written in Rust with WGPU and hand-written WGSL
				shaders.
			</p>
			<p>
				When I am not coding, I enjoy playing piano, hiking, learning
				languages, entrepreneurship, gaming and VR, and spending time with my friends and family.
			</p>
		</div>
		<div class="flex-shrink-0">
			<enhanced:img
				src="$lib/assets/portrait.jpg"
				alt="Mason Bott"
				class="aspect-auto w-48 mt-8 lg:mt-0 border-primaryaccentbg/50 border-2 shadow-primaryaccentbg"
			/>
		</div>
	</div>
</container>
