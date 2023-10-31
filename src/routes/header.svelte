<script lang="ts">
	import * as config from "$lib/config";
	import Toggle from "./toggle.svelte";
</script>

<nav>
	<a href="/" class="title">
		<b>{config.title}</b>
	</a>

	<ul class="links">
		<li><a href="/about">About</a></li>
		<li><a href="/about">Blog</a></li>
		<li><a href="/about">Friends</a></li>
	</ul>

	<Toggle />
</nav>

<style>
	nav {
		padding-block: var(--size-7);
	}

	.title {
		font-size: var(--font-size-5);
	}

	.links {
		margin-block: var(--size-7);
	}

	a {
		color: inherit;
		font-size: var(--font-size-4);
		text-decoration: none;
	}

	@media (min-width: 768px) {
		nav {
			display: flex;
			justify-content: space-between;
		}

		.links {
			display: flex;
			gap: var(--size-7);
			margin-block: 0;
		}
	}
</style>
