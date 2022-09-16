import { configureStore } from "@reduxjs/toolkit";
import filter from "./slices/FilterSlice";
import cart from "./slices/CartSlice";
import products from "./slices/ProductsSlice";

export const store = configureStore({
	reducer: {
		filter,
		cart,
		products
	},
});
