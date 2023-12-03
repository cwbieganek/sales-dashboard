<script lang="ts">
	import type { Product } from '@/components/Product.js';
	import ProductSalesChart from '@/components/ProductSalesChart.svelte';
	import { GoodOrBad } from '@/components/stat.js';
	import Stat from '@/components/Stat.svelte';

	export let data;
	let product = data.product;

	const profitPerSale = product.listPrice - product.wholesaleCost;
	const totalProfit = profitPerSale * product.sales;
	const profitByMonth2023 = product.salesByMonth['2023'].map((sales) => {
		return sales * profitPerSale;
	});
	const profitStatsFor2023 = calculateProfitStatsForYear(2023, product);
	const salesStatsFor2023 = calculateSalesStatsForYear(2023, product);

	function calculateSalesStatsForYear(
		year: number,
		product: Product
	): { num: number; change: number; goodOrBad: GoodOrBad } {
		const previousYear = year - 1; // WARNING: We may not have stats for the previous year!
		const totalSalesPreviousYear = product.salesByMonth[previousYear].reduce(
			(previousValue, currentValue) => {
				return previousValue + currentValue;
			}
		);
		const totalSalesThisYear = product.salesByMonth[year].reduce((previousValue, currentValue) => {
			return previousValue + currentValue;
		});
		const change = totalSalesThisYear - totalSalesPreviousYear;

		return {
			num: totalSalesThisYear,
			change: change,
			goodOrBad: change >= 0 ? GoodOrBad.GOOD : GoodOrBad.BAD,
		};
	}

	function calculateProfitStatsForYear(
		year: number,
		product: Product
	): { num: number; change: number; goodOrBad: GoodOrBad } {
		const previousYear = year - 1; // WARNING: We may not have stats for the previous year!
		const profitPreviousYear = product.salesByMonth[previousYear].reduce(
			(previousValue, currentValue) => {
				return previousValue + currentValue * profitPerSale;
			}
		);
		const profitThisYear = product.salesByMonth[year].reduce((previousValue, currentValue) => {
			return previousValue + currentValue * profitPerSale;
		});
		const change = profitThisYear - profitPreviousYear;

		return {
			num: profitThisYear,
			change: change,
			goodOrBad: change >= 0 ? GoodOrBad.GOOD : GoodOrBad.BAD,
		};
	}
</script>

<div class="h-full px-28 pb-6">
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
		<span>{product.name.toUpperCase()}</span>
	</div>
	<!-- Charts container -->
	<div class="flex flex-row gap-6">
		<!-- Chart 1 -->
		<div
			class="bg-gray-900 border rounded-md border-gray-800 hover:border-gray-700 w-6/12 h-80 p-2"
		>
			<h3 class="text-white font-semibold mb-2">Sales by Month</h3>
			<ProductSalesChart salesByMonth={product.salesByMonth['2023']} label="Sales by Month" />
		</div>
		<!-- Chart 2 -->
		<div
			class="bg-gray-900 border rounded-md border-gray-800 hover:border-gray-700 w-6/12 h-80 p-2"
		>
			<h3 class="text-white font-semibold mb-2">Profit by Month</h3>
			<ProductSalesChart salesByMonth={profitByMonth2023} label="Profit by Month" />
		</div>
	</div>
	<!-- Stats container -->
	<div class="w-full h-80 mt-6 bg-gray-900 border rounded-md border-gray-800 hover:border-gray-700">
		<div class="text-white text-center">
			<span class="text-3xl">Stats </span><span>(last year)</span>
		</div>
		<div class="grid grid-cols-3 grid-rows-2 p-2">
			<!-- Total Profit -->
			<Stat
				title="Total Profit"
				num={profitStatsFor2023.num}
				goodOrBad={profitStatsFor2023.goodOrBad}
				change={profitStatsFor2023.change}
				formatAsCurrency
			/>
			<!-- Sales -->
			<Stat
				title="Sales"
				num={salesStatsFor2023.num}
				goodOrBad={salesStatsFor2023.goodOrBad}
				change={salesStatsFor2023.change}
			/>
			<!-- Returns -->
			<Stat title="Returns" num={367} goodOrBad={GoodOrBad.BAD} change={50} />
			<!-- Total Profit -->
			<Stat title="Product Views" num={56000} goodOrBad={GoodOrBad.GOOD} change={8000} />
			<!-- Average Rating -->
			<Stat title="Average Rating (out of 5)" num={4.5} goodOrBad={GoodOrBad.GOOD} change={0.5} />
			<!-- Unique Customers -->
			<Stat title="Unique Customers" num={2400} goodOrBad={GoodOrBad.GOOD} change={400} />
		</div>
	</div>
</div>
