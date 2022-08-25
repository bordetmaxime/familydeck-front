import { SET_INSCRIPTION } from '../actions/inscription';

export const initialState = {
  familyName: '',
  lastname: '',
  firstname: '',
  roleId: '',
  dateBirth: '',
  email: '',
  confirmEmail: '',
  password: '',
  confirmPassword: '',
};

const reducer = (state = initialState, action = {}) => {

	switch (action.type) {

		case SET_INSCRIPTION:
			return {
				...state,
				
        route: '/login',
			};
    
		default:
			return state;
	}
};

export default reducer;
