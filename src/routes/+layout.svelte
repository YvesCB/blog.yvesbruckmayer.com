<script>
	import MyHeader from "../components/MyHeader.svelte";
</script>

<svelte:head>
	<title>Playground</title>
	<meta name="robots" content="noindex nofollow" />
</svelte:head>

<MyHeader />

<slot />

<style>
	:global(*),
	:global(*::before),
	:global(*::after) {
		box-sizing: border-box;
	}

	:global(:root) {
		--my-color: coral;
	}
</style>
