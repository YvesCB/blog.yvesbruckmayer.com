<script>
	export let filename = "";
	export let code = "";
</script>

<div class="container">
	{#if filename != ""}
		<p>
			<code class="filename">{filename}</code>
		</p>
	{/if}
	<div class="code-element">
		<pre><code>{code}</code></pre>
	</div>
</div>

<style>
	.container {
		display: inline-block;
		margin: 0rem 1.6rem;
		border-radius: 4px;
		background-color: rgba(133, 133, 133, 0.3);
	}

	.code-element {
		padding: 0 1rem;
	}

	pre {
		overflow: scroll;
	}

	code {
		background-color: rgba(1, 1, 1, 0);
	}

	p {
		background-color: rgba(133, 133, 133, 0.3);
		width: 100%;
		margin-top: 0;
		padding: 0.5rem 1rem;
	}
</style>
