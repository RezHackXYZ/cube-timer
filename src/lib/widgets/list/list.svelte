<script>
	import { ListOfSolves } from "$lib/store.svelte";
</script>

<div class="w-[270px] rounded border-2 border-black py-3">
	<div class="flex max-h-[270px] flex-col gap-2 overflow-y-auto outline-2 outline-gray-200 mx-3 rounded">
		{#each ListOfSolves.v as solve, index}
			<div class="flex items-baseline">
				<span class="mr-1 w-8 text-right font-mono text-xs text-gray-500">{index + 1}.</span>
				<span>{solve}</span>
				<span class="mr-5 ml-auto w-fit">
					<i
						class="nf nf-md-dots_vertical inline-block cursor-pointer leading-none text-gray-300 transition hover:scale-125 hover:text-black"
					>
					</i>
				</span>
			</div>
		{/each}
	</div>
</div>
