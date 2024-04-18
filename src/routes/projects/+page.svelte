<script lang="ts">
	import {
		SortArrowIcon,
		ArrowIcon,
		BackArrowIcon,
	} from "$lib/components/icons/index";
	import Spacer from "$lib/components/Spacer.svelte";

	interface Link {
		title: string;
		url: string;
	}

	interface Project {
		title: string;
		year: number;
		technologies: string[];
		links: Link[];
	}

	let projects: Project[] = [
		{
			title: "Sonders",
			year: 2024,
			technologies: ["GLSL"],
			links: [
				{
					title: "Github repo",
					url: "https://github.com/masoniis/sonders",
				},
			],
		},
		{
			title: "Portfolio V1",
			year: 2024,
			technologies: ["HTML", "CSS", "TS", "Tailwind", "SvelteKit"],
			links: [
				{
					title: "Live site",
					url: "https://masonbott.com/",
				},
				{
					title: "Github repo",
					url: "https://github.com/masoniis/portfolio",
				},
			],
		},
		{
			title: "Sedmos",
			year: 2024,
			technologies: ["HTML", "CSS", "TS", "Tailwind"],
			links: [
				{
					title: "Live site",
					url: "https://sedmos.vercel.app/",
				},
				{
					title: "Github repo",
					url: "https://github.com/hammermonkeys/sedmos",
				},
			],
		},
		{
			title: "Rush",
			year: 2023,
			technologies: ["Rust"],
			links: [
				{ title: "Github repo", url: "https://github.com/masoniis/rush" },
			],
		},
		{
			title: "QuantumChart",
			year: 2019,
			technologies: ["HTML", "CSS", "JS"],
			links: [
				{ title: "Live site", url: "https://quantumchart.vercel.app/" },
				{
					title: "Github repo",
					url: "https://github.com/masoniis/quantum-chart",
				},
			],
		},
	];

	let curSort = ["year", "desc"];

	function sortByYear() {
		if (curSort[0] === "year") {
			curSort[1] = curSort[1] === "asc" ? "desc" : "asc";
		} else {
			curSort = ["year", "asc"];
		}

		if (curSort[1] === "desc") {
			projects = projects.sort((a, b) => b.year - a.year);
		} else {
			projects = projects.sort((a, b) => a.year - b.year);
		}
	}

	$: projects = projects;

	let projectFilter: string[] = [];
</script>

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
	<h1 class="text-5xl">All my projects</h1>
	<div class="-mx-4 mt-8 sm:-mx-0">
		<table class="min-w-full divide-y divide-gray-300">
			<thead class="backdrop-blur bg-primarybg/80 sticky top-0">
				<tr>
					<th
						scope="col"
						class="sticky top-0 z-10 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-primaryfg sm:pl-0"
					>
						Project
					</th>
					<th
						scope="col"
						class="sticky top-0 z-10 hidden px-3 py-3.5 text-left text-sm font-semibold text-primaryfg lg:table-cell cursor-pointer"
						on:click={sortByYear}
					>
						Year
						<SortArrowIcon ascending={curSort[1] == "asc"} />
					</th>
					<th
						scope="col"
						class="sticky top-0 z-10 hidden px-3 py-3.5 text-left text-sm font-semibold text-primaryfg sm:table-cell"
					>
						Links
					</th>
					<th
						scope="col"
						class="sticky top-0 z-10 px-3 py-3.5 text-left text-sm font-semibold text-primaryfg flex items-start sm:table-cell"
					>
						Technologies
						<button
							class="inline-block px-2 py-1 text-xs font-semibold text-primaryaccentbg rounded-full bg-primaryaccentbg/20 ml-2 transition-opacity duration-200 hover:cursor-pointer hover:bg-primaryaccentbg/30"
							class:opacity-0={projectFilter.length === 0}
							on:click={() => {
								projectFilter = [];
							}}
						>
							Clear
						</button>
					</th>
				</tr>
			</thead>
			<tbody class="divide-y divide-gray-200 bg-primarybg">
				{#each projects.filter((project) => {
					if (projectFilter.length === 0) return true;
					return projectFilter.every( (tech) => project.technologies.includes(tech), );
				}) as project}
					<tr>
						<td
							class="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-primaryfg sm:w-auto sm:max-w-none sm:pl-0"
						>
							{project.title}
							<dl class="font-normal lg:hidden">
								<dt class="sr-only">{project.title}</dt>
								<dd class="mt-1 truncate text-primaryfg/70">{project.year}</dd>
								<dt class="sr-only sm:hidden">{project.technologies}</dt>
								<dd
									class="mt-1 truncate text-primaryfg sm:hidden flex flex-col"
								>
									{#each project.links as link}
										<a
											href={link.url}
											class="group/link hover:text-primaryaccentbg"
										>
											{link.title}
											<ArrowIcon />
										</a>
									{/each}
								</dd>
							</dl>
						</td>
						<td class="hidden px-3 py-4 text-sm text-primaryfg lg:table-cell">
							{project.year}
						</td>
						<td
							class="hidden px-3 py-4 text-sm text-primaryfg sm:flex sm:flex-col sm:justify-center h-full"
						>
							{#each project.links as link}
								<a
									href={link.url}
									class="text-primaryfg group/link hover:text-primaryaccentbg"
								>
									{link.title}
									<ArrowIcon />
								</a>
							{/each}
						</td>
						<td class="px-3 py-4 text-sm text-primaryfg">
							{#each project.technologies ? project.technologies : ["N/A"] as tech}
								<button
									class="inline-block px-2 py-1 text-xs font-semibold rounded-full m-1 hover:cursor-pointer transition-colors duration-200
									{projectFilter.includes(tech)
										? 'bg-primaryaccentbg text-primaryaccentfg hover:bg-primaryaccentbg/80'
										: 'bg-primaryaccentbg/20 text-primaryaccentbg hover:bg-primaryaccentbg/30'}"
									on:click={() => {
										if (!projectFilter.includes(tech)) {
											projectFilter = [...projectFilter, tech];
										} else {
											projectFilter = projectFilter.filter(
												(item) => item !== tech,
											);
										}
									}}
								>
									{tech}
								</button>
							{/each}
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</container>

<style>
	table {
		height: 100%;
	}
</style>
