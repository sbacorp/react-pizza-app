import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/slices/cart/slice";
import { CartItem } from "../../redux/slices/cart/types";
import { Link } from "react-router-dom";
const TYPES = ["thin", "traditional"];
const SIZES = [26, 30, 40];

type Props = {
	id: string;
	title: string;
	prices: number[];
	types: number[];
	sizes: number[];
	count: number;
	imageUrl: string;
};

function PizzaBlock({ id, title, prices, types, sizes, imageUrl }: Props) {
	const dispatch = useDispatch();

	const [typeActive, setTypeActive] = React.useState(0);
	const [sizeActive, setSizeActive] = React.useState(0);

	const onAddClick = () => {
		const item: CartItem = {
			id,
			title,
			price: prices[sizeActive],
			imageUrl,
			type: TYPES[typeActive],
			size: SIZES[sizeActive],
			count: 1,
		};
		dispatch(addItem(item));
	};

	return (
		<div className="pizza-block">
			<Link to={`/product/${id}`}>
				<img className="pizza-block__image" src={imageUrl} alt="Pizza" />
			</Link>
			<h4 className="pizza-block__title">{title}</h4>
			<div className="pizza-block__selector">
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
			<div className="pizza-block__bottom">
				<div className="pizza-block__price">{prices[sizeActive]} $</div>
				<button onClick={onAddClick} className="button  button--add">
					<svg
						width="12"
						height="12"
						viewBox="0 0 12 12"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z" />
					</svg>
					<span>add</span>
				</button>
			</div>
		</div>
	);
}

export default PizzaBlock;
