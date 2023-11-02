<script lang="ts">
	export let imgsrc = "";
	export let name = "";
	export let url = "";
</script>

<a href={url} target="_blank">
	<div class="card">
		<img src={imgsrc} alt="Person user icon" />
		<h5>{name}</h5>
	</div>
</a>

<style>
	.card {
		display: flex;
		gap: var(--size-3);
		justify-content: space-between;
		background: var(--surface-3);
		padding: var(--size-2);
		border-radius: var(--radius-2);
		align-items: center;
	}

	.card:hover {
		background: var(--surface-2);
	}

	h5 {
		color: var(--brand);
	}
	a {
		text-decoration: none;
	}
</style>
