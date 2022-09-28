import React from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";

export interface IPizzaProps {
	title: string;
	imageUrl: string;
	price: string;
}
const PizzaPreview: React.FC = () => {
	const { id } = useParams();
	const [pizza, setPizza] = React.useState<IPizzaProps>(
        
    );
	const navigate = useNavigate();

	React.useEffect(() => {
		async function fetchData() {
			try {
				const { data } = await axios.get(
					"https://631588185b85ba9b11e17d37.mockapi.io/items/" + id
				);
				setPizza(data);
			} catch (error) {
				alert("ошибка, повторите снова");
				navigate("/");
			}
		}

		fetchData();
	}, [id]);
	if (!pizza) {
		return <>Загрузка...</>;
	}
	return (
		<div className="pizzaPreview">
			<div className="container">
				<div className="pizzaPreview__title"> {pizza.title}</div>
				<div className="pizzaPreview__image">
					<img src={pizza.imageUrl} alt="фото пиццы" />
				</div>
				<div className="pizzaPreview__desc">
					<p>
						<h2> Состав : </h2>
						Lorem, ipsum dolor sit amet consectetur adipisicing
						elit. Adipisci dolorum laudantium nemo explicabo odit
						est! Inventore ducimus nisi labore, recusandae
						repellendus fuga, aliquam, ab enim doloribus optio autem
						aspernatur consectetur?
					</p>
				</div>
				<div className="pizzaPreview__price">
					Стоимость : от {pizza.price} p
				</div>

				<Link to="/" className="button button--black">
					<span>Вернуться назад</span>
				</Link>
			</div>
		</div>
	);
};

export default PizzaPreview;