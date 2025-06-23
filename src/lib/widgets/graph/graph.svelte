<script>
	import { onMount } from "svelte";
	import Chart from "chart.js/auto";
	import { ListOfSolves } from "$lib/store.svelte.js";

	let Canvas;
	let chartInstance;

	onMount(() => {
		const ctx = Canvas.getContext("2d");

		chartInstance = new Chart(ctx, {
			type: "line",
			data: {
				labels: ListOfSolves.v,
				datasets: [
					{
						data: $state.snapshot(ListOfSolves.v),
						borderColor: "black",
						backgroundColor: "rgba(0,0,0,0.1)",
						pointRadius: 0,
						borderWidth: 2,
						tension: 0.5,
					},
				],
			},
			options: {
				interaction: {
					mode: "index",
					intersect: false,
				},
				plugins: {
					tooltip: {
						enabled: true,
						mode: "index",
						intersect: false,
						displayColors: false,
						backgroundColor: "rgba(0, 0, 0, 0.7)",
						titleColor: "transparent",
						titleFont: { size: 0 },
						callbacks: {
							label: function (context) {
								const solveNum = context.dataIndex + 1;
								const time = context.parsed.y;
								return [`Solve: ${solveNum}`, `Time: ${time}`];
							},
							title: () => "",
						},
					},
					legend: {
						display: false,
					},
				},
				scales: {
					x: {
						display: false,
						grid: { display: false },
						border: { display: false },
					},
					y: {
						border: { display: false },
					},
				},
			},
		});
	});

	function reRenderChart(data) {
		if (chartInstance) {
			chartInstance.data.labels = data;
			chartInstance.data.datasets[0].data = data;
			chartInstance.update();
		}
	}

	$effect(() => {
		reRenderChart(ListOfSolves.v);
	});
</script>

<div class="flex w-[350px] flex-col items-center gap-2 rounded border-2 border-black p-3">
	<div class="rounded px-4 py-5 outline-2 outline-gray-200">
		<canvas bind:this={Canvas} width="290" height="230"> </canvas>
	</div>
</div>
