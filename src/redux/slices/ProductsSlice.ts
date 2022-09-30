import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";

export enum Status {
	LOADING = "loading",
	SUCCESS = "completed",
	ERROR = "error",
}

interface IProductSliceState {
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
interface IParams {
	currentPage: number;
	categoryID: number;
	sort: {
		name: string;
		sortProp: string;
	};
	searchValue: string;
}

export const fetchProducts = createAsyncThunk<ProductItem[], IParams>(
	"products/fetchProductsStaus",
	async (params) => {
		const { currentPage, categoryID, sort, searchValue } = params;
		const { data } = await axios.get<ProductItem[]>(
			`https://631588185b85ba9b11e17d37.mockapi.io/items?page=${currentPage}&limit=4&${
				categoryID > 0 ? `category=${categoryID}` : ""
			}&sortBy=${sort.sortProp}&search=${searchValue}`
		);
		return data;
	}
);

const initialState: IProductSliceState = {
	items: [],
	status: Status.LOADING,
};

export const productsSlice = createSlice({
	name: "products",
	initialState: initialState,
	reducers: {
		setItems(state, action) {
			state.items = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchProducts.pending, (state) => {
			state.status = Status.LOADING;
		})
			builder.addCase(fetchProducts.fulfilled, (state, action) => {
				state.items = action.payload;
				state.status = Status.SUCCESS;
			})
			builder.addCase(fetchProducts.rejected, (state) => {
				state.status = Status.ERROR;
				state.items = [];
			})
	},
});
export const ProductsSelector = (state: RootState) => state.products;
export const { setItems } = productsSlice.actions;

export default productsSlice.reducer;
