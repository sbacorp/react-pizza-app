import { Link } from "react-router-dom";
import empty from "../assets/img/empty-cart.png";

export default function CartEmpty() {
	return (
		<>
			<div className="cart cart--empty">
				<h2>
					Basket is empty <i>😕</i>
				</h2>
				<p>
					You probably didn't choose a pizza.
					<br />
					To select a pizza, go to the home page.
				</p>
				<img src={empty} alt="Empty cart" />
				<Link to="/" className="button button--black">
					<span>Вернуться назад</span>
				</Link>
			</div>
		</>
	);
}
