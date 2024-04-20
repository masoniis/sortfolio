<script>
	import { get } from "svelte/store";
	import { msInterval } from "$lib/functions/autoplay";

	let sortSettings = false;
	let interval = 0;

	msInterval.subscribe((value) => {
		interval = value;
	});
</script>

<div class="mt-4">
	<button
		on:click={() => (sortSettings = !sortSettings)}
		class="bg-transparent text-transparent"
	>
		Sort settings
	</button>
	<div class:hidden={!sortSettings} class="flex flex-col gap-4">
		<div>
			<button
				class="mt-8 px-4 py-2 text-dynamicp text-primarybg bg-green-500 rounded-lg w-fit"
				on:click={() => {
					msInterval.set(get(msInterval) - 100);
				}}
			>
				Speed up
			</button>
			<button
				class="mt-8 px-4 py-2 text-dynamicp text-primarybg bg-red-500 rounded-lg w-fit"
				on:click={() => {
					msInterval.set(get(msInterval) + 100);
				}}
			>
				Speed down
			</button>
		</div>
		<p>
			Speed: {interval}ms
		</p>
	</div>
</div>
