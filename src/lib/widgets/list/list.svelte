<script>
	import { ListOfSolves } from "$lib/store.svelte";
</script>

<div class="flex w-[270px] flex-col items-center gap-2 rounded border-2 border-black p-3">
	<div
		class="grid h-full max-h-[270px] w-full grid-cols-[min-content_min-content_auto] items-baseline gap-x-1 overflow-y-auto rounded px-4 outline-2 outline-gray-200"
	>
		{#each ListOfSolves.v as solve, index}
			<span class="text-right font-mono text-xs text-gray-500">{index + 1}.</span>
			<span>{solve}</span>
			<span class="flex justify-end text-gray-300">
				<i class="nf nf-md-dots_vertical cursor-pointer transition hover:text-black"></i>
			</span>
		{/each}
	</div>
</div>
