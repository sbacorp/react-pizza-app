import React from "react";

import { Routes, Route } from "react-router-dom";
import "./styles/app.scss";
import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import Seach from "./components/Search";

function App() {
	const [searchValue, setSearchValue] = React.useState("")
	const [cardItems, setCardItems] = React.useState([])
	return (
		<div className="App">
			<div class="wrapper">
				<Header>
					<Seach
						searchValue={searchValue}
						setSearchValue={setSearchValue}
					/>
				</Header>
				<div class="content">
					<div class="container">
						<Routes>
							<Route path="/" element={<App />}></Route>
							<Route
								index
								element={<Home searchValue={searchValue} />}
							/>
							<Route
								path="cart"
								element={
									<Cart
										cardItems={cardItems}
										setCardItems={setCardItems}
									/>
								}
							></Route>
							<Route path="*" element={<NotFound />} />
						</Routes>
					</div>
				</div>
			</div>
		</div>
	);
}
export default App;
