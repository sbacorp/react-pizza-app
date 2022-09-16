import React from 'react'
import { Link } from 'react-router-dom'
import empty from '../assets/img/empty-cart.png'
function CartEmpty() {
  return (
	<>
		<div className="cart cart--empty">
			<h2>
				Корзина пустая <i>😕</i>
			</h2>
			<p>
				Вероятней всего, вы не выбрали пиццу.
				<br />
				Для того, чтобы выбрали пиццу, перейди на главную страницу.
			</p>
			<img src={empty} alt="Empty cart" />
			<Link to="/" className="button button--black">
				<span>Вернуться назад</span>
			</Link>
		</div>
		</>
  );
}

export default CartEmpty