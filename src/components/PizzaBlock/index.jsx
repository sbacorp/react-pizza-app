import React from "react";

function PizzaBlock({ title, price, types, sizes, category, imageUrl }) {
	const TYPES = ["тонкое", "традиционное"];
	const [typeActive, setTypeActive] = React.useState(0);
	const [sizeActive, setSizeActive] = React.useState(0);
	const [valueItems, setValueItems] = React.useState(0);
	const addToCard = (valueItems) => {
		setValueItems((valueItems += 1));
	};
	return (
		<div class="pizza-block">
			<img class="pizza-block__image" src={imageUrl} alt="Pizza" />
			<h4 class="pizza-block__title">{title}</h4>
			<div class="pizza-block__selector">
				<ul>
					{types.map((type, i) => (
						<li
							key={i}
							className={typeActive === type ? "active" : ""}
							onClick={() => setTypeActive(type)}
						>
							{TYPES[type]}
						</li>
					))}
				</ul>
				<ul>
					{sizes.map((size, i) => (
						<li
							key={i}
							className={sizeActive === i ? "active" : ""}
							onClick={() => setSizeActive(i)}
						>
							{size}см.
						</li>
					))}
				</ul>
			</div>
			<div class="pizza-block__bottom">
				<div class="pizza-block__price">от {price} ₽</div>
				<div
					onClick={() => addToCard(valueItems)}
					class="button button--outline button--add"
				>
					<svg
						width="12"
						height="12"
						viewBox="0 0 12 12"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
							fill="white"
						/>
					</svg>
					<span>Добавить</span>
					<i>{valueItems}</i>
				</div>
			</div>
		</div>
	);
}

export default PizzaBlock;
