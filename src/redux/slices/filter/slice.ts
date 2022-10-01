import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilterSliceState, SortType } from "./types";


const initialState: FilterSliceState = {
	searchValue: "",
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
		setCategory(state, action: PayloadAction<number>) {
			state.categoryID = action.payload;
		},
		setSearchValue(state, action: PayloadAction<string>) {
			state.searchValue = action.payload;
		},
		setSort(state, action: PayloadAction<SortType>) {
			state.sort = action.payload;
		},
		setCurrentPage(state, action: PayloadAction<number>) {
			state.currentPage = action.payload;
		},
		setFilters(state, action: PayloadAction<FilterSliceState>) {
			state.categoryID = Number(action.payload.categoryID);
			state.sort = action.payload.sort;
			state.currentPage = Number(action.payload.currentPage);
		},
	},
});


export const {
	setCategory,
	setSort,
	setCurrentPage,
	setFilters,
	setSearchValue,
} = filterSlice.actions;

export default filterSlice.reducer;
