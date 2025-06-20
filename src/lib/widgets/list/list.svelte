<script>
	import { ListOfSolves } from "$lib/store.svelte";
</script>

<!-- 
<div class="flex w-[270px] flex-col justify-center rounded border-2 border-black py-3">
	<div class="flex max-h-[270px] flex-col gap-2 overflow-y-auto">
		{#each ListOfSolves.v as solve, index}
			<div class="flex items-center justify-start">
				<span class="mr-2 min-w-[2.5em] text-right text-gray-500">{index + 1}.</span>
				<span class="mr-4 min-w-[5em] text-left">{solve}</span>
				<i
					class="nf nf-md-dots_vertical ml-2 w-fit cursor-pointer border-2 border-amber-100 leading-none text-gray-300"
				>
				</i>
			</div>
		{/each}
	</div>
</div>


-->

<div class="w-[270px] rounded border-2 border-black py-3">
	<div class="flex max-h-[270px] flex-col gap-2 overflow-y-auto">
		{#each ListOfSolves.v as solve, index}
			<div class="flex items-baseline">
				<span class="mr-1 w-8 text-right font-mono text-xs text-gray-500">{index + 1}.</span>
				<span>{solve}</span>
				<span class="mr-5 ml-auto w-fit">
					<i
						class="nf nf-md-dots_vertical cursor-pointer hover:scale-125 inline-block transition hover:text-black leading-none text-gray-300"
					>
					</i>
				</span>
			</div>
		{/each}
	</div>
</div>
