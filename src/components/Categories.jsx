import React from 'react'

function Categories() {
	const [activeCategory, setActiveCategory] = React.useState(0);

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
				{categories.map((value, i) =>
				<li key={i}  onClick={()=>setActiveCategory(i)} className={activeCategory===i?'active':''}>{value}</li>
				 )}
			</ul>
		</div>
  );
}

export default Categories