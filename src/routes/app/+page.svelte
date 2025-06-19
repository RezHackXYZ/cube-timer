<script>
	import { new_scramble } from "./scramble/scramble-logic.svelte";
	import Scramble from "./scramble/scramble.svelte";

	let minutes = $state(0);
	let seconds = $state(0);
	let milliseconds = $state(0);
	let updateTime = $state();

	function handleKeydown(event) {
		if (event.key == " " || event.key == "Enter") {
			event.preventDefault();

			if (updateTime) {
				clearInterval(updateTime);
				updateTime = null;
				minutes = 0;
				seconds = 0;
				milliseconds = 0;

				new_scramble("333");
			} else {
				updateTime = setInterval(async () => {
					milliseconds++;

					if (milliseconds >= 100) {
						milliseconds = 0;
						seconds++;

						if (seconds >= 60) {
							seconds = 0;
							minutes++;
						}
					}
				}, 10);
			}
		}
	}
</script>

<svelte:window on:keydown={handleKeydown} />

<div class="flex h-full flex-col items-center justify-center">
	<Scramble />

	<div class="flex flex-1 items-center justify-center">
		<span class="font-mono text-7xl">
			{#if minutes != 0}{minutes.toString().padStart(2, "0")}:{/if}{seconds}.{milliseconds
				.toString()
				.padStart(2, "0")}
		</span>
	</div>
</div>
