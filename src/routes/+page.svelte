<script>
	import BlogTitle from "../components/BlogTitle.svelte";
</script>

<h1>Welcome</h1>
<p>
	This is my Homepage/Playground. I'm just gonna put a bunch of stuff here. This
	site was made with <a href="https://kit.svelte.dev/">SvelteKit</a>. I'm by no
	means a Svelte Guru but it's a framework I quite enjoy because of how simple
	it can be to use if you chose not to do anything too crazy with it. It's
	basically just <b>HTML</b> and <b>CSS</b> with some extra features at its very
	simplest.
</p>

<p>
	I'm gonna use this as a sort of <b>blog</b> for myself and I'm also gonna be
	linking to some friends in the <a href="/friends">friends</a> section of this page.
	It's other people that have recently (as of October 2023) been making some websites.
</p>

<article>
	<h1>Check out this blog post!</h1>
	<BlogTitle
		title="I went on a walk"
		imgsrc="/blogimg/231023_img/coverimg.jpg"
		bloglink="/blog/231023"
		timestamp="23. Oct 2023"
	/>
	<p>
		I went on a 10km walk/hike. Took some pictures and enjoyed the day. You can
		read more by clicking the title or image.
	</p>
</article>
