export interface ICartSliceState {
	totalPrice: number;
	items: CartItem[];
}

export type CartItem = {
	id: string;
	title: string;
	price: number;
	imageUrl: string;
	type: string;
	size: number;
	count: number;
};
