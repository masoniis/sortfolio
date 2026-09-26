<div class="flex flex-col">
	<h3
		class="text-dynamich6 font-extrabold border-primaryaccentbg/80 border-b-2 text-primaryfg"
	>
		Experience
	</h3>
	<spacer class="h-4"></spacer>
	<div class="entry">
		<div class="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
			<h4 class="text-dynamich6 font-bold text-primaryfg">
				Autonomous Robotics & Perception Group
			</h4>
			<p class="text-sm text-primaryfg/60 shrink-0 sm:ml-4">
				June 2025 – August 2025
			</p>
		</div>
		<p class="text-primaryaccentbg font-semibold">
			Software Engineering & AI Researcher · CU Boulder
		</p>
		<p class="pt-2">
			Worked with graduate researchers to build an AI reasoning agent with
			LangGraph, LLMs, and RAG that turns semantic, spatial, and temporal
			queries into database searches. Designed a
			multi-vector spatial memory pipeline that sped up retrieval 3x, a
			VLM-driven ingestion pipeline that cut stored video data by 95%, and a
			Kotlin + ARCore Android app streaming live pose telemetry to a Boston
			Dynamics Spot robot over ROS.
		</p>
		<div class="flex flex-wrap pt-2 -m-1">
			{#each ["LangGraph", "RAG", "VLMs", "Kotlin", "ARCore", "ROS"] as tech}
				<span
					class="inline-block px-2 py-1 text-xs font-semibold rounded-full m-1 bg-primaryaccentbg/20 text-primaryaccentbg"
				>
					{tech}
				</span>
			{/each}
		</div>
	</div>
</div>

<style lang="postcss">
	.entry {
		@apply py-4;
	}
</style>
