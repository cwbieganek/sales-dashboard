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
		ratings: z.record(z.coerce.number(), z.array(z.number())),
		views: z.record(z.coerce.number(), z.number()),
		thumbnail: z.string(),
		salesByMonth: z.record(z.coerce.number(), z.array(z.number())),
	})
);
