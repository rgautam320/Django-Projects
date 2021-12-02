import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { logout } from "../store/actions/auth";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
}));

const Appbar = ({logout, isAuthenticated}) => {
	const classes = useStyles();

	const guestLinks = () => (
		<>
			<Button color='inherit'>
				<Link to='/login' style={{ textDecoration: "none", color: "white" }}>
					Sign in
				</Link>
			</Button>
			<Button color='inherit'>
				<Link to='/signup' style={{ textDecoration: "none", color: "white" }}>
					Sign up
				</Link>
			</Button>
		</>
	);
	
	const authLinks = () => (
		<>
			<Button color='inherit'>
				<Link to='/' style={{ textDecoration: "none", color: "white" }} onClick ={logout}>
					Logout
				</Link>
			</Button>
		</>
	);

	return (
		<div className={classes.root}>
			<AppBar position='static'>
				<Toolbar>
					<IconButton
						edge='start'
						className={classes.menuButton}
						color='inherit'
						aria-label='menu'
					>
						<MenuIcon />
					</IconButton>
					<Typography variant='h6' className={classes.title}>
						<Link to='/' style={{textDecoration: 'none', color: 'white'}}>Authentication System</Link>
					</Typography>
					{isAuthenticated ? authLinks() : guestLinks()}
				</Toolbar>
			</AppBar>
		</div>
	);
}

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { logout })(Appbar);