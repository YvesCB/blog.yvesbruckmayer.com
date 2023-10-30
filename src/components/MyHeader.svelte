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
	header {
		margin-top: 1rem;
		background-color: var(--background-color-accent);
		border-radius: 0.5rem;
	}

	.hero {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	h1 {
		font-size: 4rem;
		color: var(--primary-accent-color);
	}

	nav {
		margin: auto;
		padding: 0;
		padding-bottom: 2rem;
	}

	ul {
		display: flex;
		justify-content: space-around;
		padding: 0;
	}

	li {
		list-style: none;
	}

	a {
		text-decoration: none;
		color: var(--font-accent-color);
		font-size: 2.4rem;
		font-weight: bold;
	}
	a:hover {
		color: var(--secondary-accent-color);
	}

	@media (max-width: 700px) {
		.hero {
			display: none;
		}

		nav {
			padding: 0;
		}

		ul {
			flex-direction: column;
		}

		li {
			text-align: center;
		}

		a {
			font-size: 1.8rem;
		}
	}
</style>
