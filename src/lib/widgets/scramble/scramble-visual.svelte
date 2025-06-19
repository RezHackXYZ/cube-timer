<script>
	import scramby from "scramby";

	import { ScrambleState, CubeType } from "$lib/store.svelte.js";

	let scramblevisual;

	$effect(() => {
		scramby(CubeType.v).drawScramble(scramblevisual, ScrambleState.v, 300, 180);
	});
</script>

<div bind:this={scramblevisual}></div>
