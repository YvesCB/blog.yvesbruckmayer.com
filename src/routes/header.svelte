<script lang="ts">
	import * as config from "$lib/config";
	import Toggle from "./toggle.svelte";
</script>

<nav>
	<a href="/" class="title">
		<b>{config.title}</b>
	</a>

	<ul class="links">
		<li><a href="/about">ABOUT</a></li>
		<li><a href="/blog">BLOG</a></li>
		<li><a href="/friends">FRIENDS</a></li>
	</ul>

	<Toggle />
</nav>

<style>
	nav {
		padding-block: var(--size-7);
	}

	.title {
		font-size: var(--font-size-5);
		color: var(--brand);
	}

	.links {
		margin-block: var(--size-7);
	}

	a {
		color: inherit;
		font-size: var(--font-size-4);
		text-decoration: none;
	}
	a:hover {
		color: var(--text-2);
	}

	ul {
		list-style: none;
		padding: 0;
	}

	li {
		padding-inline-start: 0;
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
			align-items: end;
		}
	}
</style>
