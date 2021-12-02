import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import { Redirect } from "react-router-dom";

import { connect } from "react-redux";

import { reset_password } from "../store/actions/auth";

function Copyright() {
	return (
		<Typography variant='body2' color='textSecondary' align='center'>
			{"Copyright © "}
			<span color='inherit' href='https://material-ui.com/'>
				Rajan Gautam
			</span>{" "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	);
}

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
		width: "100%", // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

const ResetPassword = ({ reset_password }) => {
	const classes = useStyles();

	const [requestSent, SetRequestSent] = useState(false);
	const [formData, setFormData] = useState({
		email: "",
	});

	const { email } = formData;

	const onChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const onSubmit = (e) => {
		e.preventDefault();
		reset_password(email);
		SetRequestSent(true);
	};

	if (requestSent) {
		return <Redirect to='/password-redirect' />;
	}

	return (
		<Container component='main' maxWidth='md'>
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component='h1' variant='h5'>
					Request Password Reset
				</Typography>
			</div>
			<form onSubmit={(e) => onSubmit(e)}>
				<div className='form-group'>
					<input
						type='email'
						placeholder='Enter Your Email'
						className='form-control my-2'
						name='email'
						value={email}
						onChange={(e) => onChange(e)}
						required
					/>
				</div>
				<button type='submit' className='btn btn-primary my-2'>
					Reset Password
				</button>
			</form>
			<Box mt={8}>
				<Copyright />
			</Box>
		</Container>
	);
};

export default connect(null, { reset_password })(ResetPassword);
