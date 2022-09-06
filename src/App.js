import React from "react";
import "./styles/app.scss";
import Header from "./components/Header";
import Home from "./pages/Home";

function App() {

	const [items, setItems] = React.useState([]);

	const [isLoading, setIsLoading] = React.useState(true);

	React.useEffect(() => {
	  fetch("https://631588185b85ba9b11e17d37.mockapi.io/items")
	  .then((res)=>{return res.json()})
	  .then((json) =>{
		setItems(json);
		setIsLoading(false);
	  })
	
	  
	}, [])
	
	return (
		<div className="App">
			<div class="wrapper">
				<Header />
				<Home items = {items} isLoading={isLoading}/>
			</div>
		</div>
	);
}

export default App;
