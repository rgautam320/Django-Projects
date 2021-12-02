import { useEffect } from "react";
import Appbar from "../components/Appbar";
import { connect } from "react-redux";
import { checkAuthenticated, load_user } from "../store/actions/auth";

const Layout = ({ checkAuthenticated, load_user, children }) => {
	useEffect(() => {
		checkAuthenticated();
		load_user();
	}, []);
	return (
		<>
			<Appbar />
			{children}
		</>
	);
};

export default connect(null, { checkAuthenticated, load_user })(Layout);
