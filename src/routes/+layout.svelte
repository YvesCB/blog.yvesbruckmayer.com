<script>
	import MyFooter from "../components/MyFooter.svelte";
	import MyHeader from "../components/MyHeader.svelte";
</script>

<svelte:head>
	<title>Playground</title>
	<meta name="robots" content="noindex nofollow" />
</svelte:head>

<body>
	<div class="content">
		<MyHeader />

		<main>
			<slot />
		</main>

		<MyFooter />
	</div>
</body>

<style>
	@import url("https://fonts.googleapis.com/css2?family=Playpen+Sans:wght@100;400;700;800&display=swap");

	:global(*),
	:global(*::before),
	:global(*::after) {
		box-sizing: border-box;
	}

	:global(:root) {
		--background-color: #1f1f28;
		--font-primary-color: #dcd7ba;
		--font-accent-color: #e6c384;
		--primary-accent-color: #5c6f99;
		--secondary-accent-color: #455b6a;

		--content-width: 90rem;
	}

	body {
		background-color: var(--background-color);
		color: var(--font-primary-color);
		margin: 0;
		font-family: "Playpen Sans", cursive;
	}

	.content {
		max-width: var(--content-width);
		margin: auto;
	}

	main {
		padding: 0 1rem;
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
	}
</style>
