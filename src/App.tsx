import { Routes, Route } from "react-router-dom";
import "./styles/app.scss";
import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import PizzaPreview from "./pages/PizzaPreview";

function App() {



	return (
		<div className="App">
			<div className="wrapper">
				<Header />
				<div className="content">
					<div className="container">
						<Routes>
							<Route path="/" element={<App />}></Route>
							<Route index element={<Home />} />
							<Route path="/cart" element={<Cart />}></Route>
							<Route path="/product/:id" element={<PizzaPreview />}></Route>
							<Route path="*" element={<NotFound />} />
						</Routes>
					</div>
				</div>
			</div>
		</div>
	);
}
export default App;

