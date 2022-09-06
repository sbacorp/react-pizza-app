import React from "react";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";

export default function Home({ items, isLoading }) {
	return (
		<div class="content">
			<div class="container">
				<div class="content__top">
					<Categories />
					<Sort />
				</div>
				<h2 class="content__title">Все пиццы</h2>
				<div class="content__items">
					{isLoading
						? [...new Array(6)].map((_, index) => 
								<Skeleton key={index} />
						  )
						: items.map((pizza) => 
								<PizzaBlock key={pizza.id} {...pizza} />
						  )}
				</div>
			</div>
		</div>
	);
}
