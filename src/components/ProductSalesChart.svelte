<script lang="ts">
	import Chart from 'chart.js/auto';
	import { onMount } from 'svelte';

	export let salesByMonth: number[];

	let ctx: HTMLCanvasElement;

	onMount(async () => {
		new Chart(ctx, {
			type: 'line',
			data: {
				labels: [
					'January',
					'February',
					'March',
					'April',
					'May',
					'June',
					'July',
					'August',
					'September',
					'October',
					'November',
					'December',
				],
				datasets: [
					{
						label: 'Sales by Month',
						data: salesByMonth,
					},
				],
			},
			options: {
				scales: {
					y: {
						beginAtZero: true,
					},
				},
			},
		});
	});
</script>

<canvas bind:this={ctx} class="border border-gray-600 bg-white rounded shadow-md shadow-gray-300" />
