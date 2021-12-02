import BaseRouter from "./Routes";
import { BrowserRouter } from "react-router-dom";

import "./CSS/App.css";

const App = () => {
	return (
		<>
			<BrowserRouter>
				<BaseRouter />
			</BrowserRouter>
		</>
	);
};

export default App;
