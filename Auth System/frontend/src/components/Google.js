import { useEffect } from "react";
import { connect } from "react-redux";
import { googleAuthenticate } from "../store/actions/auth";
import { useLocation, Link } from "react-router-dom";
import queryString from "query-string";

const Google = ({ googleAuthenticate, isAuthenticated }) => {
	let location = useLocation();
	useEffect(() => {
		const value = queryString.parse(location.search);
		const state = value.state ? value.state : null;
		const code = value.code ? value.code : null;

		if (state && code) {
			googleAuthenticate(state, code);
		}
	}, [location]);
	return (
		<>
			<div className='facebook-home'>
				<h1 className='text-center py-3'>Welcome to the Authentication System</h1>

				{isAuthenticated ? (
					<h1 className='text-center py-3'>
						You are successfully Logged in with Google
					</h1>
				) : (
					<h3 className='text-center py-3 text-danger'>
						Sorry, We can't connect get you logged in with Google.
						<Link exact to='/signup'>
							<br />
							<br />
							<strong>Try Again</strong>
						</Link>
					</h3>
				)}

				<center>
					<button className='btn btn-primary my-5'>
						<Link style={{ textDecoration: "none", color: "white" }} to='/'>
							Go to Home Page
						</Link>
					</button>
				</center>
			</div>
		</>
	);
};

const matStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated,
});

export default connect(matStateToProps, { googleAuthenticate })(Google);
