import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
	"products/fetchProductsStaus",
	async (params) => {
		const { currentPage, categoryID, sort, searchValue } = params;
		const { data } = await axios.get(
			`https://631588185b85ba9b11e17d37.mockapi.io/items?page=${currentPage}&limit=4&${
				categoryID > 0 ? `category=${categoryID}` : ""
			}&sortBy=${sort.sortProp}&search=${searchValue}`
		);
		return data;
	}
);

const initialState = {
	items: [],
	status: "loading",
};

export const productsSlice = createSlice({
	name: "products",
	initialState: initialState,
	reducers: {
		setItems(state, action) {
			state.items = action.payload;
		},
	},
	extraReducers: {
		[fetchProducts.pending]: (state) => {
			state.status = "loading";
		},
		[fetchProducts.fulfilled]: (state, action) => {
			state.items = action.payload;
			state.status = "complete";
		},
		[fetchProducts.rejected]: (state) => {
			state.status = "error";
			state.items = [];
		},
	},
});

export const { setItems } = productsSlice.actions;

export default productsSlice.reducer;
