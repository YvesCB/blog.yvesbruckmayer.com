<script>
	import { browser } from "$app/environment";
	let lightmode = false;
	let selected = "dark";

	if (browser) {
		let storedTheme = localStorage.getItem("theme");
		if (storedTheme == null || storedTheme === "dark") {
			selected = "dark";
		} else if (storedTheme === "light") {
			selected = "light";
			document.body.classList.toggle("light-mode", true);
		}
	}

	// function modeToggle() {
	// 	lightmode = !lightmode;
	// 	localStorage.setItem("lightMode", lightmode);
	// 	document.body.classList.toggle("light-mode", lightmode);
	// }

	function onSelectChange() {
		if (selected === "dark") {
			localStorage.setItem("theme", "dark");
			document.body.classList.toggle("light-mode", false);
		} else if (selected === "light") {
			localStorage.setItem("theme", "light");
			document.body.classList.toggle("light-mode", true);
		}
	}
</script>

<div class="selector-container">
	<!-- <button on:click={modeToggle}> -->
	<!-- 	{lightmode ? "Dark mode" : "Light mode"} -->
	<!-- </button> -->

	<select
		bind:value={selected}
		on:change={onSelectChange}
		name="theme-select"
		id="theme-select"
	>
		<option value="dark">Dark theme</option>
		<option value="light">Light theme</option>
	</select>
</div>

<style>
	select {
		border: none;
		border-radius: 0.5rem;
		padding: 1rem;
		color: var(--font-accent-color);
		font-size: 1rem;
		font-weight: bold;
		background-color: var(--background-color-accent);
	}
</style>
