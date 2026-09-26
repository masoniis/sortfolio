<script>
	import Card from "$lib/components/Card.svelte";
</script>

<div class="flex flex-col">
	<h3
		class="text-dynamich6 font-extrabold border-primaryaccentbg/80 border-b-2 text-primaryfg"
	>
		Projects
	</h3>
	<spacer class="h-4"></spacer>
	<Card
		img="images/vantablock.webp"
		alt="Voxel terrain rendered in Vantablock"
		href="https://github.com/masoniis/vantablock"
		github="https://github.com/masoniis/vantablock"
	>
		<span slot="title">Vantablock</span>
		A 3D voxel game engine written in Rust with WGPU, featuring a multi-pass
		rendering pipeline, custom WGSL shaders with bit-packed vertex pulling, and
		directional shadow mapping.
	</Card>
	<Card
		img="images/sedmos.webp"
		alt="Sedmos graphing calculator"
		href="https://sedmos.vercel.app/"
		github="https://github.com/HammerMonkeys/sedmos"
	>
		<span slot="title">Sedmos</span>
		A desmos-like graphing calculator with the ability to graph vector fields, something
		even desmos falls short of. Built during a 24-hour hackathon.
	</Card>
	<Card
		img="images/quantumchart.webp"
		alt="Quantum Chart website"
		href="https://quantumchart.vercel.app"
		github="https://github.com/masoniis/quantum-chart"
	>
		<span slot="title">Quantum Chart</span>
		An award-winning website design project made for the FBLA student competition
		in 2021.
	</Card>
	<p>
		Check out my
		<a
			href="projects"
			class="hover:text-primaryaccentbg text-primaryfg group/link underline underline-offset-2 decoration-primaryaccentbg hover:underline-offset-4 transition-all"
		>
			full project archive.
		</a>
	</p>
</div>
