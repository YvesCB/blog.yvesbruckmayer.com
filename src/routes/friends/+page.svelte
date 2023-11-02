<script>
	import Friendcard from "./friendcard.svelte";

	import { friendlist } from "$lib/config";
</script>

<article>
	<h3>Check out all the other people making a website!</h3>

	<div class="friends">
		{#each friendlist as friend}
			<Friendcard imgsrc={friend.imgsrc} name={friend.name} url={friend.url} />
		{/each}
	</div>
</article>

<style>
	.friends {
		display: grid;
		gap: var(--size-3);
		grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
	}
</style>
