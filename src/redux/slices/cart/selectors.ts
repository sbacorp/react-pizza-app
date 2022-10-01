import { RootState } from "../../store";

export const CartSelector = (state: RootState) => state.cart;

export const CartItemSelector = (id: string) => (state: RootState) =>
	state.cart.items.find((obj) => obj.id === id);
