import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import { Link, Redirect } from "react-router-dom";

import { connect } from "react-redux";

import { login } from "../store/actions/auth";
import { CircularProgress } from "@material-ui/core";

import axios from "axios";

import Copyright from "./Copyright";

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: "100%",
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

const Login = ({ login, isAuthenticated, loading }) => {
	const classes = useStyles();

	const [errorMsg, setError] = useState("");
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	const { email, password } = formData;

	const onChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const onSubmit = (e) => {
		e.preventDefault();

		login(email, password);
		setError("Please check your email and password");
	};

	if (isAuthenticated) {
		return <Redirect to='/' />;
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
					Sign in
				</Typography>
			</div>

			{errorMsg ? (
				<div className='errorMsg'>
					<strong className='text-danger'>{errorMsg}</strong>
				</div>
			) : null}

			{loading ? (
				<CircularProgress />
			) : (
				<>
					<form onSubmit={(e) => onSubmit(e)}>
						<div className='form-group'>
							<input
								type='email'
								className='form-control my-3 py-3'
								placeholder='Email Address'
								name='email'
								value={email}
								onChange={(e) => onChange(e)}
								required
							/>
							<input
								type='password'
								className='form-control my-3 py-3'
								placeholder='Password'
								name='password'
								value={password}
								minLength='6'
								onChange={(e) => onChange(e)}
								required
							/>
						</div>

						<button
							type='submit'
							className='btn btn-primary my-2 py-1 px-3'
						>
							Sign In
						</button>
						<div className='row d-flex justify-content-center align-items-center my-4'>
							<div className='col-md-6 col-12 d-flex justify-content-center'>
								<h5>
									<Link to='/reset_password' variant='body2'>
										Forgot password?
									</Link>
								</h5>
							</div>
							<div className='col-md-6 col-12 d-flex justify-content-center'>
								<h5>
									Don't have an account?{" "}
									<Link to='/signup' variant='body2'>
										Sign Up
									</Link>
								</h5>
							</div>
						</div>
					</form>
					<div className='row mx-auto d-flex'>
						<div className='col-md-6 d-flex justify-content-center'>
							<button
								className='btn btn-danger my-3'
								onClick={continueWithGoogle}
							>
								Continue with Google
							</button>
						</div>
						<div className='col-md-6 d-flex justify-content-center'>
							<button
								className='btn btn-primary my-3'
								onClick={continueWithFacebook}
							>
								Continue with Facebook
							</button>
						</div>
					</div>
				</>
			)}
			<Box mt={8}>
				<Copyright />
			</Box>
		</Container>
	);
};

const matStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated,
	loading: state.auth.loading,
	user: state.auth.user,
});

export default connect(matStateToProps, { login })(Login);
