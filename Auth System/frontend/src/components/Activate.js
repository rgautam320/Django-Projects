import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";

import { Redirect } from "react-router-dom";

import { connect } from "react-redux";

import { verify } from "../store/actions/auth";
import { Button } from "@material-ui/core";

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

const Activate = ({ verify, match }) => {
	const [activated, setActivated] = useState(false);
	const { uid, token } = match.params;
	const onClick = (e) => {
		verify(uid, token);
		setActivated(true);
	};

	if (activated) {
		return <Redirect to='/login' />;
	}

	return (
		<>
			<div className='container my-5'>
				<h1 className='my-5 text-center font-weight-bold bold'>
					Verify Your Account
				</h1>
				<div className='btn-section d-flex justify-content-center align-items-center my-5'>
					<Button color='primary' variant='contained' onClick={onClick}>
						Verify Account
					</Button>
				</div>
				<Copyright />
			</div>
		</>
	);
};

export default connect(null, { verify })(Activate);
