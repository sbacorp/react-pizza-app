export const categoriesNames = [
		"Все",
		"Мясные",
		"Вегетарианские",
		"Гриль",
		"Острые",
		"Закрытые",
	];

type Props = {
	categoryID: number,
	 onChangeCategory:Function
}

export default function Categories({categoryID,onChangeCategory}: Props) {
  
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