import { CartItem } from "../redux/slices/CartSlice";

export const calcTotalPrice = (items: CartItem[]) => {
	return items.reduce((sum, obj) => obj.price * obj.count + sum, 0);
};

export const loadItems = () => {
	const data = localStorage.getItem("cart");
	const items = data ? JSON.parse(data) : [];
	const totalPrice = calcTotalPrice(items);

	return {
		items: items as CartItem[],
		totalPrice,
	};
};
