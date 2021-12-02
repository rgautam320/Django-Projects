import { Route, Switch } from "react-router-dom";
import Login from "../components/Login";
import Signup from "../components/Signup";
import Home from "../components/Home";
import ResetPassword from "../components/ResetPassword";
import ResetConfirm from "../components/ResetConfirm";
import Activate from "../components/Activate";
import RedirectVerify from "../components/RedirectVerify";
import RedirectPassword from "../components/RedirectPassword";
import Facebook from "../components/Facebook";
import Google from "../components/Google";

const Routes = () => {
	return (
		<>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/login' component={Login} />
				<Route exact path='/signup' component={Signup} />
				<Route exact path='/facebook' component={Facebook} />
				<Route exact path='/google' component={Google} />
				<Route exact path='/activate/:uid/:token' component={Activate} />
				<Route exact path='/verify-redirect' component={RedirectVerify} />
				<Route exact path='/password-redirect' component={RedirectPassword} />
				<Route exact path='/reset_password' component={ResetPassword} />
				<Route
					exact
					path='/password/reset/confirm/:uid/:token'
					component={ResetConfirm}
				/>
			</Switch>
		</>
	);
};
export default Routes;
