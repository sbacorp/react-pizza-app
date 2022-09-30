import { configureStore } from "@reduxjs/toolkit";
import filter from "./slices/FilterSlice";
import cart from "./slices/CartSlice";
import products from "./slices/ProductsSlice";
import { useDispatch } from "react-redux";

export const store = configureStore({
	reducer: {
		filter,
		cart,
		products
	},
});
export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;