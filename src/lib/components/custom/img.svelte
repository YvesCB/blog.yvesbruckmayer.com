<script lang="ts">
	export let src: string;
	export let alt: string;
</script>

<a class="image-enlarge" id={src} href={"#" + src + "target"}>
	<img {src} {alt} loading="lazy" />
</a>
<a class="image-enlarge-target" id={src + "target"} href={"#" + src}>
	<img {src} {alt} loading="lazy" />
</a>

<style>
	img {
		margin-top: var(--size-4);
		max-inline-size: 100%;
		cursor: pointer;
	}

	a {
		padding: 0;
		margin: 0;
	}

	a.image-enlarge-target {
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

	.image-enlarge-target:target {
		opacity: 1;
		top: 0;
		bottom: 0;
		left: 0;
		overflow: scroll;
	}

	.image-enlarge-target:target img {
		max-height: 100%;
		max-width: 100%;
	}
</style>
