<script>
	import '../app.css';

	let { children } = $props();
</script>

<div class="bg-white h-full font-[Space_Grotesk]">{@render children()}</div>

<style>
	@import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300&display=swap");
</style>
