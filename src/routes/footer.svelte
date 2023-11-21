<script lang="ts">
	import * as config from "$lib/config";
</script>

<footer>
	<p>
		{config.title} &copy {new Date().getFullYear()} GitHub page with source code
		<a href="https://github.com/YvesCB/playground.yvesbruckmayer.com/">here.</a>
	</p>
</footer>

<style>
	footer {
		padding-block: var(--size-7);
		border-top: 1px solid var(--border);
	}

	p {
		color: var(--text-2);
	}
</style>
