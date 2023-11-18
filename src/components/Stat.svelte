<script lang="ts">
	import { GoodOrBad } from './stat';

	export let title: string;
	export let num: number;
	export let goodOrBad: GoodOrBad;
	export let change: number;
	export let formatAsCurrency = false;

	const changeTextColor = goodOrBad === GoodOrBad.GOOD ? 'text-lime-500' : 'text-red-500';
</script>

<div class="flex flex-col text-center">
	<div class="text-gray-200">{title}</div>
	<div class="text-gray-100 font-bold text-4xl">
		{`${formatAsCurrency ? '$' : ''}${num.toLocaleString()}`}
	</div>
	<div class={changeTextColor}>
		{`${formatAsCurrency ? '$' : ''}${change.toLocaleString()}`}
	</div>
</div>
