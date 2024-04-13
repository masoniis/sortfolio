<script lang="ts">
	import { ArrowIcon } from "$lib/components/icons";
	import Projects from "./components/Projects.svelte";
	import Skills from "./components/Skills.svelte";
	import Header from "./components/Header.svelte";
</script>

<container
	class="text-primaryfg min-h-screen flex flex-col space-y-8 lg:flex-row max-w-7xl mx-auto lg:space-x-16 lg:space-y-0"
>
	<span class="min-h-full lg:flex-1">
		<span class="sticky top-0">
			<Header />
		</span>
	</span>
	<div
		class="flex-1 flex flex-col pt-12 overflow-auto text-dynamicp text-primaryfg/80 space-y-10"
	>
		<p>
			I'm a 2nd year in Computer Science at the University of Colorado Boulder.
			I love to learn, discover, and create.
			<a href="about" class="hover:text-primaryaccentbg group/link">
				More about me
				<ArrowIcon />
			</a>
		</p>
		<a
			class="bg-primaryaccentbg text-primaryaccentfg rounded-sm p-2 hover:bg-primaryaccentbg/80 w-fit font-semibold transition-colors duration-200"
			href="masonbott_resume.pdf"
		>
			See resume
		</a>

		<Projects />

		<Skills />

		<div class="flex flex-col">
			<h3 class="text-dynamich6 font-extrabold">Get in touch</h3>
			<p>masonmbott@gmail.com</p>
			<p>+1 (970) 443-3833</p>
		</div>
	</div>
</container>
