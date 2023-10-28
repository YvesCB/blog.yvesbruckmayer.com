<script>
	let lightmode = false;

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
