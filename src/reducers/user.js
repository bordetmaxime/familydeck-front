import { SET_ERR_LOGIN, SET_LOGGED_IN, SET_LOGIN, SET_PASSWORD, SET_TOKEN, SET_USERNAME } from '../actions/user';

export const initialState = {
	familyName: '',
	userName: '',
	lastname: '',
	firstname: '',
	roleId: '',
	dateBirth: '',
	email: '',
	confirmEmail: '',
	password: '',
	confirmPassword: '',
	token: '',
	loggedIn: false,
	route: '/',
	// State Messages
	inscriptSucces: '',
	errLogin: '',
	errInscr: '',
};

const reducer = (state = initialState, action = {}) => {

	switch (action.type) {

		case SET_LOGIN:
			return {
				...state,
				firstname: action.firstname,
				token: action.token,
				password: '',
				loggedIn: true,
        inscriptSucces: '',
        errLogin: '',
        errInscr: '',
        route: '/home',
			};
    
		case SET_ERR_LOGIN:
			return {
				...state,
				errLogin: action.msg,
			};
// changement du state avec les valeurs du champ login
		case SET_USERNAME:
			return {
				...state,
				userName: action.payload,
			};
// changement du state avec les valeurs du champ password
		case SET_PASSWORD:
			return {
				...state,
				password: action.payload,
			};

		// case SET_TOKEN:
		// 	return {
		// 		...state,
		// 		token: action.payload,
		// 	};

		case SET_LOGGED_IN:
			return {
				...state,
				loggedIn: action.payload,
        route: '/login',
			};
    
		default:
			return state;
	}
};

export default reducer;
