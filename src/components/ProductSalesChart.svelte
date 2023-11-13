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
					x: {
						ticks: {
							color: '#f9fafb',
						},
						grid: {
							color: '#6b7280',
						},
					},
					y: {
						beginAtZero: true,
						ticks: {
							color: '#f9fafb',
						},
						grid: {
							color: '#6b7280',
						},
					},
				},
				plugins: {
					legend: {
						labels: {
							color: '#f9fafb',
						},
					},
				},
			},
		});
	});
</script>

<canvas bind:this={ctx} class="border border-gray-700 bg-gray-800 rounded-md" />
