import React from "react";
export const categoriesNames = [
		"Все",
		"Мясные",
		"Вегетарианские",
		"Гриль",
		"Острые",
		"Закрытые",
	];
function Categories({ categoryID, onChangeCategory }) {
	
	return (
		<div className="categories">
			<ul>
				{categoriesNames.map((value, i) => (
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
