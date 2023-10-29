<script lang="ts">
	import type { Product } from '../../components/Product';
	import { productsSchema } from './productsSchema';
	import ProductCard from '../../components/ProductCard.svelte';
	import rawProducts from './products.json';

	const productsFromJson = productsSchema.parse(rawProducts) as Product[];
	let nameQuery = '';
	let sortKey: keyof Product = 'name';
	$: filteredProducts = searchProductsByName(productsFromJson, nameQuery, sortKey);

	/**
	 * Searches the list of products for all products whose name contains the name query.
	 * The returned list will be sorted by the provided Product key.
	 */
	function searchProductsByName<K extends keyof Product>(
		products: Product[],
		nameQuery: string,
		sortKey: K
	): Product[] {
		if (nameQuery.trim() == '') {
			return products.toSorted((a, b) => {
				if (a[sortKey] < b[sortKey]) {
					return -1;
				} else if (a[sortKey] > b[sortKey]) {
					return 1;
				}

				return 0;
			});
		}

		return products
			.filter((product) => {
				return product.name.toLowerCase().includes(nameQuery.toLowerCase());
			})
			.toSorted((a, b) => {
				if (a[sortKey] < b[sortKey]) {
					return -1;
				} else if (a[sortKey] > b[sortKey]) {
					return 1;
				}

				return 0;
			});
	}
</script>

<h1 class="text-xl text-center font-semibold border-b border-gray-400 p-4 mt-4 mb-4">Products</h1>
<!-- Product Search and Sorting-->
<div class="flex items-center justify-center gap-2">
	<div class="w-full max-w-lg lg:max-w-xs">
		<!-- Search Bar -->
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
				placeholder="Search products by name"
				type="search"
				bind:value={nameQuery}
			/>
		</div>
	</div>
	<!-- Sort By -->
	<label for="sort-by" class="block text-sm font-medium leading-6 text-gray-900 whitespace-nowrap"
		>Sort By</label
	>
	<select
		id="sort-by"
		name="sort-by"
		class="block rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-black sm:text-sm sm:leading-6"
		bind:value={sortKey}
	>
		<!-- All these option values are keys of the Product type -->
		<option value="name" selected>Name</option>
		<option value="listPrice">List Price</option>
		<option value="wholesaleCost">Wholesale Cost</option>
		<option value="sales">Sales</option>
	</select>
	<!-- Sort Order -->
	<label
		for="sort-order"
		class="block text-sm font-medium leading-6 text-gray-900 whitespace-nowrap">Sort Order</label
	>
	<select
		id="sort-order"
		name="sort-order"
		class="block rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-black sm:text-sm sm:leading-6"
	>
		<option selected>Ascending</option>
		<option>Descending</option>
	</select>
</div>
<div class="grid grid-cols-4 gap-2 p-2">
	{#each filteredProducts as product}
		<ProductCard {product} />
	{/each}
</div>
