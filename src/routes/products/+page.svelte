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

<h1 class="text-xl text-center font-semibold border-b border-gray-400 p-4 mt-4 mb-4">Products</h1>
<!-- Product Search -->
<div class="flex items-center justify-center">
	<div class="w-full max-w-lg lg:max-w-xs">
		<label for="search" class="sr-only">Search</label>
		<div class="relative">
			<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
				<svg
					class="h-5 w-5 text-gray-400"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
				>
					<path
						fill-rule="evenodd"
						d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
						clip-rule="evenodd"
					/>
				</svg>
			</div>
			<input
				id="search"
				name="search"
				class="block w-full rounded-md border-0 bg-white py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
				placeholder="Search products"
				type="search"
			/>
		</div>
	</div>
</div>
<div class="grid grid-cols-4 gap-4 p-4">
	<ProductCard product={exampleProduct} />
	<ProductCard product={exampleProduct} />
	<ProductCard product={exampleProduct} />
	<ProductCard product={exampleProduct} />
	<ProductCard product={exampleProduct} />
	<ProductCard product={exampleProduct} />
	<ProductCard product={exampleProduct} />
</div>
