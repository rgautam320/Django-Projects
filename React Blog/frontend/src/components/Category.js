import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Cookies from "js-cookie";

const csrftoken = Cookies.get("csrftoken");

const BlogDetail = (props) => {
	const [blogs, setBlogs] = useState([]);

	useEffect(() => {
		const fetchBlogs = async () => {
			const config = {
				headers: {
					"Content-Type": "application/json",
					"X-CSRFToken": csrftoken,
				},
			};
			const category = props.match.params.id;
			try {
				const res = await axios.post(
					`${process.env.REACT_APP_API_URL}/api/blog/category`,
					{ category },
					config
				);
				setBlogs(res.data);
			} catch (err) {
				console.log(err);
			}
		};
		fetchBlogs();
	}, [props.match.params.id]);

	return (
		<>
			<div className='container'>
				<div className='nav-scroller py-1 mb-2'>
					<nav className='nav d-flex justify-content-between'>
						<Link className='p-2 text-muted' to='/category/world'>
							World
						</Link>
						<Link className='p-2 text-muted' to='/category/environment'>
							Environment
						</Link>
						<Link className='p-2 text-muted' to='/category/technology'>
							Technology
						</Link>
						<Link className='p-2 text-muted' to='/category/design'>
							Design
						</Link>
						<Link className='p-2 text-muted' to='/category/culture'>
							Culture
						</Link>
						<Link className='p-2 text-muted' to='/category/business'>
							Business
						</Link>
						<Link className='p-2 text-muted' to='/category/politics'>
							Politics
						</Link>
						<Link className='p-2 text-muted' to='/category/opinion'>
							Opinion
						</Link>
						<Link className='p-2 text-muted' to='/category/science'>
							Science
						</Link>
						<Link className='p-2 text-muted' to='/category/health'>
							Health
						</Link>
						<Link className='p-2 text-muted' to='/category/style'>
							Style
						</Link>
						<Link className='p-2 text-muted' to='/category/travel'>
							Travel
						</Link>
					</nav>
				</div>
				<hr />
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

export default BlogDetail;
