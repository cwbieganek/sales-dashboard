<script lang="ts">
	import ProductSalesChart from '@/components/ProductSalesChart.svelte';

	export let data;
	let product = data.product;

	let totalProfit = (product.listPrice - product.wholesaleCost) * product.sales;
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
			<div class="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
				<dt class="truncate text-sm font-medium text-gray-500">Total Subscribers</dt>
				<dd class="mt-1 text-3xl font-semibold tracking-tight text-gray-900">71,897</dd>
			</div>
			<div class="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
				<dt class="truncate text-sm font-medium text-gray-500">Total Subscribers</dt>
				<dd class="mt-1 text-3xl font-semibold tracking-tight text-gray-900">71,897</dd>
			</div>
		</div>
	</div>
</div>
