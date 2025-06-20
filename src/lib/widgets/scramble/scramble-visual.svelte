<script>
	import scramby from "scramby";

	import { ScrambleState, CubeType } from "$lib/store.svelte.js";

	let scramblevisual;

	$effect(() => {
		scramby(CubeType.v).drawScramble(scramblevisual, ScrambleState.v, 250, 180);
	});
</script>

<div class="rounded outline-2 outline-gray-200" bind:this={scramblevisual}></div>
