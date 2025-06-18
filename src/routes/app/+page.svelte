<script>
	import scramby from 'scramby';
	let scrambler = scramby();

	let minutes = $state(0);
	let seconds = $state(0);
	let milliseconds = $state(0);
	let updateTime = $state();

	let scramble = $state(scrambler.getRandomScramble().scrambleString);
</script>

<div class="flex h-full flex-col items-center justify-center gap-4">
	<span class="font-mono text-5xl">
		{scramble}
	</span>

	<span class="font-mono text-5xl">
		{minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}.{milliseconds
			.toString()
			.padStart(2, '0')}
	</span>

	<div>
		<button
			class="btn {updateTime ? 'red' : 'green'}"
			onclick={() => {
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
			}}
		>
			{updateTime ? 'stop' : 'start'}
		</button>
	</div>
</div>
