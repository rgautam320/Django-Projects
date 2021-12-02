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

import { reset_password_confirm } from "../store/actions/auth";

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

const ResetConfirm = ({ match, reset_password_confirm }) => {
	const classes = useStyles();

	const [requestSent, SetRequestSent] = useState(false);
	const [formData, setFormData] = useState({
		new_password: "",
		re_new_password: "",
	});

	const { new_password, re_new_password } = formData;

	const onChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const onSubmit = (e) => {
		e.preventDefault();

		const uid = match.params.uid;
		const token = match.params.token;

		if ((new_password === re_new_password)) {
			reset_password_confirm(uid, token, new_password, re_new_password);
			SetRequestSent(true);
		} else {
			console.log("error");
		}
	};

	if (requestSent) {
		return <Redirect to='/' />;
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
						type='password'
						className='form-control my-2'
						name='new_password'
						placeholder='New Password'
						value={new_password}
						minLength='6'
						onChange={(e) => onChange(e)}
						required
					/>
					<input
						type='password'
						className='form-control my-2'
						name='re_new_password'
						placeholder='Confirm New Password'
						value={re_new_password}
						minLength='6'
						onChange={(e) => onChange(e)}
						required
					/>
				</div>
				<button type='submit' className='btn btn-primary my-2'>
					Confirm Password
				</button>
			</form>
			<Box mt={8}>
				<Copyright />
			</Box>
		</Container>
	);
};

export default connect(null, { reset_password_confirm })(ResetConfirm);
