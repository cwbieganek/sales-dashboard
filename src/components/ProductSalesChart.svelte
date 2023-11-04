<script lang="ts">
	import Chart from 'chart.js/auto';
	import { onMount } from 'svelte';

	let ctx: HTMLCanvasElement;

	onMount(async () => {
		new Chart(ctx, {
			type: 'line',
			data: {
				labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
				datasets: [
					{
						label: '# of Votes',
						data: [12, 19, 3, 5, 2, 3],
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

<canvas bind:this={ctx} class="border border-gray-600 rounded shadow-md shadow-gray-300" />
