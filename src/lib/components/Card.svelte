<script>
	export let img = "https://via.placeholder.com/192x128";
</script>

<div class="card">
	<img
		src={img}
		alt="graphing image"
		class="aspect-video w-auto h-24 hover:scale-105 transition-transform ease-in-out duration-200"
	/>
	<div class="flex flex-col">
		<h4 class="text-dynamich6 font-bold" style="line-height: 0.8">
			<slot name="title">Default Title</slot>
		</h4>
		<p>
			<slot>Default content</slot>
		</p>
	</div>
</div>

<style lang="postcss">
	.card {
		@apply hover:bg-primaryaccentbg/10 p-4 rounded-md transition-colors ease-in-out duration-200;
		@apply flex flex-row space-x-4;
	}
</style>
