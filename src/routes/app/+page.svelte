<script>
	import scramby from 'scramby';
	let scrambler = scramby();

	let minutes = $state(0);
	let seconds = $state(0);
	let milliseconds = $state(0);
	let updateTime = $state();

	let scramble = $state(scrambler.getRandomScramble().scrambleString);

	function handleKeydown(event) {
		if (event.key == ' ' || event.key == 'Enter') {
			event.preventDefault();

			if (updateTime) {
				clearInterval(updateTime);
				updateTime = null;
				minutes = 0;
				seconds = 0;
				milliseconds = 0;

				scramble = scrambler.getRandomScramble().scrambleString;
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
	<span class="mt-5 rounded bg-gray-200 px-2 py-1 text-2xl leading-none">
		{scramble}
	</span>

	<div class="flex flex-1 items-center justify-center">
		<span class="font-mono text-7xl">
			{#if minutes != 0}{minutes.toString().padStart(2, '0')}:{/if}{seconds}.{milliseconds
				.toString()
				.padStart(2, '0')}
		</span>
	</div>
</div>
