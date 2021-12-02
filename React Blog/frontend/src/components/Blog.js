import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Blog = () => {
	const [blogs, setBlogs] = useState([]);
	const [featuredBlog, setFeaturedBlog] = useState([]);

	useEffect(() => {
		const fetchFeatured = async () => {
			try {
				const res = await axios.get(
					`${process.env.REACT_APP_API_URL}/api/blog/featured`
				);
				setFeaturedBlog(res.data[0]);
				console.log(res.data);
			} catch (err) {
				console.log(err);
			}
		};
		fetchFeatured();
	}, []);

	useEffect(() => {
		const fetchBlogs = async () => {
			try {
				const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/`);
				setBlogs(res.data);
				console.log(res.data);
			} catch (err) {
				console.log(err);
			}
		};
		fetchBlogs();
	}, []);

	return (
		<>
			<div className='container'>
				<div className='nav-scroller py-1 mb-2'>
					<nav className='nav d-flex justify-content-between'>
						<Link className='p-2 text-muted' exact to='/category/world'>
							World
						</Link>
						<Link
							className='p-2 text-muted'
							exact
							to='/category/environment'
						>
							Environment
						</Link>
						<Link
							className='p-2 text-muted'
							exact
							to='/category/technology'
						>
							Technology
						</Link>
						<Link className='p-2 text-muted' exact to='/category/design'>
							Design
						</Link>
						<Link className='p-2 text-muted' exact to='/category/culture'>
							Culture
						</Link>
						<Link className='p-2 text-muted' exact to='/category/business'>
							Business
						</Link>
						<Link className='p-2 text-muted' exact to='/category/politics'>
							Politics
						</Link>
						<Link className='p-2 text-muted' exact to='/category/opinion'>
							Opinion
						</Link>
						<Link className='p-2 text-muted' exact to='/category/science'>
							Science
						</Link>
						<Link className='p-2 text-muted' exact to='/category/health'>
							Health
						</Link>
						<Link className='p-2 text-muted' exact to='/category/style'>
							Style
						</Link>
						<Link className='p-2 text-muted' exact to='/category/travel'>
							Travel
						</Link>
					</nav>
				</div>

				<hr />

				<div className='jumbotron p-4 p-md-5 text-white rounded bg-dark m2-5'>
					<h1 className='display-4 font-italic'>{featuredBlog.title}</h1>
					<p className='lead my-3'>{featuredBlog.excerpt}</p>
					<Link exact to={`/blog/${featuredBlog.slug}`}>
						Continue reading
					</Link>
				</div>
				<div className='row mb-2'>
					{blogs.map((val, ind) => {
						return (
							<div className='col-md-6'>
								<div className='row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative'>
									<div className='col p-4 d-flex flex-column position-static'>
										<strong className='d-inline-block mb-2 text-primary text-capitalize'>
											{val.category}
										</strong>
										<h3 className='mb-0'>{val.title}</h3>
										<div className='mb-1 text-muted'>
											{val.day} {val.month}
										</div>
										<p className='card-text mb-auto'>
											{val.excerpt}
										</p>
										<Link
											exact
											to={`/blog/${val.slug}`}
											className='stretched-link'
										>
											Continue reading
										</Link>
									</div>
									<div className='col-auto d-none d-lg-block'>
										<img
											width='225'
											height='250'
											src={val.thumbnail}
											alt='Thumbnail'
										/>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default Blog;
