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
	category: ProductCategory;
	ratings: Record<number, number[]>;
	views: Record<number, number>;
	thumbnail: string;
	salesByMonth: Record<number, number[]>;
}
