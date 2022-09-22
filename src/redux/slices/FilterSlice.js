import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	searchValue:'',
	currentPage: 1,
	categoryID: 0,
	sort: {
		name: "популярности",
		sortProp: "rating",
	},
};

export const filterSlice = createSlice({
	name: "filter",
	initialState: initialState,
	reducers: {
		setCategory(state, action) {
			state.categoryID = action.payload;
		},
		setSearchValue(state, action) {
			state.searchValue = action.payload;
		},
		setSort(state, action) {
			state.sort = action.payload;
		},
		setCurrentPage(state, action) {
			state.currentPage = action.payload;
		},
		setFilters(state, action) {
			state.categoryID = Number(action.payload.categoryID);
			state.sort = action.payload.sort;
			state.currentPage = Number(action.payload.currentPage);
		},
	},
});

export const { setCategory, setSort, setCurrentPage, setFilters, setSearchValue } =
	filterSlice.actions;

export default filterSlice.reducer;
