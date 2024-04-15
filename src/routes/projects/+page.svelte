<script lang="ts">
	import { SortArrowIcon } from "$lib/components/icons/index";

	let projects = [
		{
			title: "Sedmos",
			year: 2024,
			technologies: ["HTML", "CSS", "TS", "Tailwind"],
			link: "https://google.com",
		},
		{
			title: "Rush",
			year: 2023,
			technologies: ["Rust"],
			link: "https://google.com",
		},
		{
			title: "QuantumChart",
			year: 2021,
			technologies: ["HTML", "CSS", "TS", "Tailwind"],
			link: "https://google.com",
		},
	];

	let curSort = ["year", "asc"];

	function sortByYear() {
		if (curSort[0] === "year") {
			curSort[1] = curSort[1] === "asc" ? "desc" : "asc";
		} else {
			curSort = ["year", "asc"];
		}

		if (curSort[1] === "desc") {
			projects = projects.sort((a, b) => a.year - b.year);
		} else {
			projects = projects.sort((a, b) => b.year - a.year);
		}
	}

	$: projects = projects;
</script>

<spacer class="flex flex-grow pt-16 sm:pt-20"></spacer>
<container
	class="text-primaryfg min-h-screen flex flex-grow flex-col max-w-7xl mx-auto"
>
	<a href="/" class="text-dynamich6 text-primaryaccentbg">Mason Bott</a>
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
						class="sticky top-0 z-10 hidden px-3 py-3.5 text-left text-sm font-semibold text-primaryfg lg:table-cell"
						on:click={sortByYear}
					>
						Year
						{#if curSort[0] == "year" && curSort[1] == "asc"}
							<SortArrowIcon rotate={0} color="fill-green-500" />
						{:else if curSort[0] == "year" && curSort[1] == "desc"}
							<SortArrowIcon rotate={180} color="fill-red-500" />
						{/if}
					</th>
					<th
						scope="col"
						class="sticky top-0 z-10 hidden px-3 py-3.5 text-left text-sm font-semibold text-primaryfg sm:table-cell"
					>
						Link
					</th>
					<th
						scope="col"
						class="sticky top-0 z-10 px-3 py-3.5 text-left text-sm font-semibold text-primaryfg"
					>
						Technologies
					</th>
				</tr>
			</thead>
			<tbody class="divide-y divide-gray-200 bg-primarybg">
				{#each projects as project}
					<tr>
						<td
							class="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-primaryfg sm:w-auto sm:max-w-none sm:pl-0"
						>
							{project.title}
							<dl class="font-normal lg:hidden">
								<dt class="sr-only">{project.title}</dt>
								<dd class="mt-1 truncate text-primaryfg">{project.year}</dd>
								<dt class="sr-only sm:hidden">{project.technologies}</dt>
								<dd class="mt-1 truncate text-primaryfg sm:hidden">
									{project.link}
								</dd>
							</dl>
						</td>
						<td class="hidden px-3 py-4 text-sm text-primaryfg lg:table-cell">
							{project.year}
						</td>
						<td class="hidden px-3 py-4 text-sm text-primaryfg sm:table-cell">
							{project.link}
						</td>
						<td class="px-3 py-4 text-sm text-primaryfg">
							{#each project.technologies ? project.technologies : ["N/A"] as tech}
								<span
									class="inline-block px-2 py-1 text-xs font-semibold text-primaryaccentbg rounded-full"
								>
									{tech}
								</span>
							{/each}
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</container>
