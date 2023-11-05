import type { Product } from '../../components/Product';
import { productsSchema } from './productsSchema';
import rawProducts from './products.json';

export const load = () => {
	const productsFromJson = productsSchema.parse(rawProducts) as Product[];

	return {
		products: productsFromJson,
	};
};
