<script>
	import { scramble } from "./scramble-logic.svelte.js";
</script>

<div class="flex justify-evenly">
	<span class="mt-5 rounded bg-gray-200 px-2 py-1 text-2xl leading-none">
		{scramble.v}
	</span>

	<scramble-display scramble={scramble.v} event="333" visualization="2D"></scramble-display>
</div>
