<header>
	<div class="hero">
		<h1>BIG TITLE</h1>
	</div>
	<nav>
		<ul>
			<li><a href="/">HOME</a></li>
			<li><a href="/blog">BLOG</a></li>
			<li><a href="/friends">FRIENDS</a></li>
		</ul>
	</nav>
</header>

<style>
	header {
		width: 100vw;
	}

	h1 {
		color: red;
	}

	.hero {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	nav {
		max-width: 80rem;
		margin: auto;
	}

	ul {
		display: flex;
		justify-content: space-around;
	}

	li {
		list-style: none;
	}

	a {
		text-decoration: none;
	}
	a:hover {
		text-decoration: underline;
	}
</style>
