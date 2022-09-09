import React from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";
import Pagination from "../components/Pagination";
import { SearchContext } from "../App";
import { setCategory, setCurrentPage } from "../redux/slices/FilterSlice";

export default function Home() {
	const dispatch = useDispatch();

	const {categoryID, sortProp, currentPage,} = useSelector(
		(state) => state.filter
	);
	const { searchValue } = React.useContext(SearchContext);
	const [isLoading, setIsLoading] = React.useState(true);
	const [items, setItems] = React.useState([]);

	const onChangeCategory = (id) => {
		dispatch(setCategory(id));
	};
	const onChangePage = (number) => {
		dispatch(setCurrentPage(number));
	};
	React.useEffect(() => {
		setIsLoading(true);
		axios
			.get(
				`https://631588185b85ba9b11e17d37.mockapi.io/items?page=${currentPage}&limit=4&${
					categoryID > 0 ? `category=${categoryID}` : ""
				}&sortBy=${sortProp}&search=${searchValue}`
			)
			.then((res) => {
				console.log(res);
				setItems(res.data);
				setIsLoading(false);
			});
	}, [categoryID, sortProp, currentPage, searchValue]);

	const pizzas = items
		.filter((obj) => {
			if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
				return true;
			}
			return false;
		})
		.map((item) => <PizzaBlock key={item.id} {...item} />);

	

	return (
		<>
			<div className="content__top">
				<Categories
					categoryID={categoryID}
					onChangeCategory={onChangeCategory}
				/>
				<Sort />
			</div>
			<h2 className="content__title">Все пиццы</h2>
			<div className="content__items">
				{isLoading
					? [...new Array(6)].map((_, index) => (
							<Skeleton key={index} />
					  ))
					: pizzas}
			</div>
			<Pagination onChangePage={(number) => onChangePage(number)} />
		</>
	);
}
