import React from "react";

function Categories({ categoryID, onChangeCategory }) {
	const categories = [
		"Все",
		"Мясные",
		"Вегетарианская",
		"Гриль",
		"Острые",
		"Закрытые",
	];
	return (
		<div className="categories">
			<ul>
				{categories.map((value, i) => (
					<li
						key={i}
						onClick={() => onChangeCategory(i)}
						className={categoryID === i ? "active" : ""}
					> 
						{value}
					</li>
				))}
			</ul>
		</div>
	);
}

export default Categories;
