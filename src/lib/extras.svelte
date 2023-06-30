<script lang="ts" context="module">
	export interface CharObj {
		value: string;
		index: number;
	}

	export function wait(delay: number) {
		return new Promise((resolve) => {
			setTimeout(resolve, delay);
		});
	}
</script>
