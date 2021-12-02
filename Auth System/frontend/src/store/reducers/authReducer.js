import {
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	SIGNUP_SUCCESS,
	SIGNUP_FAIL,
	ACTIVATION_SUCCESS,
	ACTIVATION_FAIL,
	USER_LOADED_SUCCESS,
	USER_LOADED_FAIL,
	AUTHENTICATED_SUCCESS,
	AUTHENTICATED_FAIL,
	PASSWORD_RESET_SUCCESS,
	PASSWORD_RESET_FAIL,
	PASSWORD_RESET_CONFIRM_SUCCESS,
	PASSWORD_RESET_CONFIRM_FAIL,
	GOOGLE_AUTH_SUCCESS,
	GOOGLE_AUTH_FAIL,
	FACEBOOK_AUTH_SUCCESS,
	FACEBOOK_AUTH_FAIL,
	LOGOUT,
} from "../actions/actionTypes";

const initialState = {
	access: localStorage.getItem("access"),
	refresh: localStorage.getItem("refresh"),
	isAuthenticated: localStorage.getItem("access") ? true : false,
	loading: false,
	user: null,
};

export const auth = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case AUTHENTICATED_SUCCESS:
			return {
				...state,
				isAuthenticated: true,
			};

		case FACEBOOK_AUTH_SUCCESS:
		case GOOGLE_AUTH_SUCCESS:
		case LOGIN_SUCCESS:
			localStorage.setItem("access", payload.access);
			localStorage.setItem("refresh", payload.refresh);
			return {
				...state,
				isAuthenticated: true,
				access: payload.access,
				refresh: payload.refresh,
			};

		case LOGOUT:
		case SIGNUP_FAIL:
		case LOGIN_FAIL:
		case GOOGLE_AUTH_FAIL:
		case FACEBOOK_AUTH_FAIL:
			localStorage.removeItem("access");
			localStorage.removeItem("refresh");
			return {
				...state,
				access: null,
				refresh: null,
				isAuthenticated: false,
				user: null,
			};

		case USER_LOADED_SUCCESS:
			return {
				...state,
				user: payload,
			};

		case USER_LOADED_FAIL:
			return {
				...state,
				user: null,
			};

		case SIGNUP_SUCCESS:
			return {
				...state,
				isAuthenticated: false,
			};

		case AUTHENTICATED_FAIL:
		case ACTIVATION_SUCCESS:
		case ACTIVATION_FAIL:
		case PASSWORD_RESET_SUCCESS:
		case PASSWORD_RESET_FAIL:
		case PASSWORD_RESET_CONFIRM_SUCCESS:
		case PASSWORD_RESET_CONFIRM_FAIL:
			return {
				...state,
			};

		default:
			return state;
	}
};

export default auth;
