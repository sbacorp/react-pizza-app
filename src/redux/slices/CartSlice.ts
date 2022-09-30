import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loadItems } from "../../utils/loadItems";


import { RootState } from "../store";

interface ICartSliceState {
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
const initialState: ICartSliceState = loadItems();


const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addItem(state, action: PayloadAction<CartItem>) {
			const findItem = state.items.find(
				(state) =>
					state.id === action.payload.id &&
					state.size === action.payload.size &&
					state.type === action.payload.type
			);

			if (findItem) {
				findItem.count++;
			} else {
				state.items.push({ ...action.payload, count: 1 });
			}

			state.totalPrice = state.items.reduce(
				(sum, obj) => obj.price * obj.count + sum,
				0
			);
		},

		minusItem(state, action: PayloadAction<CartItem>) {
			const findItem = state.items.find(
				(state) =>
					state.id === action.payload.id &&
					state.size === action.payload.size &&
					state.type === action.payload.type
			);
			if (findItem && findItem.count > 1) {
				findItem.count--;
				state.totalPrice = state.items.reduce(
					(sum, obj) => obj.price * obj.count + sum,
					0
				);
			}
		},

		removeItem(state, action: PayloadAction<CartItem>) {
			state.items = state.items.filter(
				(state) =>
					!(
						state.id === action.payload.id &&
						state.size === action.payload.size &&
						state.type === action.payload.type
					)
			);
			state.totalPrice = state.items.reduce(
				(sum, state) => state.price * state.count + sum,
				0
			);
		},
		clearItems(state) {
			state.items = [];
			state.totalPrice = 0;
		}
	},
});
export const CartSelector = (state: RootState) => state.cart;

export const CartItemSelector = (id: string) => (state: RootState) =>
	state.cart.items.find((obj) => obj.id === id);

export const { addItem, removeItem, minusItem, clearItems } =
	cartSlice.actions;

export default cartSlice.reducer;
