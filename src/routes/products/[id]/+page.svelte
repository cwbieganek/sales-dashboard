<script lang="ts">
	import ProductSalesChart from '../../../components/ProductSalesChart.svelte';

	export let data;
</script>

<div class="h-full">
	<h1>{data.product.name} #{data.product.id}</h1>
	<div class="w-6/12">
		<ProductSalesChart />
	</div>
</div>
