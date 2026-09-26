<script lang="ts">
	import { ArrowIcon, GithubIcon } from "$lib/components/icons";

	export let img = "";
	export let alt = "";
	export let href = "";
	export let github = "";
</script>

<div class="group/link relative">
	<div class="card">
		<div class="flex flex-col w-full">
			<h4 class="text-dynamich6 font-bold" style="line-height: 0.8">
				<div
					class="group-hover/link:text-primaryaccentbg flex sm:flex-row justify-between items-center"
				>
					<a
						{href}
						class="text-primaryfg group-hover/link:text-primaryaccentbg after:absolute after:inset-0"
					>
						<slot name="title">Default Title</slot>
						<ArrowIcon />
					</a>
					{#if github}
						<span class="relative z-10">
							<GithubIcon href={github} />
						</span>
					{/if}
				</div>
			</h4>
			<p class="pt-2">
				<slot>Default content</slot>
			</p>
		</div>
		{#if img}
			<img
				src={img}
				{alt}
				class="aspect-video w-40 h-24 group-hover/link:scale-105 transition-transform ease-in-out duration-200 border-[1px] border-primaryaccentbg mr-4"
			/>
		{/if}
	</div>
</div>
<spacer class="h-12"></spacer>

<style lang="postcss">
	.card {
		@apply hover:bg-primaryaccentbg/10 p-4 rounded-md transition-colors ease-in-out duration-200;
		@apply flex flex-col space-y-4 sm:flex-row-reverse sm:space-y-0;
	}
</style>
