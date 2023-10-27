<script lang="ts">
	import type { Product } from './Product';

	export let product: Product;
</script>

<div class="max-w-sm rounded overflow-hidden shadow-lg">
	<img class="w-full" src={product.thumbnail} alt={product.description} />
	<div class="px-6 py-4">
		<div class="font-bold text-xl mb-2">{product.name}</div>
		<div class="text-gray-700 text-base">
			<p>{product.description}</p>
			<div class="grid grid-cols-2 gap-2">
				<div>Category:</div>
				<div>{product.category}</div>
				<div>List Price:</div>
				<div class="font-semibold">${product.listPrice}</div>
				<div>Wholesale Cost:</div>
				<div class="font-semibold">${product.wholesaleCost}</div>
				<div>Profit:</div>
				<div class="font-semibold">${product.listPrice - product.wholesaleCost}</div>
				<div>Sales:</div>
				<div>{product.sales.toLocaleString()}</div>
			</div>
		</div>
	</div>
</div>
