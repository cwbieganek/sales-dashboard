<script lang="ts">
	import type { Product } from './Product';

	export let product: Product;
</script>

<div class="max-w-sm rounded overflow-hidden bg-gray-900 border border-gray-800">
	<img class="w-full" src={product.thumbnail} alt={product.description} />
	<div class="px-6 py-4">
		<div class="font-bold text-xl mb-2 text-white">{product.name}</div>
		<div class="text-gray-100 text-base">
			<p>{product.description}</p>
			<div class="grid grid-cols-2 gap-2">
				<div class="font-bold">Category:</div>
				<div class="font-semibold">{product.category}</div>
				<div class="font-bold">List Price:</div>
				<div class="font-semibold">${product.listPrice}</div>
				<div class="font-bold whitespace-nowrap">Wholesale Cost:</div>
				<div class="font-semibold">${product.wholesaleCost}</div>
				<div class="font-bold">Profit:</div>
				<div class="font-semibold">${product.listPrice - product.wholesaleCost}</div>
				<div class="font-bold">Sales:</div>
				<div class="font-semibold">{product.sales.toLocaleString()}</div>
			</div>
		</div>
	</div>
</div>
