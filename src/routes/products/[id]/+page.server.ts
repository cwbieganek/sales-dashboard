import type { Product } from '../../../components/Product';
import { productsSchema } from '../productsSchema';
import rawProducts from '../products.json';

const productsFromJson = productsSchema.parse(rawProducts) as Product[];

export const load = ({ params }) => {
	return {
		id: params.id,
		product: productsFromJson.find((product) => {
			return product.id === parseInt(params.id);
		})!,
	};
};
