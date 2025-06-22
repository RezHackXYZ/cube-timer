<script>
	import { ListOfSolves } from "$lib/store.svelte";
</script>

<div class="flex w-[270px] flex-col items-center gap-2 rounded border-2 border-black p-3">
	<div
		class="flex h-1/3 w-full items-center justify-between rounded p-1 px-3 text-center text-xl outline-2 outline-gray-200"
	>
		<span class="text-3xl leading-none text-gray-400">PB:</span>
		<span class="text-5xl">
			{ListOfSolves.v.length ? ListOfSolves.v.sort((a, b) => a - b)[0] : "--.--"}
		</span>
	</div>
	<div class="grid h-2/3 w-full grid-cols-2 gap-2">
		<div class="flex flex-col items-center justify-center rounded p-1 outline-2 outline-gray-200">
			<div class="flex flex-col">
				<span class="text-gray-400">AoALL:</span>
				<span class="text-4xl">
					{ListOfSolves.v.length
						? (ListOfSolves.v.reduce((a, b) => a + b, 0) / ListOfSolves.v.length).toFixed(2)
						: "--.--"}
				</span>
			</div>
		</div>
		<div class="flex flex-col items-center justify-center rounded p-1 outline-2 outline-gray-200">
			<div class="flex flex-col">
				<span class="text-gray-400">Ao5:</span>
				<span class="text-4xl">
					{ListOfSolves.v.length >= 5
						? (ListOfSolves.v.slice(0, 5).reduce((a, b) => a + b, 0) / 5).toFixed(2)
						: "--.-- "}
				</span>
			</div>
		</div>
		<div class="flex flex-col items-center justify-center rounded p-1 outline-2 outline-gray-200">
			<div class="flex flex-col">
				<span class="text-gray-400">Ao12:</span>
				<span class="text-4xl">
					{ListOfSolves.v.length >= 12
						? (ListOfSolves.v.slice(0, 12).reduce((a, b) => a + b, 0) / 12).toFixed(2)
						: "--.--"}
				</span>
			</div>
		</div>
		<div class="flex flex-col items-center justify-center rounded p-1 outline-2 outline-gray-200">
			<div class="tex flex flex-col">
				<span class="text-gray-400">Ao50:</span>
				<span class="text-4xl">
					{ListOfSolves.v.length >= 50
						? (ListOfSolves.v.slice(0, 50).reduce((a, b) => a + b, 0) / 50).toFixed(2)
						: "--.--"}
				</span>
			</div>
		</div>
	</div>
</div>
