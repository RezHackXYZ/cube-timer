<script>
	import Scramble from "./scramble/scramble.svelte";
	import { start_or_stop } from "./time_logic.svelte";
	import { minutes, seconds, milliseconds } from "./time_store.svelte.js";

	import { ScrambleDisplay } from "scramble-display";

	function handleKeydown(event) {
		if (event.key == " " || event.key == "Enter") {
			event.preventDefault();

			start_or_stop();
		}
	}
</script>

<svelte:window on:keydown={handleKeydown} />

<div class="flex h-full flex-col items-center justify-center">
	<Scramble />
	<div class="flex flex-1 items-center justify-center">
		<span class="font-mono text-7xl">
			{#if minutes.v != 0}{minutes.v.toString().padStart(2, "0")}:{/if}{seconds.v}.{milliseconds.v
				.toString()
				.padStart(2, "0")}
		</span>
	</div>
</div>
