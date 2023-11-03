<script lang="ts">
	import { formatDate } from "$lib/utils";
	import * as config from "$lib/config";

	export let data;
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<!-- Posts -->
<section>
	<ul class="posts">
		{#each data.posts as post}
			<li class="post">
				<a href={"/blog/" + post.slug} class="title">{post.title}</a>
				<p class="date">{formatDate(post.date)}</p>
				<a href={"/blog/" + post.slug}
					><img src={post.coverimg} alt="Landscape" class="coverimg" /></a
				>
				<p class="description">{post.description}</p>
			</li>
		{/each}
	</ul>
</section>

<style>
	ul {
		list-style: none;
	}

	a {
		margin: 0;
		padding: 0;
	}

	.posts {
		display: grid;
		gap: 1.5rem;
	}

	.post {
		max-inline-size: var(--size-content-3);
	}

	.coverimg {
		height: var(--size-11);
		width: 100%;
		object-fit: cover;
		transition: ease;
	}
	.coverimg:hover {
		transform: scale(1.01);
	}

	.post:not(:last-child) {
		border-bottom: 1px solid var(--border);
		padding-bottom: var(--size-7);
	}

	.title {
		color: var(--brand);
		font-size: var(--font-size-fluid-3);
		font-weight: bold;
	}

	.date {
		color: var(--text-2);
	}

	.description {
		margin-top: var(--size-3);
	}

	@media (min-width: 768px) {
		.coverimg {
			height: var(--size-content-1);
		}
	}
</style>
