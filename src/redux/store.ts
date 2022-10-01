import { configureStore } from "@reduxjs/toolkit";
import filter from "./slices/filter/slice";
import cart from "./slices/cart/slice";
import products from "./slices/products/slice";
import theme from "./slices/theme/slice";
import { useDispatch } from "react-redux";

export const store = configureStore({
	reducer: {
		filter,
		cart,
		products,
		theme,
	},
});
export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;