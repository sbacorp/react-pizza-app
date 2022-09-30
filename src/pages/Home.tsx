import React from "react";
import { useSelector } from "react-redux";
import { Categories } from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";
import Pagination from "../components/Pagination";

import {
	FilterSelector,
	setCategory,
	setCurrentPage,
} from "../redux/slices/FilterSlice";
import { fetchProducts, ProductsSelector } from "../redux/slices/ProductsSlice";
import { categoriesNames } from "../components/Categories";
import { useAppDispatch } from "../redux/store";



export const Home: React.FC = () => {
	const isMounted= React.useRef(false)
	const dispatch = useAppDispatch();

	const { categoryID, sort, currentPage, searchValue } =
		useSelector(FilterSelector);
	const { items, status } = useSelector(ProductsSelector);

	const onChangeCategory = React.useCallback((id: number) => {
		dispatch(setCategory(id));
	}, []);
	const onChangePage = (page: number) => {
		dispatch(setCurrentPage(page));
	};
	const getProducts = async () => {
		try {
			dispatch(
				fetchProducts({ currentPage, categoryID, sort, searchValue })
			);
		} catch (error) {
			console.log(error);
		}
	};
	
	
	React.useEffect(() => {
		if(isMounted.current){
		window.scrollTo(0, 0);
		getProducts();
		}
		isMounted.current=true;
	}, [categoryID, sort.sortProp, currentPage, searchValue]);

	// React.useEffect(() => {
	// 	const queryString = qs.stringify({
	// 		currentPage,
	// 		sortProp: sort.sortProp,
	// 		categoryID,
	// 	});
	// 	navigate(`?${queryString}`);
	// }, [categoryID, sort.sortProp, currentPage, searchValue]);

	const pizzas = items
		.filter((obj) =>
			obj.title.toLowerCase().includes(searchValue.toLowerCase())
		)
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

			<Pagination
				onChangePage={(number: number) => onChangePage(number)}
			/>
		</>
	);
};