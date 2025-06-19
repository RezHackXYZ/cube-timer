<script>
	import { start_or_stop_time } from "../../lib/time_logic.svelte";
	import { minutes, seconds, milliseconds } from "$lib/store.svelte.js";
	import ScrambleText from "$lib/widgets/scramble/scramble-text.svelte";
	import ScrambleVisual from "$lib/widgets/scramble/scramble-visual.svelte";
	import { update_with_new_scramble } from "$lib/widgets/scramble/new-scramble.svelte";

	update_with_new_scramble();
</script>

<svelte:window
	on:keydown={(event) => {
		if (event.key == " " || event.key == "Enter") {
			event.preventDefault();
			start_or_stop_time();
		}
	}}
/>

<div class="flex h-full flex-col items-center justify-center">
	<div class="flex justify-evenly">
		<ScrambleText />
		<ScrambleVisual />
	</div>
	<div class="flex flex-1 items-center justify-center">
		<span class="font-mono text-7xl">
			{#if minutes.v != 0}{minutes.v.toString().padStart(2, "0")}:{/if}{seconds.v}.{milliseconds.v
				.toString()
				.padStart(2, "0")}
		</span>
	</div>
</div>
