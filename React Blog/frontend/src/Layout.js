import React from "react";
import Navbar from "./components/Navbar";

const Layout = (props) => {
	return (
		<>
			<Navbar />
			{props.children}
		</>
	);
};

export default Layout;
