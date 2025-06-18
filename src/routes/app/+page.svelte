<script>
	let minutes = 90;
	let seconds = 0;
	let milliseconds = 0;

	let updateTime;
</script>

<span class="font-mono">
	{minutes.toString().padStart(2, '0')}:
	{seconds.toString().padStart(2, '0')}.
	{milliseconds.toString().padStart(2, '0')}
</span>

<br />

<button
	onclick={() => {
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
	}}
>
	start
</button>

<button
	onclick={() => {
		clearInterval(updateTime);
	}}
>
	stop
</button>
