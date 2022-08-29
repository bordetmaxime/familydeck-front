import { SET_INPUT_MEMBER, SET_MEMBER } from '../actions/member';

export const initialState = {
	familyId: '',
  lastname: '',
  username: '',
  roleId: '',
  datebirth: '',
  password: '',
  confirmPassword: '',
  topsize: '',
  bottomsize: '',
  shoesize: '',
  size: '',
  school: '',
  hobbies: '',
  redirectMember: '',
};

const reducer = (state = initialState, action = {}) => {

	switch (action.type) {

		case SET_MEMBER:
			return {
				...state,
				redirectMember: '/members',
			};

    case SET_INPUT_MEMBER:
      return {
        ...state,
        [ action.name ]: action.value,
      };
    
		default:
			return state;
	}
};

export default reducer;
