<script lang="ts">
	import { ProductCategory, type Product } from '../../components/Product';
	import ProductCard from '../../components/ProductCard.svelte';

	const exampleProduct: Product = {
		name: 'Coffee Maker',
		description: 'A fancy coffee maker that brews the best coffee possible.',
		listPrice: 40.0,
		wholesaleCost: 20.0,
		sales: 1000,
		category: ProductCategory.Kitchen,
		thumbnail: '/img/card-top.jpg',
	};
</script>

<h1 class="text-xl text-center font-semibold border-b border-gray-400 p-4">Products</h1>
<div class="grid grid-cols-4 gap-4 p-4">
	<ProductCard product={exampleProduct} />
	<ProductCard product={exampleProduct} />
	<ProductCard product={exampleProduct} />
	<ProductCard product={exampleProduct} />
	<ProductCard product={exampleProduct} />
	<ProductCard product={exampleProduct} />
	<ProductCard product={exampleProduct} />
</div>
