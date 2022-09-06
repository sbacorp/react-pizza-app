import React from "react";

function Categories({ activeCategory, onChangeCategory }) {
	const categories = [
		"Все",
		"Мясные",
		"Вегетарианская",
		"Гриль",
		"Острые",
		"Закрытые",
	];
	return (
		<div class="categories">
			<ul>
				{categories.map((value, i) => (
					<li
						key={i}
						onClick={() => onChangeCategory(i)}
						className={activeCategory === i ? "active" : ""}
					>
						{value}
					</li>
				))}
			</ul>
		</div>
	);
}

export default Categories;
