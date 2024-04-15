<script>
	export let project = {
		title: "Project 1",
		description: "This is a description of project 1",
		image: "https://via.placeholder.com/300",
		link: "https://google.com",
	};
</script>

<div class="flex flex-row">
	<div>
		{project.title}
		{project.description}
		{project.image}
		{project.link}
	</div>
</div>
