import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";
import Pagination from "../components/Pagination";
import { SearchContext } from "../App";
import { setCategory } from "../redux/slices/FilterSlice";

export default function Home() {
	const dispatch = useDispatch();

	const categoryID = useSelector((state) => state.filter.categoryID);
	const sortProp = useSelector((state) => state.filter.sort.sortProp);
	const onChangeCategory = (id) => {
		dispatch(setCategory(id));
	};

	const { searchValue } = React.useContext(SearchContext);

	const [isLoading, setIsLoading] = React.useState(true);
	const [items, setItems] = React.useState([]);
	const [currentPage, setCurrentPage] = React.useState(1);
	

	React.useEffect(() => {
		setIsLoading(true);
		fetch(
			`https://631588185b85ba9b11e17d37.mockapi.io/items?page=${currentPage}&limit=6&${
				categoryID > 0 ? `category=${categoryID}` : ""
			}&sortBy=${sortProp}&order=asc`
		)
			.then((res) => {
				return res.json();
			})
			.then((json) => {
				setItems(json);
				setIsLoading(false);
			});
	}, [categoryID,sortProp, currentPage]);

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
				<Sort  />
			</div>
			<h2 className="content__title">Все пиццы</h2>
			<div className="content__items">
				{isLoading
					? [...new Array(6)].map((_, index) => (
							<Skeleton key={index} />
					  ))
					: pizzas}
			</div>
			<Pagination
				items={items}
				onChangePage={(number) => setCurrentPage(number)}
			/>
		</>
	);
}
