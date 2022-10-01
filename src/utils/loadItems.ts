import { CartItem } from "../redux/slices/cart/types";
import { calcTotalPrice } from "./calcTotal";



export const loadItems = () => {
	const data = localStorage.getItem("cart");
	const items = data ? JSON.parse(data) : [];
	const totalPrice = calcTotalPrice(items);

	return {
		items: items as CartItem[],
		totalPrice,
	};
};
