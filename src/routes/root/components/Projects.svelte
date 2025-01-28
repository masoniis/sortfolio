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
		img="images/sedmos.webp"
		href="https://sedmos.vercel.app/"
		github="https://github.com/HammerMonkeys/sedmos"
	>
		<span slot="title">Sedmos</span>
		A desmos-like graphing calculator with the ability to graph vector fields, something
		even desmos falls short of.
	</Card>
	<Card
		img="images/rush.webp"
		href="https://github.com/masoniis/rush"
		github="https://github.com/masoniis/rush"
	>
		<span slot="title">Rush</span>
		A rudimentary shell written in Rust.
	</Card>
	<Card
		img="images/quantumchart.webp"
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
