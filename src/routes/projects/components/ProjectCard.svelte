<script>
	export let project = {
		title: "Untitled",
		year: "1970",
		description: "No description",
		image: "https://via.placeholder.com/300",
		link: "https://google.com",
	};
</script>

<div class="flex flex-row justify-between">
	<div>
		{project.title}
	</div>
	<div>
		{project.description}
	</div>
	<div>
		{project.image}
	</div>
	<div>
		{project.link}
	</div>
</div>
