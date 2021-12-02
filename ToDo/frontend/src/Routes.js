import { Route } from "react-router-dom";

import ToDo from "./Components/ToDo";
import DetailView from "./Components/DetailView";

const BaseRouter = () => {
	return (
		<>
			<Route exact path='/' component={ToDo} />
			<Route exact path='/:id' component={DetailView} />
		</>
	);
};

export default BaseRouter;
