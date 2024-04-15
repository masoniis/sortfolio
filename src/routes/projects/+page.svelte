<script lang="ts">
	import {
		SortArrowIcon,
		ArrowIcon,
		BackArrowIcon,
	} from "$lib/components/icons/index";

	interface Project {
		title: string;
		year: number;
		technologies: string[];
		links?: Link[];
	}

	interface Link {
		title: string;
		url: string;
	}

	let projects: Project[] = [
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
			year: 2021,
			technologies: ["HTML", "CSS", "TS", "Tailwind"],
			links: [
				{ title: "Live site", url: "https://quantumchart.vercel.app/" },
				{
					title: "Github repo",
					url: "https://github.com/masoniis/quantumchart",
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

	let projectFilter: String[] = [];
</script>

<spacer class="flex flex-grow pt-16 sm:pt-20"></spacer>
<container
	class="text-primaryfg min-h-screen flex flex-grow flex-col max-w-7xl mx-auto"
>
	<a
		href="/"
		class="text-dynamich6 text-primaryaccentbg group/link items-center flex flex-row"
	>
		<BackArrowIcon color="fill-primaryaccentbg" />

		Mason Bott
	</a>
	<h1 class="text-5xl">All my projects</h1>
	<div class="-mx-4 mt-8 sm:-mx-0">
		<table class="min-w-full divide-y divide-gray-300">
			<thead>
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
						class="sticky top-0 z-10 px-3 py-3.5 text-left text-sm font-semibold text-primaryfg flex items-start"
					>
						Technologies
						<button
							class="inline-block px-2 py-1 text-xs font-semibold text-primaryaccentbg rounded-full bg-primaryaccentbg/20 ml-2 transition-opacity duration-200 hover:cursor-pointer hover:bg-primaryaccentbg/40"
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
					return project.technologies.some( (tech) => projectFilter.includes(tech), );
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
									{#each project.links ? project.links : ["N/A"] as link}
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
							{#each project.links ? project.links : ["N/A"] as link}
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
								{#if projectFilter.includes(tech)}
									<button
										class="inline-block px-2 py-1 text-xs font-semibold text-primaryaccentfg rounded-full bg-primaryaccentbg/80 m-1 hover:cursor-pointer hover:bg-primaryaccentbg/90"
										on:click={() => {
											projectFilter = projectFilter.filter(
												(item) => item !== tech,
											);
										}}
									>
										{tech}
									</button>
								{:else}
									<button
										class="inline-block px-2 py-1 text-xs font-semibold text-primaryaccentbg rounded-full bg-primaryaccentbg/20 m-1 hover:cursor-pointer hover:bg-primaryaccentbg/40"
										on:click={() => {
											projectFilter = [...projectFilter, tech];
										}}
									>
										{tech}
									</button>
								{/if}
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
