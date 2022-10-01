import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import Root from "./Root";

import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { store } from "./redux/store";

 const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

	root.render(
		<StrictMode>
			<BrowserRouter>
				<Provider store={store}>
					<Root />
				</Provider>
			</BrowserRouter>
		</StrictMode>
	);

