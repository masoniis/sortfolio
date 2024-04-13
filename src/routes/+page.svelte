<script lang="ts">
	import { get } from "svelte/store";
	import { charSwap } from "$lib/functions/charSwap";
	import { textArray, currentAlgorithm } from "$lib/functions/store";
	import { fade } from "svelte/transition";
	import { autoplay } from "$lib/functions/autoplay";
	import { onMount } from "svelte";
	import GithubIcon from "$lib/components/icons/GithubIcon.svelte";
	import LinkedInIcon from "$lib/components/icons/LinkedInIcon.svelte";
	import Card from "$lib/components/Card.svelte";

	onMount(() => {
		if (get(currentAlgorithm).name == "start") {
			currentAlgorithm.set({ name: "", complexity: "" });
			autoplay();
		}
	});
</script>

<container
	class="text-primaryfg min-h-screen flex flex-col space-y-8 lg:flex-row max-w-7xl mx-auto lg:space-x-16 lg:space-y-0"
>
	<span class="min-h-full lg:flex-1">
		<span class="sticky top-0">
			<div class="flex flex-col pt-12">
				<h1 class="flex overflow-clip text-dynamich3 text-primaryfg">
					{#each $textArray as charObj, i (charObj)}
						<span class:scan={charObj.scan} animate:charSwap={i}>
							{@html charObj.value}
						</span>
					{/each}
				</h1>
				<container class="min-h-16 mt-4 text-dynamich6 font-code">
					{#if $currentAlgorithm?.name && $currentAlgorithm?.complexity}
						<h6
							class="text-primaryaccentbg text-dynamich5"
							transition:fade={{ duration: 200 }}
						>
							{$currentAlgorithm.name}: {$currentAlgorithm.complexity}
						</h6>
					{/if}
				</container>
				<p class="text-primaryfg/80 text-dynamichp sm:max-w-[70%] font-light">
					Computer science student, software developer, and a tech enthusiast.
				</p>
				<div class="flex flex-row space-x-2 pt-6">
					<GithubIcon />
					<LinkedInIcon />
				</div>
			</div>
		</span>
	</span>
	<div
		class="flex-1 flex flex-col pt-12 overflow-auto text-dynamicp text-primaryfg/80 space-y-10"
	>
		<p>
			I'm a 2nd year in Computer Science at the University of Colorado Boulder.
			I love to learn, and fascinated by computers, and such.
		</p>
		<a
			class="bg-primaryaccentbg text-primaryaccentfg rounded-sm p-2 hover:bg-primaryaccentbg/80"
			href="masonbott_resume.pdf"
		>
			see resume
		</a>

		<h3>Things projects</h3>
		<Card img="images/sedmos.png">
			<span slot="title">Sedmos</span>
			A desmos-like graphing calculator with the ability to graph vector fields,
			something even desmos itself fails at.
		</Card>
		<Card>
			<span slot="title">Rush</span>
			A rudimentary shell application written in Rust.
		</Card>
		<Card>
			<span slot="title">Quantum Chart</span>
			A competition-winning website design project made for the FBLA student competition
			in 2021.
		</Card>
		<a href="projects" class="text-primaryfg hover:text-primaryaccentbg">
			View full project archive
		</a>
	</div></container
>

<style lang="postcss">
	h1 {
		line-height: 0.9;
		overflow: visible;
	}

	span.scan {
		@apply border-b-2 border-primaryaccentbg;
	}
</style>
