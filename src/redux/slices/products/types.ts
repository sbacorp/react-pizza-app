export enum Status {
	LOADING = "loading",
	SUCCESS = "completed",
	ERROR = "error",
}

export interface IProductSliceState {
	items: ProductItem[];
	status: Status;
}

export type ProductItem = {
	id: string;
	title: string;
	price: number;
	types: number[];
	sizes: number[];
	count: number;
	imageUrl: string;
};
export interface IParams {
	currentPage: number;
	categoryID: number;
	sort: {
		name: string;
		sortProp: string;
	};
	searchValue: string;
}
