import React from "react";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Category from "./components/Category";
import BlogDetail from "./components/BlogDetail";
import { Switch, Route } from "react-router-dom";

const Routes = () => {
	return (
		<Switch>
			<Route exact path='/' component={Home} />
			<Route exact path='/blog' component={Blog} />
			<Route exact path='/category/:id' component={Category} />
			<Route exact path='/blog/:id' component={BlogDetail} />
		</Switch>
	);
};

export default Routes;
