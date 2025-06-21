<script>
	import { onMount } from "svelte";
	import Chart from "chart.js/auto";
	import { ListOfSolves } from "$lib/store.svelte.js";

	let Canvas;
	onMount(() => {
		const ctx = Canvas.getContext("2d");

		new Chart(ctx, {
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
						tension: 0.4,
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
						displayColors: false, // ❌ no lil color square
						backgroundColor: "rgba(0, 0, 0, 0.7)",
						titleColor: "transparent", // 🧼 invisible title
						titleFont: { size: 0 }, // also hide title spacing
						callbacks: {
							label: function (context) {
								const solveNum = context.dataIndex + 1;
								const time = context.parsed.y;
								return [`Solve: ${solveNum}`, `Time: ${time}`];
							},
							title: () => "", // 🧼 no title at all
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
						grid: { display: false },
						ticks: { display: false },
						border: { display: false },
					},
				},
			},
			plugins: [
				{
					id: "hoverLine",
					afterDraw(chart) {
						if (chart.tooltip?._active?.length) {
							const ctx = chart.ctx;
							const active = chart.tooltip._active[0];
							const x = active.element.x;
							const topY = chart.scales.y.top;
							const bottomY = chart.scales.y.bottom;

							ctx.save();
							ctx.beginPath();
							ctx.moveTo(x, topY);
							ctx.lineTo(x, bottomY);
							ctx.lineWidth = 1;
							ctx.strokeStyle = "rgba(0, 0, 0, 0.5)";
							ctx.stroke();
							ctx.restore();
						}
					},
				},
			],
		});
	});
</script>

<div class="flex w-[350px] flex-col items-center gap-2 rounded border-2 border-black p-3">
	<div class="rounded px-4 py-5 outline-2 outline-gray-200">
		<canvas bind:this={Canvas} width="290" height="230"> </canvas>
	</div>
</div>
