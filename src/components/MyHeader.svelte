<header>
	<div class="hero">
		<h1>Yves' Playground</h1>
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
	.hero {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	h1 {
		font-size: 4rem;
	}

	nav {
		margin: auto;
		padding: 0 1rem;
		margin-bottom: 4rem;
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
		color: var(--primary-accent-color);
		font-size: 2.4rem;
		font-weight: bold;
	}
	a:hover {
		color: var(--secondary-accent-color);
	}
</style>
