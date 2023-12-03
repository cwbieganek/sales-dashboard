export enum ProductCategory {
	KITCHEN = 'Kitchen',
	BOOKS = 'Books',
	OFFICE = 'Office',
	GAMING = 'Gaming',
}

export interface Product {
	id: number;
	name: string;
	description: string;
	listPrice: number;
	wholesaleCost: number;
	sales: number;
	salesByMonth: Record<number, number[]>;
	returns: Record<number, number>;
	ratings: Record<number, number[]>;
	views: Record<number, number>;
	category: ProductCategory;
	thumbnail: string;
}
