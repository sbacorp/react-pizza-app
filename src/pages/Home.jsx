import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import qs from "qs";
import axios from "axios";
import Categories from "../components/Categories";
import Sort, { sortsList } from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";
import Pagination from "../components/Pagination";
import { SearchContext } from "../App";
import {
	setCategory,
	setCurrentPage,
	setFilters,
} from "../redux/slices/FilterSlice";

export default function Home() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const isQuery = React.useRef(false);
	const isMounted = React.useRef(false);
	const { categoryID, sort, currentPage } = useSelector(
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
	const fetchData = () => {
		setIsLoading(true);
		axios
			.get(
				`https://631588185b85ba9b11e17d37.mockapi.io/items?page=${currentPage}&limit=4&${
					categoryID > 0 ? `category=${categoryID}` : ""
				}&sortBy=${sort.sortProp}&search=${searchValue}`
			)
			.then((res) => {
				setItems(res.data);
				setIsLoading(false);
			});
	};
	React.useEffect(() => {
		window.scrollTo(0, 0);
		if (!isQuery.current) {
			fetchData();
		}
		isQuery.current = false;
	}, [categoryID, sort.sortProp, currentPage, searchValue]);

	React.useEffect(() => {
		if (window.location.search) {
			const searchParams = qs.parse(window.location.search.substring(1));

			const sort = sortsList.find(
				(obj) => obj.sortProp === searchParams.sortProp
			);
			dispatch(setFilters({ ...searchParams, sort }));
			isQuery.current = true;
		}
	}, []);

	React.useEffect(() => {
		if (isMounted) {
			const queryString = qs.stringify({
				currentPage,
				sortProp: sort.sortProp,
				categoryID,
			});
			navigate(`?${queryString}`);
		}
		isMounted.current = true;
	}, [categoryID, sort.sortProp, currentPage, searchValue]);

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
