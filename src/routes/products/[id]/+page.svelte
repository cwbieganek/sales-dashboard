<script lang="ts">
	import ProductSalesChart from '@/components/ProductSalesChart.svelte';

	export let data;
	let product = data.product;

	let totalProfit = (product.listPrice - product.wholesaleCost) * product.sales;
</script>

<div class="h-full px-28">
	<!-- Breadcrumbs container -->
	<div class="flex flex-row items-center text-white my-2">
		<!-- Breadcrumbs home logo -->
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-7 h-7 fill-brand">
			<path
				d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z"
			/>
			<path
				d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z"
			/>
		</svg>
		<div class="text-2xl mx-2">/</div>
		<div>PRODUCTS</div>
		<div class="text-2xl mx-2">/</div>
		<span>COFFEE MAKER</span>
	</div>
	<!-- Charts container -->
	<div class="flex flex-row gap-6">
		<!-- Chart 1 -->
		<div class="bg-gray-900 border rounded-md border-gray-800 w-6/12 h-80" />
		<!-- Chart 2 -->
		<div class="bg-gray-900 border rounded-md border-gray-800 w-6/12 h-80" />
	</div>
</div>
