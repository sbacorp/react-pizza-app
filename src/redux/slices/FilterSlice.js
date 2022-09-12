import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	currentPage: 1,
	categoryID: 0,
	sort: {
		name: "популярности",
		sortProp: "rating",
	},
};

export const filterSlice = createSlice({
	name: "filter",
	initialState,
	reducers: {
		setCategory(state, action) {
			state.categoryID = action.payload;
		},
		setSort(state, action) {
			state.sort = action.payload;
		},
		setCurrentPage(state, action) {
			state.currentPage = action.payload;
		},
		setFilters(state, action) {
		state.categoryID = Number(action.payload);
		state.sort = action.payload;
		state.currentPage = Number(action.payload);
		},
	},
});

export const { setCategory, setSort, setCurrentPage, setFilters} =
	filterSlice.actions;

export default filterSlice.reducer;
