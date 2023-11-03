<script lang="ts">
	export let src: string;
	export let alt: string;

	let enlarge = "";
</script>

<div class="image-enlarge">
	<img {src} {alt} loading="lazy" on:click={() => (enlarge = "active")} />
</div>
<p>{enlarge}</p>
<div class="image-enlarge-target {enlarge}">
	<img {src} {alt} loading="lazy" on:click={() => (enlarge = "")} />
</div>

<style>
	img {
		margin-top: var(--size-4);
		max-inline-size: 100%;
		cursor: pointer;
	}

	.image-enlarge-target {
		position: fixed;
		top: -100%;
		width: 100%;
		background: rgba(0, 0, 0, 0.7);
		width: 100%;
		opacity: 0;
		-webkit-transition: opacity 0.5s ease-in-out;
		-moz-transition: opacity 0.5s ease-in-out;
		-o-transition: opacity 0.5s ease-in-out;
		transition: opacity 0.5s ease-in-out;
		overflow: hidden;
	}

	.image-enlarge-target.active {
		opacity: 1;
		top: 0;
		bottom: 0;
		left: 0;
		overflow: scroll;
	}

	.image-enlarge-target.active img {
		max-height: 100%;
		max-width: 100%;
	}
</style>
