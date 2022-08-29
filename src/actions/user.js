export const LOGIN_USER = 'LOGIN_USER';
export const SET_LOGIN = 'SET_LOGIN';
export const SET_ERR_LOGIN = 'SET_ERR_LOGIN';
export const SET_USERNAME = 'SET_USERNAME';
export const SET_PASSWORD = 'SET_PASSWORD';
export const SET_TOKEN = 'SET_TOKEN';
export const SET_LOGGED_IN = 'SET_LOGGED_IN';

export const setlogin = ({ token, member, family }) => ({
	type: SET_LOGIN,
	token: token.token,
  member,
  family,
});

export const setErrLogin = (msg) => ({
  type: SET_ERR_LOGIN,
  msg,
});

export const loginUser = () => ({
	type: LOGIN_USER,
});

export const setUserName = (value) => ({
	type: SET_USERNAME,
	payload: value,
});

export const setPassword = (value) => ({
	type: SET_PASSWORD,
	payload: value,
});

export const setToken = (value) => ({
	type: SET_TOKEN,
	payload: value,
});

export const setLoggedIn = (value) => ({
	type: SET_LOGGED_IN,
	payload: value,
});


