import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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
			state.sort =action.payload;
		},
	},
});

export const { setCategory, setSort } = filterSlice.actions;

export default filterSlice.reducer;
