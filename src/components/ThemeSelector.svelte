<script>
	import { browser } from "$app/environment";
	let lightmode = false;

	if (browser) {
		let storedlightmode = localStorage.getItem("lightMode");
		if (storedlightmode == null || storedlightmode == "false") {
			lightmode = false;
		} else {
			lightmode = true;
		}
		document.body.classList.toggle("light-mode", lightmode);
	}

	function modeToggle() {
		lightmode = !lightmode;
		localStorage.setItem("lightMode", lightmode);
		document.body.classList.toggle("light-mode", lightmode);
	}
</script>

<div class="selector-container">
	<button on:click={modeToggle}>
		{lightmode ? "Dark mode" : "Light mode"}
	</button>
</div>
