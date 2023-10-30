<script>
	import ThemeSelector from "./ThemeSelector.svelte";
</script>

<footer>
	<div class="footer-content">
		<div>
			<h3>GitHub for this site</h3>
			<p>
				You can find the GitHub repo for this website <a
					href="https://github.com/YvesCB/playground.yvesbruckmayer.com">here</a
				>.
			</p>
		</div>

		<ThemeSelector />
	</div>
</footer>

<style>
	footer {
		margin-bottom: 1rem;
	}
	.footer-content {
		display: flex;
		justify-content: space-between;
		align-items: end;
	}
</style>
