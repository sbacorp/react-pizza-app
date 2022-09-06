import React from "react";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";

export default function Home() {
	const [isLoading, setIsLoading] = React.useState(true);
	const [items, setItems] = React.useState([]);
	const [activeCategory, setActiveCategory] = React.useState(0);
	const [sort, setSort] = React.useState({
		name:'популярности',
		sortProp:'rating'
	});
	

	React.useEffect(() => {
		setIsLoading(true);
		fetch(
			`https://631588185b85ba9b11e17d37.mockapi.io/items?${
				activeCategory > 0 ? `category=${activeCategory}` : ""
			}&sortBy=${sort.sortProp}&order=asc`
		)
			.then((res) => {
				return res.json();
			})
			.then((json) => {
				setItems(json);
				setIsLoading(false);
			});
	}, [activeCategory,sort]);
	return (
		<>
			<div class="content__top">
				<Categories
					activeCategory={activeCategory}
					onChangeCategory={(i) => setActiveCategory(i)}
				/>
				<Sort sort={sort} onChangeSort={(i) => setSort(i)} />
			</div>
			<h2 class="content__title">Все пиццы</h2>
			<div class="content__items">
				{isLoading
					? [...new Array(6)].map((_, index) => (
							<Skeleton key={index} />
					  ))
					: items.map((pizza) => (
							<PizzaBlock key={pizza.id} {...pizza} />
					  ))}
			</div>
		</>
	);
}
