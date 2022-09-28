import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { store } from "./redux/store";

 const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

	root.render(
		<StrictMode>
			<BrowserRouter>
				<Provider store={store}>
					<App />
				</Provider>
			</BrowserRouter>
		</StrictMode>
	);
