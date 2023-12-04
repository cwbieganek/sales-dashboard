import { error } from '@sveltejs/kit';
import type { Product } from '@/components/Product';
import { productsSchema } from '../productsSchema';
import rawProducts from '../products.json';

export const load = ({ params }) => {
	const productsFromJson = productsSchema.parse(rawProducts) as Product[];
	const product = productsFromJson.find((productJson) => {
		return productJson.id === parseInt(params.id);
	});

	if (!product) {
		throw error(404, {
			message: `Product #${params.id} not found!`,
		});
	}

	return {
		product: productsFromJson.find((product) => {
			return product.id === parseInt(params.id);
		})!,
	};
};
