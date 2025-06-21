<script>
	import { start_or_stop_time } from "$lib/time_logic.svelte";
	import { minutes, seconds, milliseconds } from "$lib/store.svelte.js";
	import { update_with_new_scramble } from "$lib/widgets/scramble/new-scramble.svelte";
	import ScrambleText from "$lib/widgets/scramble/scramble-text.svelte";
	import ScrambleVisual from "$lib/widgets/scramble/scramble-visual.svelte";
	import List from "$lib/widgets/list/list.svelte";
	import Stats from "$lib/widgets/stats/stats.svelte";
	import Graph from "$lib/widgets/graph/graph.svelte";

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
	<div class="flex flex-1 items-center justify-center p-3">
		<span class="font-mono text-7xl">
			{#if minutes.v != 0}{minutes.v.toString().padStart(2, "0")}:{/if}{seconds.v}.{milliseconds.v
				.toString()
				.padStart(2, "0")}
		</span>
	</div>
	<div class="flex gap-4 p-3">
		<div class="flex w-[270px] flex-col items-center gap-2 rounded border-2 border-black p-3">
			<ScrambleText /><ScrambleVisual />
		</div>
		<List />
		<Stats />
		<Graph />
	</div>
</div>
