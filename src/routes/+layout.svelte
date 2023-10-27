<script>
	import MyHeader from "../components/MyHeader.svelte";
</script>

<svelte:head>
	<title>Playground</title>
	<meta name="robots" content="noindex nofollow" />
	<html lang="en" />
</svelte:head>

<MyHeader />

<slot />

<style>
	:global(*),
	:global(*::after) {
		box-sizing: border-box;
	}
</style>
