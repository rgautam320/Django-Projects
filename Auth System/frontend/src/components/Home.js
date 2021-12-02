import { useEffect, useState } from "react";
import { connect } from "react-redux";

const Home = ({ isAuthenticated, user }) => {
	const [person, setPerson] = useState({
		fname: "",
		lname: "",
		email: "",
		phone: "",
		username: "",
	});

	useEffect(() => {
		if (user && isAuthenticated) {
			setPerson({
				fname: user.first_name,
				lname: user.last_name,
				email: user.email,
				phone: user.phone,
				username: user.username,
			});
		}
	}, [user]);

	return (
		<div className='container my-4'>
			<h1 className='text-center display-3' style={{ fontWeight: "bolder" }}>
				Welcome <span>{person.fname ? person.fname : ""}</span> to Authentication
				System
			</h1>
			<div className='row my-5'>
				<h1 className='text-center'>Home Page</h1>
			</div>
			{isAuthenticated ? (
				<div className='row'>
					<div className='col-8 mx-auto'>
						<div className='row'>
							<div className='col-6'>
								<h4>First Name: </h4>
							</div>
							<div className='col-6'>
								<h4>{person.fname ? person.fname : ""}</h4>
							</div>
							<div className='col-6'>
								<h4>Last Name: </h4>
							</div>
							<div className='col-6'>
								<h4>{person.lname ? person.lname : ""}</h4>
							</div>
							<div className='col-6'>
								<h4>Username: </h4>
							</div>
							<div className='col-6'>
								<h4>{person.username ? person.username : ""}</h4>
							</div>
							<div className='col-6'>
								<h4>Email: </h4>
							</div>
							<div className='col-6'>
								<h4>{person.email ? person.email : ""}</h4>
							</div>
							<div className='col-6'>
								<h4>Phone: </h4>
							</div>
							<div className='col-6'>
								<h4>{person.phone ? person.phone : ""}</h4>
							</div>
						</div>
					</div>
				</div>
			) : (
				""
			)}
		</div>
	);
};

const matStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated,
	user: state.auth.user,
});

export default connect(matStateToProps, {})(Home);
