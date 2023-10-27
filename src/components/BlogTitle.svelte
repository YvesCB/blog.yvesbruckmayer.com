<script>
	export let title;
	export let imgsrc;
	export let bloglink;
	export let timestamp;
</script>

<div class="blog-post">
	<h2><a href={bloglink}>{title}</a></h2>
	<p class="timestamp">{timestamp}</p>
</div>
<a href="blog/231023">
	<img src={imgsrc} alt="img not found" class="landscape thumbnail" />
</a>

<style>
	.thumbnail {
		height: 20rem;
		width: 100%;
		object-fit: cover;
		border-radius: 1rem;
		transition: transform 0.2s ease;
	}
	.thumbnail:hover {
		transform: scale(1.01);
	}

	h2,
	.blog-post p {
		margin: 0.8rem 0;
	}

	.blog-post {
		display: flex;
		justify-content: space-between;
		align-items: end;
	}
</style>
