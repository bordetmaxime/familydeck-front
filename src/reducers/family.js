import { SET_MEMBERS } from '../actions/family';

export const initialState = {
	members: [ '' ],
  familyName: '',
  familyId: '',
};

const reducer = (state = initialState, action = {}) => {

	switch (action.type) {

		case SET_MEMBERS:
			return {
				...state,
				familyName: action.familyName,
        familyId: action.familyId,
        members: action.members,
			};
    
		default:
			return state;
	}
};

export default reducer;
