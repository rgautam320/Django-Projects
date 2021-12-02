import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

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

const VerifyRedirect = () => {
	return (
		<>
			<div className='container my-5'>
				<h1 className='my-5 text-center font-weight-bold bold'>
					Please, check your mail and activate your account.
				</h1>
				<div className='btn-section d-flex justify-content-center align-items-center mt-3 mb-5'>
					<h4 className='text-center'>
						If you have already activated your account, then you may want to{" "}
						<Link
							to='/login'
							style={{
								textDecoration: "none",
								color: "blue",
								cursor: "pointer",
							}}
						>
							Login
						</Link>
					</h4>
				</div>

				<Copyright />
			</div>
		</>
	);
};

export default VerifyRedirect;
