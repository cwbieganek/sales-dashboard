export enum ProductCategory {
	Kitchen = 'Kitchen',
}

export interface Product {
	name: string;
	description: string;
	listPrice: number;
	wholesaleCost: number;
	sales: number;
	category: ProductCategory;
	thumbnail: string;
}
