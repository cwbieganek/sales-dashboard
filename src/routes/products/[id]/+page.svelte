<script lang="ts">
	import ProductSalesChart from '@/components/ProductSalesChart.svelte';

	export let data;
</script>

<div class="h-full">
	<h1 class="flex items-center justify-center align-middle bg-gray-200 h-10">
		{data.product.name} (Product #{data.product.id})
	</h1>
	<div class="w-3/12 mx-auto mt-2">
		<img src={data.product.thumbnail} alt={data.product.name} class="rounded-sm" />
	</div>
	<div class="h-full">
		<div class="grid grid-cols-3 gap-2 p-2">
			<div>
				<ProductSalesChart salesByMonth={data.product.salesByMonth} />
			</div>
			<div>
				<ProductSalesChart salesByMonth={data.product.salesByMonth} />
			</div>
			<div>
				<ProductSalesChart salesByMonth={data.product.salesByMonth} />
			</div>
		</div>
	</div>
</div>
