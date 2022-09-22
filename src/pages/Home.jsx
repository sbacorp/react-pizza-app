import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import qs from "qs";
import Categories from "../components/Categories";
import Sort, { sortsList } from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";
import Pagination from "../components/Pagination";

import {
	setCategory,
	setCurrentPage,
	setFilters,
} from "../redux/slices/FilterSlice";
import { fetchProducts } from "../redux/slices/ProductsSlice";
import { categoriesNames } from "../components/Categories";

export default function Home() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { categoryID, sort, currentPage, searchValue } = useSelector(
		(state) => state.filter
	);
	const { items, status } = useSelector((state) => state.products);
	

	const onChangeCategory = (id) => {
		dispatch(setCategory(id));
	};
	const onChangePage = (number) => {
		dispatch(setCurrentPage(number));
	};
	const getProducts = async () => {
		try {
			dispatch(
				fetchProducts({ currentPage, categoryID, sort, searchValue })
			);
		} catch (error) {
			console.log(error);
		} finally {
		}
	};
	React.useEffect(() => {
			window.scrollTo(0, 0);

			getProducts();
		},
		[categoryID, sort.sortProp, currentPage, searchValue]);

	React.useEffect(() => {
		if (window.location.search) {
			const searchParams = qs.parse(window.location.search.substring(1));

			const sort = sortsList.find(
				(obj) => obj.sortProp === searchParams.sortProp
			);
			dispatch(setFilters({ ...searchParams, sort }));
			
		}
	}, []);

	React.useEffect(() => {
		
			const queryString = qs.stringify({
				currentPage,
				sortProp: sort.sortProp,
				categoryID,
			});
			navigate(`?${queryString}`);
	}, [categoryID, sort.sortProp, currentPage, searchValue]);

	const pizzas = items
		.filter((obj) => obj.title.toLowerCase().includes(searchValue.toLowerCase()))
		.map((item) => <Link to={`/product/${item.id}`} key={item.id}><PizzaBlock  {...item} /></Link>);

	return (
		<>
			<div className="content__top">
				<Categories
					categoryID={categoryID}
					onChangeCategory={onChangeCategory}
				/>
				<Sort />
			</div>
			<h2 className="content__title">
				{categoriesNames[categoryID]} пиццы
			</h2>
			{status === "error" ? (
				<div className="content__error-info">
					<h2>Произошла ошибка 😕</h2>
					<p>
						К сожалению, не удалось получить питсы. Попробуйте
						повторить попытку позже.
					</p>
				</div>
			) : (
				<div className="content__items">
					{status === "loading"
						? [...new Array(6)].map((_, index) => (
								<Skeleton key={index} />
						  ))
						: pizzas}
				</div>
			)}

			<Pagination onChangePage={(number) => onChangePage(number)} />
		</>
	);
}
