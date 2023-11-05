import type { Product } from '@/components/Product';
import { productsSchema } from '../productsSchema';
import rawProducts from '../products.json';

export const load = ({ params }) => {
	const productsFromJson = productsSchema.parse(rawProducts) as Product[];

	return {
		product: productsFromJson.find((product) => {
			return product.id === parseInt(params.id);
		})!,
	};
};
