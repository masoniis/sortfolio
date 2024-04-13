<script lang="ts">
	import ArrowIcon from "$lib/components/icons/ArrowIcon.svelte";
	import GithubIcon from "$lib/components/icons/GithubIcon.svelte";

	export let img = "https://via.placeholder.com/192x128";
	export let href = "";
	export let github = "";
</script>

<a {href} class="group/link">
	<div class="card">
		<div class="flex flex-col w-full">
			<h4 class="text-dynamich6 font-bold" style="line-height: 0.8">
				<div
					class="group-hover/link:text-primaryaccentbg flex sm:flex-row justify-between items-center"
				>
					<div>
						<slot name="title">Default Title</slot>
						<ArrowIcon />
					</div>
					{#if github}
						<GithubIcon href={github} />
					{/if}
				</div>
			</h4>
			<p class="pt-2">
				<slot>Default content</slot>
			</p>
		</div>
		<img
			src={img}
			alt="graphing calculator"
			class="aspect-video w-40 h-24 hover:scale-105 transition-transform ease-in-out duration-200 border-[1px] border-primaryaccentbg mr-4"
		/>
	</div>
</a>

<style lang="postcss">
	.card {
		@apply hover:bg-primaryaccentbg/10 p-4 rounded-md transition-colors ease-in-out duration-200;
		@apply flex flex-col space-y-4 sm:flex-row-reverse sm:space-y-0;
	}
</style>
