<script lang="ts">
	import { ArrowIcon } from "$lib/components/icons";
	import { page } from "$app/stores";
</script>

<spacer class="flex flex-grow pt-16 sm:pt-20"></spacer>
<container
	class="text-primaryfg min-h-screen flex flex-grow flex-col max-w-7xl mx-auto items-center"
>
	<h1 class="text-dynamich2">{$page.status}</h1>
	<p class="text-dynamicp">
		{$page.error ? $page.error.message : "Uh oh! Something went wrong."}
	</p>

	<a
		href="/"
		class="text-primaryaccentbg hover:text-primaryaccentbg/80 group/link pt-8"
	>
		<span class="text-dynamicp">Go back home</span>
		<ArrowIcon />
	</a>
</container>
