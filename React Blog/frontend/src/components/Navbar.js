import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
			<div className='container-fluid'>
				<Link className='navbar-brand' exact to='/'>
					<h2>Blog Site</h2>
				</Link>
				<button
					className='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarNav'
					aria-controls='navbarNav'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div className='collapse navbar-collapse' id='navbarNav'>
					<ul className='navbar-nav ml-auto'>
						<li className='nav-item'>
							<Link
								exact
								className='nav-link active'
								aria-current='page'
								to='/'
							>
								Home
							</Link>
						</li>
						<li className='nav-item'>
							<Link
								exact
								className='nav-link active'
								aria-current='page'
								to='/blog'
							>
								Blog
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
