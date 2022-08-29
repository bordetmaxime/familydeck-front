import { SET_MEMBERS } from '../actions/family';

export const initialState = {
	members: [ '' ],
};

const reducer = (state = initialState, action = {}) => {

	switch (action.type) {

		case SET_MEMBERS:
			return {
				...state,
				members: action.members,
			};
    
		default:
			return state;
	}
};

export default reducer;
