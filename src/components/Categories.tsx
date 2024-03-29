import React from "react";

	export const categoriesNames = [
		"All",
		"Meat",
		"Vegetarian",
		"Grill",
		"Sharp",
		"Unavailable",
	];

type Props = {
	categoryID: number,
	 onChangeCategory:(value:number)=>void
}

export const Categories:React.FC<Props> = React.memo(({categoryID,onChangeCategory})=> {
	
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

})

