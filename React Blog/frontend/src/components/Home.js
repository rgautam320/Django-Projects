import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<>
			<div className='container my-5'>
				<div className='jumbotron'>
					<h1 className='display-4'>Welcome to Blog Site!</h1>
					<p className='lead'>
						This is a simple Blog Website, made by Rajan Gautam using Django
						REST Framework and React.
					</p>
					<hr className='my-4' />
					<p>Click the Check Out Our Blog and give your feedback.</p>
					<Link
						className='btn btn-primary btn-lg text-capitalize'
						exact
						to='/blog'
						role='button'
					>
						Check out our blogs
					</Link>
				</div>
			</div>
		</>
	);
};

export default Home;
