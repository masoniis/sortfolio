<script lang="ts">
	import ProjectCard from "./components/ProjectCard.svelte";

	let projects = [
		{
			title: "Project 1",
			description: "This is a description of project 1",
			image: "https://via.placeholder.com/300",
			link: "https://google.com",
		},
		{
			title: "Project 2",
			description: "This is a description of project 2",
			image: "https://via.placeholder.com/300",
			link: "https://google.com",
		},
		{
			title: "Project 3",
			description: "This is a description of project 3",
			image: "https://via.placeholder.com/300",
			link: "https://google.com",
		},
		{
			title: "Project 4",
			description: "This is a description of project 4",
			image: "https://via.placeholder.com/300",
			link: "https://google.com",
		},
		{
			title: "Project 5",
			description: "This is a description of project 5",
			image: "https://via.placeholder.com/300",
			link: "https://google.com",
		},
		{
			title: "Project 6",
			description: "This is a description of project 6",
			image: "https://via.placeholder.com/300",
			link: "https://google.com",
		},
	];
</script>

<spacer class="flex flex-grow pt-16 sm:pt-20"></spacer>
<container
	class="text-primaryfg min-h-screen flex flex-grow flex-col max-w-7xl mx-auto"
>
	<h3 class="text-dynamich6 text-primaryaccentbg">Mason Bott</h3>
	<h1 class="text-5xl">All my projects</h1>
	<grid class="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
		{#each projects as project}
			<ProjectCard {project} />
		{/each}
	</grid>
</container>
