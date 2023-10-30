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

		<div class="selector">
			<ThemeSelector />
		</div>
	</div>
</footer>

<style>
	footer {
		margin-bottom: 1rem;
		margin-top: 3.5rem;
	}
	.footer-content {
		display: flex;
		justify-content: space-between;
		align-items: end;
	}

	@media (max-width: 700px) {
		.footer-content {
			flex-direction: column;
			align-items: initial;
		}

		.selector {
			align-self: flex-end;
		}
	}
</style>
