import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Routes from "./Routes";

function App() {
	return (
		<>
			<BrowserRouter>
				<Layout>
					<Routes />
				</Layout>
			</BrowserRouter>
		</>
	);
}

export default App;
