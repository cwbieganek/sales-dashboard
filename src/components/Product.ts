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
	thumbnail: string;
	salesByMonth: {
		2022: number[];
		2023: number[];
	};
}
