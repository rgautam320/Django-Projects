import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Link, Redirect } from "react-router-dom";
import { signup } from "../store/actions/auth";
import { connect } from "react-redux";
import axios from "axios";
import Copyright from "./Copyright";

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(2),
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
}));

const Signup = ({ signup, isAuthenticated }) => {
	const classes = useStyles();
	const [accountCreated, setAccountCreated] = useState(false);
	const [formData, setFormData] = useState({
		username: "",
		email: "",
		first_name: "",
		last_name: "",
		phone: "",
		password: "",
		re_password: "",
	});

	const { username, email, first_name, last_name, phone, password, re_password } = formData;
	const onChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const onSubmit = (e) => {
		e.preventDefault();

		if (password === re_password) {
			signup(username, email, first_name, last_name, phone, password, re_password);
			setAccountCreated(true);
		}
	};

	if (isAuthenticated) {
		return <Redirect to='/' />;
	}

	if (accountCreated) {
		return <Redirect to='/verify-redirect' />;
	}

	const continueWithGoogle = async () => {
		try {
			const res = await axios.get(
				`${process.env.REACT_APP_API_URL}/auth/o/google-oauth2/?redirect_uri=${process.env.REACT_APP_API_URL}/google`
			);

			window.location.replace(res.data.authorization_url);
		} catch (error) {
			console.log(error);
		}
	};

	const continueWithFacebook = async () => {
		try {
			const res = await axios.get(
				`${process.env.REACT_APP_API_URL}/auth/o/facebook/?redirect_uri=${process.env.REACT_APP_API_URL}/facebook`
			);

			window.location.replace(res.data.authorization_url);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Container component='main' maxWidth='md'>
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component='h1' variant='h5'>
					Sign up
				</Typography>
			</div>
			<form className='mt-3' onSubmit={(e) => onSubmit(e)}>
				<div className='form-group mt-2'>
					<input
						type='text'
						className='form-control my-2 py-2'
						placeholder='Username'
						name='username'
						id='username'
						value={username}
						onChange={(e) => onChange(e)}
						required
					/>
					<input
						type='text'
						className='form-control my-2 py-2'
						placeholder='First Name'
						name='first_name'
						id='first_name'
						value={first_name}
						onChange={(e) => onChange(e)}
						required
					/>
					<input
						type='text'
						className='form-control my-2 py-2'
						placeholder='Last Name'
						name='last_name'
						id='last_name'
						value={last_name}
						onChange={(e) => onChange(e)}
						required
					/>
					<input
						type='email'
						className='form-control my-2 py-2'
						placeholder='Email Address'
						name='email'
						id='email'
						value={email}
						onChange={(e) => onChange(e)}
						required
					/>
					<input
						type='text'
						className='form-control my-2 py-2'
						placeholder='Phone Number'
						name='phone'
						id='phone'
						value={phone}
						onChange={(e) => onChange(e)}
						minLength='10'
						required
					/>
					<input
						type='password'
						className='form-control my-2 py-2'
						placeholder='Password'
						name='password'
						id='password'
						value={password}
						minLength='6'
						onChange={(e) => onChange(e)}
						required
					/>
					<input
						type='password'
						className='form-control my-2 py-2'
						placeholder='Confirm Password'
						name='re_password'
						id='re_password'
						value={re_password}
						minLength='6'
						onChange={(e) => onChange(e)}
						required
					/>
					<button type='submit' className='btn btn-primary my-2 py-1 px-3'>
						Sign Up
					</button>
					<div className='my-4'>
						<h5>
							Already have an Account?{" "}
							<Link to='/login' variant='body2'>
								Login
							</Link>
						</h5>
					</div>
				</div>
			</form>
			<div className='row mx-auto d-flex'>
				<div className='col-md-6 d-flex justify-content-center'>
					<button className='btn btn-danger my-2' onClick={continueWithGoogle}>
						Continue with Google
					</button>
				</div>
				<div className='col-md-6 d-flex justify-content-center'>
					<button
						className='btn btn-primary my-2'
						onClick={continueWithFacebook}
					>
						Continue with Facebook
					</button>
				</div>
			</div>
			<Box my={3}>
				<Copyright />
			</Box>
		</Container>
	);
};

const matStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated,
});

export default connect(matStateToProps, { signup })(Signup);
