<script lang="ts">
	import ProductSalesChart from '@/components/ProductSalesChart.svelte';

	export let data;
</script>

<div class="h-full">
	<h1 class="flex items-center justify-center align-middle bg-gray-200 h-10">
		{data.product.name} (Product #{data.product.id})
	</h1>
		<img src={data.product.thumbnail} alt={data.product.name} class="rounded-sm" />
	</div>
	<div class="w-6/12 m-auto h-full">
		<ProductSalesChart salesByMonth={data.product.salesByMonth} />
	</div>
</div>
