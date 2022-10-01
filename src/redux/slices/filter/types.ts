export type SortType = {
	name: string;
	sortProp: "rating" | "title" | "price";
};
export interface FilterSliceState {
	searchValue: string;
	currentPage: number;
	categoryID: number;
	sort: SortType;
}
