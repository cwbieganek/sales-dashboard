import { z } from 'zod';
import { ProductCategory } from '@/components/Product';

export const productsSchema = z.array(
	z.object({
		id: z.number(),
		name: z.string(),
		description: z.string(),
		listPrice: z.number(),
		wholesaleCost: z.number(),
		sales: z.number(),
		category: z.nativeEnum(ProductCategory),
		thumbnail: z.string(),
		salesByMonth: z.array(z.number()),
	})
);
