<script>
	import { get } from "svelte/store";
	import { msInterval } from "$lib/functions/autoplay";

	let sortSettings = false;
</script>

<div class="mt-4">
	<button
		on:click={() => (sortSettings = !sortSettings)}
		class="bg-transparent text-transparent"
	>
		Sort settings
	</button>
	<div class:hidden={!sortSettings} class="">
		<button
			class="mt-8 px-4 py-2 text-dynamich6 text-primaryfg bg-green-500 rounded-lg"
			on:click={() => {
				msInterval.set(get(msInterval) + 10);
			}}
			>UP
		</button>
		<button
			class="mt-8 px-4 py-2 text-dynamich6 text-primaryfg bg-red-500 rounded-lg"
			on:click={() => {
				msInterval.set(get(msInterval) - 10);
			}}
			>DOWN
		</button>
	</div>
</div>
