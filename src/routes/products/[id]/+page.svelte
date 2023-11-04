<script lang="ts">
	import ProductSalesChart from '@/components/ProductSalesChart.svelte';

	export let data;
</script>

<div class="h-full">
	<h1 class="text-center">{data.product.name} (Product #{data.product.id})</h1>
	<div class="w-3/12 mx-auto mb-2">
		<img src={data.product.thumbnail} alt={data.product.name} class="rounded-sm" />
	</div>
	<div class="w-6/12 m-auto h-full">
		<ProductSalesChart salesByMonth={data.product.salesByMonth} />
	</div>
</div>
