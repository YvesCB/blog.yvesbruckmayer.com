<script>
	import MyFooter from "../components/MyFooter.svelte";
	import MyHeader from "../components/MyHeader.svelte";
</script>

<svelte:head>
	<title>Playground</title>
	<meta name="robots" content="noindex nofollow" />
	<meta
		name="description"
		content="Yves' Playground for experiments and things!"
	/>
</svelte:head>

<div class="content" id="root">
	<MyHeader />

	<main>
		<slot />
	</main>

	<MyFooter />
</div>

<style>
	@import url("https://fonts.googleapis.com/css2?family=Playpen+Sans:wght@100;400;700;800&display=swap");

	:global(*),
	:global(*::before),
	:global(*::after) {
		box-sizing: border-box;
	}

	:global(:root) {
		--background-color: #1f1f28;
		/* --background-color-accent: #f0efb2; */
		--background-color-accent: #8b97a8;
		--font-primary-color: #dcd7ba;
		--font-accent-color: #e6c384;
		--primary-accent-color: #5c6f99;
		--secondary-accent-color: #455b6a;

		--content-width: 80rem;
	}

	:global(.light-mode) {
		--background-color: #f1f0e8;
		/* --background-color-accent: #404040; */
		--background-color-accent: #505068;
		--font-primary-color: #141414;
		--font-accent-color: #96b6c5;
		--primary-accent-color: #a88a59;
		--secondary-accent-color: #b7c9d0;
	}

	:global(body) {
		margin: 0;
		background-color: var(--background-color);
		color: var(--font-primary-color);
	}

	:global(.content) {
		margin: 0;
		padding: 0 1rem;
		font-family: "Playpen Sans", cursive;
	}

	.content {
		max-width: var(--content-width);
		margin: auto;
	}

	:global(h1),
	:global(h2),
	:global(h3),
	:global(h4),
	:global(h5),
	:global(h6) {
		color: var(--font-accent-color);
	}

	:global(h1) {
		font-size: 3rem;
	}
	:global(h2) {
		font-size: 2.4rem;
	}
	:global(h3) {
		font-size: 2rem;
	}
	:global(h4) {
		font-size: 1.6rem;
	}

	:global(a) {
		color: var(--primary-accent-color);
		font-weight: bold;
		text-decoration: none;
	}
	:global(a:hover) {
		color: var(--secondary-accent-color);
	}

	:global(.blog-img) {
		border-radius: 0.5rem;
		max-width: 100%;
	}

	@media (max-width: 700px) {
		:global(h1) {
			font-size: 2.4rem;
		}
		:global(h2) {
			font-size: 2rem;
		}
		:global(h3) {
			font-size: 1.6rem;
		}
		:global(h4) {
			font-size: 1.2rem;
		}
	}
</style>
